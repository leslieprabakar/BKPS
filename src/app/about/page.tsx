"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Target, Star, Award, Users, BookOpen } from 'lucide-react';

const AboutPage = () => {
  const messages = [
    {
      role: "Chairman",
      name: "Dr. Rajesh Kumar",
      message: "Our vision is to create a sanctuary of learning where every child feels valued and inspired. Rooted in Indian values with a global perspective, we prepare our children for the future while preserving our rich cultural heritage.",
      color: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-600"
    },
    {
      role: "Director",
      name: "Mr. Venkatraman",
      message: "At Blessing Kids, we don't just teach; we nurture. Our approach combines modern Montessori methods with traditional Indian values like respect, discipline, and unity. We welcome you to join our family.",
      color: "bg-pink-50",
      borderColor: "border-pink-200",
      textColor: "text-pink-600"
    },
    {
      role: "Principal",
      name: "Mrs. Lakshmi Narayanan",
      message: "Every day at our school is a new adventure. From the first Om in the morning assembly to the first word read, we celebrate every milestone. Our dedicated staff ensures a safe, happy, and stimulating environment.",
      color: "bg-yellow-50",
      borderColor: "border-yellow-200",
      textColor: "text-yellow-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-100 to-pink-100 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-20">
          <Star size={120} className="text-yellow-400 animate-pulse" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-purple-600 mb-6"
          >
            About Our School
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Discover the heart and soul of Blessing Kids Play School, where we turn tiny steps into giant leaps of learning.
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-8 rounded-3xl bg-blue-50 border-2 border-blue-100 shadow-sm"
          >
            <div className="bg-blue-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Target className="text-white" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Vision</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              To be a beacon of inclusive early childhood education - welcoming students of all religions, regions, and backgrounds. We foster a generation of creative, confident, and compassionate individuals who are lifelong learners and responsible citizens of India.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-8 rounded-3xl bg-pink-50 border-2 border-pink-100 shadow-sm"
          >
            <div className="bg-pink-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Heart className="text-white" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-pink-600 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              To provide a safe, nurturing, and stimulating environment for ALL children - regardless of religion, region, caste, or background. Every child is equal here. We help children explore their potential through play-based learning, artistic expression, and social interaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Messages Section */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Messages from our Leaders</h2>
            <div className="h-1.5 w-24 bg-purple-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {messages.map((leader, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`p-8 rounded-3xl border-2 ${leader.borderColor} ${leader.color} shadow-sm relative overflow-hidden`}
              >
                <div className="absolute -top-4 -right-4 opacity-10">
                  <Award size={100} className={leader.textColor} />
                </div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white rounded-full mb-4 shadow-md flex items-center justify-center text-2xl font-bold text-gray-400 border-2 border-gray-100">
                    IMG
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">{leader.name}</h3>
                  <p className={`font-medium mb-4 ${leader.textColor}`}>{leader.role}</p>
                  <p className="text-gray-600 italic leading-relaxed">
                    "{leader.message}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What We Believe In</h2>
          <p className="text-gray-600">The pillars that support our educational journey</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Star className="text-yellow-500" />, title: "Excellence", desc: "Striving for the best in every small step." },
            { icon: <Users className="text-blue-500" />, title: "Community", desc: "Building strong bonds between home and school." },
            { icon: <BookOpen className="text-green-500" />, title: "Curiosity", desc: "Encouraging the 'Why?' and 'How?' of everything." },
            { icon: <Heart className="text-pink-500" />, title: "Compassion", desc: "Teaching kindness and empathy from day one." },
          ].map((value, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm text-center"
            >
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h4>
              <p className="text-gray-600 text-sm">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
