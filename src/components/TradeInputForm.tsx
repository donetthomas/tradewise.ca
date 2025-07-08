import React, { useState, useEffect } from 'react';
import { Calculator, DollarSign, TrendingUp, Search, CheckCircle, AlertCircle } from 'lucide-react';
import { TradeInput, StockDetails } from '../types';
import { brokers } from '../data/brokers';
import { fetchStockPrice, fetchStockDetails } from '../utils/stockPriceFetcher';

interface TradeInputFormProps {
  onSubmit: (input: TradeInput) => void;
  isLoading: boolean;
  exchangeRate: number;
  onInputChange: () => void;
}

export function TradeInputForm({ onSubmit, isLoading, exchangeRate, onInputChange }: TradeInputFormProps) {
  // Separate shares state for US and CAD stocks
  const [usShares, setUsShares] = useState<string>('1');
  const [cadShares, setCadShares] = useState<string>('1');
  const [pricePerShare, setPricePerShare] = useState<string>('');
  const [stockSymbol, setStockSymbol] = useState<string>('');
  const [selectedStockType, setSelectedStockType] = useState<'US' | 'CAD'>('US');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [stockPriceError, setStockPriceError] = useState<string | null>(null);
  const [isFetchingPrice, setIsFetchingPrice] = useState(false);
  const [priceFetched, setPriceFetched] = useState(false);
  const [stockName, setStockName] = useState<string>('');
  const [totalCostCAD, setTotalCostCAD] = useState<number>(0);
  const [totalCostUSD, setTotalCostUSD] = useState<number>(0);

  // Get current shares based on selected stock type
  const getCurrentShares = () => selectedStockType === 'US' ? usShares : cadShares;
  
  // Determine currency based on stock type
  const currency = selectedStockType === 'US' ? 'USD' : 'CAD';

  // Calculate total costs whenever relevant values change
  useEffect(() => {
    const currentShares = selectedStockType === 'US' ? usShares : cadShares;
    const sharesNum = parseInt(currentShares) || 0;
    const priceNum = parseFloat(pricePerShare) || 0;
    
    if (sharesNum > 0 && priceNum > 0) {
      if (selectedStockType === 'US') {
        // Price is in USD
        const totalUSD = sharesNum * priceNum;
        const totalCAD = totalUSD * exchangeRate;
        setTotalCostUSD(totalUSD);
        setTotalCostCAD(totalCAD);
      } else {
        // Price is in CAD
        const totalCAD = sharesNum * priceNum;
        const totalUSD = totalCAD / exchangeRate;
        setTotalCostCAD(totalCAD);
        setTotalCostUSD(totalUSD);
      }
    } else {
      setTotalCostCAD(0);
      setTotalCostUSD(0);
    }
  }, [usShares, cadShares, pricePerShare, selectedStockType, exchangeRate]);

  const validateInputs = () => {
    const newErrors: Record<string, string> = {};

    const currentShares = getCurrentShares();
    const sharesNum = parseInt(currentShares);
    if (!currentShares || isNaN(sharesNum) || sharesNum <= 0) {
      newErrors.shares = 'Please enter a valid number of shares';
    }

    const priceNum = parseFloat(pricePerShare);
    if (!pricePerShare || isNaN(priceNum) || priceNum <= 0) {
      newErrors.pricePerShare = 'Please enter a valid price per share';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFetchPrice = async () => {
    if (!stockSymbol.trim()) {
      setStockPriceError('Please enter a stock symbol');
      return;
    }

    setIsFetchingPrice(true);
    setStockPriceError(null);
    setPriceFetched(false);
    setStockName('');

    try {
      // Fetch for both US and CAD stocks
      const stockDetails = await fetchStockDetails(stockSymbol, selectedStockType);
      
      setPricePerShare(stockDetails.price.toFixed(2));
      setPriceFetched(true);
      setStockPriceError(null);
      setStockName(stockDetails.name);
    } catch (error) {
      setStockPriceError(error instanceof Error ? error.message : `Failed to fetch ${selectedStockType} stock data`);
      setPriceFetched(false);
      setStockName('');
    } finally {
      setIsFetchingPrice(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateInputs()) {
      return;
    }

    // Always compare all brokers
    const allBrokerIds = brokers.map(b => b.id);

    const currentShares = getCurrentShares();
    onSubmit({
      shares: parseInt(currentShares),
      pricePerShare: parseFloat(pricePerShare),
      currency: currency as 'CAD' | 'USD',
      selectedBrokers: allBrokerIds,
      stockSymbol: stockSymbol.trim() || undefined,
    });
  };

  const handlePriceChange = (value: string) => {
    setPricePerShare(value);
    // Clear price-related errors when user starts typing
    if (errors.pricePerShare) {
      setErrors(prev => ({ ...prev, pricePerShare: '' }));
    }
    if (priceFetched) {
      setPriceFetched(false);
      setStockName('');
    }
    onInputChange(); // Clear results when price changes
  };

  const handleSymbolChange = (value: string) => {
    setStockSymbol(value.toUpperCase());
    // Clear symbol-related errors when user starts typing
    if (stockPriceError) {
      setStockPriceError(null);
    }
    if (priceFetched) {
      setPriceFetched(false);
      setStockName('');
    }
    onInputChange(); // Clear results when symbol changes
  };

  const handleSharesChange = (value: string) => {
    // Update the appropriate shares state based on current stock type
    if (selectedStockType === 'US') {
      setUsShares(value);
    } else {
      setCadShares(value);
    }
    
    // Clear shares-related errors when user starts typing
    if (errors.shares) {
      setErrors(prev => ({ ...prev, shares: '' }));
    }
    onInputChange(); // Clear results when shares change
  };

  const handleStockTypeChange = (type: 'US' | 'CAD') => {
    // Reset quantity for the current stock type before switching
    if (selectedStockType === 'US') {
      setUsShares('1');
    } else {
      setCadShares('1');
    }
    
    setSelectedStockType(type);
    // Reset relevant fields when switching stock type
    setStockSymbol('');
    setPricePerShare('');
    setPriceFetched(false);
    setStockPriceError(null);
    setStockName('');
    onInputChange(); // Clear results when stock type changes
  };

  const getStockPricePlaceholder = () => {
    return selectedStockType === 'US' ? '0.00 USD' : '0.00 CAD';
  };

  const getStockSymbolPlaceholder = () => {
    return selectedStockType === 'US' ? 'AAPL' : 'SHOP.TO';
  };

  const formatTotalCost = (amount: number, currencyType: 'CAD' | 'USD') => {
    const symbol = currencyType === 'USD' ? 'US$' : 'C$';
    const formattedAmount = amount.toLocaleString('en-CA', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return `${symbol}${formattedAmount}`;
  };

  const showTotalCost = totalCostCAD > 0 || totalCostUSD > 0;

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
      <form onSubmit={handleSubmit} className="p-4 sm:p-8">
        {/* Stock Type Selection */}
        <div className="bg-blue-50 rounded-2xl p-4 sm:p-6 border border-blue-200 mb-6 sm:mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-semibold text-blue-900 text-sm sm:text-base">Choose Stock Type</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <label className={`flex-1 flex items-center justify-center gap-3 p-3 sm:p-4 rounded-xl cursor-pointer transition-all duration-200 ease-in-out border-2 ${
              selectedStockType === 'US' 
                ? 'bg-blue-600 text-white border-blue-600 shadow-md' 
                : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
            }`}>
              <input
                type="radio"
                name="stockType"
                value="US"
                checked={selectedStockType === 'US'}
                onChange={(e) => handleStockTypeChange(e.target.value as 'US' | 'CAD')}
                className="sr-only"
                disabled={isLoading}
              />
              <span className="text-sm sm:text-base font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded">USD</span>
              <span className="text-sm sm:text-base font-medium text-center">
                US Stock/ETF
              </span>
            </label>
            <label className={`flex-1 flex items-center justify-center gap-3 p-3 sm:p-4 rounded-xl cursor-pointer transition-all duration-200 ease-in-out border-2 ${
              selectedStockType === 'CAD' 
                ? 'bg-blue-600 text-white border-blue-600 shadow-md' 
                : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
            }`}>
              <input
                type="radio"
                name="stockType"
                value="CAD"
                checked={selectedStockType === 'CAD'}
                onChange={(e) => handleStockTypeChange(e.target.value as 'US' | 'CAD')}
                className="sr-only"
                disabled={isLoading}
              />
              <span className="text-sm sm:text-base font-bold text-red-600 bg-red-100 px-2 py-1 rounded">CAD</span>
              <span className="text-sm sm:text-base font-medium text-center">
                Canadian Stock/ETF
              </span>
            </label>
          </div>
        </div>

        {/* Input Grid */}
        <div className="grid gap-6 sm:gap-8 mb-6 sm:mb-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* Column 1: Stock Symbol */}
          <div className="space-y-3">
            <label htmlFor="stockSymbol" className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              Stock symbol (optional)
            </label>
            <div className="relative">
              <input
                type="text"
                id="stockSymbol"
                value={stockSymbol}
                onChange={(e) => handleSymbolChange(e.target.value)}
                className={`w-full px-4 sm:px-6 py-3 sm:py-4 text-xl sm:text-2xl font-bold border-2 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50 ${
                  errors.stockSymbol ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                }`}
                placeholder={getStockSymbolPlaceholder()}
                disabled={isLoading || isFetchingPrice}
              />
            </div>
            {errors.stockSymbol && <p className="text-sm text-red-600 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.stockSymbol}
            </p>}
            
            {/* Stock Name Display - Moved here under the symbol input */}
            {stockName && (
              <div className="text-sm text-gray-600 font-medium bg-gray-50 p-3 rounded-lg border border-gray-200">
                {stockName}
              </div>
            )}
          </div>

          {/* Column 2: Stock Price with Load Market Price Button */}
          <div className="space-y-3">
            <label htmlFor="pricePerShare" className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              Stock price ({currency})
            </label>
            <div className="relative">
              <input
                type="number"
                id="pricePerShare"
                value={pricePerShare}
                onChange={(e) => handlePriceChange(e.target.value)}
                className={`w-full px-4 sm:px-6 py-3 sm:py-4 text-xl sm:text-2xl font-bold border-2 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50 ${
                  errors.pricePerShare ? 'border-red-500 bg-red-50' : 
                  priceFetched ? 'border-green-300 bg-green-50' : 'border-gray-200 hover:border-gray-300'
                } ${stockSymbol.trim() ? 'pr-20 sm:pr-28' : ''}`}
                placeholder={getStockPricePlaceholder()}
                step="0.01"
                min="0.01"
                disabled={isLoading}
              />
              {/* Load Market Price Button - For both US and CAD stocks with symbol */}
              {stockSymbol.trim() && (
                <button
                  type="button"
                  onClick={handleFetchPrice}
                  disabled={isFetchingPrice || !stockSymbol.trim()}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-2 sm:px-3 py-1 sm:py-2 bg-blue-600 text-white text-xs sm:text-sm rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium"
                >
                  {isFetchingPrice ? 'Loading...' : 'Load market price'}
                </button>
              )}
            </div>
            
            {/* Live quote fetched status */}
            {stockPriceError && (
              <div className="flex items-center gap-2 text-red-600">
                <AlertCircle className="w-4 h-4" />
                <p className="text-sm">{stockPriceError}</p>
              </div>
            )}
            {priceFetched && !stockPriceError && (
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-4 h-4" />
                <p className="text-sm">Live quote fetched</p>
              </div>
            )}
            
            {errors.pricePerShare && <p className="text-sm text-red-600 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.pricePerShare}
            </p>}
          </div>

          {/* Column 3: Quantity with Total Cost */}
          <div className="space-y-3">
            <label htmlFor="shares" className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              Quantity
            </label>
            <div className="relative">
              <input
                type="number"
                id="shares"
                value={getCurrentShares()}
                onChange={(e) => handleSharesChange(e.target.value)}
                className={`w-full px-4 sm:px-6 py-3 sm:py-4 text-xl sm:text-2xl font-bold border-2 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50 ${
                  errors.shares ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                }`}
                placeholder="1"
                min="1"
                disabled={isLoading}
              />
            </div>
            {errors.shares && <p className="text-sm text-red-600 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.shares}
            </p>}
            
            {/* Total Cost Display - Small format */}
            {showTotalCost && (
              <div className="mt-3">
                {selectedStockType === 'CAD' ? (
                  // Only show CAD for Canadian stocks
                  <div className="text-xs text-gray-600">
                    Total = {formatTotalCost(totalCostCAD, 'CAD')}
                  </div>
                ) : (
                  // Show both for US stocks in one line
                  <div className="text-xs text-gray-600">
                    Total = {formatTotalCost(totalCostCAD, 'CAD')} / {formatTotalCost(totalCostUSD, 'USD')}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Submit Button - Centered */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isLoading || isFetchingPrice}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 sm:py-5 px-8 sm:px-12 rounded-2xl font-bold text-lg sm:text-xl hover:from-blue-700 hover:to-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl w-full sm:w-auto max-w-sm"
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Calculating...
              </div>
            ) : (
              'CALCULATE'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}