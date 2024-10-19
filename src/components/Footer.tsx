import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-pink-100 text-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">About Us</h3>
            <p className="text-sm">Kocizz is your destination for authentic Korean fashion and culture. We bring the best of K-style to your doorstep.</p>
          </div>
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-pink-600 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-pink-200 text-center text-sm">
          <p>&copy; 2023 Kocizz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;