import React, { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { initiateUPIPayment } from '@/utils/paymentUtils';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const [fullName, setFullName] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [stateRegion, setStateRegion] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const upiId = 'adnanmuhammad4393@okicici'; // Changed to a constant
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    if (!fullName || !streetAddress || !city || !stateRegion || !zipCode || !country || !phoneNumber) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      const paymentDetails = {
        amount: total,
        upiId: upiId,
        transactionId: `ORDER-${Date.now()}`,
      };

      const response = await initiateUPIPayment(paymentDetails);
      console.log('Payment initiated:', response);

      if (response.success) {
        toast.success('Payment successful!');
        clearCart();
        navigate('/order-confirmation');
      } else {
        toast.error('Payment failed. Please try again.');
      }
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
            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
            <Input
              type="text"
              placeholder="Full Name *"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mb-4"
            />
            <Input
              type="text"
              placeholder="Street Address *"
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
              className="mb-4"
            />
            <Input
              type="text"
              placeholder="City *"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="mb-4"
            />
            <Input
              type="text"
              placeholder="State/Province/Region *"
              value={stateRegion}
              onChange={(e) => setStateRegion(e.target.value)}
              className="mb-4"
            />
            <Input
              type="text"
              placeholder="ZIP/Postal Code *"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="mb-4"
            />
            <Input
              type="text"
              placeholder="Country *"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="mb-4"
            />
            <Input
              type="tel"
              placeholder="Phone Number *"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="mb-4"
            />
            <Input
              type="email"
              placeholder="Email Address (optional)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-4"
            />
            <div className="bg-pink-50 p-4 rounded-lg mb-4">
              <h2 className="text-xl font-semibold mb-4">UPI Payment</h2>
              <Input
                type="text"
                placeholder="UPI ID"
                value={upiId}
                readOnly
                className="mb-4 bg-gray-100"
              />
              <Button onClick={handleCheckout} className="w-full bg-pink-500 text-white hover:bg-pink-600 transition-colors">
                Pay with UPI
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;