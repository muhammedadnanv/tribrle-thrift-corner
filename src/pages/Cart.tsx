import React from 'react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import CheckoutForm from '@/components/CheckoutForm';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-bold text-pink-600 mb-8">Your Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b border-gray-200 py-4">
                <div className="flex items-center">
                  <img src={`https://picsum.photos/seed/${item.id}/100/100`} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-600">₩{item.price.toFixed(2)} x {item.quantity}</p>
                  </div>
                </div>
                <Button onClick={() => removeFromCart(item.id)} variant="destructive">Remove</Button>
              </div>
            ))}
            <div className="mt-8">
              <p className="text-xl font-bold">Total: ₩{total.toFixed(2)}</p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="mt-4 bg-pink-500 text-white hover:bg-pink-600 transition-colors">
                    Proceed to Checkout
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <CheckoutForm total={total} />
                </DialogContent>
              </Dialog>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;