import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { FeaturesSection } from './components/FeaturesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/calculator');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <HeroSection onGetStarted={handleGetStarted} />

        {/* About Section */}
        <section id="about" className="py-16 sm:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              About TradeWiser
            </h2>
            <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed">
              <p className="mb-6">
                TradeWiser was created by Canadian investors who were frustrated with the lack of transparency 
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

        {/* How It Works Section */}
        <HowItWorksSection />

        {/* Features Section */}
        <FeaturesSection />
      </main>

      <TestimonialsSection />

      <Footer />
    </div>
  );
}

export default App;