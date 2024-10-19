import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

const queryClient = new QueryClient();

const Index = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <section className="mb-12 bg-pink-50 rounded-lg overflow-hidden">
            <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-4xl font-serif font-bold text-pink-600 mb-4">Korean Style Treasures</h2>
                <p className="text-gray-700 mb-6">Discover our curated selection of authentic Korean fashion and lifestyle products. Embrace the K-wave with Kocizz!</p>
                <Button className="bg-pink-500 text-white hover:bg-pink-600 transition-colors">
                  Explore Collection
                </Button>
              </div>
              <div className="md:w-1/2">
                <img src="https://picsum.photos/seed/korean/600/400" alt="Korean Fashion" className="rounded-lg shadow-lg" />
              </div>
            </div>
          </section>
          <h2 className="text-3xl font-serif font-bold text-pink-600 text-center mb-8">Featured Korean Styles</h2>
          <ProductList />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
};

export default Index;