import React from 'react';
import ProfitCalculator from '../functions/profitcalculator';

const HomePage: React.FC = () => {
  return (
    <div className='flex items-center justify-center h-screen w-full'
      style={{
        backgroundImage: 'url("/background.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
        
        
        
      }}
    >
      <ProfitCalculator />
    </div>
  );
};

export default HomePage;