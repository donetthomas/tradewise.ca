import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { FAQItem } from '../FAQItem';
import { faqs, faqCategories } from '../../data/faqs';
import { HelpCircle } from 'lucide-react';

export function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-orange-50 to-amber-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <HelpCircle className="w-16 h-16 mx-auto mb-6 text-orange-600" />
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Get answers to common questions about broker fees, trading costs, and how our calculator works.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
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
      </main>

      <Footer />
    </div>
  );
}