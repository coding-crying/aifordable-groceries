import { tool } from '@openai/agents/realtime';
import {
  db,
  getUserWithPreferences,
  createUserWithDefaults,
  updateUserPreferences,
  addFridgeItem,
  getFridgeItems,
  removeFridgeItem,
  createShoppingSession,
  parseJsonArray,
} from '../../lib/db';
import { recipeApiClient, Recipe } from '../../lib/recipeApiClient';

// User Management Tool
export const manageUserProfile = tool({
  name: 'manageUserProfile',
  description: 'Create or update user profile with preferences, allergies, and basic information',
  parameters: {
    type: 'object',
    properties: {
      action: {
        type: 'string',
        enum: ['create', 'update', 'get'],
        description: 'Action to perform on user profile',
      },
      userId: {
        type: 'string',
        description: 'User ID (required for update/get actions)',
      },
      profile: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          email: { type: 'string' },
          zipCode: { type: 'string' },
          familySize: { type: 'number' },
          weeklyBudget: { type: 'number' },
        },
        description: 'User profile data',
      },
      preferences: {
        type: 'object',
        properties: {
          dietaryRestrictions: {
            type: 'array',
            items: { type: 'string' },
            description: 'Dietary restrictions like vegetarian, vegan, gluten-free',
          },
          cuisinePreferences: {
            type: 'array',
            items: { type: 'string' },
            description: 'Preferred cuisines like italian, mexican, asian',
          },
          nutritionFocus: {
            type: 'string',
            description: 'Nutrition focus: high-protein, low-carb, balanced, low-sodium',
          },
          maxCookTime: { type: 'number', description: 'Maximum cooking time in minutes' },
          maxPrepTime: { type: 'number', description: 'Maximum prep time in minutes' },
          skillLevel: {
            type: 'string',
            enum: ['beginner', 'intermediate', 'advanced'],
            description: 'Cooking skill level',
          },
          equipmentAvailable: {
            type: 'array',
            items: { type: 'string' },
            description: 'Available cooking equipment',
          },
          preferredStores: {
            type: 'array',
            items: { type: 'string' },
            description: 'Preferred grocery stores',
          },
          maxStores: { type: 'number', description: 'Maximum stores willing to visit' },
          bulkBuyingOk: { type: 'boolean', description: 'Willing to buy in bulk' },
          organicPreference: {
            type: 'string',
            enum: ['required', 'preferred', 'mixed', 'avoid'],
            description: 'Organic food preference',
          },
        },
        description: 'User preferences',
      },
      allergies: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            allergen: { type: 'string' },
            severity: {
              type: 'string',
              enum: ['mild', 'moderate', 'severe'],
            },
          },
          required: ['allergen', 'severity'],
        },
        description: 'User allergies',
      },
    },
    required: ['action'],
    additionalProperties: false,
  },
  execute: async (input) => {
    const { action, userId, profile, preferences, allergies } = input as any;

    try {
      switch (action) {
        case 'create':
          const newUser = await createUserWithDefaults(profile || {});
          
          if (preferences) {
            await updateUserPreferences(newUser.id, preferences);
          }
          
          if (allergies) {
            for (const allergy of allergies) {
              await db.userAllergy.create({
                data: {
                  userId: newUser.id,
                  allergen: allergy.allergen,
                  severity: allergy.severity,
                },
              });
            }
          }
          
          return {
            success: true,
            user: await getUserWithPreferences(newUser.id),
            message: `Profile created successfully! Welcome ${profile?.name || 'new user'}!`,
          };

        case 'update':
          if (!userId) throw new Error('User ID required for update');
          
          if (profile) {
            await db.user.update({
              where: { id: userId },
              data: profile,
            });
          }
          
          if (preferences) {
            await updateUserPreferences(userId, preferences);
          }
          
          if (allergies) {
            // Remove existing allergies and add new ones
            await db.userAllergy.deleteMany({ where: { userId } });
            for (const allergy of allergies) {
              await db.userAllergy.create({
                data: {
                  userId,
                  allergen: allergy.allergen,
                  severity: allergy.severity,
                },
              });
            }
          }
          
          return {
            success: true,
            user: await getUserWithPreferences(userId),
            message: 'Profile updated successfully!',
          };

        case 'get':
          if (!userId) throw new Error('User ID required for get');
          
          const user = await getUserWithPreferences(userId);
          if (!user) throw new Error('User not found');
          
          // Convert JSON strings back to arrays for easier use
          const userWithParsedPreferences = {
            ...user,
            preferences: user.preferences ? {
              ...user.preferences,
              dietaryRestrictions: parseJsonArray(user.preferences.dietaryRestrictions),
              cuisinePreferences: parseJsonArray(user.preferences.cuisinePreferences),
              equipmentAvailable: parseJsonArray(user.preferences.equipmentAvailable),
              preferredStores: parseJsonArray(user.preferences.preferredStores),
            } : null,
          };
          
          return {
            success: true,
            user: userWithParsedPreferences,
            message: 'Profile retrieved successfully',
          };

        default:
          throw new Error('Invalid action');
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        message: 'Failed to manage user profile',
      };
    }
  },
});

