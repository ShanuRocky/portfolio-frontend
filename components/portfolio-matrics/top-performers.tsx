'use client';

import { Stock } from '@/types/stock';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface TopPerformersProps {
  stocks: Stock[];
}

export function TopPerformers({ stocks }: TopPerformersProps) {
  const stocksWithPerformance = stocks
    .map(stock => ({
      ...stock,
      performance: stock.currentPrice 
        ? ((stock.currentPrice - stock.buyPrice) / stock.buyPrice) * 100
        : 0
    }))
    .sort((a, b) => b.performance - a.performance);

  const topGainers = stocksWithPerformance.filter((stock) => stock.performance > 0).slice(0, 3);
  const topLosers = [...stocksWithPerformance].filter((stock) => stock.performance < 0).reverse().slice(0, 3);

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Top Performers</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-3">Top Gainers</h4>
            {topGainers.map(stock => (
              <div key={stock.id} className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
                  <span className="font-medium">{stock.ticker}</span>
                </div>
                <span className="text-green-500">+{stock.performance.toFixed(2)}%</span>
              </div>
            ))}
          </div>
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-3">Top Losers</h4>
            {topLosers.map(stock => (
              <div key={stock.id} className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <TrendingDown className="h-4 w-4 text-red-500 mr-2" />
                  <span className="font-medium">{stock.ticker}</span>
                </div>
                <span className="text-red-500">{stock.performance.toFixed(2)}%</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}