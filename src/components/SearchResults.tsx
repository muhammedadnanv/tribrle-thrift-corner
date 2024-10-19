import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import ProductCard from './ProductCard';
import ProductListSkeleton from './ProductListSkeleton';

const fetchSearchResults = async (searchTerm: string) => {
  // Simulating API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  // Mock data - replace with actual API call
  return [
    { id: 1, name: 'Vintage Denim Jacket', price: 39.99, category: 'Men', condition: 'Good', size: 'M' },
    { id: 2, name: 'Floral Summer Dress', price: 24.99, category: 'Women', condition: 'Excellent', size: 'S' },
    // Add more mock products as needed
  ].filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
};

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('q') || '';

  const { data: products, isLoading } = useQuery({
    queryKey: ['searchResults', searchTerm],
    queryFn: () => fetchSearchResults(searchTerm),
  });

  if (isLoading) return <ProductListSkeleton />;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-serif font-bold text-brown-dark mb-6">Search Results for "{searchTerm}"</h2>
      {products && products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-brown-dark">No products found. Try a different search term.</p>
      )}
    </div>
  );
};

export default SearchResults;