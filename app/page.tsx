'use client';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  Code,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Palette,
  Rocket
} from 'lucide-react';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-pink-500"></div>
    </div>
  )
});

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const skills = [
    { name: 'React/Next.js', icon: Code },
    { name: 'Tailwind CSS', icon: Palette },
    { name: 'UI/UX Design', icon: Palette },
    { name: 'SQL', icon: Rocket },
    { name: 'Java',  icon: Code },
    { name: 'C/C++',  icon: Code },
    { name: 'Node.js',  icon: Rocket },
    { name: 'Python',  icon: Code },
  ];

  const projects = [
    {
      title: 'AI Chat Bot',
      description: 'Real-time chat application with AI integration, featuring modern design and seamless UX.',
      tech: ['React', 'Node.js', 'Socket.io', 'OpenAI'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      github: 'https://github.com',    
    },
    {
      title: '3D Portfolio Website',
      description: 'Interactive 3D portfolio with Spline integration, showcasing modern web development.',
      tech: ['Next.js', 'Spline', 'Framer Motion', 'Three.js'],
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg',
      github: 'https://github.com',    },
    {
      title: 'Fitness Tracker App',
      description: 'Web app for tracking heartbeat, blood, spo2.',
      tech: ['React Native', 'Firebase', 'python'],
      image: 'https://fitnesscfgyms.com/wp-content/uploads/2021/10/fitness-center.jpeg',
      github: 'https://github.com',    },
    {
      title: 'Task Recommendation System',
      description: 'Task Recommendation System using Machine Learning (Emotion Detection) and Natural Language Processing.',
      tech: ['React.js','Python'],
      image: 'https://img.freepik.com/premium-vector/meditation-multitasking-businessman-practicing-yoga-man-sitting-lotus-pose-flat-vector-illustration-business-management-concentration-concept-banner-website-design-landing-web-page_179970-6576.jpg',
      github: 'https://github.com',
    },
    {
      title: 'Travel Planner',
      description: 'Full-stack travel planning application with user authentication, itinerary management, and booking features.',
      tech: ['Next.js', 'MongoDB', 'Tailwind CSS', 'Auth0','API'],
      image: 'https://media.istockphoto.com/id/1497396873/photo/ready-for-starting-my-beach-holiday.jpg?s=612x612&w=0&k=20&c=Rfb7IbYAZR1hNTF6KUDYq8CVu9Yr4wRgK2VLZIZyORY=',  
      github: 'https://github.com',
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 w-full z-50 glass-card border-0 border-b border-gray-800/50 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-gradient-pink"
            >
              <button onClick={() => scrollToSection('home')} className="focus:outline-none"
              >Portfolio</button>
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.1 }}
                  className="text-white hover:text-pink-400 transition-colors duration-300"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Clean Dark Background */}
        <div className="absolute inset-0 z-0 bg-black"></div>

        {/* Isolated spotlight for robot only */}
        <div className="absolute inset-0 z-5">
          <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full" 
               style={{
                 background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 25%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 75%)',
                 filter: 'blur(60px)'
               }}>
          </div>
        </div>

        {/* 3D Model Container - Left Side */}
        <div className="relative w-1/2 h-screen">
          <div className="absolute inset-0">
            {/* Spline Model - Clean without spotlight effects */}
            <div className="absolute inset-0 z-10">
              <div className="relative w-full h-full">
                <Spline 
scene="https://prod.spline.design/bens31yahBcn4mMn/scene.splinecode" 
className="w-full h-full"
                  onWheel={() => false}
                />
              </div>
            </div>
          </div>
          
          {/* Hide Spline Watermark */}
          <div className="absolute bottom-4 right-4 w-36 h-10 bg-black z-30 rounded"></div>
        </div>

        {/* Content - Right Side */}
        <div className="relative z-20 w-1/2 px-8 lg:px-16">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 animate-gradient">
               Sobiya{' '} Devi G
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Passionate B.Tech IT student blending tech skills with creativity to build smart, user-driven digital solutions.
Strong in Full Stack Development and Data Analysis, with clear communication and natural leadership.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="group relative bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download CV
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button 
                onClick={() => scrollToSection('projects')}
                className="group border-2 border-purple-500/50 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <ArrowDown className="w-5 h-5" />
                  My Works
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </motion.div>

            {/* Stats or Features */}
            <motion.div 
              className="flex gap-8 mt-12 pt-8 border-t border-purple-500/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            ><h5>Where logic meets creativity — that’s where I code.</h5>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-gray-400 text-sm">Scroll Down</span>
            <ArrowDown className="w-6 h-6 text-purple-400" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">About Me</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I’m a passionate developer who combines strong technical skills with a motivated attitude to create impactful digital solutions. Currently pursuing a B.Tech in Information Technology, I excel in communication and leadership—confidently presenting complex ideas with clarity. 
              With a growing interest in Full Stack Development and Data Analysis, I strive to merge analytical thinking with creativity to build modern, user-focused applications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Code, title: 'Development', desc: 'Full-stack development with modern frameworks' },
              { icon: Palette, title: 'Design', desc: 'Beautiful, user-centered design experiences' },
              { icon: Rocket, title: 'Innovation', desc: 'Cutting-edge solutions and 3D experiences' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-card glass-card-hover p-8 text-center hover-3d"
              >
                <item.icon className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Skills & Expertise</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card glass-card-hover p-3 text-center hover-3d"
              >
                <div className="flex items-center mb-5">
                  <skill.icon className="w-8 h-8 text-pink-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Featured Projects</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-card glass-card-hover overflow-hidden hover-3d group"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
                  >
                    View Project <ExternalLink size={16} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-t from-black to-gray-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Let's Connect</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Ready to bring your next project to life? Let's discuss how we can create something amazing together.
            </p>

            <div className="flex justify-center space-x-8 mb-12">
              {[
                { icon: Github, href: 'https://github.com/G-Sobiya-Devi', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/sobiya-devi-g-4b4b962a1/', label: 'LinkedIn' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-16 h-16 glass-card glass-card-hover rounded-full flex items-center justify-center hover-3d"
                  aria-label={social.label}
                >
                  <social.icon className="w-8 h-8 text-pink-400" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Creative Developer. Crafted with passion and cutting-edge technology.
          </p>
        </div>
      </footer>
    </div>
  );
}