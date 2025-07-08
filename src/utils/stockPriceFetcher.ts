import { StockQuoteResponse } from '../types';

// Check if we're in development mode
const isDevelopment = import.meta.env.DEV;

// Function to get the base URL for API calls
const getApiBaseUrl = () => {
  if (isDevelopment) {
    return 'http://localhost:8888/.netlify/functions';
  }
  // In production, use relative path which will resolve to your deployed domain
  return '/.netlify/functions';
};

export async function fetchStockPrice(symbol: string): Promise<{ price: number; currency: 'USD' | 'CAD' }> {
  if (!symbol || symbol.trim().length === 0) {
    throw new Error('Please enter a valid stock symbol');
  }

  const cleanSymbol = symbol.trim().toUpperCase();
  
  // Determine stock type based on symbol patterns
  const stockType = cleanSymbol.includes('.TO') || 
                   cleanSymbol.includes('.TSE') || 
                   cleanSymbol.includes('.V') || 
                   cleanSymbol.includes('.CN') ? 'CAD' : 'US';
  
  try {
    const baseUrl = getApiBaseUrl();
    const url = `${baseUrl}/stock-quote?symbol=${encodeURIComponent(cleanSymbol)}&stockType=${stockType}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Network error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    
    if (!data.price || data.price <= 0) {
      throw new Error('Invalid price data received from API');
    }
    
    return { 
      price: data.price, 
      currency: data.currency as 'USD' | 'CAD'
    };
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to fetch stock price. Please check your internet connection and try again.');
  }
}

// Updated function to fetch detailed stock information with stock type parameter
export async function fetchStockDetails(symbol: string, stockType: 'US' | 'CAD') {
  if (!symbol || symbol.trim().length === 0) {
    throw new Error('Please enter a valid stock symbol');
  }

  const cleanSymbol = symbol.trim().toUpperCase();
  
  try {
    const baseUrl = getApiBaseUrl();
    const url = `${baseUrl}/stock-quote?symbol=${encodeURIComponent(cleanSymbol)}&stockType=${stockType}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Network error while fetching ${stockType} stock data`);
    }
    
    const data = await response.json();
    
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error(`Failed to fetch ${stockType} stock details`);
  }
}