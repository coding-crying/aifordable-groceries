import { tool } from '@openai/agents/realtime';

// Mock data for recipe suggestions
const mockRecipes = [
  {
    id: "recipe-1",
    name: "Budget Chicken Stir Fry",
    description: "Quick and nutritious stir fry using affordable ingredients",
    ingredients: ["chicken thighs", "frozen mixed vegetables", "rice", "soy sauce", "garlic"],
    servings: 4,
    prepTime: "20 minutes",
    estimatedCost: 8.50,
    nutrition: {
      calories: 420,
      protein: "28g",
      carbs: "45g",
      fat: "12g"
    }
  },
  {
    id: "recipe-2", 
    name: "Lentil Vegetable Soup",
    description: "Hearty and protein-rich soup perfect for meal prep",
    ingredients: ["red lentils", "carrots", "onions", "celery", "vegetable broth", "canned tomatoes"],
    servings: 6,
    prepTime: "30 minutes",
    estimatedCost: 6.25,
    nutrition: {
      calories: 280,
      protein: "18g",
      carbs: "48g",
      fat: "2g"
    }
  },
  {
    id: "recipe-3",
    name: "Black Bean Quesadillas",
    description: "Protein-packed and budget-friendly Mexican-inspired meal",
    ingredients: ["black beans", "tortillas", "cheese", "bell peppers", "onions", "cumin"],
    servings: 3,
    prepTime: "15 minutes", 
    estimatedCost: 5.75,
    nutrition: {
      calories: 380,
      protein: "16g",
      carbs: "52g",
      fat: "14g"
    }
  }
];

// Mock data for grocery prices
const mockGroceryPrices = {
  "chicken thighs": [
    { store: "Walmart", price: 1.99, unit: "per lb", deal: "Family pack saves 15%" },
    { store: "Kroger", price: 2.49, unit: "per lb", deal: null },
    { store: "Aldi", price: 1.89, unit: "per lb", deal: "Weekly special" }
  ],
  "red lentils": [
    { store: "Walmart", price: 1.98, unit: "per 16oz bag", deal: null },
    { store: "Whole Foods", price: 2.99, unit: "per 16oz bag", deal: "365 brand" },
    { store: "Aldi", price: 1.69, unit: "per 16oz bag", deal: "Best price" }
  ],
  "black beans": [
    { store: "Walmart", price: 0.88, unit: "per 15oz can", deal: null },
    { store: "Kroger", price: 1.29, unit: "per 15oz can", deal: "Buy 3 get 1 free" },
    { store: "Target", price: 0.95, unit: "per 15oz can", deal: "Circle offer" }
  ]
};

export const getRecipes = tool({
  name: 'getRecipes',
  description: 'Find budget-friendly recipes based on dietary preferences, restrictions, and ingredient preferences',
  parameters: {
    type: 'object',
    properties: {
      dietaryRestrictions: {
        type: 'array',
        items: { type: 'string' },
        description: 'Dietary restrictions like vegetarian, vegan, gluten-free, dairy-free',
      },
      maxBudget: {
        type: 'number',
        description: 'Maximum budget per serving in USD',
      },
      preferredIngredients: {
        type: 'array',
        items: { type: 'string' },
        description: 'Ingredients the user wants to include or has on hand',
      },
      servings: {
        type: 'number',
        description: 'Number of servings needed',
        default: 4,
      },
    },
    required: [],
    additionalProperties: false,
  },
  execute: async (input) => {
    const { dietaryRestrictions = [], maxBudget = 10, preferredIngredients = [], servings = 4 } = input as {
      dietaryRestrictions?: string[];
      maxBudget?: number;
      preferredIngredients?: string[];
      servings?: number;
    };

    // Filter recipes based on criteria
    let filteredRecipes = mockRecipes.filter(recipe => {
      const costPerServing = recipe.estimatedCost / recipe.servings;
      if (costPerServing > maxBudget) return false;

      // Check dietary restrictions
      if (dietaryRestrictions.includes('vegetarian') && recipe.ingredients.some(ing => ing.includes('chicken'))) {
        return false;
      }
      
      return true;
    });

    // Prioritize recipes with preferred ingredients
    if (preferredIngredients.length > 0) {
      filteredRecipes = filteredRecipes.sort((a, b) => {
        const aMatches = a.ingredients.filter(ing => 
          preferredIngredients.some(pref => ing.toLowerCase().includes(pref.toLowerCase()))
        ).length;
        const bMatches = b.ingredients.filter(ing => 
          preferredIngredients.some(pref => ing.toLowerCase().includes(pref.toLowerCase()))
        ).length;
        return bMatches - aMatches;
      });
    }

    const adjustedRecipes = filteredRecipes.slice(0, 3).map(recipe => ({
      ...recipe,
      adjustedCost: (recipe.estimatedCost / recipe.servings) * servings,
      costPerServing: recipe.estimatedCost / recipe.servings,
    }));

    return {
      recipes: adjustedRecipes,
      totalResults: filteredRecipes.length,
      searchCriteria: {
        dietaryRestrictions,
        maxBudget,
        preferredIngredients,
        servings,
      },
    };
  },
});

