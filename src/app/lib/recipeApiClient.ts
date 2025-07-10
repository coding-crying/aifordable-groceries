// Recipe API client for integrating with external recipe databases

// Types for recipe data structure (matching existing database tool format)
export interface Recipe {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  servings: number;
  prepTime: string;
  estimatedCost: number;
  costPerServing: number;
  nutrition: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
  };
  dietaryTags: string[];
  cuisineType: string;
  difficulty: string;
  image?: string;
  instructions?: string;
}

interface SpoonacularRecipe {
  id: number;
  title: string;
  summary: string;
  extendedIngredients: Array<{
    name: string;
    amount: number;
    unit: string;
  }>;
  servings: number;
  readyInMinutes: number;
  pricePerServing?: number;
  nutrition?: {
    nutrients: Array<{
      name: string;
      amount: number;
      unit: string;
    }>;
  };
  diets: string[];
  cuisines: string[];
  image: string;
  analyzedInstructions?: Array<{
    steps: Array<{
      step: string;
    }>;
  }>;
}

interface RecipeSearchParams {
  dietaryRestrictions?: string[];
  cuisineTypes?: string[];
  ingredients?: string[];
  maxResults?: number;
  maxReadyTime?: number;
  query?: string;
}

export class RecipeApiClient {
  private readonly baseUrl = 'https://api.spoonacular.com/recipes';
  private readonly apiKey: string;
  private readonly defaultMaxResults = 20;

  constructor() {
    this.apiKey = process.env.SPOONACULAR_API_KEY || '';
    if (!this.apiKey) {
      console.warn('SPOONACULAR_API_KEY not found in environment variables. Falling back to mock data.');
    }
  }

  /**
   * Search for recipes based on user preferences and dietary restrictions
   */
  async searchRecipes(params: RecipeSearchParams): Promise<Recipe[]> {
    if (!this.apiKey) {
      console.log('No API key available, returning empty results');
      return [];
    }

    try {
      const searchParams = this.buildSearchParams(params);
      const url = `${this.baseUrl}/complexSearch?${searchParams}`;
      
      console.log(`Fetching recipes from: ${url.replace(this.apiKey, 'API_KEY_HIDDEN')}`);
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Spoonacular API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      
      if (!data.results || !Array.isArray(data.results)) {
        console.warn('Unexpected Spoonacular API response format:', data);
        return [];
      }

      // Get detailed recipe information for each result
      const detailedRecipes = await Promise.all(
        data.results.slice(0, params.maxResults || this.defaultMaxResults).map(
          (recipe: any) => this.getRecipeDetails(recipe.id.toString())
        )
      );

      return detailedRecipes.filter(recipe => recipe !== null);
    } catch (error) {
      console.error('Error fetching recipes from Spoonacular:', error);
      return [];
    }
  }

