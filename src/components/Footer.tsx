import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">TribrleStrity Cder is your go-to destination for high-quality second-hand clothing. We believe in sustainable fashion and giving clothes a second life.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-gray-300">FAQ</a></li>
              <li><a href="#" className="hover:text-gray-300">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">123 Fashion Street</p>
            <p className="text-sm">Styleville, ST 12345</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
            <p className="text-sm">Email: info@tribrlestritycder.com</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2023 TribrleStrity Cder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;