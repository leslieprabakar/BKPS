"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, FileText, User, Mail, Phone, MapPin, Send } from 'lucide-react';

const AdmissionPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header Section */}
      <section className="relative py-20 bg-gradient-to-br from-pink-100 to-blue-100 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-20">
          <CheckCircle size={120} className="text-pink-400 animate-bounce" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-pink-600 mb-6"
          >
            Join Our Family
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            We are excited to welcome your little one to Blessing Kids Play School. Start their journey of joy and discovery today!
          </motion.p>
        </div>
      </section>

      {/* Admission Process Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Admission Process</h2>
          <p className="text-gray-600">Simple steps to enroll your child</p>
          <div className="h-1.5 w-24 bg-pink-400 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: "01", title: "Inquiry", desc: "Fill out our online inquiry form or visit us for a campus tour.", color: "bg-blue-50", icon: <Mail className="text-blue-500" /> },
            { step: "02", title: "Interaction", desc: "A friendly interaction with the child and parents to understand needs.", color: "bg-pink-50", icon: <User className="text-pink-500" /> },
            { step: "03", title: "Enrollment", desc: "Submit the required documents and secure your child's seat.", color: "bg-yellow-50", icon: <FileText className="text-yellow-500" /> },
          ].map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-3xl border-2 border-transparent hover:border-pink-200 ${item.color} shadow-sm text-center`}
            >
              <div className="text-4xl font-black text-gray-300 mb-4">{item.step}</div>
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-pink-100">
          <div className="bg-pink-500 p-8 text-white text-center">
            <h2 className="text-3xl font-bold">Admission Inquiry Form</h2>
            <p className="opacity-90">Fill in the details and we'll get back to you shortly!</p>
          </div>
          
          <form className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Parent's Name</label>
              <input type="text" placeholder="Enter your name" className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-400 outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Child's Name</label>
              <input type="text" placeholder="Enter child's name" className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-400 outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Child's Age</label>
              <input type="text" placeholder="e.g. 3 years" className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-400 outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Phone Number</label>
              <input type="tel" placeholder="+91 98765 43210" className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-400 outline-none transition-all" />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-bold text-gray-700">Email Address</label>
              <input type="email" placeholder="hello@example.com" className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-400 outline-none transition-all" />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-bold text-gray-700">Message/Queries</label>
              <textarea rows={4} placeholder="Tell us more about your child..." className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-400 outline-none transition-all"></textarea>
            </div>
            <div className="md:col-span-2 text-center mt-4">
              <button className="px-10 py-4 bg-pink-500 text-white rounded-full font-bold text-lg hover:bg-pink-600 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 mx-auto">
                Submit Application <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AdmissionPage;
