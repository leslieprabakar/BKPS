"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Beaker, Cpu, Book, Flower2, Music, Trophy, Dumbbell, Languages } from 'lucide-react';

const AcademicsPage = () => {
  const labs = [
    { name: "Physics Lab", icon: <Beaker className="text-blue-500" />, desc: "Exploring the laws of nature through simple, fun experiments.", color: "bg-blue-50" },
    { name: "Chemistry Lab", icon: <Beaker className="text-green-500" />, desc: "Magic with colors and reactions in a safe, guided environment.", color: "bg-green-50" },
    { name: "Biology Lab", icon: <Flower2 className="text-red-500" />, desc: "Discovering the wonders of plants and animals.", color: "bg-red-50" },
    { name: "Computer Lab", icon: <Cpu className="text-purple-500" />, desc: "Introduction to digital creativity and basic coding for kids.", color: "bg-purple-50" },
    { name: "Library", icon: <Book className="text-yellow-500" />, desc: "A cozy corner for storytelling and discovering new worlds.", color: "bg-yellow-50" },
    { name: "Yoga Studio", icon: <Flower2 className="text-indigo-500" />, desc: "Mindfulness and flexibility for a healthy mind and body.", color: "bg-indigo-50" },
    { name: "English Hub", icon: <Languages className="text-pink-500" />, desc: "Developing communication skills through phonics and drama.", color: "bg-pink-50" },
    { name: "Sports Arena", icon: <Trophy className="text-orange-500" />, desc: "Physical education and team games to build strength and spirit.", color: "bg-orange-50" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header Section */}
      <section className="relative py-20 bg-gradient-to-br from-yellow-100 to-orange-100 px-4 overflow-hidden">
        <div className="absolute top-0 left-0 p-10 opacity-20">
          <Trophy size={120} className="text-orange-400 animate-bounce" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-orange-600 mb-6"
          >
            Academics & Facilities
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Where learning is an adventure! We provide state-of-the-art facilities to spark curiosity and foster growth.
          </motion.p>
        </div>
      </section>

      {/* Lab Facilities Grid */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Specialized Labs</h2>
          <p className="text-gray-600">Designed specifically for little explorers</p>
          <div className="h-1.5 w-24 bg-orange-400 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {labs.map((lab, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`${lab.color} p-8 rounded-3xl border-2 border-transparent hover:border-orange-200 shadow-sm transition-all`}
            >
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                {lab.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{lab.name}</h3>
              <p className="text-gray-600 leading-relaxed">{lab.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sports & Physical Education Section */}
      <section className="py-20 bg-blue-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-blue-600 mb-4">Sports & Physical Growth</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe a healthy body houses a healthy mind. Our sports program is designed to develop motor skills, coordination, and a spirit of healthy competition.
              </p>
              <ul className="space-y-4">
                {[
                  "Indoor Play Area with safe cushioning",
                  "Mini Football and Basketball courts",
                  "Rhythmic Gymnastics and Yoga",
                  "Annual Sports Day celebrations"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <div className="bg-blue-500 rounded-full p-1">
                      <Trophy size={16} className="text-white" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <div className="relative aspect-video bg-gray-200 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                Video Placeholder: Kids Playing Sports
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center px-4">
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
          <h2 className="text-3xl font-bold mb-6">Want to see our facilities in person?</h2>
          <p className="text-xl mb-8 opacity-90">Book a campus tour today and experience the magic of learning!</p>
          <Link 
            href="/contact" 
            className="px-8 py-4 bg-yellow-400 text-blue-900 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 inline-block"
          >
            Schedule a Visit 🚀
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AcademicsPage;
