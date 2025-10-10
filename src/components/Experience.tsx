"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Calendar,
  MapPin,
  Briefcase,
  CheckCircle,
  ExternalLink
} from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const workExperience = {
    title: "Front-End Developer",
    company: "Lisan Alhekma Academy",
    location: "Alexandria, Egypt",
    period: "March 2025 – Present",
    type: "Educational Platform",
    description: "Lead front-end development for comprehensive Islamic educational platform with multi-role architecture (Students, Teachers, Academic Supervisors, Admins) serving diverse user base.",
    achievements: [
      "Architected full RTL Arabic support with Islamic theming",
      "Implemented advanced RBAC system with JWT authentication",
      "Integrated LiveKit WebRTC for real-time virtual classrooms",
      "Built hierarchical course management supporting four types",
      "Delivered four specialized role-specific dashboards",
      "Achieved fully responsive design with performance optimization"
    ],
    techStack: [
      "Next.js 14", "TypeScript", "React 18", "Tailwind CSS", 
      "Radix UI", "Redux Toolkit", "React Query", "Zustand", 
      "LiveKit (WebRTC)", "JWT", "RESTful APIs"
    ],
    highlights: [
      "Real-time virtual classrooms with live streaming",
      "Screen sharing and dynamic permissions",
      "Session recording with playback capabilities",
      "Custom enrollment workflows",
      "Progress tracking system"
    ]
  };

  const techStackColors = [
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-pink-500",
    "from-green-500 to-emerald-500",
    "from-orange-500 to-red-500",
    "from-indigo-500 to-purple-500",
    "from-pink-500 to-rose-500"
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary-gradient mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Professional experience building scalable web applications and leading development teams
          </p>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          {/* Timeline Line */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 via-purple-500 to-secondary-500 rounded-full"></div>
            
            {/* Experience Item */}
            <div className="relative pl-20 pb-12">
              {/* Timeline Node */}
              <div className="absolute left-4 top-8 w-8 h-8 bg-primary-gradient rounded-full flex items-center justify-center border-4 border-slate-900">
                <Briefcase size={14} className="text-white" />
              </div>

              {/* Content Card */}
              <div className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors duration-300 group">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {workExperience.title}
                    </h3>
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="text-xl font-semibold text-primary-400">
                        {workExperience.company}
                      </h4>
                      <span className="text-gray-500">•</span>
                      <span className="text-secondary-400 font-medium">
                        {workExperience.type}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} />
                        <span>{workExperience.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{workExperience.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="mt-4 lg:mt-0">
                    <span className="inline-flex items-center px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium border border-green-500/30">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      Currently Working
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-base mb-6 leading-relaxed">
                  {workExperience.description}
                </p>

                {/* Achievements Grid */}
                <div className="grid lg:grid-cols-2 gap-6 mb-6">
                  {/* Key Achievements */}
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                      <CheckCircle size={18} className="text-green-400" />
                      <span>Key Achievements</span>
                    </h5>
                    <div className="space-y-2">
                      {workExperience.achievements.map((achievement, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-2 text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                      <CheckCircle size={18} className="text-purple-400" />
                      <span>Project Highlights</span>
                    </h5>
                    <div className="space-y-2">
                      {workExperience.highlights.map((highlight, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-2 text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm leading-relaxed">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h5 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                    <CheckCircle size={18} className="text-blue-400" />
                    <span>Tech Stack</span>
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {workExperience.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-white/10 text-gray-300 rounded-lg text-xs border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in working together?
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I&apos;m always open to discussing new opportunities and exciting projects. 
              Let&apos;s create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-2.5 bg-primary-gradient text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200 flex items-center justify-center space-x-2 text-sm"
              >
                <span>Get In Touch</span>
                <ExternalLink size={14} />
              </button>

              <a
                href="https://github.com/belalwws"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors duration-200 flex items-center justify-center space-x-2 text-sm"
              >
                <span>View GitHub</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;