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
    { id: 1, name: 'BTS Limited Edition Vinyl Collection', price: 299.99, category: 'Music', condition: 'New', size: 'N/A' },
    { id: 2, name: 'BLACKPINK Swarovski Crystal Light Stick', price: 199.99, category: 'Accessories', condition: 'New', size: 'N/A' },
    { id: 3, name: 'EXO Silk Pajama Set', price: 249.99, category: 'Clothing', condition: 'New', size: 'M' },
    { id: 4, name: 'TWICE Luxury Photobook (Signed)', price: 149.99, category: 'Books', condition: 'New', size: 'N/A' },
    { id: 5, name: 'Red Velvet Premium Perfume Collection', price: 399.99, category: 'Beauty', condition: 'New', size: 'N/A' },
    { id: 6, name: 'NCT x Tom Ford Makeup Set', price: 299.99, category: 'Beauty', condition: 'New', size: 'N/A' },
    { id: 7, name: 'SEVENTEEN 24K Gold Plated Necklace Set', price: 599.99, category: 'Jewelry', condition: 'New', size: 'N/A' },
    { id: 8, name: 'ITZY x Dior Limited Edition Handbag', price: 1999.99, category: 'Fashion', condition: 'New', size: 'N/A' },
    { id: 9, name: 'Stray Kids Luxury Watch Collection', price: 799.99, category: 'Accessories', condition: 'New', size: 'N/A' },
    { id: 10, name: 'MAMAMOO Crystal Sound System', price: 1499.99, category: 'Electronics', condition: 'New', size: 'N/A' },
    { id: 11, name: 'GOT7 Premium Skincare Set', price: 349.99, category: 'Beauty', condition: 'New', size: 'N/A' },
    { id: 12, name: 'ATEEZ VIP Concert Experience Package', price: 2499.99, category: 'Experience', condition: 'New', size: 'N/A' },
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
        <h1 className="text-3xl font-serif font-bold text-pink-600 mb-8">Luxury K-Pop Merchandise</h1>
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