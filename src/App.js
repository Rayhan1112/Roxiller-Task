import React, { useState } from 'react';
import './App.css';
import TransactionTable from './components/TransactionTable';
import StatisticsBox from './components/StatisticsBox';
import PriceRangeBarChart from './components/BarChart';
import CategoryPieChart from './components/PieChart';

function App() {
  const [month, setMonth] = useState('March');

  return (
    <div className="container">
      <h1>Transaction Dashboard</h1>
      <TransactionTable month={month} setMonth={setMonth} />
      <StatisticsBox month={month} />
      <PriceRangeBarChart month={month} />
      <CategoryPieChart month={month} />
    </div>
  );
}

export default App;
