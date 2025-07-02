import React from 'react';

interface Recipe {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  servings: number;
  prepTime: string;
  estimatedCost: number;
  costPerServing?: number;
  nutrition: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
  };
}

interface RecipeCardProps {
  recipe: Recipe;
  onSelect?: (recipe: Recipe) => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onSelect }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-800">{recipe.name}</h3>
        <div className="text-green-600 font-bold">
          ${recipe.costPerServing ? recipe.costPerServing.toFixed(2) : (recipe.estimatedCost / recipe.servings).toFixed(2)}/serving
        </div>
      </div>
      
      <p className="text-gray-600 text-sm mb-3">{recipe.description}</p>
      
      <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-700">
        <span>🍽️ {recipe.servings} servings</span>
        <span>⏱️ {recipe.prepTime}</span>
        <span>💰 ${recipe.estimatedCost.toFixed(2)} total</span>
      </div>
      
      <div className="mb-3">
        <h4 className="font-medium text-gray-800 mb-1">Ingredients:</h4>
        <div className="flex flex-wrap gap-1">
          {recipe.ingredients.map((ingredient, index) => (
            <span key={index} className="bg-gray-100 text-xs px-2 py-1 rounded-full">
              {ingredient}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mb-3">
        <h4 className="font-medium text-gray-800 mb-1">Nutrition per serving:</h4>
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
          <span>{recipe.nutrition.calories} cal</span>
          <span>{recipe.nutrition.protein} protein</span>
          <span>{recipe.nutrition.carbs} carbs</span>
          <span>{recipe.nutrition.fat} fat</span>
        </div>
      </div>
      
      {onSelect && (
        <button
          onClick={() => onSelect(recipe)}
          className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors"
        >
          Select Recipe
        </button>
      )}
    </div>
  );
};

export default RecipeCard;