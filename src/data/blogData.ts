import { BlogPost, BlogCategory, BlogTag, BlogTemplate } from '../types/blog';

export const blogCategories: BlogCategory[] = [
  {
    id: 'trading-basics',
    name: 'Trading Basics',
    slug: 'trading-basics',
    description: 'Essential knowledge for new traders and investors',
    color: 'blue',
    postCount: 8
  },
  {
    id: 'broker-reviews',
    name: 'Broker Reviews',
    slug: 'broker-reviews',
    description: 'In-depth reviews and comparisons of Canadian brokers',
    color: 'green',
    postCount: 12
  },
  {
    id: 'fee-analysis',
    name: 'Fee Analysis',
    slug: 'fee-analysis',
    description: 'Understanding and minimizing trading costs',
    color: 'purple',
    postCount: 6
  },
  {
    id: 'market-insights',
    name: 'Market Insights',
    slug: 'market-insights',
    description: 'Market trends and investment strategies',
    color: 'orange',
    postCount: 10
  },
  {
    id: 'tools-guides',
    name: 'Tools & Guides',
    slug: 'tools-guides',
    description: 'How-to guides and tool recommendations',
    color: 'teal',
    postCount: 5
  }
];

export const blogTags: BlogTag[] = [
  { id: 'wealthsimple', name: 'Wealthsimple', slug: 'wealthsimple', postCount: 8 },
  { id: 'questrade', name: 'Questrade', slug: 'questrade', postCount: 6 },
  { id: 'interactive-brokers', name: 'Interactive Brokers', slug: 'interactive-brokers', postCount: 4 },
  { id: 'fx-fees', name: 'FX Fees', slug: 'fx-fees', postCount: 12 },
  { id: 'commission-free', name: 'Commission Free', slug: 'commission-free', postCount: 7 },
  { id: 'tfsa', name: 'TFSA', slug: 'tfsa', postCount: 9 },
  { id: 'rrsp', name: 'RRSP', slug: 'rrsp', postCount: 5 },
  { id: 'etf', name: 'ETF', slug: 'etf', postCount: 11 },
  { id: 'dividend-investing', name: 'Dividend Investing', slug: 'dividend-investing', postCount: 6 },
  { id: 'day-trading', name: 'Day Trading', slug: 'day-trading', postCount: 4 }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Complete Guide to Canadian Broker Fees in 2024',
    slug: 'complete-guide-canadian-broker-fees-2024',
    excerpt: 'Everything you need to know about trading fees, commissions, and hidden costs when choosing a Canadian broker.',
    content: `# The Complete Guide to Canadian Broker Fees in 2024

Trading fees can significantly impact your investment returns, especially if you're an active trader. Understanding the fee structure of different Canadian brokers is crucial for making informed decisions about where to invest your money.

## Types of Trading Fees

### 1. Commission Fees
Commission fees are charged per trade and vary significantly between brokers. Some brokers offer commission-free trading for certain assets, while others charge a flat fee or a per-share fee.

### 2. Foreign Exchange (FX) Fees
When you trade stocks in a different currency than your account's base currency, you'll typically pay an FX fee. This is usually a percentage of the transaction amount.

### 3. Platform Fees
Some brokers charge additional platform fees for access to advanced trading tools, real-time data, or premium features.

### 4. Account Maintenance Fees
While less common with online brokers, some may charge monthly or annual account maintenance fees, especially for accounts below a certain balance.

## How to Minimize Trading Fees

1. **Choose the right broker for your trading style**
2. **Consider commission-free options for long-term investing**
3. **Use USD accounts for frequent US stock trading**
4. **Bundle trades to reduce per-transaction costs**
5. **Take advantage of promotional offers**

## Conclusion

Understanding broker fees is essential for maximizing your investment returns. Use our fee calculator to compare costs across different brokers and find the best option for your trading needs.`,
    author: {
      name: 'Sarah Johnson',
      avatar: '👩‍💼',
      bio: 'Financial analyst with 10+ years of experience in Canadian markets'
    },
    publishedAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
    readingTime: 8,
    featured: true,
    published: true,
    categories: ['trading-basics', 'fee-analysis'],
    tags: ['fx-fees', 'commission-free', 'tfsa'],
    seoTitle: 'Complete Guide to Canadian Broker Fees 2024 | FeeCompare',
    seoDescription: 'Learn about trading fees, commissions, and hidden costs when choosing a Canadian broker. Compare fees and save money on your trades.',
    featuredImage: '/blog/broker-fees-guide.jpg',
    views: 2847
  },
  {
    id: '2',
    title: 'Wealthsimple vs Questrade: Which is Better for Canadian Investors?',
    slug: 'wealthsimple-vs-questrade-comparison',
    excerpt: 'A detailed comparison of two popular Canadian brokers, examining fees, features, and which one suits different investor types.',
    content: `# Wealthsimple vs Questrade: Which is Better for Canadian Investors?

Choosing between Wealthsimple and Questrade is one of the most common dilemmas for Canadian investors. Both platforms offer unique advantages, but which one is right for you?

## Wealthsimple Overview

Wealthsimple Trade offers commission-free trading for Canadian stocks and ETFs, making it an attractive option for beginners and long-term investors.

### Pros:
- Commission-free Canadian trades
- User-friendly interface
- No minimum balance
- Strong mobile app

### Cons:
- 1.5% FX fee on US stocks
- Limited research tools
- No options trading

## Questrade Overview

Questrade is known for its low-cost ETF purchases and comprehensive trading platform suitable for more experienced investors.

### Pros:
- Free ETF purchases
- Advanced trading tools
- Multiple account types
- Lower FX fees with USD account

### Cons:
- Commission fees for stock trades
- More complex interface
- Higher minimum balance for some features

## Who Should Choose What?

**Choose Wealthsimple if:**
- You're a beginner investor
- You primarily trade Canadian stocks
- You prefer simplicity over advanced features
- You make infrequent trades

**Choose Questrade if:**
- You're an experienced trader
- You frequently trade ETFs
- You need advanced research tools
- You trade US stocks regularly

## Conclusion

Both brokers have their strengths. Use our fee calculator to see which one would cost you less based on your specific trading patterns.`,
    author: {
      name: 'Michael Chen',
      avatar: '👨‍💻',
      bio: 'Investment advisor and fintech enthusiast'
    },
    publishedAt: '2024-01-10T14:30:00Z',
    updatedAt: '2024-01-10T14:30:00Z',
    readingTime: 6,
    featured: true,
    published: true,
    categories: ['broker-reviews'],
    tags: ['wealthsimple', 'questrade', 'commission-free'],
    seoTitle: 'Wealthsimple vs Questrade 2024 Comparison | FeeCompare',
    seoDescription: 'Compare Wealthsimple and Questrade fees, features, and benefits. Find out which Canadian broker is better for your investment needs.',
    featuredImage: '/blog/wealthsimple-vs-questrade.jpg',
    views: 1923
  },
  {
    id: '3',
    title: 'How to Avoid FX Fees When Trading US Stocks',
    slug: 'avoid-fx-fees-trading-us-stocks',
    excerpt: 'Learn practical strategies to minimize or eliminate foreign exchange fees when investing in US markets from Canada.',
    content: `# How to Avoid FX Fees When Trading US Stocks

Foreign exchange fees can eat into your returns when trading US stocks from a Canadian account. Here's how to minimize these costs.

## Understanding FX Fees

FX fees are charged when your broker converts CAD to USD (or vice versa) for your trades. These fees typically range from 0.5% to 2.5% of the transaction amount.

## Strategies to Reduce FX Fees

### 1. Use a USD Account
Many brokers offer USD accounts that allow you to hold US dollars directly, avoiding conversion fees on each trade.

### 2. Currency Conversion Services
Some brokers offer discounted currency conversion services like Norbert's Gambit.

### 3. Choose Low-FX-Fee Brokers
Interactive Brokers charges only 0.002% for FX conversions, significantly lower than most competitors.

### 4. Bundle Your Conversions
Instead of converting small amounts frequently, convert larger amounts less often.

## Broker Comparison for FX Fees

- **Interactive Brokers**: 0.002% + $2 minimum
- **Questrade**: 1.25-2% depending on amount
- **Wealthsimple**: 1.5% flat rate
- **TD Direct**: 1.5% spread

## Conclusion

With the right strategy and broker choice, you can significantly reduce FX fees and keep more of your investment returns.`,
    author: {
      name: 'Jennifer Park',
      avatar: '👩‍🎓',
      bio: 'CFA charterholder and investment strategist'
    },
    publishedAt: '2024-01-05T09:15:00Z',
    updatedAt: '2024-01-05T09:15:00Z',
    readingTime: 5,
    featured: false,
    published: true,
    categories: ['fee-analysis', 'tools-guides'],
    tags: ['fx-fees', 'interactive-brokers', 'questrade'],
    seoTitle: 'How to Avoid FX Fees Trading US Stocks | FeeCompare',
    seoDescription: 'Learn strategies to minimize foreign exchange fees when trading US stocks from Canada. Save money on currency conversion costs.',
    featuredImage: '/blog/avoid-fx-fees.jpg',
    views: 1456
  }
];

