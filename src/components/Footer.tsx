import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Mail, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg shadow-lg">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-bold text-white tracking-wide">
                TradeWiser
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4 max-w-md">
              The most comprehensive tool for comparing Canadian broker fees. 
              Make informed trading decisions with real-time data and transparent fee breakdowns.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Mail className="w-4 h-4" />
              <span>Built for Canadian investors</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/calculator" className="text-gray-400 hover:text-white transition-colors">
                  Fee Calculator
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/brokers" className="text-gray-400 hover:text-white transition-colors">
                  Supported Brokers
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2024 FeeCompare. All rights reserved. Not affiliated with any brokerage firms.
            </div>
            <div className="flex items-center gap-6">
              <div className="text-sm text-gray-400">
                Data provided by Finnhub & Financial Modeling Prep
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}