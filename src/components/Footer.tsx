"use client";

import React, { useState, useEffect } from 'react';
import { Heart, Star, Smile } from 'lucide-react';

const Footer = () => {
  const [year, setYear] = useState<string>('');

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-pink-50 pt-12 pb-6 border-t-4 border-yellow-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-pink-600">Blessing Kids Play School</h3>
            <p className="text-gray-600">
              Nurturing young minds with love, care, and a passion for learning. 
              Children from every background learn together as one family!
            </p>
            <div className="flex gap-4">
              <div className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <Heart className="text-pink-500 w-5 h-5" />
              </div>
              <div className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <Star className="text-yellow-500 w-5 h-5" />
              </div>
              <div className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <Smile className="text-blue-500 w-5 h-5" />
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-600 hover:text-pink-500 transition-colors">About Us</a></li>
              <li><a href="/academics" className="text-gray-600 hover:text-pink-500 transition-colors">Academics</a></li>
              <li><a href="/admission" className="text-gray-600 hover:text-pink-500 transition-colors">Admission</a></li>
              <li><a href="/gallery" className="text-gray-600 hover:text-pink-500 transition-colors">Gallery</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">Contact Us</h4>
            <p className="text-gray-600">No. 25, MG Road, Near Bus Stand, Puducherry - 605001</p>
            <p className="text-gray-600">Phone: +91 98765 43210</p>
            <p className="text-gray-600">Email: info@blessingkidsschool.in</p>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-pink-200">
          <p className="text-gray-500 text-sm">
            © {year} Blessing Kids Play School. Made with ❤️ for our little stars.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
