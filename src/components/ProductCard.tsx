import React from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  condition: string;
  size: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id: product.id, name: product.name, price: product.price, quantity: 1 });
    toast.success(`${product.name} added to cart`);
  };

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <img src={`https://picsum.photos/seed/${product.id}/300/400`} alt={product.name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{product.name}</h3>
        <p className="text-pink-600 font-bold mb-2">{formatPrice(product.price)}</p>
        <p className="text-sm text-gray-600 mb-2">Condition: {product.condition}</p>
        <div className="flex items-center mb-2">
          <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
          <span className="text-sm text-gray-600">4.5 (10 reviews)</span>
        </div>
        <p className="text-sm text-gray-500 mb-4">
          {product.category} • Size {product.size}
        </p>
        <div className="flex justify-between items-center">
          <Button variant="outline" size="sm" className="text-pink-600 border-pink-600 hover:bg-pink-600 hover:text-white transition-colors">
            View Details
          </Button>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-pink-600">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-pink-600" onClick={handleAddToCart}>
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;