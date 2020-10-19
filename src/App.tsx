import React, { useState } from 'react';
import './App.scss';
import { StockSearch } from './components/StockSearch';
import { StockSnapshot as StockSnapshotPage } from './components/StockSnapshot';


export interface StockSnapshot {
  symbol: string;
  name: string;
  type: string;
  region: string;
  marketOpen: string;
  marketClose: string;
  timezone: string;
  currency: string;
  matchScore: string;
}

export interface StockDetails {
  symbol: string;
  open: string;
  high: string;
  low: string;
  price: string;
  volume: string;
  change: string;
}

function App() {
  const [stockSnapshot, setStockSnapshot] = useState<StockSnapshot | null>(null);

  return (
    <div className="App__body">
      <StockSearch onClear={() => setStockSnapshot(null)} onSubmit={setStockSnapshot} />
      {stockSnapshot && <StockSnapshotPage stockSnapshot={stockSnapshot!} />}
    </div>
  );
}

export default App;
