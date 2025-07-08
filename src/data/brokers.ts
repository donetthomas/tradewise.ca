import { Broker } from '../types';

export const brokers: Broker[] = [
  {
    id: 'wealthsimple',
    name: 'Wealthsimple',
    website: 'https://www.wealthsimple.com',
    logo: '/wealth simple.jpeg',
    hasFreeUSDAccount: false,
    supportsTFSA: true,
    supportsRRSP: true,
    supportsFHSA: true,
    beginnerFriendly: true,
    cadFeeStructure: {
      type: 'free',
      fxFeeRate: 0.015, // 1.5% FX fee
    },
    usdFeeStructure: {
      type: 'free',
      fxFeeRate: 0.015, // 1.5% FX fee
    },
  },
  {
    id: 'questrade',
    name: 'Questrade',
    website: 'https://www.questrade.com',
    logo: '/questrade.jpeg',
    hasFreeUSDAccount: true,
    supportsTFSA: true,
    supportsRRSP: true,
    supportsFHSA: true,
    beginnerFriendly: false,
    cadFeeStructure: {
      type: 'free',
      fxFeeRate: 0.015, // 1.5% FX fee
    },
    usdFeeStructure: {
      type: 'free',
      fxFeeRate: 0.015, // 1.5% FX fee
    },
  },
  {
    id: 'ibkr',
    name: 'Interactive Brokers',
    website: 'https://www.interactivebrokers.com',
    logo: '/ibkr.png',
    hasFreeUSDAccount: true,
    supportsTFSA: true,
    supportsRRSP: true,
    supportsFHSA: true,
    beginnerFriendly: false,
    cadFeeStructure: {
      type: 'per_share',
      perShareFee: 0.01,
      minimumFee: 1.00,
      maximumFee: 0.005, // 0.5% of trade value
      fxFeeRate: 0.00002, // 0.002% FX fee
      fxMinimumFee: 2.00,
    },
    usdFeeStructure: {
      type: 'per_share',
      perShareFee: 0.005, // USD 0.005 per share (updated)
      minimumFee: 1.00, // USD 1.00 minimum (updated)
      maximumFee: 0.01, // 1% of trade value cap (updated)
      fxFeeRate: 0.00002, // 0.002% FX fee
      fxMinimumFee: 2.00, // USD 2.00 minimum
    },
  },
  {
    id: 'webull',
    name: 'Webull',
    website: 'https://www.webull.com',
    logo: '/webull.png',
    hasFreeUSDAccount: false,
    supportsTFSA: true,
    supportsRRSP: true,
    supportsFHSA: false,
    beginnerFriendly: false,
    cadFeeStructure: {
      type: 'flat',
      baseFee: 2.99, // USD 2.99 per trade
      fxFeeRate: 0.015, // 1.5% FX fee
    },
    usdFeeStructure: {
      type: 'flat',
      baseFee: 2.99, // USD 2.99 per trade
      fxFeeRate: 0.015, // 1.5% FX fee
    },
  },
  {
    id: 'moomoo',
    name: 'Moomoo',
    website: 'https://www.moomoo.com',
    logo: '/moomoo.png',
    hasFreeUSDAccount: true,
    supportsTFSA: true,
    supportsRRSP: true,
    supportsFHSA: false,
    beginnerFriendly: false,
    cadFeeStructure: {
      type: 'per_share',
      perShareFee: 0.0049, // CAD 0.0049 per share
      minimumFee: 0.49, // CAD 0.49 minimum
      platformFeeRate: 0.01, // CAD 0.01 per share
      platformMinimumFee: 1.00, // CAD 1.00 minimum
      platformMaximumFee: 0.005, // 0.5% of trade value cap
      fxFeeRate: 0.0009, // 0.09% FX fee
      fxMinimumFee: 2.00, // CAD 2.00 minimum
    },
    usdFeeStructure: {
      type: 'per_share',
      perShareFee: 0.0049, // USD 0.0049 per share
      minimumFee: 0.99, // USD 0.99 minimum (updated from 1.99)
      platformFeeRate: 0.005, // USD 0.005 per share
      platformMinimumFee: 1.00, // USD 1.00 minimum
      platformMaximumFee: 0.01, // 1% of trade value cap
      fxFeeRate: 0.0009, // 0.09% FX fee
      fxMinimumFee: 2.00, // USD 2.00 minimum
    },
  },
  {
    id: 'rbc',
    name: 'RBC Direct Investing',
    website: 'https://www.rbcdirectinvesting.com',
    logo: '/rbc.jpeg',
    hasFreeUSDAccount: true,
    supportsTFSA: true,
    supportsRRSP: true,
    supportsFHSA: true,
    beginnerFriendly: true,
    cadFeeStructure: {
      type: 'flat',
      baseFee: 9.95, // CAD 9.95 per trade
      fxFeeRate: 0.015, // 1.5% FX spread
    },
    usdFeeStructure: {
      type: 'flat',
      baseFee: 9.95, // CAD 9.95 per trade
      fxFeeRate: 0.015, // 1.5% FX spread
    },
  },
  {
    id: 'td',
    name: 'TD Direct Investing',
    website: 'https://www.td.com/ca/en/investing',
    logo: '/td.png',
    hasFreeUSDAccount: true,
    supportsTFSA: true,
    supportsRRSP: true,
    supportsFHSA: true,
    beginnerFriendly: true,
    cadFeeStructure: {
      type: 'flat',
      baseFee: 9.99, // CAD 9.99 per trade
      fxFeeRate: 0.015, // 1.5% FX spread
    },
    usdFeeStructure: {
      type: 'flat',
      baseFee: 9.99, // CAD 9.99 per trade
      fxFeeRate: 0.015, // 1.5% FX spread
    },
  },
];