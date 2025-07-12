import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { FeaturesSection } from '../FeaturesSection';

export function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Powerful Features
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Everything you need to make informed decisions about broker fees and trading costs, 
              all in one comprehensive tool.
            </p>
          </div>
        </section>

        <FeaturesSection />
      </main>

      <Footer />
    </div>
  );
}