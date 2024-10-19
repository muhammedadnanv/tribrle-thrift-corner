import React from 'react';
import { useQuery } from '@tanstack/react-query';
import ProductCard from './ProductCard';
import ProductListSkeleton from './ProductListSkeleton';

const fetchProducts = async () => {
  // Simulating API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  return [
    { id: 1, name: 'Korean Style Dress', price: 59.99, category: 'Women', condition: 'New', size: 'M' },
    { id: 2, name: 'K-Pop Inspired T-Shirt', price: 29.99, category: 'Unisex', condition: 'New', size: 'L' },
    { id: 3, name: 'Traditional Hanbok', price: 199.99, category: 'Women', condition: 'New', size: 'One Size' },
    { id: 4, name: 'Korean Skincare Set', price: 89.99, category: 'Beauty', condition: 'New', size: 'N/A' },
    { id: 5, name: 'K-Drama Inspired Jacket', price: 79.99, category: 'Men', condition: 'New', size: 'XL' },
    { id: 6, name: 'Korean Street Food Cookbook', price: 24.99, category: 'Books', condition: 'New', size: 'N/A' },
    { id: 7, name: 'BTS Album Collection', price: 149.99, category: 'Music', condition: 'New', size: 'N/A' },
    { id: 8, name: 'Korean Beauty Face Masks', price: 19.99, category: 'Beauty', condition: 'New', size: 'N/A' },
  ];
};

const ProductList = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  if (isLoading) return <ProductListSkeleton />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products?.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;