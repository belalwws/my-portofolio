"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect, useMemo } from "react";
import Image from "next/image";
import {
  Code,
  Users,
  Award,
  Calendar,
  MapPin,
  Briefcase,
  CheckCircle
} from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Statistics with animation
  const [stats, setStats] = useState({
    experience: 0,
    projects: 0,
    technologies: 0,
    satisfaction: 0
  });

  const finalStats = useMemo(() => ({
    experience: 2,
    projects: 10,
    technologies: 15,
    satisfaction: 100
  }), []);

  useEffect(() => {
    if (isInView) {
      const animateStats = () => {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const stepDuration = duration / steps;
        let step = 0;

        const interval = setInterval(() => {
          step++;
          const progress = step / steps;
          const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic

          setStats({
            experience: Math.round(finalStats.experience * easeProgress),
            projects: Math.round(finalStats.projects * easeProgress),
            technologies: Math.round(finalStats.technologies * easeProgress),
            satisfaction: Math.round(finalStats.satisfaction * easeProgress)
          });

          if (step >= steps) {
            clearInterval(interval);
            setStats(finalStats);
          }
        }, stepDuration);

        return () => clearInterval(interval);
      };

      const timeout = setTimeout(animateStats, 300);
      return () => clearTimeout(timeout);
    }
  }, [isInView, finalStats]);

  const statisticsData = [
    {
      icon: Calendar,
      value: stats.experience,
      suffix: "+",
      label: "Years Experience",
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: Code,
      value: stats.projects,
      suffix: "+",
      label: "Projects Completed",
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: Award,
      value: stats.technologies,
      suffix: "+",
      label: "Technologies",
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: Users,
      value: stats.satisfaction,
      suffix: "%",
      label: "Client Satisfaction",
      color: "from-primary-500 to-primary-600"
    }
  ];

  const educationData = {
    degree: "Bachelor's in Computer Engineering",
    institution: "Alexandria Higher Institute of Engineering & Technology",
    location: "Alexandria, Egypt",
    period: "Sep 2020 – Jul 2025",
    description: "Comprehensive curriculum in software engineering, web technologies, system architecture, and project management."
  };

  const achievements = [
    "Lead front-end development for comprehensive Islamic educational platform",
    "Integrated LiveKit WebRTC for real-time virtual classrooms",
    "Built 4 specialized role-specific dashboards with optimized state management",
    "Achieved fully responsive design with performance optimization",
    "Developed mental health platform with AI chatbot and 3D virtual assistant",
    "Created Netflix-inspired streaming platform with advanced features"
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="w-24 h-1 bg-primary-gradient mx-auto rounded-full mb-6"></div>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating exceptional digital experiences through clean code and innovative design
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content - Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Professional Summary</h3>
            
            <div className="prose prose-lg prose-invert">
              <p className="text-gray-300 leading-relaxed mb-6">
                Passionate Software Engineer with expertise in building scalable, high-performance web applications.
                Specialized in modern JavaScript ecosystem including React, Next.js, and full-stack development.
                Strong problem-solving skills with a focus on clean code, best practices, and delivering exceptional
                user experiences that drive business growth.
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                Currently leading front-end development for a comprehensive Islamic educational platform at
                Lisan Alhekma Academy, architecting multi-role systems with real-time virtual classroom capabilities,
                serving diverse user bases with cutting-edge web technologies.
              </p>
            </div>

            {/* Key Achievements */}
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-2"
                >
                  <CheckCircle size={16} className="text-primary-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{achievement}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Education</h3>
            
            <div className="glass rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg border-2 border-white/10">
                  <Image
                    src="/images/aiet.jpg"
                    alt="AIET Logo"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-2">{educationData.degree}</h4>
                  <p className="text-primary-400 font-semibold mb-1">{educationData.institution}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center space-x-1">
                      <MapPin size={14} />
                      <span>{educationData.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{educationData.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{educationData.description}</p>
                </div>
              </div>
            </div>

            {/* Current Role */}
            <div className="glass rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl shadow-lg">
                  <Briefcase size={24} className="text-white" strokeWidth={2.5} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-2">Front-End Developer</h4>
                  <p className="text-secondary-400 font-semibold mb-1">Lisan Alhekma Academy</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center space-x-1">
                      <MapPin size={14} />
                      <span>Alexandria, Egypt</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>March 2025 – Present</span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Leading front-end development for comprehensive Islamic educational platform with 
                    multi-role architecture serving Students, Teachers, Academic Supervisors, and Admins.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Statistics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {statisticsData.map((stat, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 text-center border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 group"
            >
              {/* Icon */}
              <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon size={24} className="text-white" strokeWidth={2.5} />
              </div>

              {/* Number display */}
              <div className="mb-2">
                <span className="text-3xl lg:text-4xl font-bold gradient-text">
                  {stat.value}
                </span>
                <span className="text-2xl font-bold text-primary-400">
                  {stat.suffix}
                </span>
              </div>

              {/* Label */}
              <p className="text-gray-300 text-xs font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;