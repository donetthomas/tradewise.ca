import React, { useState, useRef } from 'react';
import { TradeInputForm } from './components/TradeInputForm';
import { BrokerComparisonTable } from './components/BrokerComparisonTable';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import { TradeInput, BrokerFee } from './types';
import { brokers } from './data/brokers';
import { calculateBrokerFees } from './utils/feeCalculator';
import { fetchExchangeRate } from './utils/exchangeRate';
import { BarChart3 } from 'lucide-react';

function App() {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Section with Calculator Title */}
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

        {/* Brokerage Trading Fees Section */}
        <div className="mt-12 sm:mt-20 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <div className="bg-blue-100 p-3 sm:p-4 rounded-2xl mx-auto sm:mx-0">
              <BarChart3 className="w-8 h-8 sm:w-12 sm:h-12 text-blue-600" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Brokerage trading fees</h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Use the calculator to see how the trading fees differ in case of certain brokers. Get a better 
                understanding of what fits you most.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-center sm:text-left">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-base sm:text-lg">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Enter Trade Details</h4>
              <p className="text-gray-600 text-sm sm:text-base">Input your stock symbol or manually enter shares, price, and currency</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-base sm:text-lg">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Live Data & Calculations</h4>
              <p className="text-gray-600 text-sm sm:text-base">We fetch real-time quotes from Finnhub and current exchange rates</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-base sm:text-lg">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Compare Results</h4>
              <p className="text-gray-600 text-sm sm:text-base">View sortable results with detailed fee breakdowns and stock information</p>
            </div>
          </div>
        </div>

        <footer className="mt-8 sm:mt-12 text-center text-blue-200 space-y-4">
          {/* Collapsible Footer Sections */}
          <div className="space-y-3 max-w-4xl mx-auto">
            <details className="bg-blue-800/20 rounded-lg p-4 text-left">
              <summary className="cursor-pointer font-medium text-blue-100 hover:text-white transition-colors">
                Important Disclaimer
              </summary>
              <div className="mt-3 text-sm text-blue-200 leading-relaxed">
                <p className="mb-3">
                  This website is for informational and comparison purposes only. We are not affiliated with any brokerage firms listed on this site. All fee estimates are based on publicly available information at the time of calculation and may not reflect the most up-to-date fee structures. Users should independently verify all trading costs with the respective brokers. This tool does not provide financial or investment advice. Use at your own risk.
                </p>
              </div>
            </details>

            <details className="bg-blue-800/20 rounded-lg p-4 text-left">
              <summary className="cursor-pointer font-medium text-blue-100 hover:text-white transition-colors">
                Terms of Service
              </summary>
              <div className="mt-3 text-sm text-blue-200 leading-relaxed">
                <p className="mb-3">
                  By using this Stock Fee Calculator, you agree to the following terms:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>This tool is provided "as is" without any warranties or guarantees</li>
                  <li>Fee calculations are estimates based on publicly available information</li>
                  <li>We are not responsible for any trading decisions made based on this information</li>
                  <li>Users must verify all fees and terms directly with their chosen broker</li>
                  <li>This service does not constitute financial or investment advice</li>
                  <li>We reserve the right to modify or discontinue this service at any time</li>
                </ul>
              </div>
            </details>

            <details className="bg-blue-800/20 rounded-lg p-4 text-left">
              <summary className="cursor-pointer font-medium text-blue-100 hover:text-white transition-colors">
                Data Source & Accuracy Notice
              </summary>
              <div className="mt-3 text-sm text-blue-200 leading-relaxed">
                <p className="mb-3">
                  <strong>Stock Data:</strong> Real-time stock prices are provided by Finnhub (US markets) and Financial Modeling Prep (Canadian markets). Market data may be delayed and should not be considered as real-time trading prices.
                </p>
                <p className="mb-3">
                  <strong>Exchange Rates:</strong> Currency conversion rates are fetched from ExchangeRate-API and updated regularly. Actual conversion rates may vary depending on your broker and the time of transaction.
                </p>
                <p className="mb-3">
                  <strong>Fee Information:</strong> Broker fee structures are based on publicly available information and may not reflect the most current pricing. Fee calculations are estimates and actual costs may vary based on account type, trading volume, and other factors.
                </p>
                <p>
                  <strong>Disclaimer:</strong> Please verify all fees and terms directly with your broker before making any trading decisions. This tool is for comparison purposes only.
                </p>
              </div>
            </details>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;