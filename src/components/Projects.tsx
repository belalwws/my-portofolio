"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  ExternalLink,
  Github,
  Calendar,
  Heart,
  Play,
  FileText,
  Building,
  Users
} from "lucide-react";
import Image from "next/image";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const featuredProjects = [
    {
      id: 1,
      icon: Building,
      image: "/images/hackpro.png",
      title: "HackPro SaaS",
      subtitle: "Multi-Tenant Hackathon Management Platform",
      year: "2025",
      description: "A comprehensive multi-tenant SaaS platform for managing hackathons with advanced features including no-code builders, team management, and automated certificate generation.",
      features: [
        "Multi-tenancy with data isolation & custom domains",
        "No-code registration form & landing page builders",
        "Team formation with skill-based grouping",
        "Weighted scoring with multi-stage evaluation",
        "Auto-generated PDF certificates with email delivery",
        "RBAC with 6 roles, JWT auth & security features"
      ],
      techStack: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "shadcn/ui", "Three.js", "TipTap", "Cloudinary"],
      liveUrl: "https://stingray-app-3dffp.ondigitalocean.app/",
      linkedinDemo: "#",
      color: "from-violet-500 to-purple-600",
      achievements: "Supporting 1,000+ MAU with 99.9% uptime, processing 5,000+ emails monthly"
    },
    {
      id: 2,
      icon: Users,
      image: "/images/rushd.png",
      title: "Rushd Academy",
      subtitle: "Multi-Tenant Educational SaaS Platform",
      year: "2025",
      description: "Led the Front-End Development of a comprehensive Multi-Tenant SaaS platform for educational academies with strict data isolation, real-time features, and financial reporting.",
      features: [
        "Admin Dashboard with Server Components & Streaming",
        "Student Management with full CRUD operations",
        "Course Scheduling & Real-time Attendance",
        "Financial Reporting with Invoicing & Payment tracking",
        "Dynamic routing for multi-page application",
        "Backend API with Node.js/Express.js"
      ],
      techStack: ["Next.js 15", "React 19", "TypeScript", "Node.js", "Express.js", "Tailwind CSS", "Server Components"],
      liveUrl: "https://rushd-system-academy.vercel.app/",
      linkedinDemo: "#",
      color: "from-emerald-500 to-teal-600",
      achievements: "Architected high-performance dashboard with React Server Components"
    },
    {
      id: 3,
      icon: Heart,
      image: "/images/vitaphe.png",
      title: "MindMed",
      subtitle: "Mental Health Platform",
      year: "2024",
      description: "A mental health platform where users can take psychological tests and chat with an AI assistant. I added a 3D character using Three.js to make it more engaging and friendly.",
      features: [
        "Take psychology tests with smart scoring",
        "Chat with AI for mental health support",
        "Cool 3D assistant built with Three.js",
        "See your results in real-time",
        "Track your progress over time",
        "Different dashboards for users and admins"
      ],
      techStack: ["Next.js", "Tailwind CSS", "Redux", "Three.js", "REST APIs", "WebGL", "Chart.js", "JWT"],
      liveUrl: "https://mind-med-graduation-project.vercel.app",
      linkedinDemo: "#",
      color: "from-rose-500 to-pink-600",
      achievements: "Reduced assessment completion time by 40%"
    },
    {
      id: 4,
      icon: Play,
      image: "/images/bakwatch.png",
      title: "Bak Watch",
      subtitle: "Streaming Platform",
      year: "2024",
      description: "A movie streaming site inspired by Netflix. Users can browse movies, save favorites, and get recommendations. Built it with React and hooked up to the TMDb API for all the movie data.",
      features: [
        "Browse tons of movies and TV shows",
        "Search and filter what you want",
        "Save your favorite content",
        "Get recommendations based on your taste",
        "Custom video player I built",
        "Smooth animations and fast loading"
      ],
      techStack: ["React.js", "Tailwind CSS", "React Router", "Framer Motion", "TMDb API", "Context API"],
      liveUrl: "https://bak-watch.web.app",
      githubUrl: "https://github.com/belalwws/bak-watch",
      color: "from-red-500 to-orange-600",
      achievements: "Smooth animations with Framer Motion and route prefetching"
    },
    {
      id: 5,
      icon: FileText,
      image: "/images/bak-blog.png",
      title: "Bak Blog",
      subtitle: "Content Management System",
      year: "2024",
      description: "A blogging platform where people can write and publish posts. It has different user roles - admins can do everything, editors can moderate, and regular users can write their own posts.",
      features: [
        "Create and manage blog posts",
        "Different permissions for different users",
        "Rich text editor for writing",
        "Support for code blocks and markdown",
        "Save drafts before publishing",
        "Comments with moderation tools"
      ],
      techStack: ["React.js", "Tailwind CSS", "Redux", "REST APIs", "JWT Authentication", "React Hook Form"],
      liveUrl: "https://bak-blog-1.onrender.com",
      linkedinDemo: "#",
      color: "from-blue-500 to-cyan-600",
      achievements: "Client-side caching with optimistic UI updates"
    },
    {
      id: 6,
      icon: Building,
      image: "/images/baktech.png",
      title: "Bak Technology",
      subtitle: "Corporate Website",
      year: "2024",
      description: "A clean corporate website for a tech company. Shows their services, past work, and client reviews. Made sure it loads super fast and looks good on all devices.",
      features: [
        "Clear showcase of services",
        "Portfolio with past projects",
        "Client testimonials and reviews",
        "Contact form with validation",
        "Optimized for Google SEO",
        "Works great on mobile"
      ],
      techStack: ["React.js", "Tailwind CSS", "Performance Optimization", "SEO", "Framer Motion"],
      liveUrl: "https://bak-technology.web.app",
      linkedinDemo: "#",
      color: "from-amber-500 to-yellow-600",
      achievements: "Achieved 95+ PageSpeed score with optimization"
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary-gradient mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Some of the projects I&apos;ve worked on recently
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 h-full hover:-translate-y-1 hover:shadow-xl hover:shadow-white/10">
                {/* Project Image */}
                <div className="relative w-full h-48 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <project.icon size={22} className="text-white" />
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 flex items-center space-x-1 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-lg text-xs text-white">
                    <Calendar size={14} />
                    <span>{project.year}</span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{project.subtitle}</p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed text-sm mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="mb-4 px-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>
                  <div className="grid grid-cols-1 gap-1.5">
                    {project.features.slice(0, 4).map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-2 text-xs"
                      >
                        <div className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-4 px-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-white/10 text-gray-300 rounded-lg text-xs border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievement Badge */}
                <div className="mb-4 px-6">
                  <div className="inline-flex items-center px-3 py-1.5 bg-white/10 rounded-lg border border-white/20">
                    <span className="text-xs font-medium text-white">
                      🏆 {project.achievements}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 px-6 pb-6">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center justify-center space-x-2 px-6 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-gray-50 hover:shadow-lg transition-all duration-300 flex-1 text-sm shadow-lg"
                  >
                    <ExternalLink size={16} className="group-hover/btn:rotate-12 transition-transform" />
                    <span>Live Demo</span>
                  </a>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center justify-center space-x-2 px-6 py-3 border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 hover:border-primary-500/50 transition-all duration-300 text-sm"
                    >
                      <Github size={16} className="group-hover/btn:scale-110 transition-transform" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <div className="glass rounded-2xl p-6 max-w-2xl mx-auto border border-white/10">
            <h3 className="text-xl font-bold text-white mb-3">
              Want to see more projects?
            </h3>
            <p className="text-gray-300 mb-5 leading-relaxed text-sm">
              Check out my GitHub for more projects, contributions, and open-source work.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://github.com/belalwws"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-primary-gradient text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200 flex items-center justify-center space-x-2 text-sm"
              >
                <Github size={16} />
                <span>View GitHub Profile</span>
                <ExternalLink size={16} />
              </a>

              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-2.5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors duration-200 flex items-center justify-center space-x-2 text-sm"
              >
                <span>Discuss Your Project</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;