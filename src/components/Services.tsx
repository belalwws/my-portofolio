"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code,
  Layout,
  Smartphone,
  Globe,
  Zap,
  Users
} from "lucide-react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: Code,
      title: "Building Modern Interfaces",
      description: "Creating fast and scalable web apps using React and Next.js with clean TypeScript code.",
      features: ["React & Next.js", "TypeScript", "State Management", "Performance"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Smartphone,
      title: "Mobile-Friendly Design",
      description: "Your site will look great on any device - phone, tablet, or desktop.",
      features: ["Mobile First", "Responsive", "Touch-Ready", "Flexible"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Layout,
      title: "Bringing Designs to Life",
      description: "Turning designs into real, interactive websites with smooth animations.",
      features: ["Pixel Perfect", "Animations", "Intuitive UX", "Clean UI"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Globe,
      title: "Complete Web Solutions",
      description: "Building full web applications with authentication, APIs, and real-time features.",
      features: ["User Auth", "Live Updates", "API Integration", "Database"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Making Sites Lightning Fast",
      description: "Optimizing code and assets for blazing fast load times and better SEO.",
      features: ["Fast Loading", "Code Splitting", "SEO Optimized", "Core Web Vitals"],
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Working with Teams",
      description: "Collaborative development with code reviews, pair programming, and mentoring.",
      features: ["Agile", "Code Reviews", "Mentoring", "Documentation"],
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary-500/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>

          <div className="w-24 h-1 bg-primary-gradient mx-auto rounded-full mb-6" />

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here&apos;s what I can help you with - from idea to launch
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full glass rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className={`relative w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <service.icon size={28} className="text-white" strokeWidth={2} />
                    {/* Icon glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity`} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 text-center">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed text-sm text-center">
                  {service.description}
                </p>

                {/* Features as tags */}
                <div className="flex flex-wrap justify-center gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-3 py-1 text-xs font-medium text-gray-300 bg-white/5 rounded-full border border-white/10 hover:border-white/20 transition-colors"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="glass rounded-2xl p-10 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to start your next project?
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              Let&apos;s collaborate and create something amazing together
            </p>

            <motion.button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-4 overflow-hidden rounded-xl font-semibold"
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500" />
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
              {/* Content */}
              <span className="relative text-white">Get In Touch</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;