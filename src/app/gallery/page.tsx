"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon, PlayCircle, Heart, Star, Camera } from 'lucide-react';

const GalleryPage = () => {
  const categories = ["All", "Classroom", "Playground", "Events", "Arts & Crafts", "Sports"];
  
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header Section */}
      <section className="relative py-20 bg-gradient-to-br from-yellow-100 to-pink-100 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-20">
          <Camera size={120} className="text-pink-400 animate-spin" style={{ animationDuration: '15s' }} />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-pink-600 mb-6"
          >
            Our Happy Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            A collection of smiles, laughter, and wonderful memories from our little stars.
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat, i) => (
            <motion.button 
              key={i}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`px-6 py-2 rounded-full font-bold transition-all ${i === 0 ? 'bg-pink-500 text-white shadow-lg' : 'bg-white text-gray-600 border border-gray-200 hover:border-pink-300 hover:text-pink-500'}`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-10 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(12)].map((_, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-square bg-gray-100 rounded-3xl overflow-hidden shadow-md border-4 border-white cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                {i % 3 === 0 ? (
                  <div className="text-center">
                    <PlayCircle size={48} className="mx-auto mb-2 text-pink-400" />
                    <span>Video Placeholder {i + 1}</span>
                  </div>
                ) : (
                  <div className="text-center">
                    <ImageIcon size={48} className="mx-auto mb-2 text-gray-300" />
                    <span>Image Placeholder {i + 1}</span>
                  </div>
                )}
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <h4 className="text-lg font-bold">Wonderful Moment {i + 1}</h4>
                  <p className="text-sm opacity-90">Capturing the joy of learning</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-20 bg-pink-50 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Featured School Tour</h2>
          <div className="aspect-video bg-gray-300 rounded-3xl overflow-hidden shadow-2xl border-8 border-white relative">
            <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold text-xl">
              Main School Tour Video Placeholder
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 transition-transform">
                <PlayCircle size={48} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
