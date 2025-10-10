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
      icon: Heart,
      image: "/images/vitaphe.png",
      title: "MindMed",
      subtitle: "Mental Health Platform",
      year: "2024",
      description: "Comprehensive mental health platform with psychological assessments, intelligent scoring algorithms, AI chatbot for consultations, and 3D virtual assistant using Three.js/WebGL.",
      features: [
        "Psychological assessments with AI scoring",
        "AI chatbot for mental health consultations",
        "3D virtual assistant using Three.js/WebGL",
        "Real-time result visualization",
        "Progress tracking and analytics",
        "Secure authentication with role-based dashboards"
      ],
      techStack: ["Next.js", "Tailwind CSS", "Redux", "Three.js", "REST APIs", "WebGL", "Chart.js", "JWT"],
      liveUrl: "https://mind-med-graduation-project.vercel.app",
      linkedinDemo: "#",
      color: "from-primary-500 to-primary-600",
      achievements: "Reduced assessment completion time by 40%"
    },
    {
      id: 2,
      icon: Play,
      image: "/images/bakwatch.png",
      title: "Bak Watch",
      subtitle: "Streaming Platform",
      year: "2024",
      description: "Netflix-inspired streaming platform with dynamic catalog, detailed movie/series pages, advanced search/filtering, user watchlists, and personalized recommendations.",
      features: [
        "Dynamic movie/series catalog",
        "Advanced search and filtering system",
        "User watchlists and favorites",
        "Personalized recommendations",
        "Custom video player with controls",
        "Responsive grid layouts with lazy loading"
      ],
      techStack: ["React.js", "Tailwind CSS", "React Router", "Framer Motion", "TMDb API", "Context API"],
      liveUrl: "https://bak-watch.web.app",
      githubUrl: "https://github.com/belalwws/bak-watch",
      color: "from-primary-500 to-primary-600",
      achievements: "Smooth animations with Framer Motion and route prefetching"
    },
    {
      id: 3,
      icon: FileText,
      image: "/images/bak-blog.png",
      title: "Bak Blog",
      subtitle: "Content Management System",
      year: "2024",
      description: "Full-featured blog platform with CRUD operations for posts, categories, and comments, implementing RBAC (admin, editor, user) and content moderation.",
      features: [
        "CRUD operations for posts and categories",
        "Role-based access control (RBAC)",
        "Rich text editor with media uploads",
        "Syntax highlighting and markdown support",
        "Draft saving and SEO optimization",
        "Comment system with moderation"
      ],
      techStack: ["React.js", "Tailwind CSS", "Redux", "REST APIs", "JWT Authentication", "React Hook Form"],
      liveUrl: "https://bak-blog-1.onrender.com",
      linkedinDemo: "#",
      color: "from-primary-500 to-primary-600",
      achievements: "Client-side caching with optimistic UI updates"
    },
    {
      id: 4,
      icon: Building,
      image: "/images/baktech.png",
      title: "Bak Technology",
      subtitle: "Corporate Website",
      year: "2024",
      description: "Professional corporate website with clear information architecture, service showcase, portfolio, testimonials, and multi-step contact forms.",
      features: [
        "Professional service showcase",
        "Interactive portfolio gallery",
        "Client testimonials section",
        "Multi-step contact forms",
        "SEO optimization strategies",
        "Mobile-first responsive design"
      ],
      techStack: ["React.js", "Tailwind CSS", "Performance Optimization", "SEO", "Framer Motion"],
      liveUrl: "https://bak-technology.web.app",
      linkedinDemo: "#",
      color: "from-primary-500 to-primary-600",
      achievements: "Achieved 95+ PageSpeed score with optimization"
    },
    {
      id: 5,
      icon: Users,
      image: "/images/bakwatch.png",
      title: "Social Media Platform",
      subtitle: "Full-Stack Social Network",
      year: "Jun 2024",
      description: "Full-stack social media platform with user authentication, post creation/deletion, light/dark mode, and responsive design across all devices.",
      features: [
        "User authentication (login, logout, register)",
        "Create, update, and delete posts",
        "Light mode and dark mode toggle",
        "Responsive design for all devices",
        "Real-time updates",
        "User profile management"
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://666b6ccae5d72bc237cf7e1f--chimerical-sprite-ba8f2f.netlify.app/",
      githubUrl: "https://github.com/a7medk7aledak/social-media-platform-project",
      color: "from-primary-500 to-primary-600",
      achievements: "Full CRUD operations with MongoDB integration"
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent"></div>
      
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
            Showcasing innovative web applications built with modern technologies and best practices
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
              <div className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                {/* Project Image */}
                <div className="relative w-full h-48 bg-gradient-to-br from-slate-800 to-slate-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

                  {/* Icon Badge */}
                  <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center shadow-lg`}>
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
                          <div className={`w-1.5 h-1.5 bg-gradient-to-r ${project.color} rounded-full flex-shrink-0`}></div>
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
                    <div className={`inline-flex items-center px-3 py-1.5 bg-gradient-to-r ${project.color} bg-opacity-20 rounded-lg border border-white/20`}>
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
                      className="flex items-center justify-center space-x-2 px-6 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-gray-100 transition-all duration-200 flex-1 text-sm shadow-lg"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-200 text-sm"
                      >
                        <Github size={16} />
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