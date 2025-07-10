import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Shield, Eye, Lock, Database } from 'lucide-react';

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-green-50 to-emerald-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Shield className="w-16 h-16 mx-auto mb-6 text-green-600" />
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
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
              
              {/* Information We Collect */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Database className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Information We Collect</h2>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Information You Provide</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Contact form submissions (name, email, message)</li>
                    <li>• Trading parameters you enter in our calculator</li>
                    <li>• Blog comments (if you choose to comment)</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Information We Automatically Collect</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Basic analytics data (page views, session duration)</li>
                    <li>• Device and browser information</li>
                    <li>• IP address (for security and analytics)</li>
                    <li>• Cookies for website functionality</li>
                  </ul>
                </div>
              </div>

              {/* How We Use Information */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Eye className="w-6 h-6 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">How We Use Your Information</h2>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <p>We use the information we collect to:</p>
                  <ul className="space-y-2 ml-6">
                    <li>• Provide and improve our fee calculation services</li>
                    <li>• Respond to your inquiries and support requests</li>
                    <li>• Analyze website usage to improve user experience</li>
                    <li>• Ensure website security and prevent abuse</li>
                    <li>• Send important updates about our services (if you opt-in)</li>
                  </ul>
                </div>
              </div>

              {/* Data Protection */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Lock className="w-6 h-6 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">How We Protect Your Data</h2>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <p>We implement appropriate security measures to protect your information:</p>
                  <ul className="space-y-2 ml-6">
                    <li>• SSL encryption for all data transmission</li>
                    <li>• Secure hosting infrastructure</li>
                    <li>• Regular security updates and monitoring</li>
                    <li>• Limited access to personal information</li>
                    <li>• No storage of sensitive financial information</li>
                  </ul>
                </div>
              </div>

              {/* Third-Party Services */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
                <div className="space-y-4 text-gray-700">
                  <p>We use the following third-party services:</p>
                  <ul className="space-y-2 ml-6">
                    <li>• <strong>Netlify:</strong> Website hosting and deployment</li>
                    <li>• <strong>Finnhub:</strong> Stock price data (no personal data shared)</li>
                    <li>• <strong>Financial Modeling Prep:</strong> Canadian stock data (no personal data shared)</li>
                    <li>• <strong>ExchangeRate-API:</strong> Currency conversion rates (no personal data shared)</li>
                  </ul>
                  <p>These services may have their own privacy policies, which we encourage you to review.</p>
                </div>
              </div>

              {/* Cookies */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
                <div className="space-y-4 text-gray-700">
                  <p>We use cookies to:</p>
                  <ul className="space-y-2 ml-6">
                    <li>• Remember your preferences and settings</li>
                    <li>• Analyze website traffic and usage patterns</li>
                    <li>• Improve website functionality</li>
                  </ul>
                  <p>You can control cookies through your browser settings. Disabling cookies may affect website functionality.</p>
                </div>
              </div>

              {/* Your Rights */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                <div className="space-y-4 text-gray-700">
                  <p>You have the right to:</p>
                  <ul className="space-y-2 ml-6">
                    <li>• Access the personal information we have about you</li>
                    <li>• Request correction of inaccurate information</li>
                    <li>• Request deletion of your personal information</li>
                    <li>• Opt-out of communications</li>
                    <li>• File a complaint with relevant authorities</li>
                  </ul>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-blue-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Privacy?</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy or how we handle your information, 
                  please contact us.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
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