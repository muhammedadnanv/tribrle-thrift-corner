import React from 'react';
import { ShoppingCart, Heart, Search } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-serif font-bold text-olive-dark">TribrleStrity Cder</h1>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-brown hover:text-brown-dark">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-brown hover:text-brown-dark">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="text-brown-dark hover:text-olive transition-colors">Men</a></li>
              <li><a href="#" className="text-brown-dark hover:text-olive transition-colors">Women</a></li>
              <li><a href="#" className="text-brown-dark hover:text-olive transition-colors">Kids</a></li>
              <li><a href="#" className="text-brown-dark hover:text-olive transition-colors">Accessories</a></li>
            </ul>
          </nav>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-beige-dark rounded-full focus:outline-none focus:ring-2 focus:ring-olive-light"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brown" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;