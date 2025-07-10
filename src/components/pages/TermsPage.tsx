import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { FileText, AlertTriangle, Scale, Info } from 'lucide-react';

export function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-orange-50 to-amber-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FileText className="w-16 h-16 mx-auto mb-6 text-orange-600" />
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Please read these terms carefully before using TradeWiser.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: January 2024
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              
              {/* Acceptance */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Scale className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Acceptance of Terms</h2>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    By accessing and using TradeWiser ("the Service"), you accept and agree to be bound by 
                    the terms and provision of this agreement. If you do not agree to abide by the above, 
                    please do not use this service.
                  </p>
                </div>
              </div>

              {/* Service Description */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Info className="w-6 h-6 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Service Description</h2>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <p>TradeWiser provides:</p>
                  <ul className="space-y-2 ml-6">
                    <li>• Fee comparison tools for Canadian brokers</li>
                    <li>• Real-time stock price data</li>
                    <li>• Educational content about trading and investing</li>
                    <li>• Market data and analysis tools</li>
                  </ul>
                  <p>
                    Our service is provided for informational and comparison purposes only. 
                    We are not a financial advisor, broker, or investment company.
                  </p>
                </div>
              </div>

              {/* Disclaimers */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Important Disclaimers</h2>
                </div>
                
                <div className="bg-red-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-semibold text-red-900 mb-3">No Financial Advice</h3>
                  <p className="text-red-800">
                    TradeWiser does not provide financial, investment, or trading advice. All information 
                    is for educational and comparison purposes only. You should consult with a qualified 
                    financial advisor before making any investment decisions.
                  </p>
                </div>

                <div className="bg-yellow-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-3">Fee Estimates</h3>
                  <p className="text-yellow-800">
                    Fee calculations are estimates based on publicly available information and may not 
                    reflect actual costs. Actual fees may vary based on account type, trading volume, 
                    promotions, and other factors. Always verify fees directly with your broker.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Market Data</h3>
                  <p className="text-blue-800">
                    Stock prices and market data may be delayed and should not be considered real-time 
                    trading prices. Do not rely on this data for actual trading decisions.
                  </p>
                </div>
              </div>

              {/* User Responsibilities */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">User Responsibilities</h2>
                <div className="space-y-4 text-gray-700">
                  <p>By using TradeWiser, you agree to:</p>
                  <ul className="space-y-2 ml-6">
                    <li>• Use the service for lawful purposes only</li>
                    <li>• Not attempt to disrupt or damage the service</li>
                    <li>• Verify all information independently before making financial decisions</li>
                    <li>• Not hold TradeWiser liable for any trading losses or decisions</li>
                    <li>• Respect intellectual property rights</li>
                    <li>• Provide accurate information when contacting us</li>
                  </ul>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    TradeWiser is provided "as is" without any warranties or guarantees. We are not 
                    responsible for:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li>• Any trading decisions made based on our information</li>
                    <li>• Financial losses resulting from use of our service</li>
                    <li>• Inaccuracies in fee calculations or market data</li>
                    <li>• Service interruptions or technical issues</li>
                    <li>• Third-party content or services</li>
                  </ul>
                </div>
              </div>

              {/* Intellectual Property */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    All content on TradeWiser, including text, graphics, logos, and software, is the 
                    property of TradeWiser or its licensors and is protected by copyright and other 
                    intellectual property laws.
                  </p>
                  <p>
                    You may not reproduce, distribute, or create derivative works from our content 
                    without explicit permission.
                  </p>
                </div>
              </div>

              {/* Changes to Terms */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    We reserve the right to modify these terms at any time. Changes will be posted on 
                    this page with an updated "Last updated" date. Your continued use of the service 
                    after changes constitutes acceptance of the new terms.
                  </p>
                </div>
              </div>

              {/* Governing Law */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    These terms are governed by the laws of Canada. Any disputes will be resolved in 
                    Canadian courts.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-orange-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About These Terms?</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms of Service, please contact us.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}