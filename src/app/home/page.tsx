import React from 'react';
import ProfitCalculator from '../functions/profitcalculator';



const HomePage: React.FC = () => {
  return (
   
    <div>
      
    
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4">Welcome to Fruit Market</h2>
        <p className="mb-4">We offer a wide variety of fresh fruits and vegetables. Browse our selection and enjoy the best produce available.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded">
            <h3 className="text-xl font-bold">Fresh Fruits</h3>
            <p>Explore our selection of fresh fruits, sourced from the best farms.</p>
          </div>
          <div className="p-4 border rounded">
            <h3 className="text-xl font-bold">Organic Vegetables</h3>
            <p>Discover our range of organic vegetables, grown without pesticides.</p>
          </div>
          <div className="p-4 border rounded">
            <h3 className="text-xl font-bold">Seasonal Specials</h3>
            <p>Check out our seasonal specials and enjoy the best produce of the season.</p>
          </div>
        </div>
      </main>
        <ProfitCalculator />
      
    </div>
  );
};

export default HomePage;