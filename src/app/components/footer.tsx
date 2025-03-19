import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Fruit Market. All rights reserved.</p>
        <nav>
          <ul className="list-none p-0 flex justify-center space-x-4">
            <li><a href="/home" className="hover:underline">Home</a></li>
            <li><a href="/shop" className="hover:underline">Shop</a></li>
            <li><a href="/cart" className="hover:underline">Cart</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;