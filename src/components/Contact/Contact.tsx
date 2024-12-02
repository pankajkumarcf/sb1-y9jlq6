import React, { useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from '../animations/FadeIn';
import { TextGradient } from '../animations/TextGradient';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-4">
              <TextGradient>Get in Touch</TextGradient>
            </h2>
            <p className="text-gray-400">
              Interested in collaboration or have a project in mind? Let's discuss how we can work together.
            </p>
          </FadeIn>
        </div>

        <div className="max-w-xl mx-auto">
          <FadeIn delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white transition-all duration-200 hover:border-purple-500"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white transition-all duration-200 hover:border-purple-500"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white transition-all duration-200 hover:border-purple-500"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-12 flex justify-center space-x-6">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="mailto:your@email.com"
                className="flex items-center text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Mail className="w-6 h-6 mr-2" />
                your@email.com
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="flex items-center text-gray-400 hover:text-purple-400 transition-colors"
              >
                <MessageSquare className="w-6 h-6 mr-2" />
                Let's chat
              </motion.a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}