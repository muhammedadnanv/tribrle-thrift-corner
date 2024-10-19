import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Legal = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-bold text-pink-600 mb-8">Legal Information</h1>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="faq">
            <AccordionTrigger>FAQ</AccordionTrigger>
            <AccordionContent>
              <h3 className="font-semibold mb-2">Q: How do I place an order?</h3>
              <p className="mb-4">A: To place an order, simply browse our products, add items to your cart, and proceed to checkout. Follow the prompts to enter your shipping and payment information.</p>
              
              <h3 className="font-semibold mb-2">Q: What payment methods do you accept?</h3>
              <p className="mb-4">A: We accept major credit cards, PayPal, and bank transfers.</p>
              
              <h3 className="font-semibold mb-2">Q: How long will it take to receive my order?</h3>
              <p>A: Delivery times vary depending on your location. Typically, orders are processed within 1-2 business days and shipping takes 3-7 business days.</p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="shipping">
            <AccordionTrigger>Shipping & Returns</AccordionTrigger>
            <AccordionContent>
              <h3 className="font-semibold mb-2">Shipping</h3>
              <p className="mb-4">We offer worldwide shipping. Shipping costs are calculated based on the weight of your order and your location. You can view the shipping cost during checkout before completing your purchase.</p>
              
              <h3 className="font-semibold mb-2">Returns</h3>
              <p>If you're not satisfied with your purchase, you can return it within 30 days of receipt. Items must be unused and in their original packaging. Please contact our customer service team to initiate a return.</p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="privacy">
            <AccordionTrigger>Privacy Policy</AccordionTrigger>
            <AccordionContent>
              <p className="mb-4">At Kocizz, we are committed to protecting your privacy. We collect personal information solely for the purpose of processing your orders and improving our services.</p>
              
              <p className="mb-4">We do not sell or share your personal information with third parties for marketing purposes. Your data is securely stored and protected using industry-standard encryption methods.</p>
              
              <p>You have the right to access, modify, or delete your personal information at any time. For more details, please contact our privacy officer.</p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="terms">
            <AccordionTrigger>Terms of Service</AccordionTrigger>
            <AccordionContent>
              <p className="mb-4">By using our website and services, you agree to comply with and be bound by the following terms and conditions:</p>
              
              <ul className="list-disc pl-5 mb-4">
                <li>You must be at least 18 years old to use our services.</li>
                <li>You are responsible for maintaining the confidentiality of your account information.</li>
                <li>You agree not to use our services for any unlawful purpose.</li>
                <li>We reserve the right to modify or terminate our services at any time without notice.</li>
              </ul>
              
              <p>These terms are subject to change. It is your responsibility to check for updates regularly.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>
      <Footer />
    </div>
  );
};

export default Legal;