# Stock Fee Calculator

A comprehensive tool to compare trading fees across Canadian brokers with real-time stock data.

## Features

- Compare fees across multiple Canadian brokers
- Real-time stock price fetching for US and Canadian stocks
- Live exchange rate conversion
- Detailed fee breakdowns
- Responsive design
- Secure API key handling via serverless functions

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Add your API keys (these will be used by Netlify Functions):
     - **Finnhub API Key**: Get from [Finnhub.io](https://finnhub.io/)
     - **Financial Modeling Prep API Key**: Get from [Financial Modeling Prep](https://financialmodelingprep.com/)

4. For local development with Netlify Functions:
   ```bash
   # Install Netlify CLI globally
   npm install -g netlify-cli

   # Start the development server with functions
   netlify dev
   ```

   Or use the regular Vite dev server (API calls will fail locally):
   ```bash
   npm run dev
   ```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
FINNHUB_API_KEY=your_finnhub_api_key_here
FMP_API_KEY=your_fmp_api_key_here
```

**Important**: These environment variables are now used by Netlify Functions (server-side) and are NOT exposed to the client. Your API keys will remain secure.

## Deployment

### Netlify Deployment

1. Connect your repository to Netlify
2. Set the following environment variables in your Netlify dashboard:
   - `FINNHUB_API_KEY`
   - `FMP_API_KEY`
3. Deploy! The build settings are automatically configured via `netlify.toml`

### Environment Variables in Netlify

In your Netlify dashboard:
1. Go to Site settings → Environment variables
2. Add your API keys:
   - Key: `FINNHUB_API_KEY`, Value: your Finnhub API key
   - Key: `FMP_API_KEY`, Value: your Financial Modeling Prep API key

## API Keys

### Finnhub (for US stocks)
- Sign up at [Finnhub.io](https://finnhub.io/)
- Get your free API key from the dashboard
- Used for US stock quotes and company profiles

### Financial Modeling Prep (for Canadian stocks)
- Sign up at [Financial Modeling Prep](https://financialmodelingprep.com/)
- Get your free API key from the dashboard
- Used for Canadian stock quotes and company profiles

## Architecture

This application uses Netlify Functions to securely handle API calls:

- **Frontend**: React application that makes requests to Netlify Functions
- **Backend**: Netlify Functions that securely call external APIs using server-side environment variables
- **Security**: API keys are never exposed to the client-side code

### API Endpoints

- `/.netlify/functions/stock-quote` - Fetches stock data for US and Canadian stocks
- `/.netlify/functions/exchange-rate` - Fetches current USD to CAD exchange rate

## Supported Brokers

- Wealthsimple
- Questrade
- Interactive Brokers
- Webull
- Moomoo
- RBC Direct Investing
- TD Direct Investing

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Netlify Functions
- Lucide React (icons)

## Local Development

For the best local development experience with working API calls:

1. Install Netlify CLI: `npm install -g netlify-cli`
2. Run: `netlify dev`

This will start both the frontend and the Netlify Functions locally.

## License

MIT License