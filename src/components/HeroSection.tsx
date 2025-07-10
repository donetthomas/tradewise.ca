import React from 'react';
import { TrendingDown, Shield, Zap, Users } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted: () => void;
}

export function HeroSection({ onGetStarted }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 sm:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[var(--hero-pattern)]"></div>
      </div>

      {/* Large Background Percentage Symbol */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="text-[15rem] sm:text-[25rem] md:text-[30rem] lg:text-[40rem] font-bold text-white/5 select-none">%</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Stop Overpaying
            <span className="block text-blue-300">Trading Fees</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
            Find the cheapest Canadian broker for your trades with real-time data, 
            transparent fee breakdowns, and instant comparisons across 8 major brokers.
          </p>

          {/* Value Props */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="bg-blue-600/20 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <TrendingDown className="w-8 h-8 text-blue-300" />
              </div>
              <p className="text-blue-100 font-medium">Save Money</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600/20 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Zap className="w-8 h-8 text-green-300" />
              </div>
              <p className="text-blue-100 font-medium">Real-Time Data</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600/20 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Shield className="w-8 h-8 text-purple-300" />
              </div>
              <p className="text-blue-100 font-medium">Transparent</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600/20 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Users className="w-8 h-8 text-orange-300" />
              </div>
              <p className="text-blue-100 font-medium">8 Brokers</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onGetStarted}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto"
            >
              Calculate Fees Now
            </button>
            <a
              href="#features"
              className="border-2 border-blue-300 text-blue-100 py-4 px-8 rounded-2xl font-bold text-lg hover:bg-blue-600/20 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all w-full sm:w-auto text-center"
            >
              Learn More
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-blue-800/30">
            <p className="text-blue-200 text-sm mb-4">Trusted by Canadian investors</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-blue-200 text-sm">✓ Real-time market data</div>
              <div className="text-blue-200 text-sm">✓ No registration required</div>
              <div className="text-blue-200 text-sm">✓ Always free to use</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}