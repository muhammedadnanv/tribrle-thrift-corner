import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const OrderConfirmation = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-serif font-bold text-pink-600 mb-8">Order Confirmed!</h1>
        <p className="text-lg mb-8">Thank you for your purchase. Your order has been successfully placed.</p>
        <Link to="/">
          <Button className="bg-pink-500 text-white hover:bg-pink-600 transition-colors">
            Continue Shopping
          </Button>
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default OrderConfirmation;