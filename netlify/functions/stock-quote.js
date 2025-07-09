const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY;
const FMP_API_KEY = process.env.FMP_API_KEY;

const FINNHUB_BASE_URL = 'https://finnhub.io/api/v1';
const FMP_BASE_URL = 'https://financialmodelingprep.com';

export const handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { symbol, stockType } = event.queryStringParameters || {};

    if (!symbol) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Symbol parameter is required' }),
      };
    }

    if (!stockType || !['US', 'CAD'].includes(stockType)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Valid stockType parameter (US or CAD) is required' }),
      };
    }

    const cleanSymbol = symbol.trim().toUpperCase();

    if (stockType === 'US') {
      if (!FINNHUB_API_KEY) {
        return {
          statusCode: 500,
          headers,
          body: JSON.stringify({ error: 'Finnhub API key is not configured' }),
        };
      }

      // Fetch US stock data from Finnhub
      const [quoteResponse, profileResponse] = await Promise.all([
        fetch(`${FINNHUB_BASE_URL}/quote?symbol=${cleanSymbol}&token=${FINNHUB_API_KEY}`),
        fetch(`${FINNHUB_BASE_URL}/stock/profile2?symbol=${cleanSymbol}&token=${FINNHUB_API_KEY}`)
      ]);

      if (!quoteResponse.ok || !profileResponse.ok) {
        throw new Error('Network error while fetching US stock data from Finnhub');
      }

      const [quoteData, profileData] = await Promise.all([
        quoteResponse.json(),
        profileResponse.json()
      ]);

      // Check for API errors
      if (quoteData.error || !quoteData.c || quoteData.c === 0) {
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ error: 'Invalid US stock symbol or no data available' }),
        };
      }

      const price = parseFloat(quoteData.c);
      const previousClose = parseFloat(quoteData.pc);
      const change = price - previousClose;
      const changePercent = (change / previousClose) * 100;

      const stockDetails = {
        symbol: cleanSymbol,
        name: profileData.name || cleanSymbol,
        price,
        previousClose,
        change,
        changePercent,
        currency: 'USD',
        marketCap: profileData.marketCapitalization,
        industry: profileData.finnhubIndustry,
        logo: profileData.logo,
        weburl: profileData.weburl,
        high: quoteData.h,
        low: quoteData.l,
        open: quoteData.o
      };

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(stockDetails),
      };

    } else {
      // Canadian stocks
      if (!FMP_API_KEY) {
        return {
          statusCode: 500,
          headers,
          body: JSON.stringify({ error: 'Financial Modeling Prep API key is not configured' }),
        };
      }

      // Fetch Canadian stock data from Financial Modeling Prep
      const [quoteResponse, profileResponse] = await Promise.all([
        fetch(`${FMP_BASE_URL}/api/v3/quote/${cleanSymbol}?apikey=${FMP_API_KEY}`),
        fetch(`${FMP_BASE_URL}/api/v3/profile/${cleanSymbol}?apikey=${FMP_API_KEY}`)
      ]);

      if (!quoteResponse.ok || !profileResponse.ok) {
        throw new Error('Network error while fetching Canadian stock data from Financial Modeling Prep');
      }

      const [quoteData, profileData] = await Promise.all([
        quoteResponse.json(),
        profileResponse.json()
      ]);

      // FMP returns an array for quote data
      if (!Array.isArray(quoteData) || quoteData.length === 0 || !quoteData[0].price) {
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ error: 'Invalid Canadian stock symbol or no data available' }),
        };
      }

      // FMP returns an array for profile data
      if (!Array.isArray(profileData) || profileData.length === 0) {
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ error: 'Unable to fetch Canadian stock profile data' }),
        };
      }

      const quote = quoteData[0];
      const profile = profileData[0];

      const price = parseFloat(quote.price);
      const previousClose = parseFloat(quote.previousClose);
      const change = parseFloat(quote.change);
      const changePercent = parseFloat(quote.changesPercentage);

      const stockDetails = {
        symbol: cleanSymbol,
        name: profile.companyName || cleanSymbol,
        price,
        previousClose,
        change,
        changePercent,
        currency: 'CAD',
        marketCap: profile.mktCap,
        industry: profile.industry,
        logo: profile.image,
        weburl: profile.website,
        high: parseFloat(quote.dayHigh),
        low: parseFloat(quote.dayLow),
        open: parseFloat(quote.open)
      };

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(stockDetails),
      };
    }

  } catch (error) {
    console.error('Error in stock-quote function:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: error.message || 'Failed to fetch stock data' 
      }),
    };
  }
};