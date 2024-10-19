import React, { useState } from 'react';
import { ShoppingCart, Heart, Search } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-serif font-bold text-olive-dark">SecondChance Chic</h1>
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
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-beige-dark rounded-full focus:outline-none focus:ring-2 focus:ring-olive-light"
            />
            <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brown">
              <Search className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;