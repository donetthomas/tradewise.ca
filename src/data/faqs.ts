export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'fees' | 'technical' | 'brokers';
}

export const faqs: FAQ[] = [
  {
    id: 'accuracy',
    category: 'general',
    question: 'How accurate are the fee calculations?',
    answer: 'Our fee calculations are estimates based on publicly available information from each broker. While we strive for accuracy, actual fees may vary based on your account type, trading volume, specific promotions, and market conditions. Always verify fees directly with your broker before trading.'
  },
  {
    id: 'fx-fee',
    category: 'fees',
    question: 'What is an FX fee?',
    answer: 'An FX (Foreign Exchange) fee is a charge applied when you trade a stock in a currency different from your account\'s base currency. For example, if you have a CAD account and buy a US stock, your broker will convert your CAD to USD, and an FX fee will be applied to this currency conversion.'
  },
  {
    id: 'commission-free',
    category: 'fees',
    question: 'Why are some brokers "commission-free" but still have fees?',
    answer: '"Commission-free" typically refers to the absence of a per-trade commission. However, brokers may still charge other fees, such as foreign exchange (FX) fees, platform fees, or regulatory fees. Our calculator aims to provide a comprehensive total fee estimate.'
  },
  {
    id: 'data-updates',
    category: 'technical',
    question: 'How often is the stock data and exchange rate updated?',
    answer: 'Stock prices are fetched in real-time from Finnhub (for US stocks) and Financial Modeling Prep (for Canadian stocks) when you use the "Load market price" feature. Exchange rates are updated regularly from ExchangeRate-API to provide current conversion values.'
  },
  {
    id: 'asset-types',
    category: 'general',
    question: 'Can I compare brokers for options or mutual funds?',
    answer: 'Currently, this calculator is designed for comparing fees for stock and ETF trades only. We may expand to other asset classes in the future.'
  },
  {
    id: 'usd-account',
    category: 'brokers',
    question: 'What does "Free USD Account" mean?',
    answer: 'A "Free USD Account" means the broker allows you to hold USD directly in your account without automatically converting it to CAD. This can help you avoid repeated FX fees when trading US-denominated assets.'
  },
  {
    id: 'minimum-fees',
    category: 'fees',
    question: 'What are minimum and maximum fees?',
    answer: 'Minimum fees are the lowest amount you\'ll pay for a trade, even if the calculated commission is lower. Maximum fees cap your commission at a certain percentage of your trade value. For example, Interactive Brokers has a $1 minimum fee and caps fees at a percentage of trade value.'
  },
  {
    id: 'account-types',
    category: 'brokers',
    question: 'What are TFSA, RRSP, and FHSA accounts?',
    answer: 'TFSA (Tax-Free Savings Account): Investment gains are tax-free\nRRSP (Registered Retirement Savings Plan): Tax-deferred retirement savings\nFHSA (First Home Savings Account): Tax-free savings for first-time home buyers\n\nNot all brokers support all account types, which is why we indicate this in our comparison.'
  },
  {
    id: 'beginner-friendly',
    category: 'brokers',
    question: 'What makes a broker "beginner friendly"?',
    answer: 'Beginner-friendly brokers typically offer intuitive interfaces, educational resources, simplified account setup, and customer support designed for new investors. They may also have lower minimum deposits and clearer fee structures.'
  },
  {
    id: 'canadian-stocks',
    category: 'technical',
    question: 'How do I enter Canadian stock symbols?',
    answer: 'For Canadian stocks, use the full symbol including the exchange suffix:\n• Toronto Stock Exchange: Add ".TO" (e.g., SHOP.TO)\n• TSX Venture: Add ".V" (e.g., ABC.V)\n• Canadian Securities Exchange: Add ".CN" (e.g., XYZ.CN)'
  },
  {
    id: 'platform-fees',
    category: 'fees',
    question: 'What are platform fees?',
    answer: 'Platform fees are additional charges some brokers (like Moomoo) apply on top of trading commissions. These fees help cover the cost of providing trading platforms, market data, and other services. They\'re typically calculated per share or as a percentage of trade value.'
  },
  {
    id: 'currency-display',
    category: 'technical',
    question: 'Why can I switch between CAD and USD display for US stocks?',
    answer: 'When trading US stocks, you can view fees in either currency for easier comparison. The calculator shows fees in CAD by default (converted using current exchange rates), but you can toggle to see the original USD amounts to better understand what you\'ll actually pay.'
  }
];

export const faqCategories = {
  general: 'General Questions',
  fees: 'Fees & Costs',
  technical: 'Technical Questions',
  brokers: 'About Brokers'
} as const;