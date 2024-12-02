import React from 'react';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import { TextGradient } from '../animations/TextGradient';
import { IconSpin } from '../animations/IconSpin';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-pink-600" />
        <div className="matrix-bg" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <FadeIn delay={0.2}>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              <TextGradient>AI Engineer & Machine Learning Expert</TextGradient>
            </h1>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transforming complex data into intelligent solutions. Specializing in deep learning,
              natural language processing, and computer vision.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.6}>
            <div className="flex justify-center space-x-6 mb-12">
              {[
                { icon: Github, href: 'https://github.com' },
                { icon: Linkedin, href: 'https://linkedin.com' },
                { icon: Mail, href: 'mailto:your@email.com' }
              ].map((item, index) => (
                <a 
                  key={index}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <IconSpin>
                    <item.icon className="w-8 h-8" />
                  </IconSpin>
                </a>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.8}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors cursor-pointer"
            >
              <Terminal className="w-5 h-5" />
              <span>View My Projects</span>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}