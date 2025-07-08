import React, { useState } from 'react';
import { ArrowUpDown, CheckCircle, XCircle, ExternalLink, DollarSign } from 'lucide-react';
import { BrokerFee } from '../types';
import { brokers } from '../data/brokers';

interface BrokerComparisonTableProps {
  brokerFees: BrokerFee[];
  exchangeRate: number;
  tradeInputCurrency: 'CAD' | 'USD' | null;
}

type SortField = 'totalFee' | 'commission' | 'fxFee' | 'brokerName';
type SortDirection = 'asc' | 'desc';

export function BrokerComparisonTable({ 
  brokerFees, 
  exchangeRate, 
  tradeInputCurrency 
}: BrokerComparisonTableProps) {
  const [sortField, setSortField] = useState<SortField>('totalFee');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [displayCurrency, setDisplayCurrency] = useState<'CAD' | 'USD'>('CAD');

  const toggleDisplayCurrency = () => {
    setDisplayCurrency(displayCurrency === 'CAD' ? 'USD' : 'CAD');
  };

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const field = e.target.value as SortField;
    handleSort(field);
  };

  const getDisplayValue = (broker: BrokerFee, field: 'commission' | 'fxFee' | 'totalFee') => {
    if (displayCurrency === 'USD' && tradeInputCurrency === 'USD') {
      switch (field) {
        case 'commission':
          return broker.originalCommission;
        case 'fxFee':
          return broker.originalFxFee;
        case 'totalFee':
          return broker.originalTotalFee;
      }
    }
    return broker[field];
  };

  const sortedFees = [...brokerFees].sort((a, b) => {
    let aValue: number | string;
    let bValue: number | string;

    switch (sortField) {
      case 'totalFee':
        aValue = getDisplayValue(a, 'totalFee');
        bValue = getDisplayValue(b, 'totalFee');
        break;
      case 'commission':
        aValue = getDisplayValue(a, 'commission');
        bValue = getDisplayValue(b, 'commission');
        break;
      case 'fxFee':
        aValue = getDisplayValue(a, 'fxFee');
        bValue = getDisplayValue(b, 'fxFee');
        break;
      case 'brokerName':
        aValue = a.brokerName;
        bValue = b.brokerName;
        break;
      default:
        aValue = getDisplayValue(a, 'totalFee');
        bValue = getDisplayValue(b, 'totalFee');
    }

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortDirection === 'asc' 
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    const numA = typeof aValue === 'number' ? aValue : 0;
    const numB = typeof bValue === 'number' ? bValue : 0;

    return sortDirection === 'asc' ? numA - numB : numB - numA;
  });

  const formatCurrency = (amount: number, currency: 'CAD' | 'USD' = displayCurrency) => {
    const symbol = currency === 'USD' ? '$' : 'C$';
    return `${symbol}${amount.toLocaleString('en-CA', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  // Get all unique total fees sorted from lowest to highest
  const getUniqueFeesRanked = () => {
    const sortedByTotal = [...brokerFees].sort((a, b) => 
      getDisplayValue(a, 'totalFee') - getDisplayValue(b, 'totalFee')
    );
    
    const uniqueFees: number[] = [];
    sortedByTotal.forEach(broker => {
      const fee = getDisplayValue(broker, 'totalFee');
      if (!uniqueFees.includes(fee)) {
        uniqueFees.push(fee);
      }
    });
    
    return uniqueFees;
  };

  const getBrokerRank = (broker: BrokerFee) => {
    const uniqueFees = getUniqueFeesRanked();
    const brokerFee = getDisplayValue(broker, 'totalFee');
    return uniqueFees.indexOf(brokerFee) + 1;
  };

  const isLowestFee = (broker: BrokerFee) => {
    const uniqueFees = getUniqueFeesRanked();
    const brokerFee = getDisplayValue(broker, 'totalFee');
    return brokerFee === uniqueFees[0];
  };

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return 'text-green-600';
      case 2:
        return 'text-amber-600';
      default:
        return 'text-red-600';
    }
  };

  const getRankBadgeColor = (rank: number) => {
    switch (rank) {
      case 1:
        return 'bg-green-100 text-green-800';
      case 2:
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-red-100 text-red-800';
    }
  };

  const getRankBorderColor = (rank: number) => {
    switch (rank) {
      case 1:
        return 'border-green-300 bg-green-50';
      case 2:
        return 'border-amber-300 bg-amber-50';
      default:
        return 'border-red-300 bg-red-50';
    }
  };

  const getBrokerWebsite = (brokerId: string) => {
    const broker = brokers.find(b => b.id === brokerId);
    return broker?.website || '#';
  };

  const getBrokerLogo = (brokerId: string) => {
    const broker = brokers.find(b => b.id === brokerId);
    return broker?.logo;
  };

  const getBrokerFeatures = (brokerId: string) => {
    const broker = brokers.find(b => b.id === brokerId);
    return broker;
  };

  const isCommissionFree = (broker: BrokerFee) => {
    return displayCurrency === 'USD' && tradeInputCurrency === 'USD' 
      ? broker.originalCommission === 0 
      : broker.commission === 0;
  };

  const getSortFieldLabel = (field: SortField) => {
    switch (field) {
      case 'brokerName': return 'Broker';
      case 'commission': return 'Commission';
      case 'fxFee': return 'FX Fee';
      case 'totalFee': return 'Total Fee';
      default: return 'Total Fee';
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
      <div className="p-4 sm:p-8">
        <div className="border-b border-gray-200 pb-6 mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Broker Comparison Results</h2>
            
            {/* Currency Toggle Button - Only show for USD trades */}
            {tradeInputCurrency === 'USD' && (
              <div className="flex items-center gap-4">
                <button
                  onClick={toggleDisplayCurrency}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2.5 rounded-xl font-medium shadow-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                >
                  <DollarSign className="w-4 h-4" />
                  <span className="text-sm">View fees in {displayCurrency === 'CAD' ? 'USD' : 'CAD'}</span>
                </button>
              </div>
            )}
            
            <div className="text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg border">
              <span className="font-medium">Exchange Rate:</span> 1 USD = {exchangeRate.toFixed(4)} CAD
            </div>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-3">
            <label htmlFor="sortSelect" className="text-sm font-medium text-gray-700">
              Sort by:
            </label>
            <div className="relative">
              <select
                id="sortSelect"
                value={sortField}
                onChange={handleSortChange}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm font-medium text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                <option value="brokerName">Broker</option>
                <option value="commission">Commission</option>
                <option value="fxFee">FX Fee</option>
                <option value="totalFee">Total Fee</option>
              </select>
              <ArrowUpDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
            <span className="text-sm text-gray-500">
              ({sortDirection === 'asc' ? 'Low to High' : 'High to Low'})
            </span>
          </div>
        </div>

        {/* Card Layout */}
        <div className="space-y-4 mb-6">
          {sortedFees.map((broker, index) => {
            const rank = getBrokerRank(broker);
            const isLowest = isLowestFee(broker);
            const brokerWebsite = getBrokerWebsite(broker.brokerId);
            const brokerLogo = getBrokerLogo(broker.brokerId);
            const brokerFeatures = getBrokerFeatures(broker.brokerId);
            
            return (
              <div 
                key={broker.brokerId}
                className={`border rounded-xl p-4 sm:p-6 ${
                  getRankBorderColor(rank)
                } shadow-sm hover:shadow-md transition-shadow`}
              >
                {/* Header with Rank and Broker Info */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full text-sm sm:text-base font-bold ${
                      getRankBadgeColor(rank)
                    }`}>
                      {rank}
                    </div>
                    {brokerLogo && (
                      <img 
                        src={brokerLogo} 
                        alt={`${broker.brokerName} logo`}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover shadow-sm border border-gray-200"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    )}
                    <div className="flex-1">
                      <div className="font-bold text-gray-900 text-lg sm:text-xl mb-2">
                        {broker.brokerName}
                      </div>
                      
                      {/* Feature Badges - Arranged in rows */}
                      <div className="space-y-2">
                        {/* First row - Primary features */}
                        <div className="flex flex-wrap gap-2">
                          {isCommissionFree(broker) && (
                            <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Commission-free
                            </div>
                          )}
                          {isLowest && (
                            <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              Best Value
                            </div>
                          )}
                          {brokerFeatures?.hasFreeUSDAccount && (
                            <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                              Free USD Account
                            </div>
                          )}
                          {brokerFeatures?.beginnerFriendly && (
                            <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-800">
                              Beginner Friendly
                            </div>
                          )}
                        </div>
                        
                        {/* Second row - Account types */}
                        <div className="flex flex-wrap gap-2">
                          {brokerFeatures?.supportsTFSA && (
                            <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                              TFSA
                            </div>
                          )}
                          {brokerFeatures?.supportsRRSP && (
                            <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                              RRSP
                            </div>
                          )}
                          {brokerFeatures?.supportsFHSA && (
                            <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                              FHSA
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Visit Broker Button - Desktop */}
                  <a
                    href={brokerWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors sm:mt-8"
                  >
                    Visit Broker
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Fee Details - Same line layout */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm text-gray-500 font-medium">Commission ({displayCurrency})</span>
                      <span className="text-lg font-bold text-gray-900">
                        {getDisplayValue(broker, 'commission') === 0 
                          ? 'Free' 
                          : formatCurrency(getDisplayValue(broker, 'commission'))
                        }
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm text-gray-500 font-medium">FX Fee ({displayCurrency})</span>
                      <span className="text-lg font-bold text-gray-900">
                        {getDisplayValue(broker, 'fxFee') === 0 
                          ? 'Free' 
                          : formatCurrency(getDisplayValue(broker, 'fxFee'))
                        }
                      </span>
                    </div>
                  </div>
                  <div className="border-t sm:border-t-0 pt-4 sm:pt-0">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm text-gray-500 font-medium">Total Fee ({displayCurrency})</span>
                      <span className={`text-xl font-bold ${getRankColor(rank)}`}>
                        {formatCurrency(getDisplayValue(broker, 'totalFee'))}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Visit Broker Button - Mobile (Centered) */}
                <div className="flex justify-center sm:hidden">
                  <a
                    href={brokerWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Visit Broker
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="border-t border-gray-200 pt-6 bg-gray-50 -mx-4 sm:-mx-8 px-4 sm:px-8 py-6">
          <div className="text-sm text-gray-600 space-y-2">
            <p><strong>Note:</strong> Fees are displayed in {displayCurrency} for easy comparison.</p>
            <p><strong>FX Fees:</strong> Foreign exchange fees apply when buying stocks in a different currency than your account.</p>
            <p><strong>Commission-free:</strong> Indicates brokers that don't charge trading commissions.</p>
            <p><strong>Account Types:</strong> TFSA (Tax-Free Savings Account), RRSP (Registered Retirement Savings Plan), FHSA (First Home Savings Account)</p>
          </div>
        </div>
      </div>
    </div>
  );
}