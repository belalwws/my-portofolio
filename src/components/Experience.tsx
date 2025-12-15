"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
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
    title: "Software Engineer",
    company: "Innovologia",
    location: "Saudi Arabia",
    period: "July 2025 – Dec 2025",
    type: "Hackathon Management Platform",
    description: "Built production-ready multi-tenant hackathon platform for Saudi-based tech company, collaborating with cross-functional team of designers, product managers, and stakeholders across multiple time zones.",
    achievements: [
      "Designed comprehensive database schema with 25+ tables and developed 100+ RESTful API endpoints",
      "Implemented enterprise-grade security features including RBAC, JWT authentication, CSRF protection, and rate limiting",
      "Delivered dynamic registration system and rubric-based judging with Excel exports",
      "Automated Arabic PDF certificate generation using Canvas API, processing 5,000+ emails monthly",
      "Optimized and deployed on DigitalOcean App Platform achieving p95 response time under 2 seconds",
      "Built interactive analytics dashboards and automated email workflows for real-time communications"
    ],
    techStack: [
      "Next.js 15", "React 19", "TypeScript", "Prisma", "PostgreSQL",
      "Tailwind CSS", "Radix UI", "DigitalOcean", "Neon", "Cloudinary",
      "Recharts", "Nodemailer"
    ],
    highlights: [
      "Supporting 1,000+ monthly active users with 99.9% uptime",
      "Processing 5,000+ emails monthly and generating 1,000+ certificates",
      "Multi-tenant architecture for scalable hackathon management",
      "Comprehensive audit logging system for security compliance",
      "Real-time analytics and reporting dashboards"
    ]
  };

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
            Where I&apos;ve worked and what I&apos;ve been building
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
              <div className="glass rounded-2xl p-6 border border-white/10 hover:border-primary-500/30 transition-all duration-300 group hover:shadow-xl hover:shadow-primary-500/10">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-start space-x-4 mb-4">
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
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {workExperience.title}
                        </h3>
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="text-xl font-semibold text-white">
                            {workExperience.company}
                          </h4>
                          <span className="text-gray-500">•</span>
                          <span className="text-white/80 font-medium">
                            {workExperience.type}
                          </span>
                        </div>
                      </div>
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
                    <span className="inline-flex items-center px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30">
                      <CheckCircle size={14} className="mr-2" />
                      Completed
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
                      <CheckCircle size={18} className="text-white" />
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
                      <CheckCircle size={18} className="text-white" />
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
                    <CheckCircle size={18} className="text-white" />
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
              Want to work together?
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I&apos;m always open to new projects and opportunities. 
              Let&apos;s chat about what we can build!
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