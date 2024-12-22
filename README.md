# Portfolio Tracker Frontend

This is the frontend of the Portfolio Tracker application, built with **Next.js**, **Tailwind CSS**, **TypeScript**, and **Shadcn UI**. The frontend is designed to provide a user-friendly interface for managing and tracking stock portfolios.

## Features
- **Responsive UI**: Optimized for both desktop and mobile devices.
- **Stock Search**: Search for stocks using their ticker symbols, fetching real-time data from Yahoo Finance.
- **Portfolio Overview**: Displays portfolio value, total investment, gain/loss, and percentage distribution.
- **Charts**: Pie chart for portfolio distribution, and tables for top performers and losers.
- **CRUD Operations**: Add, update, and delete stocks in the portfolio.
- **Edit and Delete**: Ability to edit and delete stocks in the portfolio table.

## Tech Stack
- **Next.js**: React framework for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **TypeScript**: Strongly typed JavaScript for better code quality.
- **Shadcn UI**: Radix UI components styled with Tailwind CSS.
- **Recharts**: For displaying charts like portfolio distribution and performance.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/ShanuRocky/portfolio-frontend.git
   cd frontend

2. Install dependencies:
   ```bash
   npm install

3. Run the development server:
   ```bash
   npm run dev

## Assumptions and Limitations
- The application relies on real-time stock data fetched from Yahoo Finance.
- Stock data updates every minute.
- The application assumes valid stock ticker symbols for search functionality.

## Deployed Application
- Website: https://portfoliomanager-one.vercel.app/