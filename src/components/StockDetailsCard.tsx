import React from 'react';
import { Building2 } from 'lucide-react';
import { StockDetails } from '../types';

interface StockDetailsCardProps {
  stockDetails: StockDetails;
}

export function StockDetailsCard({ stockDetails }: StockDetailsCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
        {stockDetails.logo && (
          <img 
            src={stockDetails.logo} 
            alt={`${stockDetails.name} logo`}
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover shadow-md mx-auto sm:mx-0"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        )}
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{stockDetails.symbol}</h3>
          <p className="text-lg sm:text-xl text-gray-700 font-medium mb-2">{stockDetails.name}</p>
          {stockDetails.industry && (
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
              <span className="text-sm sm:text-base text-gray-600 font-medium">{stockDetails.industry}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}