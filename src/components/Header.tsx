import React, { useState } from 'react';
import { ShoppingCart, Heart, Search } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { Badge } from './ui/badge';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { cartItemsCount } = useCart();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <header className="bg-pink-100 text-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center mb-4">
          <Link to="/" className="text-3xl font-serif font-bold text-pink-600">Kocizz</Link>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-800 hover:text-pink-600">
              <Heart className="h-5 w-5" />
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="text-gray-800 hover:text-pink-600 relative">
                <ShoppingCart className="h-5 w-5" />
                {cartItemsCount > 0 && (
                  <Badge variant="destructive" className="absolute -top-2 -right-2 px-2 py-1 text-xs">
                    {cartItemsCount}
                  </Badge>
                )}
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <nav>
            <ul className="flex space-x-6">
              <li><Link to="/category/hanbok" className="text-gray-800 hover:text-pink-600 transition-colors">Hanbok</Link></li>
              <li><Link to="/category/k-beauty" className="text-gray-800 hover:text-pink-600 transition-colors">K-Beauty</Link></li>
              <li><Link to="/category/k-pop-merch" className="text-gray-800 hover:text-pink-600 transition-colors">K-Pop Merch</Link></li>
              <li><Link to="/category/home-decor" className="text-gray-800 hover:text-pink-600 transition-colors">Home Decor</Link></li>
            </ul>
          </nav>
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-pink-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300 bg-white text-gray-800"
            />
            <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600">
              <Search className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;