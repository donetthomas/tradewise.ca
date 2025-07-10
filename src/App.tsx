import React, { useState, useRef } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { BrokerDirectory } from './components/BrokerDirectory';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TradeInputForm } from './components/TradeInputForm';
import { BrokerComparisonTable } from './components/BrokerComparisonTable';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import { FAQItem } from './components/FAQItem';
import { Footer } from './components/Footer';
import { TradeInput, BrokerFee } from './types';
import { brokers } from './data/brokers';
import { faqs, faqCategories } from './data/faqs';
import { calculateBrokerFees } from './utils/feeCalculator';
import { fetchExchangeRate } from './utils/exchangeRate';
import { HelpCircle, BarChart3 } from 'lucide-react';

function App() {
  const [brokerFees, setBrokerFees] = useState<BrokerFee[]>([]);
  const [exchangeRate, setExchangeRate] = useState<number>(1.35);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [tradeInputCurrency, setTradeInputCurrency] = useState<'CAD' | 'USD' | null>(null);
  const [showResults, setShowResults] = useState(false);
  
  // Ref for scrolling to results
  const resultsRef = useRef<HTMLDivElement>(null);
  const calculatorRef = useRef<HTMLDivElement>(null);

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

  const scrollToCalculator = () => {
    calculatorRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <HeroSection onGetStarted={scrollToCalculator} />
        
        {/* Features Section */}
        <FeaturesSection />
        
        {/* Broker Directory */}
        <BrokerDirectory />
        
        {/* Testimonials */}
        <TestimonialsSection />

        {/* Calculator Section */}
        <section id="calculator" ref={calculatorRef} className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Calculator Title */}
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
                Compare Broker Fees Instantly
              </h2>
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
        <section className="py-16 sm:py-24 bg-white">
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

        {/* FAQ Section */}
        <section id="faq" className="py-16 sm:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-8">
                <div className="bg-purple-100 p-3 sm:p-4 rounded-2xl mx-auto sm:mx-0">
                  <HelpCircle className="w-8 h-8 sm:w-12 sm:h-12 text-purple-600" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Frequently Asked Questions</h2>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    Get answers to common questions about broker fees, trading costs, and how our calculator works.
                  </p>
                </div>
              </div>

              {/* FAQ Categories */}
              {Object.entries(faqCategories).map(([categoryKey, categoryName]) => {
                const categoryFaqs = faqs.filter(faq => faq.category === categoryKey);
                
                if (categoryFaqs.length === 0) return null;
                
                return (
                  <div key={categoryKey} className="mb-8 last:mb-0">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                      {categoryName}
                    </h3>
                    <div className="space-y-3">
                      {categoryFaqs.map((faq, index) => (
                        <FAQItem
                          key={faq.id}
                          question={faq.question}
                          answer={faq.answer}
                          isOpen={categoryKey === 'general' && index === 0} // Open first general question by default
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 sm:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              About FeeCompare
            </h2>
            <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed">
              <p className="mb-6">
                FeeCompare was created by Canadian investors who were frustrated with the lack of transparency 
                around trading fees. We believe that every investor deserves to know exactly what they're paying 
                and should have access to tools that help them make informed decisions.
              </p>
              <p className="mb-6">
                Our calculator uses real-time data from trusted financial APIs and the latest publicly available 
                fee structures from each broker. We're not affiliated with any brokerage firms, which means our 
                comparisons are completely unbiased.
              </p>
              <p>
                Whether you're a day trader looking to minimize costs or a long-term investor making occasional 
                trades, our tool helps you find the most cost-effective broker for your specific needs.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

    </div>
  );
}

export default App;