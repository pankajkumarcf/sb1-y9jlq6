import React from 'react';
import { BookOpen, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from '../animations/FadeIn';
import { TextGradient } from '../animations/TextGradient';
import { ElectricityEffect } from './ElectricityEffect';

interface TimelineItemProps {
  title: string;
  organization: string;
  date: string;
  description: string;
  type: 'education' | 'experience';
  index: number;
  position: 'left' | 'right';
}

function TimelineItem({ title, organization, date, description, type, index, position }: TimelineItemProps) {
  return (
    <FadeIn delay={0.2 * index} direction={position === 'left' ? 'right' : 'left'}>
      <div className={`flex ${position === 'left' ? 'justify-end pr-8 md:pr-12' : 'justify-start pl-8 md:pl-12'} mb-8`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className={`w-full md:w-[calc(50%-2rem)] bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-700 relative group ${
            position === 'left' ? 'text-right' : 'text-left'
          }`}
        >
          {/* Hover glow effect */}
          <motion.div
            className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.15), transparent 70%)',
            }}
          />

          <motion.div
            whileHover={{ scale: 1.2, rotate: 360 }}
            className={`absolute ${
              position === 'left' ? '-right-4' : '-left-4'
            } top-6 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50`}
          >
            {type === 'education' ? <BookOpen className="w-4 h-4 text-white" /> : <Briefcase className="w-4 h-4 text-white" />}
          </motion.div>
          
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="inline-block px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm font-semibold mb-3 border border-purple-700/50"
          >
            {date}
          </motion.span>
          
          <motion.h3
            whileHover={{ scale: 1.02 }}
            className="text-xl font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            {title}
          </motion.h3>
          
          <motion.h4
            whileHover={{ scale: 1.02 }}
            className="text-purple-400 font-semibold mb-2"
          >
            {organization}
          </motion.h4>
          
          <p className="text-gray-400">{description}</p>
        </motion.div>
      </div>
    </FadeIn>
  );
}

export function Timeline({ type }: { type: 'education' | 'experience' }) {
  const items = type === 'education' ? educationData : experienceData;
  
  return (
    <section id={type} className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4a044e20_1px,transparent_1px),linear-gradient(to_bottom,#4a044e20_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-12">
            <TextGradient>{type === 'education' ? 'Education' : 'Experience'}</TextGradient>
          </h2>
        </FadeIn>
        
        <div className="relative">
          <ElectricityEffect />
          <div className="relative z-10">
            {items.map((item, index) => (
              <TimelineItem
                key={index}
                {...item}
                type={type}
                index={index}
                position={index % 2 === 0 ? 'left' : 'right'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const educationData = [
  {
    title: 'Ph.D. in Artificial Intelligence',
    organization: 'Stanford University',
    date: '2020-2023',
    description: 'Research focused on advanced deep learning architectures and their applications in real-world scenarios.',
  },
  {
    title: "Master's in Computer Science",
    organization: 'MIT',
    date: '2018-2020',
    description: 'Specialized in machine learning and computer vision with a focus on neural networks.',
  },
  {
    title: 'B.S. in Computer Science',
    organization: 'UC Berkeley',
    date: '2014-2018',
    description: 'Foundation in computer science with emphasis on AI and mathematics.',
  },
];

const experienceData = [
  {
    title: 'Senior AI Engineer',
    organization: 'Google AI',
    date: '2021-Present',
    description: 'Leading a team developing next-generation language models and implementing cutting-edge AI solutions.',
  },
  {
    title: 'Machine Learning Engineer',
    organization: 'OpenAI',
    date: '2019-2021',
    description: 'Worked on large-scale language models and contributed to breakthrough AI research projects.',
  },
  {
    title: 'AI Research Intern',
    organization: 'DeepMind',
    date: '2018-2019',
    description: 'Conducted research on reinforcement learning algorithms and their applications.',
  },
];