  /**
   * Get detailed recipe information by ID
   */
  async getRecipeDetails(id: string): Promise<Recipe | null> {
    if (!this.apiKey) {
      return null;
    }

    try {
      const url = `${this.baseUrl}/${id}/information?apiKey=${this.apiKey}&includeNutrition=true`;
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Spoonacular API error: ${response.status} ${response.statusText}`);
      }

      const spoonacularRecipe: SpoonacularRecipe = await response.json();
      return this.mapApiRecipe(spoonacularRecipe);
    } catch (error) {
      console.error(`Error fetching recipe details for ID ${id}:`, error);
      return null;
    }
  }

  /**
   * Build URL search parameters for Spoonacular API
   */
  private buildSearchParams(params: RecipeSearchParams): string {
    const searchParams = new URLSearchParams();
    
    searchParams.append('apiKey', this.apiKey);
    searchParams.append('number', (params.maxResults || this.defaultMaxResults).toString());
    searchParams.append('addRecipeInformation', 'true');
    searchParams.append('addRecipeNutrition', 'true');
    searchParams.append('fillIngredients', 'true');

    // Add dietary restrictions
    if (params.dietaryRestrictions && params.dietaryRestrictions.length > 0) {
      const spoonacularDiets = this.mapDietaryRestrictions(params.dietaryRestrictions);
      if (spoonacularDiets.length > 0) {
        searchParams.append('diet', spoonacularDiets.join(','));
      }
    }

    // Add cuisine types
    if (params.cuisineTypes && params.cuisineTypes.length > 0) {
      const spoonacularCuisines = this.mapCuisineTypes(params.cuisineTypes);
      if (spoonacularCuisines.length > 0) {
        searchParams.append('cuisine', spoonacularCuisines.join(','));
      }
    }

    // Add ingredients to include
    if (params.ingredients && params.ingredients.length > 0) {
      searchParams.append('includeIngredients', params.ingredients.join(','));
    }

    // Add ready time constraint
    if (params.maxReadyTime) {
      searchParams.append('maxReadyTime', params.maxReadyTime.toString());
    }

    // Add search query
    if (params.query) {
      searchParams.append('query', params.query);
    }

    return searchParams.toString();
  }

  /**
   * Map user dietary restrictions to Spoonacular diet parameters
   */
  private mapDietaryRestrictions(restrictions: string[]): string[] {
    const dietMap: Record<string, string> = {
      'vegetarian': 'vegetarian',
      'vegan': 'vegan',
      'gluten-free': 'gluten free',
      'gluten free': 'gluten free',
      'dairy-free': 'dairy free',
      'dairy free': 'dairy free',
      'keto': 'ketogenic',
      'ketogenic': 'ketogenic',
      'paleo': 'paleo',
      'low-carb': 'primal',
      'low carb': 'primal',
    };

    return restrictions
      .map(restriction => dietMap[restriction.toLowerCase()])
      .filter(Boolean);
  }

  /**
   * Map user cuisine preferences to Spoonacular cuisine parameters
   */
  private mapCuisineTypes(cuisines: string[]): string[] {
    const cuisineMap: Record<string, string> = {
      'american': 'american',
      'italian': 'italian',
      'mexican': 'mexican',
      'asian': 'asian',
      'chinese': 'chinese',
      'japanese': 'japanese',
      'thai': 'thai',
      'indian': 'indian',
      'mediterranean': 'mediterranean',
      'french': 'french',
      'spanish': 'spanish',
      'greek': 'greek',
      'middle eastern': 'middle eastern',
      'korean': 'korean',
    };

    return cuisines
      .map(cuisine => cuisineMap[cuisine.toLowerCase()])
      .filter(Boolean);
  }

  /**
   * Transform Spoonacular recipe format to our internal Recipe format
   */
  private mapApiRecipe(spoonacularRecipe: SpoonacularRecipe): Recipe {
    // Extract ingredients as simple string array
    const ingredients = spoonacularRecipe.extendedIngredients.map(ing => ing.name);

    // Extract nutrition information
    const nutrition = {
      calories: 0,
      protein: '0g',
      carbs: '0g',
      fat: '0g',
    };

    if (spoonacularRecipe.nutrition?.nutrients) {
      spoonacularRecipe.nutrition.nutrients.forEach(nutrient => {
        switch (nutrient.name.toLowerCase()) {
          case 'calories':
            nutrition.calories = Math.round(nutrient.amount);
            break;
          case 'protein':
            nutrition.protein = `${Math.round(nutrient.amount)}${nutrient.unit}`;
            break;
          case 'carbohydrates':
            nutrition.carbs = `${Math.round(nutrient.amount)}${nutrient.unit}`;
            break;
          case 'fat':
            nutrition.fat = `${Math.round(nutrient.amount)}${nutrient.unit}`;
            break;
        }
      });
    }

    // Estimate cost if not provided by API
    const estimatedCost = spoonacularRecipe.pricePerServing 
      ? (spoonacularRecipe.pricePerServing * spoonacularRecipe.servings) / 100 // Spoonacular returns cents
      : this.estimateCost(ingredients);

    // Extract cooking instructions
    const instructions = spoonacularRecipe.analyzedInstructions?.[0]?.steps
      ?.map(step => step.step)
      ?.join(' ') || '';

    // Determine difficulty based on ready time and ingredient count
    const difficulty = this.determineDifficulty(
      spoonacularRecipe.readyInMinutes,
      ingredients.length
    );

    // Map primary cuisine
    const cuisineType = spoonacularRecipe.cuisines?.[0]?.toLowerCase() || 'international';

    return {
      id: `spoon-${spoonacularRecipe.id}`,
      name: spoonacularRecipe.title,
      description: this.cleanHtmlDescription(spoonacularRecipe.summary),
      ingredients,
      servings: spoonacularRecipe.servings,
      prepTime: `${spoonacularRecipe.readyInMinutes} minutes`,
      estimatedCost,
      costPerServing: estimatedCost / spoonacularRecipe.servings,
      nutrition,
      dietaryTags: spoonacularRecipe.diets.map(diet => diet.toLowerCase()),
      cuisineType,
      difficulty,
      image: spoonacularRecipe.image,
      instructions,
    };
  }

  /**
   * Estimate recipe cost based on ingredients (fallback when API doesn't provide pricing)
   */
  private estimateCost(ingredients: string[]): number {
    // Simple cost estimation based on ingredient count and typical prices
    const avgCostPerIngredient = 1.50;
    const baseCost = ingredients.length * avgCostPerIngredient;
    
    // Add some variation based on ingredient types
    const expensiveIngredients = ['meat', 'beef', 'chicken', 'fish', 'salmon', 'cheese', 'wine'];
    const cheapIngredients = ['rice', 'pasta', 'beans', 'lentils', 'potato', 'onion'];
    
    let costMultiplier = 1.0;
    
    ingredients.forEach(ingredient => {
      const lowerIngredient = ingredient.toLowerCase();
      if (expensiveIngredients.some(exp => lowerIngredient.includes(exp))) {
        costMultiplier += 0.3;
      } else if (cheapIngredients.some(cheap => lowerIngredient.includes(cheap))) {
        costMultiplier -= 0.2;
      }
    });

    return Math.max(baseCost * costMultiplier, 2.0); // Minimum $2 per recipe
  }

  /**
   * Determine recipe difficulty based on time and complexity
   */
  private determineDifficulty(readyInMinutes: number, ingredientCount: number): string {
    if (readyInMinutes <= 20 && ingredientCount <= 6) return 'easy';
    if (readyInMinutes <= 45 && ingredientCount <= 10) return 'medium';
    return 'hard';
  }

  /**
   * Clean HTML tags from recipe descriptions
   */
  private cleanHtmlDescription(html: string): string {
    if (!html) return '';
    
    // Remove HTML tags and decode entities
    return html
      .replace(/<[^>]*>/g, '')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .trim()
      .substring(0, 200) + (html.length > 200 ? '...' : '');
  }
}

// Export singleton instance
export const recipeApiClient = new RecipeApiClient();