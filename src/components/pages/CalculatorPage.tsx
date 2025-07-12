import React, { useState, useRef } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { TradeInputForm } from '../TradeInputForm';
import { BrokerComparisonTable } from '../BrokerComparisonTable';
import { LoadingSpinner } from '../LoadingSpinner';
import { ErrorMessage } from '../ErrorMessage';
import { HowItWorksSection } from '../HowItWorksSection';
import { TradeInput, BrokerFee } from '../../types';
import { brokers } from '../../data/brokers';
import { calculateBrokerFees } from '../../utils/feeCalculator';
import { fetchExchangeRate } from '../../utils/exchangeRate';

export function CalculatorPage() {
  const [brokerFees, setBrokerFees] = useState<BrokerFee[]>([]);
  const [exchangeRate, setExchangeRate] = useState<number>(1.35);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [tradeInputCurrency, setTradeInputCurrency] = useState<'CAD' | 'USD' | null>(null);
  const [showResults, setShowResults] = useState(false);
  
  // Ref for scrolling to results
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleCompare = async (input: TradeInput) => {
    setIsLoading(true);
    setError(null);

    try {
      // Fetch current exchange rate
      const currentExchangeRate = await fetchExchangeRate();
      setExchangeRate(currentExchangeRate);

      // Calculate fees for selected brokers
      const selectedBrokers = brokers.filter(broker => 
        input.selectedBrokers.includes(broker.id)
      );

      const fees = selectedBrokers.map(broker => 
        calculateBrokerFees(broker, input, currentExchangeRate)
      );

      setBrokerFees(fees);
      setTradeInputCurrency(input.currency);
      setShowResults(true); // Show results after successful calculation
      
      // Scroll to results after a short delay to ensure DOM is updated
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    } catch (error) {
      setError('Failed to calculate broker fees. Please try again.');
      console.error('Error calculating fees:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    setError(null);
  };

  const handleInputChange = () => {
    setShowResults(false); // Hide results when inputs change
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Calculator Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Calculator Title */}
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
                Compare Broker Fees Instantly
              </h1>
              <p className="text-base sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Use our smart brokerage fee calculator to instantly compare commissions and FX fees for your stock or ETF trade. Get a ranked list of top Canadian brokers starting with the most affordable right at your fingertips.
              </p>
            </div>

            {/* Large Background Percentage Symbol */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <div className="text-[15rem] sm:text-[25rem] md:text-[30rem] lg:text-[40rem] font-bold text-white/5 select-none">%</div>
              </div>
              
              <div className="relative z-10 space-y-6 sm:space-y-8">
                <TradeInputForm 
                  onSubmit={handleCompare} 
                  isLoading={isLoading}
                  exchangeRate={exchangeRate}
                  onInputChange={handleInputChange}
                />

                {isLoading && (
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
                    <LoadingSpinner />
                  </div>
                )}

                {error && (
                  <ErrorMessage message={error} onRetry={handleRetry} />
                )}

                {showResults && brokerFees.length > 0 && !isLoading && !error && (
                  <div ref={resultsRef}>
                    <BrokerComparisonTable 
                      brokerFees={brokerFees} 
                      exchangeRate={exchangeRate}
                      tradeInputCurrency={tradeInputCurrency}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <HowItWorksSection />
      </main>

      <Footer />
    </div>
  );
}