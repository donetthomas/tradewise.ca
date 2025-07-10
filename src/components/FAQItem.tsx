import React from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
}

export function FAQItem({ question, answer, isOpen = false }: FAQItemProps) {
  return (
    <details className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200" open={isOpen}>
      <summary className="flex items-center justify-between p-4 sm:p-6 cursor-pointer list-none">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-4">{question}</h3>
        <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-200 group-open:rotate-180 flex-shrink-0" />
      </summary>
      <div className="px-4 sm:px-6 pb-4 sm:pb-6">
        <div className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line">
          {answer}
        </div>
      </div>
    </details>
  );
}