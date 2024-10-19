import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-kerala text-coconut-light py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">About Us</h3>
            <p className="text-sm">Kerala Vintage is your destination for authentic, pre-loved Kerala fashion. We celebrate the rich textile heritage of God's Own Country.</p>
          </div>
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-spice-light transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-spice-light transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-spice-light transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-spice-light transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">123 Spice Market Street</p>
            <p className="text-sm">Kochi, Kerala 682001</p>
            <p className="text-sm">Phone: (0484) 123-4567</p>
            <p className="text-sm">Email: info@keralavintage.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-spice-light text-center text-sm">
          <p>&copy; 2023 Kerala Vintage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;