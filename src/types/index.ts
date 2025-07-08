export interface TradeInput {
  shares: number;
  pricePerShare: number;
  currency: 'CAD' | 'USD';
  selectedBrokers: string[];
  stockSymbol?: string;
}

export interface BrokerFee {
  brokerId: string;
  brokerName: string;
  commission: number;
  fxFee: number;
  totalFee: number;
  originalCommission: number;
  originalFxFee: number;
  originalTotalFee: number;
  tradeCurrency: 'CAD' | 'USD';
  hasFreeUSDAccount: boolean;
  website?: string;
  feeBreakdown: {
    baseFee: number;
    perShareFee: number;
    fxFeeAmount: number;
    minimumFee: number;
    maximumFee: number;
  };
}

export interface Broker {
  id: string;
  name: string;
  website?: string;
  logo?: string;
  hasFreeUSDAccount: boolean;
  supportsTFSA: boolean;
  supportsRRSP: boolean;
  supportsFHSA: boolean;
  beginnerFriendly: boolean;
  cadFeeStructure: FeeStructure;
  usdFeeStructure: FeeStructure;
}

export interface FeeStructure {
  type: 'flat' | 'per_share' | 'tiered' | 'free';
  baseFee?: number;
  perShareFee?: number;
  minimumFee?: number;
  maximumFee?: number;
  fxFeeRate?: number;
  fxMinimumFee?: number;
  platformFeeRate?: number;
  platformMinimumFee?: number;
  platformMaximumFee?: number;
}

export interface ExchangeRateResponse {
  success: boolean;
  rates: {
    CAD: number;
  };
  base: string;
  date: string;
}

export interface StockQuoteResponse {
  symbol: string;
  name: string;
  currency: string;
  close: string;
  status: string;
  code?: number;
  message?: string;
}

export interface StockDetails {
  symbol: string;
  name: string;
  price: number;
  previousClose: number;
  change: number;
  changePercent: number;
  currency: 'USD' | 'CAD';
  marketCap?: number;
  industry?: string;
  logo?: string;
  weburl?: string;
  high: number;
  low: number;
  open: number;
}