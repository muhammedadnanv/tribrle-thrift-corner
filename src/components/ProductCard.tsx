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

  return (
    <div className="bg-coconut-light rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <img src={`https://picsum.photos/seed/${product.id}/300/400`} alt={product.name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-kerala-dark">{product.name}</h3>
        <p className="text-spice font-bold mb-2">₹{product.price.toFixed(2)}</p>
        <div className="flex items-center mb-2">
          <Star className="h-4 w-4 text-kerala fill-current mr-1" />
          <span className="text-sm text-spice-dark">4.5 (10 reviews)</span>
        </div>
        <p className="text-sm text-spice-light mb-4">
          {product.category} • {product.condition} • Size {product.size}
        </p>
        <div className="flex justify-between items-center">
          <Button variant="outline" size="sm" className="text-kerala border-kerala hover:bg-kerala hover:text-coconut-light transition-colors">
            View Details
          </Button>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" className="text-spice-dark hover:text-spice">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-spice-dark hover:text-spice" onClick={handleAddToCart}>
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;