// Fridge Management Tool
export const manageFridge = tool({
  name: 'manageFridge',
  description: 'Manage fridge inventory including adding, removing, and checking expiration dates',
  parameters: {
    type: 'object',
    properties: {
      action: {
        type: 'string',
        enum: ['add', 'remove', 'list', 'expiring'],
        description: 'Action to perform on fridge inventory',
      },
      userId: {
        type: 'string',
        description: 'User ID',
      },
      item: {
        type: 'object',
        properties: {
          itemName: { type: 'string' },
          brand: { type: 'string' },
          quantity: { type: 'number' },
          unit: { type: 'string' },
          expirationDate: { type: 'string', format: 'date' },
          category: { type: 'string' },
        },
        required: ['itemName', 'quantity', 'unit'],
        description: 'Item to add to fridge',
      },
      itemId: {
        type: 'string',
        description: 'Item ID for removal',
      },
    },
    required: ['action', 'userId'],
    additionalProperties: false,
  },
  execute: async (input) => {
    const { action, userId, item, itemId } = input as any;

    try {
      switch (action) {
        case 'add':
          if (!item) throw new Error('Item data required for add action');
          
          const fridgeItem = await addFridgeItem(userId, {
            ...item,
            expirationDate: item.expirationDate ? new Date(item.expirationDate) : undefined,
          });
          
          return {
            success: true,
            item: fridgeItem,
            message: `Added ${item.itemName} to your fridge!`,
          };

        case 'remove':
          if (!itemId) throw new Error('Item ID required for remove action');
          
          await removeFridgeItem(itemId);
          
          return {
            success: true,
            message: 'Item removed from fridge',
          };

        case 'list':
          const allItems = await getFridgeItems(userId);
          
          return {
            success: true,
            items: allItems,
            count: allItems.length,
            message: `Found ${allItems.length} items in your fridge`,
          };

        case 'expiring':
          const expiringItems = await getFridgeItems(userId, true);
          
          return {
            success: true,
            items: expiringItems,
            count: expiringItems.length,
            message: `Found ${expiringItems.length} items expiring within 3 days`,
          };

        default:
          throw new Error('Invalid action');
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        message: 'Failed to manage fridge inventory',
      };
    }
  },
});

