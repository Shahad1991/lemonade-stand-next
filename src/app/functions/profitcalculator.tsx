"use client";

import { useState } from 'react';

const ProfitCalculator = () => {
  const [profit, setProfit] = useState(0);

  const increaseProfit = () => {
    setProfit(profit + 2);
  };

  const decreaseProfit = () => {
    setProfit(profit - 2);
  };

  return (
    <div className="container m-auto p-4 text-center rounded-lg" style={{backgroundColor: '#a2ac5c'}}>
      <h1 className="text-3xl font-bold mb-4">Lemonade Stand</h1>
      <p className="text-xl mb-4">Welcome to the Lemonade Stand!</p>
      
      <p className="text-xl mb-4">My Profit: ${profit}</p>
      <button
        className="mr-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        onClick={increaseProfit}
      >
        Sell Lemonade
      </button>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        onClick={decreaseProfit}
      >
       Buy Lemonade
      </button>
    </div>
  );
};

export default ProfitCalculator;