export const blogTemplates: BlogTemplate[] = [
  {
    id: 'broker-review',
    name: 'Broker Review',
    description: 'Template for comprehensive broker reviews',
    category: 'broker-reviews',
    content: `# [Broker Name] Review 2024: Fees, Features, and Verdict

## Overview
Brief introduction to the broker and what makes them unique.

## Key Features
- Feature 1
- Feature 2
- Feature 3

## Fee Structure
### Commission Fees
Details about trading commissions

### FX Fees
Information about foreign exchange fees

### Other Fees
Any additional fees to be aware of

## Pros and Cons
### Pros
- Advantage 1
- Advantage 2

### Cons
- Disadvantage 1
- Disadvantage 2

## Who Should Use This Broker?
Target audience and use cases

## Conclusion
Final verdict and recommendation`
  },
  {
    id: 'fee-analysis',
    name: 'Fee Analysis',
    description: 'Template for analyzing trading fees and costs',
    category: 'fee-analysis',
    content: `# Understanding [Fee Type]: A Complete Guide

## What is [Fee Type]?
Definition and explanation of the fee

## How is it Calculated?
Detailed breakdown of fee calculation

## Comparison Across Brokers
Table or list comparing fees across different brokers

## Impact on Returns
Examples showing how fees affect investment returns

## How to Minimize This Fee
Practical strategies for reducing costs

## Conclusion
Summary and key takeaways`
  },
  {
    id: 'trading-guide',
    name: 'Trading Guide',
    description: 'Template for educational trading content',
    category: 'trading-basics',
    content: `# [Topic] Guide for Canadian Investors

## Introduction
Why this topic matters for Canadian investors

## The Basics
Fundamental concepts explained simply

## Step-by-Step Process
1. Step 1
2. Step 2
3. Step 3

## Common Mistakes to Avoid
- Mistake 1
- Mistake 2
- Mistake 3

## Advanced Tips
For more experienced investors

## Tools and Resources
Helpful tools and further reading

## Conclusion
Key takeaways and next steps`
  }
];