// Smart Recipe Recommendations Tool
export const getSmartRecipeRecommendations = tool({
  name: 'getSmartRecipeRecommendations',
  description: 'Get personalized recipe recommendations based on user preferences, fridge items, and dietary restrictions',
  parameters: {
    type: 'object',
    properties: {
      userId: {
        type: 'string',
        description: 'User ID for personalized recommendations',
      },
      useFridgeItems: {
        type: 'boolean',
        default: true,
        description: 'Include fridge items in recipe suggestions',
      },
      maxBudget: {
        type: 'number',
        description: 'Maximum budget per serving (overrides user preference)',
      },
      servings: {
        type: 'number',
        default: 4,
        description: 'Number of servings needed',
      },
      preferredIngredients: {
        type: 'array',
        items: { type: 'string' },
        description: 'Additional ingredients to prioritize',
      },
    },
    required: ['userId'],
    additionalProperties: false,
  },
  execute: async (input) => {
    const { userId, useFridgeItems = true, maxBudget, servings = 4, preferredIngredients = [] } = input as any;

    try {
      const user = await getUserWithPreferences(userId);
      if (!user) throw new Error('User not found');

      const preferences = user.preferences;
      const allergies = user.allergies?.map(a => a.allergen) || [];
      
      let fridgeIngredients: string[] = [];
      if (useFridgeItems) {
        const fridgeItems = await getFridgeItems(userId);
        fridgeIngredients = fridgeItems.map(item => item.itemName);
      }

      // Parse user preferences from JSON
      const dietaryRestrictions = preferences ? parseJsonArray(preferences.dietaryRestrictions) : [];
      const cuisinePrefs = preferences ? parseJsonArray(preferences.cuisinePreferences) : [];
      
      // Fetch real recipes from API with fallback to mock data
      let recipes: Recipe[] = [];
      let usingApiData = false;
      
      try {
        // Search for recipes using the API with user preferences
        const apiRecipes = await recipeApiClient.searchRecipes({
          dietaryRestrictions,
          cuisineTypes: cuisinePrefs,
          ingredients: fridgeIngredients.length > 0 ? fridgeIngredients.slice(0, 3) : undefined, // Use top 3 fridge items
          maxResults: 15,
          maxReadyTime: preferences?.maxPrepTime || undefined,
        });

        if (apiRecipes.length > 0) {
          console.log(`Found ${apiRecipes.length} recipes from Spoonacular API`);
          recipes = apiRecipes;
          usingApiData = true;
        } else {
          console.log('No recipes found from API, using fallback data');
          throw new Error('No API recipes found');
        }
      } catch (error) {
        console.warn('Recipe API failed, falling back to mock data:', error);
        
        // Fallback to enhanced mock data when API fails
        recipes = [
          {
            id: "recipe-1",
            name: "Budget Chicken Stir Fry",
            description: "Quick and nutritious stir fry using affordable ingredients",
            ingredients: ["chicken thighs", "frozen mixed vegetables", "rice", "soy sauce", "garlic"],
            servings: 4,
            prepTime: "20 minutes",
            estimatedCost: 8.50,
            costPerServing: 2.13,
            nutrition: {
              calories: 420,
              protein: "28g",
              carbs: "45g",
              fat: "12g"
            },
            dietaryTags: [],
            cuisineType: "asian",
            difficulty: "easy"
          },
          {
            id: "recipe-2", 
            name: "Lentil Vegetable Soup",
            description: "Hearty and protein-rich soup perfect for meal prep",
            ingredients: ["red lentils", "carrots", "onions", "celery", "vegetable broth", "canned tomatoes"],
            servings: 6,
            prepTime: "30 minutes",
            estimatedCost: 6.25,
            costPerServing: 1.04,
            nutrition: {
              calories: 280,
              protein: "18g",
              carbs: "48g",
              fat: "2g"
            },
            dietaryTags: ["vegetarian", "vegan"],
            cuisineType: "american",
            difficulty: "easy"
          },
          {
            id: "recipe-3",
            name: "Black Bean Quesadillas",
            description: "Protein-packed and budget-friendly Mexican-inspired meal",
            ingredients: ["black beans", "tortillas", "cheese", "bell peppers", "onions", "cumin"],
            servings: 3,
            prepTime: "15 minutes", 
            estimatedCost: 5.75,
            costPerServing: 1.92,
            nutrition: {
              calories: 380,
              protein: "16g",
              carbs: "52g",
              fat: "14g"
            },
            dietaryTags: ["vegetarian"],
            cuisineType: "mexican",
            difficulty: "easy"
          },
          {
            id: "recipe-4",
            name: "Vegetarian Pasta Primavera",
            description: "Fresh seasonal vegetables with pasta in a light herb sauce",
            ingredients: ["pasta", "bell peppers", "zucchini", "cherry tomatoes", "olive oil", "garlic", "herbs"],
            servings: 4,
            prepTime: "25 minutes",
            estimatedCost: 7.00,
            costPerServing: 1.75,
            nutrition: {
              calories: 350,
              protein: "12g",
              carbs: "58g",
              fat: "8g"
            },
            dietaryTags: ["vegetarian"],
            cuisineType: "italian",
            difficulty: "easy"
          },
          {
            id: "recipe-5",
            name: "Baked Salmon with Quinoa",
            description: "Healthy omega-3 rich salmon served with protein-packed quinoa",
            ingredients: ["salmon fillet", "quinoa", "broccoli", "lemon", "olive oil", "herbs"],
            servings: 2,
            prepTime: "30 minutes",
            estimatedCost: 12.00,
            costPerServing: 6.00,
            nutrition: {
              calories: 480,
              protein: "35g",
              carbs: "32g",
              fat: "22g"
            },
            dietaryTags: [],
            cuisineType: "american",
            difficulty: "medium"
          }
        ];
      }

      // Filter recipes based on user preferences and allergies
      const filteredRecipes = recipes.filter(recipe => {
        // Check budget constraint
        const budgetLimit = maxBudget || (user.weeklyBudget ? user.weeklyBudget / 7 / user.familySize : 10);
        if (recipe.costPerServing > budgetLimit) return false;

        // Check dietary restrictions
        if (dietaryRestrictions.includes('vegetarian') && !recipe.dietaryTags.includes('vegetarian') && recipe.ingredients.some(ing => ['chicken', 'beef', 'pork', 'fish'].some(meat => ing.includes(meat)))) {
          return false;
        }

        // Check allergies
        if (allergies.some(allergen => recipe.ingredients.some(ing => ing.toLowerCase().includes(allergen.toLowerCase())))) {
          return false;
        }

        // Check cooking time preferences
        if (preferences?.maxPrepTime && parseInt(recipe.prepTime) > preferences.maxPrepTime) {
          return false;
        }

        return true;
      });

      // Score recipes based on fridge items and preferences
      const scoredRecipes = filteredRecipes.map(recipe => {
        let score = 0;
        
        // Bonus for using fridge ingredients
        const fridgeMatches = recipe.ingredients.filter(ing => 
          fridgeIngredients.some(fridgeItem => 
            fridgeItem.toLowerCase().includes(ing.toLowerCase()) || 
            ing.toLowerCase().includes(fridgeItem.toLowerCase())
          )
        );
        score += fridgeMatches.length * 10;

        // Bonus for preferred cuisines
        if (cuisinePrefs.includes(recipe.cuisineType)) {
          score += 5;
        }

        // Bonus for preferred ingredients
        const prefMatches = recipe.ingredients.filter(ing => 
          preferredIngredients.some((pref: string) => ing.toLowerCase().includes(pref.toLowerCase()))
        );
        score += prefMatches.length * 3;

        // Bonus for cost-effectiveness
        score += Math.max(0, 10 - recipe.costPerServing);

        return {
          ...recipe,
          score,
          fridgeMatches,
          adjustedCost: (recipe.estimatedCost / recipe.servings) * servings,
          personalizedReason: [
            fridgeMatches.length > 0 ? `Uses ${fridgeMatches.length} ingredients from your fridge` : null,
            prefMatches.length > 0 ? `Includes your preferred ingredients` : null,
            cuisinePrefs.includes(recipe.cuisineType) ? `Matches your cuisine preferences` : null,
          ].filter(Boolean).join(', ') || 'Great budget option for your family'
        };
      });

      // Sort by score and return top 3
      const topRecipes = scoredRecipes
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);

      return {
        success: true,
        recipes: topRecipes,
        totalResults: filteredRecipes.length,
        personalizedFeatures: {
          usedFridgeItems: fridgeIngredients.length > 0,
          appliedDietaryRestrictions: dietaryRestrictions,
          appliedAllergies: allergies,
          budgetPerServing: maxBudget || (user.weeklyBudget ? user.weeklyBudget / 7 / user.familySize : null),
        },
        message: `Found ${topRecipes.length} personalized recipes perfect for you!${usingApiData ? ' (Fresh recipe data from our database)' : ' (Using curated recommendations)'}`,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        message: 'Failed to get personalized recipe recommendations',
      };
    }
  },
});

