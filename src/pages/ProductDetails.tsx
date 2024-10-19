import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const fetchProduct = async (id: string) => {
  // Simulating API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  return {
    id: parseInt(id),
    name: 'Korean Style Dress',
    price: 59.99,
    description: 'Beautiful Korean-style dress with floral patterns.',
    category: 'Women',
    condition: 'New',
    size: 'M'
  };
};

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const { data: product, isLoading } = useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProduct(id!),
  });

  if (isLoading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img src={`https://picsum.photos/seed/${product.id}/600/800`} alt={product.name} className="w-full h-auto rounded-lg shadow-lg" />
          <div>
            <h1 className="text-3xl font-serif font-bold text-pink-600 mb-4">{product.name}</h1>
            <p className="text-2xl font-bold text-gray-800 mb-4">₩{product.price.toFixed(2)}</p>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-sm text-gray-500 mb-4">
              Category: {product.category} • Condition: {product.condition} • Size: {product.size}
            </p>
            <Button onClick={handleAddToCart} className="bg-pink-500 text-white hover:bg-pink-600 transition-colors">
              Add to Cart
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetails;