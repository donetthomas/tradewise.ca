const EXCHANGE_RATE_API_URL = 'https://api.exchangerate-api.com/v4/latest/USD';

exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
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
    const response = await fetch(EXCHANGE_RATE_API_URL);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.success === false || !data.rates.CAD) {
      throw new Error('Invalid exchange rate response');
    }
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        exchangeRate: data.rates.CAD,
        success: true 
      }),
    };

  } catch (error) {
    console.error('Error fetching exchange rate:', error);
    
    // Return fallback rate if API fails
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        exchangeRate: 1.35, // Fallback rate
        success: false,
        error: 'Using fallback exchange rate'
      }),
    };
  }
};