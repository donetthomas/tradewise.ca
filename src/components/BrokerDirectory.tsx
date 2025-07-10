import React from 'react';
import { ExternalLink, Star, Shield, Users, Zap } from 'lucide-react';
import { brokers } from '../data/brokers';

export function BrokerDirectory() {
  const getBrokerHighlight = (brokerId: string) => {
    switch (brokerId) {
      case 'wealthsimple':
        return { text: 'Most Popular', icon: Users, color: 'bg-green-100 text-green-800' };
      case 'questrade':
        return { text: 'Best for DIY', icon: Star, color: 'bg-blue-100 text-blue-800' };
      case 'ibkr':
        return { text: 'Lowest Fees', icon: Zap, color: 'bg-purple-100 text-purple-800' };
      case 'webull':
        return { text: 'Advanced Tools', icon: Shield, color: 'bg-orange-100 text-orange-800' };
      case 'moomoo':
        return { text: 'Free Research', icon: Star, color: 'bg-pink-100 text-pink-800' };
      case 'rbc':
        return { text: 'Full Service', icon: Shield, color: 'bg-red-100 text-red-800' };
      case 'td':
        return { text: 'Trusted Brand', icon: Shield, color: 'bg-indigo-100 text-indigo-800' };
      default:
        return { text: 'Popular Choice', icon: Star, color: 'bg-gray-100 text-gray-800' };
    }
  };

  return (
    <section id="brokers" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Supported Brokers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Compare fees across Canada's leading online brokers. Each offers unique features 
            and fee structures to suit different trading styles and experience levels.
          </p>
        </div>

        {/* Brokers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {brokers.map((broker) => {
            const highlight = getBrokerHighlight(broker.id);
            const HighlightIcon = highlight.icon;
            
            return (
              <div 
                key={broker.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 relative"
              >
                {/* Highlight Badge */}
                <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium ${highlight.color} flex items-center gap-1`}>
                  <HighlightIcon className="w-3 h-3" />
                  {highlight.text}
                </div>

                {/* Broker Logo */}
                <div className="text-center mb-4 mt-2">
                  {broker.logo ? (
                    <img 
                      src={broker.logo} 
                      alt={`${broker.name} logo`}
                      className="w-16 h-16 mx-auto rounded-lg object-cover shadow-md border border-gray-200"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="w-16 h-16 mx-auto rounded-lg bg-gray-100 flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-400">
                        {broker.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Broker Name */}
                <h3 className="text-lg font-bold text-gray-900 text-center mb-3">
                  {broker.name}
                </h3>

                {/* Key Features */}
                <div className="space-y-2 mb-4">
                  <div className="flex flex-wrap gap-1 justify-center">
                    {broker.hasFreeUSDAccount && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        Free USD
                      </span>
                    )}
                    {broker.beginnerFriendly && (
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        Beginner
                      </span>
                    )}
                    {broker.supportsTFSA && (
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                        TFSA
                      </span>
                    )}
                    {broker.supportsRRSP && (
                      <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">
                        RRSP
                      </span>
                    )}
                  </div>
                </div>

                {/* Visit Broker Button */}
                <a
                  href={broker.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Visit Broker
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Broker Comparison CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Compare All Brokers?
          </h3>
          <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
            Use our calculator to see exactly how much you'll pay with each broker for your specific trade.
          </p>
          <a
            href="#calculator"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg"
          >
            Start Comparing Now
          </a>
        </div>
      </div>
    </section>
  );
}