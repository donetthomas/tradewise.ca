import { Broker, BrokerFee, TradeInput } from '../types';

export function calculateBrokerFees(
  broker: Broker,
  input: TradeInput,
  exchangeRate: number
): BrokerFee {
  const { shares, pricePerShare, currency } = input;
  const tradeValue = shares * pricePerShare;
  
  // Use appropriate fee structure based on stock currency
  const feeStructure = currency === 'CAD' ? broker.cadFeeStructure : broker.usdFeeStructure;
  
  let commissionInTradeCurrency = 0;
  let fxFeeInTradeCurrency = 0;
  let commission = 0;
  let fxFee = 0;
  
  // Calculate commission based on fee structure type (in trade currency)
  switch (feeStructure.type) {
    case 'free':
      commissionInTradeCurrency = 0;
      break;
      
    case 'flat':
      commissionInTradeCurrency = feeStructure.baseFee || 0;
      break;
      
    case 'per_share':
      commissionInTradeCurrency = shares * (feeStructure.perShareFee || 0);
      
      // Apply minimum fee
      if (feeStructure.minimumFee && commissionInTradeCurrency < feeStructure.minimumFee) {
        commissionInTradeCurrency = feeStructure.minimumFee;
      }
      
      // Apply maximum fee (as percentage of trade value)
      if (feeStructure.maximumFee) {
        const maxFee = tradeValue * feeStructure.maximumFee;
        if (commissionInTradeCurrency > maxFee) {
          commissionInTradeCurrency = maxFee;
        }
      }
      
      // Add platform fee for Moomoo
      if (broker.id === 'moomoo' && feeStructure.platformFeeRate) {
        let platformFee = shares * feeStructure.platformFeeRate;
        
        // Apply platform minimum fee
        if (feeStructure.platformMinimumFee && platformFee < feeStructure.platformMinimumFee) {
          platformFee = feeStructure.platformMinimumFee;
        }
        
        // Apply platform maximum fee (as percentage of trade value)
        if (feeStructure.platformMaximumFee) {
          const maxPlatformFee = tradeValue * feeStructure.platformMaximumFee;
          if (platformFee > maxPlatformFee) {
            platformFee = maxPlatformFee;
          }
        }
        
        commissionInTradeCurrency += platformFee;
      }
      break;
      
    case 'tiered':
      // IBKR tiered structure (legacy - should not be used anymore)
      commissionInTradeCurrency = shares * (feeStructure.perShareFee || 0);
      
      if (feeStructure.minimumFee && commissionInTradeCurrency < feeStructure.minimumFee) {
        commissionInTradeCurrency = feeStructure.minimumFee;
      }
      break;
  }
  
  // Calculate FX fee - only applies when trading in different currency than account base
  if (feeStructure.fxFeeRate && currency !== 'CAD') {
    if (currency === 'USD') {
      if (broker.id === 'moomoo') {
        // Moomoo: 0.09% of conversion amount PLUS $2 USD per transaction
        const percentageFeeUSD = tradeValue * feeStructure.fxFeeRate;
        const fixedFeeUSD = feeStructure.fxMinimumFee || 0;
        fxFeeInTradeCurrency = percentageFeeUSD + fixedFeeUSD;
      } else {
        // Other brokers: calculate FX fee in USD first
        const fxFeeUSD = tradeValue * feeStructure.fxFeeRate;
        const minimumFxFeeUSD = feeStructure.fxMinimumFee || 0;
        
        // Apply "whichever is higher" rule in USD
        fxFeeInTradeCurrency = Math.max(fxFeeUSD, minimumFxFeeUSD);
      }
    } else {
      // For other currencies (if any), calculate directly in CAD
      fxFeeInTradeCurrency = tradeValue * feeStructure.fxFeeRate;
      
      if (feeStructure.fxMinimumFee) {
        const minFxFee = feeStructure.fxMinimumFee;
        if (fxFeeInTradeCurrency < minFxFee) {
          fxFeeInTradeCurrency = minFxFee;
        }
      }
    }
  }
  
  // Convert fees to CAD for default display
  if (currency === 'USD') {
    commission = commissionInTradeCurrency * exchangeRate;
    fxFee = fxFeeInTradeCurrency * exchangeRate;
  } else {
    commission = commissionInTradeCurrency;
    fxFee = fxFeeInTradeCurrency;
  }
  
  const totalFee = commission + fxFee;
  const originalTotalFee = commissionInTradeCurrency + fxFeeInTradeCurrency;
  
  return {
    brokerId: broker.id,
    brokerName: broker.name,
    commission,
    fxFee,
    totalFee,
    originalCommission: commissionInTradeCurrency,
    originalFxFee: fxFeeInTradeCurrency,
    originalTotalFee,
    tradeCurrency: currency,
    hasFreeUSDAccount: broker.hasFreeUSDAccount,
    website: broker.website,
    feeBreakdown: {
      baseFee: feeStructure.baseFee || 0,
      perShareFee: feeStructure.perShareFee || 0,
      fxFeeAmount: fxFee,
      minimumFee: feeStructure.minimumFee || 0,
      maximumFee: feeStructure.maximumFee || 0,
    },
  };
}