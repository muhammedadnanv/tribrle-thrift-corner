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
      <div className="min-h-screen flex flex-col bg-coconut-light">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <section className="mb-12 bg-kerala bg-opacity-10 rounded-lg overflow-hidden">
            <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-4xl font-serif font-bold text-kerala-dark mb-4">Kerala's Vintage Treasures</h2>
                <p className="text-spice-dark mb-6">Discover our curated selection of pre-loved Kerala fashion. Embrace tradition with a sustainable twist.</p>
                <Button className="bg-spice text-coconut-light hover:bg-spice-dark transition-colors">
                  Explore Collection
                </Button>
              </div>
              <div className="md:w-1/2">
                <img src="https://picsum.photos/seed/kerala/600/400" alt="Kerala Vintage Fashion" className="rounded-lg shadow-lg" />
              </div>
            </div>
          </section>
          <h2 className="text-3xl font-serif font-bold text-kerala-dark text-center mb-8">Featured Kerala Classics</h2>
          <ProductList />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
};

export default Index;