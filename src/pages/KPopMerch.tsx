import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import ProductListSkeleton from '@/components/ProductListSkeleton';

const fetchKPopMerch = async () => {
  // Simulating API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  return [
    { id: 1, name: 'BTS Album Collection', price: 149.99, category: 'Music', condition: 'New', size: 'N/A' },
    { id: 2, name: 'BLACKPINK Light Stick', price: 39.99, category: 'Accessories', condition: 'New', size: 'N/A' },
    { id: 3, name: 'EXO T-Shirt', price: 29.99, category: 'Clothing', condition: 'New', size: 'M' },
    { id: 4, name: 'TWICE Photobook', price: 34.99, category: 'Books', condition: 'New', size: 'N/A' },
    { id: 5, name: 'Red Velvet Perfume Set', price: 79.99, category: 'Beauty', condition: 'New', size: 'N/A' },
    { id: 6, name: 'NCT Handmade Soap Collection', price: 24.99, category: 'Beauty', condition: 'New', size: 'N/A' },
    { id: 7, name: 'SEVENTEEN Birthday Cake', price: 49.99, category: 'Food', condition: 'New', size: 'N/A' },
    { id: 8, name: 'ITZY Lip Balm Set', price: 19.99, category: 'Beauty', condition: 'New', size: 'N/A' },
    { id: 9, name: 'Stray Kids Chocolate Box', price: 29.99, category: 'Food', condition: 'New', size: 'N/A' },
    { id: 10, name: 'MAMAMOO Scented Candle', price: 34.99, category: 'Home', condition: 'New', size: 'N/A' },
    { id: 11, name: 'GOT7 Body Mist', price: 22.99, category: 'Beauty', condition: 'New', size: 'N/A' },
    { id: 12, name: 'ATEEZ Cookie Set', price: 15.99, category: 'Food', condition: 'New', size: 'N/A' },
  ];
};

const KPopMerch = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ['kpopMerch'],
    queryFn: fetchKPopMerch,
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-bold text-pink-600 mb-8">K-Pop Merchandise</h1>
        {isLoading ? (
          <ProductListSkeleton />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products?.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default KPopMerch;