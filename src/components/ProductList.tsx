import React from 'react';
import { useQuery } from '@tanstack/react-query';
import ProductCard from './ProductCard';
import ProductListSkeleton from './ProductListSkeleton';

const fetchProducts = async () => {
  // Simulating API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  return [
    { id: 1, name: 'Vintage Denim Jacket', price: 39.99, category: 'Men', condition: 'Good', size: 'M' },
    { id: 2, name: 'Floral Summer Dress', price: 24.99, category: 'Women', condition: 'Excellent', size: 'S' },
    { id: 3, name: 'Kids Superhero T-Shirt', price: 14.99, category: 'Kids', condition: 'New', size: '6-7Y' },
    { id: 4, name: 'Leather Handbag', price: 54.99, category: 'Accessories', condition: 'Very Good', size: 'One Size' },
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