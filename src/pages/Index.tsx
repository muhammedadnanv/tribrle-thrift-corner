import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';

const queryClient = new QueryClient();

const Index = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">Welcome to TribrleStrity Cder</h1>
          <ProductList />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
};

export default Index;