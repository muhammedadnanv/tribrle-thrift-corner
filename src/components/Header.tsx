import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">TribrleStrity Cder</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-600">Men</a></li>
            <li><a href="#" className="hover:text-gray-600">Women</a></li>
            <li><a href="#" className="hover:text-gray-600">Kids</a></li>
            <li><a href="#" className="hover:text-gray-600">Accessories</a></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;