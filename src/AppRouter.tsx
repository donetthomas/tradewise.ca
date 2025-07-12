import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import App from './App';
import { BlogRouter } from './components/blog/BlogRouter';
import { CalculatorPage } from './components/pages/CalculatorPage';
import { FeaturesPage } from './components/pages/FeaturesPage';
import { BrokerDirectoryPage } from './components/pages/BrokerDirectoryPage';
import { TestimonialsPage } from './components/pages/TestimonialsPage';
import { FAQPage } from './components/pages/FAQPage';
import { AboutPage } from './components/pages/AboutPage';
import { PrivacyPage } from './components/pages/PrivacyPage';
import { TermsPage } from './components/pages/TermsPage';
import { ContactPage } from './components/pages/ContactPage';

function ScrollToTop() {
  const location = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return null;
}

export function AppRouter() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/brokers" element={<BrokerDirectoryPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/blog/*" element={<BlogRouter />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}