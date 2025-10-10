"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Code, Layout, Github } from "lucide-react";
import Image from "next/image";

const Templates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const templates = [
    {
      id: 1,
      title: "Leon Template",
      description: "Modern and creative agency template with smooth animations and clean design",
      image: "/images/leon.png",
      techStack: ["HTML5", "CSS3"],
      liveUrl: "https://belalwws.github.io/HTML_CSS_TEMP-1/",
      githubUrl: "https://github.com/belalwws/HTML_CSS_TEMP-1",
      color: "from-primary-500 to-primary-600"
    },
    {
      id: 2,
      title: "Kasper Template",
      description: "Professional business template with elegant layout and responsive design",
      image: "/images/kasper.JPG",
      techStack: ["HTML5", "CSS3"],
      liveUrl: "https://belalwws.github.io/HTML_CSS_TEMP-2",
      githubUrl: "https://github.com/belalwws/HTML_CSS_TEMP-2",
      color: "from-primary-500 to-primary-600"
    },
    {
      id: 3,
      title: "Tailwind CSS Template",
      description: "Modern template built with Tailwind CSS utility-first framework",
      image: "/images/tailwindCss-Temp.JPG",
      techStack: ["HTML5", "Tailwind CSS"],
      liveUrl: "https://belalwws.github.io/tailwindCss-Temp/",
      githubUrl: "https://github.com/belalwws/tailwindCss-Temp",
      color: "from-primary-500 to-primary-600"
    }
  ];

  return (
    <section id="templates" className="py-20 relative overflow-hidden bg-slate-900/30">
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
            HTML/CSS <span className="gradient-text">Templates</span>
          </h2>
          <div className="w-20 h-1 bg-primary-gradient mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Clean and responsive templates built with modern web technologies
          </p>
        </motion.div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {templates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                {/* Template Image */}
                <div className="relative w-full h-48 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                  <Image
                    src={template.image}
                    alt={template.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                  
                  {/* Icon Badge */}
                  <div className={`absolute top-4 left-4 w-10 h-10 bg-gradient-to-br ${template.color} rounded-lg flex items-center justify-center shadow-lg`}>
                    <Layout size={18} className="text-white" />
                  </div>
                </div>

                {/* Template Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2">
                    {template.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {template.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1.5">
                      {template.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-white/10 text-gray-300 rounded-lg text-xs border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2">
                    <a
                      href={template.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 px-6 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-gray-100 transition-all duration-200 text-sm w-full shadow-lg"
                    >
                      <ExternalLink size={16} />
                      <span>View Template</span>
                    </a>

                    <a
                      href={template.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-200 text-sm w-full"
                    >
                      <Github size={16} />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="glass rounded-2xl p-6 max-w-2xl mx-auto border border-white/10">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Code size={20} className="text-primary-400" />
              <h3 className="text-lg font-bold text-white">
                Clean Code & Best Practices
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              All templates are built with semantic HTML5, modern CSS3, and vanilla JavaScript.
              Fully responsive and optimized for performance.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Templates;