// Save Shopping Session Tool
export const saveShoppingSession = tool({
  name: 'saveShoppingSession',
  description: 'Save a shopping session with recipes and shopping list for future reference',
  parameters: {
    type: 'object',
    properties: {
      userId: {
        type: 'string',
        description: 'User ID',
      },
      session: {
        type: 'object',
        properties: {
          totalBudget: { type: 'number' },
          totalSpent: { type: 'number' },
          totalSavings: { type: 'number' },
          recipes: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                recipeName: { type: 'string' },
                recipeId: { type: 'string' },
                servings: { type: 'number' },
                costPerServing: { type: 'number' },
              },
              required: ['recipeName', 'servings'],
            },
          },
          shoppingList: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                itemName: { type: 'string' },
                quantity: { type: 'number' },
                unit: { type: 'string' },
                estimatedCost: { type: 'number' },
                store: { type: 'string' },
                brand: { type: 'string' },
              },
              required: ['itemName', 'quantity', 'unit'],
            },
          },
          notes: { type: 'string' },
        },
        required: ['recipes', 'shoppingList'],
      },
    },
    required: ['userId', 'session'],
    additionalProperties: false,
  },
  execute: async (input) => {
    const { userId, session } = input as any;

    try {
      const savedSession = await createShoppingSession(userId, session);
      
      return {
        success: true,
        session: savedSession,
        message: `Shopping session saved! Total savings: $${session.totalSavings?.toFixed(2) || '0.00'}`,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        message: 'Failed to save shopping session',
      };
    }
  },
});