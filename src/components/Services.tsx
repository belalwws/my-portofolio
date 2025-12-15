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
      description: "Creating fast and scalable web apps using React and Next.js. I write clean TypeScript code and make sure everything runs smoothly.",
      features: ["React & Next.js", "TypeScript Magic", "Smart State Handling", "Speed Matters"],
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: Smartphone,
      title: "Mobile-Friendly Design",
      description: "Your site will look great on any device - phone, tablet, or desktop. I start with mobile and scale up from there.",
      features: ["Mobile First", "Works Everywhere", "Touch-Ready", "Flexible Layouts"],
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: Layout,
      title: "Bringing Designs to Life",
      description: "I take your designs and turn them into real, interactive websites with smooth animations that feel natural.",
      features: ["Pixel Perfect", "Smooth Animations", "Easy to Use", "Looks & Feels Great"],
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: Globe,
      title: "Complete Web Solutions",
      description: "Building full web applications with login systems, real-time updates, and everything connected properly.",
      features: ["User Login", "Live Updates", "API Connections", "Data Management"],
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: Zap,
      title: "Making Sites Lightning Fast",
      description: "I optimize code and images so your site loads quickly. Better speed means happier users and better SEO.",
      features: ["Fast Loading", "Smart Code Split", "SEO Friendly", "Top Performance"],
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: Users,
      title: "Working with Teams",
      description: "I fit right into dev teams. Code reviews, pair programming, and helping others - I enjoy collaborative work.",
      features: ["Agile Workflow", "Clean PRs", "Mentoring Others", "Sharing Knowledge"],
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
            Here&apos;s what I can help you with - from idea to launch
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
              <div className="glass rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 h-full group-hover:shadow-xl group-hover:shadow-white/10 hover:-translate-y-1 text-center">
                {/* Icon Container */}
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
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
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
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
              Let&apos;s collaborate and create something amazing together
            </p>

            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3.5 bg-primary-gradient text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300 hover:scale-105"
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