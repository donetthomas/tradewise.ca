import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { BrokerDirectory } from '../BrokerDirectory';

export function BrokerDirectoryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-green-50 to-emerald-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Supported Brokers
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Compare fees across Canada's leading online brokers. Each offers unique features 
              and fee structures to suit different trading styles and experience levels.
            </p>
          </div>
        </section>

        <BrokerDirectory />
      </main>

      <Footer />
    </div>
  );
}