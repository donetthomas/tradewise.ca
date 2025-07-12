import React from 'react';
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  Shield, 
  Zap, 
  BarChart3,
  Globe,
  Clock,
  CheckCircle
} from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Calculator,
      title: 'Smart Fee Calculator',
      description: 'Instantly calculate trading fees across multiple brokers with our intelligent algorithm that considers all fee types.',
      color: 'blue'
    },
    {
      icon: TrendingUp,
      title: 'Real-Time Stock Data',
      description: 'Get live stock prices from Finnhub and Financial Modeling Prep for accurate fee calculations.',
      color: 'green'
    },
    {
      icon: DollarSign,
      title: 'FX Fee Analysis',
      description: 'Understand foreign exchange fees when trading US stocks from Canadian accounts with live exchange rates.',
      color: 'purple'
    },
    {
      icon: Shield,
      title: 'Transparent Breakdown',
      description: 'See exactly how fees are calculated with detailed breakdowns of commissions, FX fees, and platform charges.',
      color: 'orange'
    },
    {
      icon: Zap,
      title: 'Instant Comparisons',
      description: 'Compare 7 major Canadian brokers side-by-side with rankings and detailed fee analysis.',
      color: 'red'
    },
    {
      icon: BarChart3,
      title: 'Visual Rankings',
      description: 'Easily identify the best value brokers with color-coded rankings and sortable comparison tables.',
      color: 'indigo'
    },
    {
      icon: Globe,
      title: 'US & Canadian Stocks',
      description: 'Support for both US and Canadian stock markets with appropriate fee structures for each.',
      color: 'teal'
    },
    {
      icon: Clock,
      title: 'No Registration',
      description: 'Start comparing fees immediately without creating accounts or providing personal information.',
      color: 'pink'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600',
      red: 'bg-red-100 text-red-600',
      indigo: 'bg-indigo-100 text-indigo-600',
      teal: 'bg-teal-100 text-teal-600',
      pink: 'bg-pink-100 text-pink-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="features" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for Smart Trading
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to make informed decisions about broker fees and trading costs, 
            all in one comprehensive tool.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className={`p-3 rounded-xl w-fit mb-4 ${getColorClasses(feature.color)}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Calculator?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built by traders, for traders. We understand the importance of minimizing costs to maximize returns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Always Accurate</h4>
              <p className="text-gray-600">
                Our fee calculations are based on the latest publicly available information from each broker.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Lightning Fast</h4>
              <p className="text-gray-600">
                Get instant results without waiting. Our optimized system delivers comparisons in seconds.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Completely Free</h4>
              <p className="text-gray-600">
                No hidden fees, no subscriptions, no registration required. Just honest, transparent comparisons.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}