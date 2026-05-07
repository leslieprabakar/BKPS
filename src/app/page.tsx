"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Star, Sparkles, BookOpen, Palette, Music, Trophy } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-yellow-50 to-blue-100 px-4 py-20">
        {/* Floating Decorative Elements */}
        <div className="absolute top-10 left-10 animate-bounce text-pink-400 opacity-50"><Heart size={48} /></div>
        <div className="absolute bottom-20 right-10 animate-pulse text-yellow-400 opacity-50"><Star size={64} /></div>
        <div className="absolute top-1/4 right-20 animate-spin text-blue-400 opacity-50" style={{ animationDuration: '10s' }}><Sparkles size={48} /></div>
        <div className="absolute bottom-1/3 left-20 animate-bounce text-green-400 opacity-50" style={{ animationDelay: '1s' }}><Palette size={48} /></div>

        <div className="max-w-6xl mx-auto text-center z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-pink-600 mb-6 leading-tight">
              Welcome to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                Blessing Kids Play School
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto font-medium">
              A magical world where curiosity meets creativity. Rooted in Indian values, we nurture your little stars with love, laughter, and a lifetime of learning! 🌟
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/admission" 
                className="px-8 py-4 bg-pink-500 text-white rounded-full font-bold text-lg hover:bg-pink-600 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                Join Our Family <ArrowRight size={20} />
              </Link>
              <Link 
                href="/about" 
                className="px-8 py-4 bg-white text-pink-500 border-2 border-pink-500 rounded-full font-bold text-lg hover:bg-pink-50 transition-all transform hover:scale-105 shadow-md flex items-center justify-center gap-2"
              >
                Learn More <Heart size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Parents Love Us</h2>
            <div className="h-1.5 w-24 bg-yellow-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <BookOpen className="text-blue-500" />, title: "Creative Learning", desc: "Interactive lessons that spark imagination and curiosity.", color: "bg-blue-50" },
              { icon: <Palette className="text-pink-500" />, title: "One Family", desc: "Children from all over India learn together as one big family.", color: "bg-pink-50" },
              { icon: <Music className="text-purple-500" />, title: "Music & Dance", desc: "Classical dance (Bharatanatyam), folk songs from all regions, and fun rhymes.", color: "bg-purple-50" },
              { icon: <Trophy className="text-yellow-500" />, title: "Yoga & Sports", desc: "Surya Namaskar, traditional games from all over India, and fun physical activities.", color: "bg-yellow-50" },
            ].map((feature, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className={`${feature.color} p-8 rounded-3xl shadow-sm border-2 border-transparent hover:border-white transition-all text-center`}
              >
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Placeholder Section */}
      <section className="py-20 bg-pink-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Glimpses of Happiness</h2>
            <p className="text-gray-600">Capturing the most precious moments of our little learners</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-white rounded-3xl overflow-hidden shadow-md border-4 border-white group relative cursor-pointer">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400 font-medium">
                  Image Placeholder {i}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white font-bold">Happy Moments!</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/gallery" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-pink-500 border-2 border-pink-500 rounded-full font-bold hover:bg-pink-50 transition-colors"
            >
              View Full Gallery <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to start the journey?</h2>
          <p className="text-xl mb-10 opacity-90">Give your child the best start in life with Indian values, modern learning, and a nurturing environment.</p>
          <Link 
            href="/admission" 
            className="px-10 py-4 bg-yellow-400 text-blue-900 rounded-full font-extrabold text-xl hover:bg-yellow-300 transition-all transform hover:scale-110 shadow-xl"
          >
            Enroll Now! 🚀
          </Link>
        </div>
      </section>
    </div>
  );
}