export const getGroceryPrices = tool({
  name: 'getGroceryPrices',
  description: 'Compare prices for grocery items across different stores to find the best deals',
  parameters: {
    type: 'object',
    properties: {
      items: {
        type: 'array',
        items: { type: 'string' },
        description: 'List of grocery items to compare prices for',
      },
      zipCode: {
        type: 'string',
        description: 'ZIP code to find local store prices',
      },
    },
    required: ['items'],
    additionalProperties: false,
  },
  execute: async (input) => {
    const { items, zipCode = '12345' } = input as {
      items: string[];
      zipCode?: string;
    };

    const results: any = {};
    let totalSavings = 0;

    items.forEach(item => {
      const itemKey = Object.keys(mockGroceryPrices).find(key => 
        key.toLowerCase().includes(item.toLowerCase()) || 
        item.toLowerCase().includes(key.toLowerCase())
      );

      if (itemKey) {
        const prices = mockGroceryPrices[itemKey as keyof typeof mockGroceryPrices];
        const sortedPrices = [...prices].sort((a, b) => a.price - b.price);
        const cheapest = sortedPrices[0];
        const mostExpensive = sortedPrices[sortedPrices.length - 1];
        const savings = mostExpensive.price - cheapest.price;
        totalSavings += savings;

        results[item] = {
          prices: sortedPrices,
          bestDeal: cheapest,
          potentialSavings: savings.toFixed(2),
        };
      } else {
        results[item] = {
          prices: [],
          error: 'Item not found in price database',
        };
      }
    });

    return {
      priceComparison: results,
      totalPotentialSavings: totalSavings.toFixed(2),
      zipCode,
      lastUpdated: new Date().toISOString(),
    };
  },
});

export const optimizeCart = tool({
  name: 'optimizeCart',
  description: 'Optimize a shopping cart for maximum savings by suggesting store combinations and alternatives',
  parameters: {
    type: 'object',
    properties: {
      cartItems: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            item: { type: 'string' },
            quantity: { type: 'number' },
          },
          required: ['item', 'quantity'],
        },
        description: 'List of items and quantities in the cart',
      },
      maxStores: {
        type: 'number',
        description: 'Maximum number of stores willing to visit',
        default: 2,
      },
    },
    required: ['cartItems'],
    additionalProperties: false,
  },
  execute: async (input) => {
    const { cartItems } = input as {
      cartItems: Array<{ item: string; quantity: number }>;
      maxStores?: number;
    };

    const optimizedCart: any = [];
    const storeBreakdown: any = {};
    let totalOriginalCost = 0;
    let totalOptimizedCost = 0;

    cartItems.forEach(({ item, quantity }) => {
      const itemKey = Object.keys(mockGroceryPrices).find(key => 
        key.toLowerCase().includes(item.toLowerCase()) || 
        item.toLowerCase().includes(key.toLowerCase())
      );

      if (itemKey) {
        const prices = mockGroceryPrices[itemKey as keyof typeof mockGroceryPrices];
        const sortedPrices = [...prices].sort((a, b) => a.price - b.price);
        const bestPrice = sortedPrices[0];
        const avgPrice = prices.reduce((sum, p) => sum + p.price, 0) / prices.length;
        
        const itemCost = bestPrice.price * quantity;
        const originalCost = avgPrice * quantity;
        
        totalOptimizedCost += itemCost;
        totalOriginalCost += originalCost;

        optimizedCart.push({
          item,
          quantity,
          recommendedStore: bestPrice.store,
          unitPrice: bestPrice.price,
          totalCost: itemCost.toFixed(2),
          deal: bestPrice.deal,
        });

        if (!storeBreakdown[bestPrice.store]) {
          storeBreakdown[bestPrice.store] = {
            items: [],
            totalCost: 0,
          };
        }
        storeBreakdown[bestPrice.store].items.push({
          item,
          quantity,
          cost: itemCost.toFixed(2),
        });
        storeBreakdown[bestPrice.store].totalCost += itemCost;
      }
    });

    const totalSavings = totalOriginalCost - totalOptimizedCost;
    const savingsPercentage = ((totalSavings / totalOriginalCost) * 100).toFixed(1);

    // Format store breakdown
    Object.keys(storeBreakdown).forEach(store => {
      storeBreakdown[store].totalCost = storeBreakdown[store].totalCost.toFixed(2);
    });

    return {
      optimizedCart,
      storeBreakdown,
      summary: {
        totalOriginalCost: totalOriginalCost.toFixed(2),
        totalOptimizedCost: totalOptimizedCost.toFixed(2),
        totalSavings: totalSavings.toFixed(2),
        savingsPercentage,
        storesNeeded: Object.keys(storeBreakdown).length,
      },
      recommendations: [
        "Visit Aldi first for the best overall prices",
        "Check Walmart for bulk family packs to save more",
        "Consider generic brands for additional 10-20% savings",
      ],
    };
  },
});