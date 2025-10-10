"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Heart,
  Code2,
  Coffee
} from "lucide-react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/belalwws", 
      label: "GitHub",
      color: "hover:text-gray-400"
    },
    { 
      icon: Linkedin, 
      href: "https://linkedin.com/in/belal-ahmed", 
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    { 
      icon: Mail, 
      href: "mailto:belal.ahmed121sq1@gmail.com", 
      label: "Email",
      color: "hover:text-green-400"
    },
    { 
      icon: Phone, 
      href: "tel:+201128300607", 
      label: "Phone",
      color: "hover:text-purple-400"
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-slate-900/80 via-slate-900/90 to-black border-t border-primary-500/20">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-2">
                  <span className="gradient-text">Belal</span>
                  <span className="text-white ml-2">Ahmed</span>
                </h3>
                <p className="text-primary-400 font-semibold mb-4">Front-End Developer</p>
                <p className="text-gray-300 leading-relaxed max-w-md">
                  Passionate about creating exceptional digital experiences through clean code and innovative design. 
                  Specializing in React.js, Next.js, and modern web technologies.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin size={16} className="text-primary-400" />
                  <span className="text-sm">Alexandria, Egypt</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail size={16} className="text-primary-400" />
                  <a href="mailto:belal.ahmed121sq1@gmail.com" className="text-sm hover:text-white transition-colors">
                    belal.ahmed121sq1@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone size={16} className="text-primary-400" />
                  <a href="tel:+201128300607" className="text-sm hover:text-white transition-colors">
                    +201128300607
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + (index * 0.05) }}
                  >
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-white hover:gradient-text transition-all duration-300 text-sm flex items-center space-x-2 group"
                    >
                      <div className="w-1 h-1 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span>{link.name}</span>
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Connect Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xl font-bold text-white mb-6">Connect With Me</h4>
              
              {/* Social Links - Enhanced */}
              <div className="flex space-x-3 mb-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + (index * 0.1),
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ scale: 1.15, y: -4, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group relative p-4 glass rounded-2xl text-gray-300 ${social.color} transition-all duration-300 border border-white/10 hover:border-primary-500/30 hover:shadow-lg hover:shadow-primary-500/20`}
                    aria-label={social.label}
                  >
                    <social.icon size={22} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-primary-gradient opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
                  </motion.a>
                ))}
              </div>

              {/* Current Status */}
              <div className="glass rounded-xl p-4 border border-white/10">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium text-sm">Available for work</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Open to new opportunities and exciting projects
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10 py-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {new Date().getFullYear()} Belal Ahmed Mohamed.</span>
              <span>Made with</span>
              <Heart size={16} className="text-red-400 animate-pulse" />
              <span>and</span>
              <Coffee size={16} className="text-orange-400" />
              <span>using</span>
              <Code2 size={16} className="text-blue-400" />
            </div>

            {/* Tech Stack */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Built with</span>
              <span className="text-primary-400 font-medium">Next.js</span>
              <span>•</span>
              <span className="text-secondary-400 font-medium">Tailwind CSS</span>
              <span>•</span>
              <span className="text-purple-400 font-medium">Framer Motion</span>
            </div>

            {/* Back to Top Button - Enhanced */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center space-x-2 px-6 py-3 bg-primary-gradient rounded-2xl text-white font-bold text-sm shadow-lg shadow-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 overflow-hidden"
            >
              <ArrowUp size={18} className="relative z-10 group-hover:-translate-y-2 transition-transform duration-300" />
              <span className="relative z-10">Back to Top</span>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </motion.button>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary-gradient rounded-full"></div>
      </div>
    </footer>
  );
};

export default Footer;