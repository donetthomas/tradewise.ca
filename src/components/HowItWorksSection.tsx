import React from 'react';

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get accurate fee comparisons in three simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-blue-600 font-bold text-2xl">1</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Enter Trade Details</h3>
            <p className="text-gray-600 leading-relaxed">
              Input your stock symbol or manually enter shares, price, and currency. 
              Our system supports both US and Canadian markets.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-green-600 font-bold text-2xl">2</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Live Data & Calculations</h3>
            <p className="text-gray-600 leading-relaxed">
              We fetch real-time quotes from Finnhub and current exchange rates, 
              then calculate fees using each broker's exact fee structure.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-orange-600 font-bold text-2xl">3</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Compare Results</h3>
            <p className="text-gray-600 leading-relaxed">
              View sortable results with detailed fee breakdowns, broker rankings, 
              and direct links to open accounts with your preferred broker.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}