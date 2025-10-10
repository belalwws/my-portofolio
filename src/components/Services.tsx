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
      title: "Frontend Development",
      description: "Modern, scalable React.js and Next.js applications with TypeScript, optimized for performance and user experience.",
      features: ["React.js & Next.js", "TypeScript", "State Management", "Performance Optimization"],
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Pixel-perfect, mobile-first responsive designs that work flawlessly across all devices and screen sizes.",
      features: ["Mobile-First Approach", "Cross-Browser Compatible", "Touch Interactions", "Adaptive Layouts"],
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: Layout,
      title: "UI/UX Implementation",
      description: "Transform designs into interactive, accessible user interfaces with smooth animations and micro-interactions.",
      features: ["Design Systems", "Animation Libraries", "Accessibility", "User-Centered Design"],
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: Globe,
      title: "Web Applications",
      description: "Full-featured web applications with real-time functionality, authentication, and complex state management.",
      features: ["Real-time Features", "Authentication", "API Integration", "Database Management"],
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed optimization, code splitting, lazy loading, and SEO improvements for maximum performance scores.",
      features: ["Code Splitting", "Lazy Loading", "SEO Optimization", "Core Web Vitals"],
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Agile development, code reviews, mentoring, and seamless integration with development teams.",
      features: ["Agile Methodologies", "Code Reviews", "Team Leadership", "Knowledge Sharing"],
      color: "from-primary-500 to-primary-600"
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary-500/5 to-transparent opacity-50"></div>

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

          <div className="w-24 h-1 bg-primary-gradient mx-auto rounded-full mb-6"></div>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive front-end development services to bring your vision to life
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 h-full group-hover:shadow-lg group-hover:shadow-primary-500/10">
                {/* Icon Container */}
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon size={28} className="text-white" strokeWidth={2.5} />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center space-x-2 text-sm text-gray-400"
                      >
                        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.color} rounded-full`}></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
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
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
              Ready to start your next project?
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Let's collaborate and create something amazing together
            </p>

            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 bg-primary-gradient text-white font-semibold rounded-xl hover:opacity-90 transition-opacity duration-200"
            >
              Get In Touch
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;