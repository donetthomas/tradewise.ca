import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { TestimonialsSection } from '../TestimonialsSection';

export function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-purple-50 to-indigo-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              What Our Users Say
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Join thousands of Canadian investors who trust TradeWiser to help them 
              make smarter trading decisions and save money on broker fees.
            </p>
          </div>
        </section>

        <TestimonialsSection />
      </main>

      <Footer />
    </div>
  );
}