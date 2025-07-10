import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Users, Target, Shield, Heart } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About TradeWiser
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Empowering Canadian investors with transparent, accurate, and comprehensive 
              broker fee comparisons to make smarter trading decisions.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  TradeWiser was born from a simple frustration: the lack of transparency 
                  around trading fees in Canada. As investors ourselves, we were tired of 
                  hidden costs, confusing fee structures, and the difficulty of comparing 
                  brokers side-by-side.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We believe every Canadian investor deserves access to clear, accurate 
                  information about trading costs. Our mission is to democratize this 
                  information and help investors keep more of their hard-earned returns.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
                <Target className="w-12 h-12 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Why We Built This</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Eliminate hidden fees and surprise costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Provide real-time, accurate fee calculations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Help investors maximize their returns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Make broker comparison simple and transparent</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These principles guide everything we do at TradeWiser
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Transparency</h3>
                <p className="text-gray-600 leading-relaxed">
                  We believe in complete transparency. Our calculations are based on 
                  publicly available information, and we're not affiliated with any brokers.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Accuracy</h3>
                <p className="text-gray-600 leading-relaxed">
                  We strive for the highest accuracy in our fee calculations, using 
                  real-time data and the latest broker fee structures.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Investor-First</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every feature we build is designed with the investor's best interests 
                  in mind, not broker commissions or affiliate payments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Built by Investors, for Investors
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Our team consists of experienced Canadian investors, financial analysts, 
              and software developers who understand the challenges of navigating 
              the Canadian investment landscape.
            </p>
            
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
              <Users className="w-12 h-12 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
              <p className="text-blue-100 leading-relaxed">
                We're committed to keeping TradeWiser free, accurate, and unbiased. 
                We don't accept payments from brokers, and we don't earn commissions 
                from referrals. Our only goal is to help Canadian investors make 
                better financial decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Have Questions or Feedback?
            </h2>
            <p className="text-gray-600 mb-6">
              We'd love to hear from you. Reach out with any questions, suggestions, or feedback.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}