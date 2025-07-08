import { ExchangeRateResponse } from '../types';

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

export async function fetchExchangeRate(): Promise<number> {
  try {
    const baseUrl = getApiBaseUrl();
    const url = `${baseUrl}/exchange-rate`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (!data.exchangeRate) {
      throw new Error('Invalid exchange rate response');
    }
    
    return data.exchangeRate;
  } catch (error) {
    console.error('Error fetching exchange rate:', error);
    // Fallback to approximate rate if API fails
    return 1.35; // Approximate USD to CAD rate
  }
}