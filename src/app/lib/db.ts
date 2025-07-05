import { PrismaClient } from '../../generated/prisma';

// Global database instance
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = db;
}

// Helper functions for JSON array fields (SQLite compatibility)
export const parseJsonArray = (jsonString: string): string[] => {
  try {
    const parsed = JSON.parse(jsonString);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const stringifyJsonArray = (array: string[]): string => {
  return JSON.stringify(array || []);
};

// User helper functions
export const getUserWithPreferences = async (userId: string) => {
  return await db.user.findUnique({
    where: { id: userId },
    include: {
      preferences: true,
      allergies: true,
      fridgeItems: true,
      favorites: true,
    },
  });
};

export const createUserWithDefaults = async (userData: {
  name?: string;
  email?: string;
  zipCode?: string;
  familySize?: number;
  weeklyBudget?: number;
}) => {
  return await db.user.create({
    data: {
      ...userData,
      preferences: {
        create: {
          dietaryRestrictions: stringifyJsonArray([]),
          cuisinePreferences: stringifyJsonArray([]),
          equipmentAvailable: stringifyJsonArray([]),
          preferredStores: stringifyJsonArray([]),
        },
      },
    },
    include: {
      preferences: true,
      allergies: true,
      fridgeItems: true,
    },
  });
};

export const updateUserPreferences = async (
  userId: string, 
  preferences: {
    dietaryRestrictions?: string[];
    cuisinePreferences?: string[];
    nutritionFocus?: string;
    maxCookTime?: number;
    maxPrepTime?: number;
    skillLevel?: string;
    equipmentAvailable?: string[];
    preferredStores?: string[];
    maxStores?: number;
    bulkBuyingOk?: boolean;
    organicPreference?: string;
  }
) => {
  const updateData: any = { ...preferences };
  
  // Convert arrays to JSON strings for SQLite
  if (preferences.dietaryRestrictions) {
    updateData.dietaryRestrictions = stringifyJsonArray(preferences.dietaryRestrictions);
  }
  if (preferences.cuisinePreferences) {
    updateData.cuisinePreferences = stringifyJsonArray(preferences.cuisinePreferences);
  }
  if (preferences.equipmentAvailable) {
    updateData.equipmentAvailable = stringifyJsonArray(preferences.equipmentAvailable);
  }
  if (preferences.preferredStores) {
    updateData.preferredStores = stringifyJsonArray(preferences.preferredStores);
  }

  return await db.userPreferences.upsert({
    where: { userId },
    create: {
      userId,
      ...updateData,
    },
    update: updateData,
  });
};

export const addFridgeItem = async (
  userId: string,
  item: {
    itemName: string;
    brand?: string;
    quantity: number;
    unit: string;
    expirationDate?: Date;
    category?: string;
  }
) => {
  return await db.fridgeItem.create({
    data: {
      userId,
      ...item,
    },
  });
};

export const getFridgeItems = async (userId: string, includeExpiring = false) => {
  const where: any = { userId };
  
  if (includeExpiring) {
    const threeDaysFromNow = new Date();
    threeDaysFromNow.setDate(threeDaysFromNow.getDate() + 3);
    
    where.expirationDate = {
      lte: threeDaysFromNow,
    };
  }

  return await db.fridgeItem.findMany({
    where,
    orderBy: { expirationDate: 'asc' },
  });
};

export const removeFridgeItem = async (itemId: string) => {
  return await db.fridgeItem.delete({
    where: { id: itemId },
  });
};

export const addUserFavorite = async (
  userId: string,
  favorite: {
    type: 'recipe' | 'store' | 'product';
    itemId: string;
    itemName: string;
    notes?: string;
  }
) => {
  return await db.userFavorite.upsert({
    where: {
      userId_type_itemId: {
        userId,
        type: favorite.type,
        itemId: favorite.itemId,
      },
    },
    create: {
      userId,
      ...favorite,
    },
    update: {
      itemName: favorite.itemName,
      notes: favorite.notes,
    },
  });
};

export const getUserFavorites = async (userId: string, type?: string) => {
  const where: any = { userId };
  if (type) where.type = type;

  return await db.userFavorite.findMany({
    where,
    orderBy: { createdAt: 'desc' },
  });
};

export const createShoppingSession = async (
  userId: string,
  sessionData: {
    totalBudget?: number;
    recipes?: Array<{
      recipeName: string;
      recipeId?: string;
      servings: number;
      costPerServing?: number;
    }>;
    shoppingList?: Array<{
      itemName: string;
      quantity: number;
      unit: string;
      estimatedCost?: number;
      store?: string;
      brand?: string;
    }>;
  }
) => {
  return await db.shoppingSession.create({
    data: {
      userId,
      totalBudget: sessionData.totalBudget,
      recipes: sessionData.recipes ? {
        create: sessionData.recipes,
      } : undefined,
      shoppingList: sessionData.shoppingList ? {
        create: sessionData.shoppingList,
      } : undefined,
    },
    include: {
      recipes: true,
      shoppingList: true,
    },
  });
};

export const getRecentShoppingSessions = async (userId: string, limit = 5) => {
  return await db.shoppingSession.findMany({
    where: { userId },
    include: {
      recipes: true,
      shoppingList: true,
    },
    orderBy: { sessionDate: 'desc' },
    take: limit,
  });
};