"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Home, Heart, Star, Sparkles, BookOpen, Palette, Music, Trophy, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

const CampusPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-100 to-blue-100 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-20">
          <Sparkles size={120} className="text-green-400 animate-pulse" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-green-600 mb-6"
          >
            Our Beautiful Campus
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            A safe, colorful, and stimulating environment designed to inspire young minds and encourage exploration.
          </motion.p>
        </div>
      </section>

      {/* Campus Highlights Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">A Home Away From Home</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our campus is more than just a building; it's a vibrant ecosystem where ALL children feel secure and happy - regardless of religion, region, or background. Every corner is designed with safety and creativity in mind. We celebrate festivals from ALL religions - Diwali, Eid, Christmas, Pongal, Holi, and more!
            </p>
            <div className="space-y-4">
              {[
                { icon: <Heart className="text-pink-500" />, title: "Safe & Secure", desc: "CCTV monitored premises and child-safe furniture." },
                { icon: <Star className="text-yellow-500" />, title: "Colorful Spaces", desc: "Bright classrooms that stimulate visual learning." },
                { icon: <Sparkles className="text-blue-500" />, title: "Nature Integrated", desc: "Green spaces for outdoor play and nature study." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="bg-white p-2 rounded-lg shadow-sm">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-gray-800">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="relative aspect-square bg-gray-200 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
              Campus Main Image Placeholder
            </div>
          </div>
        </div>
      </section>

      {/* Facility Tour Section */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Explore Our Facilities</h2>
            <p className="text-gray-600">Every space is a learning opportunity</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "The Play Zone", desc: "A dedicated area for physical activity and social interaction.", color: "bg-pink-100" },
              { title: "Creative Corner", desc: "Where art, music, and imagination come to life.", color: "bg-blue-100" },
              { title: "Reading Nook", desc: "A quiet, cozy space for early literacy and storytelling.", color: "bg-yellow-100" },
              { title: "The Garden", desc: "Learning about nature through gardening and outdoor exploration.", color: "bg-green-100" },
              { title: "Dining Hall", desc: "Healthy meals - both vegetarian & non-vegetarian, with South Indian & North Indian specials.", color: "bg-purple-100" },
              { title: "Nap Area", desc: "A peaceful environment for well-deserved rest and rejuvenation.", color: "bg-orange-100" },
            ].map((facility, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className={`p-8 rounded-3xl ${facility.color} border-2 border-white shadow-sm`}
              >
                <div className="aspect-video bg-white/50 rounded-2xl mb-4 flex items-center justify-center text-gray-400 text-xs font-medium">
                  Image Placeholder
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{facility.title}</h3>
                <p className="text-gray-600 text-sm">{facility.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center px-4">
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl p-12 text-white shadow-2xl">
          <h2 className="text-3xl font-bold mb-6">Experience the Magic in Person</h2>
          <p className="text-xl mb-8 opacity-90">We invite you to visit our campus and see how we nurture our little stars.</p>
          <Link 
            href="/contact" 
            className="px-8 py-4 bg-yellow-400 text-blue-900 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 inline-block shadow-lg"
          >
            Book a Tour 🚀
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CampusPage;
