import React from 'react';
import Link from 'next/link';




const Header: React.FC = () => {
    
  return (
    <nav className="bg-green-600 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Fruit Market</h1>
        <nav>
            <ul className="list-none p-0 flex space-x-4">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/shop" className="hover:underline">Shop</Link></li>
            <li><Link href="/cart" className="hover:underline">Cart</Link></li>
          
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Header;