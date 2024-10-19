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
    <header className="bg-kerala text-coconut-light shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-serif font-bold text-spice-dark">Kerala Vintage</h1>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-coconut-light hover:text-spice-light">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-coconut-light hover:text-spice-light">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="text-coconut-light hover:text-spice-light transition-colors">Sarees</a></li>
              <li><a href="#" className="text-coconut-light hover:text-spice-light transition-colors">Mundus</a></li>
              <li><a href="#" className="text-coconut-light hover:text-spice-light transition-colors">Accessories</a></li>
              <li><a href="#" className="text-coconut-light hover:text-spice-light transition-colors">Home Decor</a></li>
            </ul>
          </nav>
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-spice-light rounded-full focus:outline-none focus:ring-2 focus:ring-spice-light bg-coconut-light text-kerala-dark"
            />
            <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-kerala-dark">
              <Search className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;