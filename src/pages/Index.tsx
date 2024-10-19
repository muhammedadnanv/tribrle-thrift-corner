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
      <div className="min-h-screen flex flex-col bg-beige-light">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <section className="mb-12 bg-olive bg-opacity-10 rounded-lg overflow-hidden">
            <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-4xl font-serif font-bold text-olive-dark mb-4">Summer Collection</h2>
                <p className="text-brown-dark mb-6">Discover our curated selection of sustainable summer fashion. Refresh your wardrobe while reducing your environmental impact.</p>
                <Button className="bg-olive text-white hover:bg-olive-dark transition-colors">
                  Shop Now
                </Button>
              </div>
              <div className="md:w-1/2">
                <img src="https://picsum.photos/seed/summer/600/400" alt="Summer Collection" className="rounded-lg shadow-lg" />
              </div>
            </div>
          </section>
          <h2 className="text-3xl font-serif font-bold text-brown-dark text-center mb-8">Featured Products</h2>
          <ProductList />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
};

export default Index;