"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-100 to-purple-100 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-20">
          <Mail size={120} className="text-blue-400 animate-pulse" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-blue-600 mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Have questions? We'd love to hear from you! Reach out to us and we'll get back to you as soon as possible.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Phone className="text-pink-500" />, title: "Call Us", detail: "+91 98765 43210", desc: "Mon-Sat: 9 AM - 5 PM", color: "bg-pink-50" },
            { icon: <Mail className="text-blue-500" />, title: "Email Us", detail: "info@blessingkidsschool.in", desc: "Response within 24 hours", color: "bg-blue-50" },
            { icon: <MapPin className="text-yellow-500" />, title: "Visit Us", detail: "No. 25, MG Road, Near Bus Stand, Puducherry - 605001", desc: "Open for tours by appointment", color: "bg-yellow-50" },
          ].map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-3xl border-2 border-transparent hover:border-gray-200 ${item.color} shadow-sm text-center`}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-lg font-semibold text-gray-700 mb-1">{item.detail}</p>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-blue-100">
          <div className="bg-blue-600 p-8 text-white text-center">
            <h2 className="text-3xl font-bold">Send us a Message</h2>
            <p className="opacity-90">We're here to help you and your child!</p>
          </div>
          
          <form className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Your Name</label>
              <input type="text" placeholder="Enter your name" className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-400 outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Email Address</label>
              <input type="email" placeholder="hello@example.com" className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-400 outline-none transition-all" />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-bold text-gray-700">Message</label>
              <textarea rows={5} placeholder="How can we help you?" className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-400 outline-none transition-all"></textarea>
            </div>
            <div className="text-center mt-4">
              <button className="px-10 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 mx-auto">
                Send Message <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Find Us Here</h2>
          <p className="text-gray-600">Our school is located in the heart of Puducherry (Formerly Pondicherry)</p>
        </div>
        <div className="aspect-video bg-gray-200 rounded-3xl overflow-hidden shadow-lg border-4 border-white relative">
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
            Google Maps Placeholder
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
