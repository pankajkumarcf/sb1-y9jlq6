import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from '../animations/FadeIn';
import { TextGradient } from '../animations/TextGradient';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    title: 'Neural Network Visualization',
    description: 'Interactive 3D visualization of neural networks in real-time, helping developers understand model architecture.',
    technologies: ['Python', 'TensorFlow', 'Three.js', 'WebGL'],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com',
  },
  {
    title: 'AI-Powered Code Assistant',
    description: 'Development of an intelligent code completion and suggestion system using transformer models.',
    technologies: ['PyTorch', 'FastAPI', 'React', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com',
  },
  {
    title: 'Computer Vision Analytics',
    description: 'Real-time object detection and tracking system for security applications.',
    technologies: ['OpenCV', 'YOLO', 'Python', 'TensorRT'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-12">
            <TextGradient>Featured Projects</TextGradient>
          </h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={0.2 * index}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 text-sm bg-purple-900 text-purple-200 rounded-full"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={project.githubUrl}
                      className="flex items-center text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      <Github className="w-5 h-5 mr-1" />
                      Code
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={project.liveUrl}
                      className="flex items-center text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 mr-1" />
                      Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}