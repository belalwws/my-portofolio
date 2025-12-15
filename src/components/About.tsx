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
      label: "Years Building",
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: Code,
      value: stats.projects,
      suffix: "+",
      label: "Real Projects",
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: Award,
      value: stats.technologies,
      suffix: "+",
      label: "Tech Stack",
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: Users,
      value: stats.satisfaction,
      suffix: "%",
      label: "Success Rate",
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
    "Built production hackathon platform serving 1,000+ users monthly",
    "Designed database with 25+ tables and 100+ API endpoints",
    "Automated 5,000+ emails and generated 1,000+ certificates monthly",
    "Developed a mental health app with AI chat and 3D virtual assistant",
    "Built a movie streaming site similar to Netflix",
    "Always write clean code that other developers can easily understand"
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
            A bit more about who I am and what I do
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
                I&apos;m a Software Engineer who loves building web apps that actually work well. 
                I spend most of my time with React and Next.js, making sure the code is clean and 
                the user experience is smooth. My goal? Write code that&apos;s easy to read and maintain.
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                Recently completed a project at Innovologia in Saudi Arabia where I built a full hackathon 
                management platform. It was a production system handling 1,000+ monthly users with multi-tenant 
                architecture, automated certificates, and real-time analytics. Really proud of what we built!
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
            
            <div className="glass rounded-2xl p-8 border border-white/10 hover:border-primary-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-1">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg border-2 border-white/10 group-hover:scale-105 transition-transform">
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

            {/* Recent Work */}
            <div className="glass rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg border-2 border-white/10 bg-white flex-shrink-0">
                  <Image
                    src="/images/innovologia.jpg"
                    alt="Innovologia Logo"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-2">Software Engineer</h4>
                  <p className="text-secondary-400 font-semibold mb-1">Innovologia</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center space-x-1">
                      <MapPin size={14} />
                      <span>Saudi Arabia</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>July 2025 – Dec 2025</span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Built production-ready hackathon management platform with multi-tenant architecture, 
                    serving 1,000+ users with automated workflows and real-time analytics.
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
              className="glass rounded-2xl p-6 text-center border border-white/10 hover:border-primary-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 group hover:-translate-y-1"
            >
              {/* Icon */}
              <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
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