import React, { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { initiatePhonePePayment } from '@/utils/paymentUtils';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const [address, setAddress] = useState('');

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    if (!address) {
      toast.error('Please enter your address');
      return;
    }

    try {
      const paymentDetails = {
        amount: total * 100, // Amount in paise
        transactionId: `ORDER-${Date.now()}`,
        // Add other necessary fields
      };

      const response = await initiatePhonePePayment(paymentDetails);
      console.log('Payment initiated:', response);

      // Simulating successful payment
      toast.success('Payment successful!');
      clearCart();
      // Redirect to a thank you page or order confirmation page
    } catch (error) {
      console.error('Payment failed:', error);
      toast.error('Payment failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-bold text-pink-600 mb-8">Checkout</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-2">
                <span>{item.name} x {item.quantity}</span>
                <span>₩{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t border-gray-200 pt-2 mt-2">
              <div className="flex justify-between items-center font-bold">
                <span>Total</span>
                <span>₩{total.toFixed(2)}</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
            <Input
              type="text"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mb-4"
            />
            <Button onClick={handleCheckout} className="w-full bg-pink-500 text-white hover:bg-pink-600 transition-colors">
              Pay with PhonePe
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;