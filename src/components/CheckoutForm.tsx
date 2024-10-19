import React, { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { initiateUPIPayment } from '@/utils/paymentUtils';
import { useNavigate } from 'react-router-dom';
import { DialogClose } from '@/components/ui/dialog';

interface CheckoutFormProps {
  total: number;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ total }) => {
  const { clearCart } = useCart();
  const [fullName, setFullName] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [stateRegion, setStateRegion] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const upiId = 'adnanmuhammad4393@okicici';
  const navigate = useNavigate();

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
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Checkout</h2>
      <Input
        type="text"
        placeholder="Full Name *"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Street Address *"
        value={streetAddress}
        onChange={(e) => setStreetAddress(e.target.value)}
      />
      <Input
        type="text"
        placeholder="City *"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Input
        type="text"
        placeholder="State/Province/Region *"
        value={stateRegion}
        onChange={(e) => setStateRegion(e.target.value)}
      />
      <Input
        type="text"
        placeholder="ZIP/Postal Code *"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Country *"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <Input
        type="tel"
        placeholder="Phone Number *"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <Input
        type="email"
        placeholder="Email Address (optional)"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="bg-pink-50 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">UPI Payment</h2>
        <Input
          type="text"
          placeholder="UPI ID"
          value={upiId}
          readOnly
          className="mb-4 bg-gray-100"
        />
        <DialogClose asChild>
          <Button onClick={handleCheckout} className="w-full bg-pink-500 text-white hover:bg-pink-600 transition-colors">
            Pay with UPI
          </Button>
        </DialogClose>
      </div>
    </div>
  );
};

export default CheckoutForm;