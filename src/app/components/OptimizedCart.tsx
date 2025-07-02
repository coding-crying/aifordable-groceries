import React from 'react';

interface CartItem {
  item: string;
  quantity: number;
  recommendedStore: string;
  unitPrice: number;
  totalCost: string;
  deal?: string | null;
}

interface StoreBreakdown {
  [store: string]: {
    items: Array<{
      item: string;
      quantity: number;
      cost: string;
    }>;
    totalCost: string;
  };
}

interface OptimizedCartData {
  optimizedCart: CartItem[];
  storeBreakdown: StoreBreakdown;
  summary: {
    totalOriginalCost: string;
    totalOptimizedCost: string;
    totalSavings: string;
    savingsPercentage: string;
    storesNeeded: number;
  };
  recommendations: string[];
}

interface OptimizedCartProps {
  data: OptimizedCartData;
  onStartShopping?: () => void;
}

export const OptimizedCart: React.FC<OptimizedCartProps> = ({ data, onStartShopping }) => {
  const { optimizedCart, storeBreakdown, summary, recommendations } = data;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
      {/* Summary Header */}
      <div className="bg-green-50 rounded-lg p-4 mb-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">💰 Optimized Shopping Plan</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-600">Original Cost:</span>
            <span className="font-semibold ml-2">${summary.totalOriginalCost}</span>
          </div>
          <div>
            <span className="text-gray-600">Optimized Cost:</span>
            <span className="font-semibold ml-2 text-green-600">${summary.totalOptimizedCost}</span>
          </div>
          <div>
            <span className="text-gray-600">Total Savings:</span>
            <span className="font-bold ml-2 text-green-700">${summary.totalSavings}</span>
          </div>
          <div>
            <span className="text-gray-600">Savings:</span>
            <span className="font-bold ml-2 text-green-700">{summary.savingsPercentage}%</span>
          </div>
        </div>
        <div className="mt-2 text-sm text-gray-600">
          🏪 Visit {summary.storesNeeded} store{summary.storesNeeded > 1 ? 's' : ''} for maximum savings
        </div>
      </div>

      {/* Store Breakdown */}
      <div className="mb-4">
        <h4 className="font-semibold text-gray-800 mb-3">Shopping Plan by Store:</h4>
        <div className="space-y-3">
          {Object.entries(storeBreakdown).map(([store, breakdown]) => (
            <div key={store} className="border rounded-lg p-3">
              <div className="flex justify-between items-center mb-2">
                <h5 className="font-medium text-gray-800">🏪 {store}</h5>
                <span className="font-semibold text-green-600">${breakdown.totalCost}</span>
              </div>
              <div className="space-y-1">
                {breakdown.items.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm text-gray-600">
                    <span>{item.item} (×{item.quantity})</span>
                    <span>${item.cost}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Item List */}
      <div className="mb-4">
        <h4 className="font-semibold text-gray-800 mb-3">Optimized Item Details:</h4>
        <div className="space-y-2">
          {optimizedCart.map((item, index) => (
            <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <div className="flex-1">
                <span className="font-medium">{item.item}</span>
                <span className="text-gray-600 ml-2">(×{item.quantity})</span>
                {item.deal && (
                  <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded ml-2">
                    {item.deal}
                  </span>
                )}
              </div>
              <div className="text-right">
                <div className="font-semibold">${item.totalCost}</div>
                <div className="text-sm text-gray-600">{item.recommendedStore}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="mb-4">
        <h4 className="font-semibold text-gray-800 mb-2">💡 Money-Saving Tips:</h4>
        <ul className="space-y-1">
          {recommendations.map((tip, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-start">
              <span className="text-green-600 mr-2">•</span>
              {tip}
            </li>
          ))}
        </ul>
      </div>

      {/* Action Button */}
      {onStartShopping && (
        <button
          onClick={onStartShopping}
          className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors font-medium"
        >
          Start Shopping with This Plan 🛒
        </button>
      )}
    </div>
  );
};

export default OptimizedCart;