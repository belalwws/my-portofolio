"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect, useMemo } from "react";
import {
  Code,
  Layout,
  Database,
  Globe,
  Zap,
  Users
} from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [animatedSkills, setAnimatedSkills] = useState<Record<string, number>>({});

  const skillCategories = useMemo(() => [
    {
      icon: Code,
      title: "Core Languages",
      color: "from-primary-500 to-primary-600",
      skills: [
        { name: "JavaScript (ES6+)", level: 93 },
        { name: "TypeScript", level: 88 },
        { name: "HTML5", level: 96 },
        { name: "CSS3", level: 94 }
      ]
    },
    {
      icon: Globe,
      title: "React Ecosystem",
      color: "from-primary-500 to-primary-600",
      skills: [
        { name: "React.js", level: 94 },
        { name: "Next.js", level: 89 },
        { name: "Redux", level: 86 },
        { name: "Context API", level: 88 }
      ]
    },
    {
      icon: Layout,
      title: "UI Styling",
      color: "from-primary-500 to-primary-600",
      skills: [
        { name: "Tailwind CSS", level: 93 },
        { name: "CSS Modules", level: 82 },
        { name: "Responsive Design", level: 95 },
        { name: "Mobile-First", level: 91 }
      ]
    },
    {
      icon: Zap,
      title: "Daily Tools",
      color: "from-primary-500 to-primary-600",
      skills: [
        { name: "Git & GitHub", level: 89 },
        { name: "VS Code", level: 94 },
        { name: "Postman", level: 83 },
        { name: "Jira", level: 78 }
      ]
    },
    {
      icon: Database,
      title: "Libraries I Use",
      color: "from-primary-500 to-primary-600",
      skills: [
        { name: "Axios", level: 88 },
        { name: "React Router", level: 87 },
        { name: "Framer Motion", level: 84 },
        { name: "Three.js", level: 72 }
      ]
    },
    {
      icon: Users,
      title: "Work Approach",
      color: "from-primary-500 to-primary-600",
      skills: [
        { name: "Writing Tests", level: 79 },
        { name: "Code Reviews", level: 88 },
        { name: "Optimization", level: 86 },
        { name: "Team Work", level: 84 }
      ]
    }
  ], []);

  // Animate skill bars when component comes into view
  useEffect(() => {
    if (isInView) {
      // Initialize all skills to 0
      const initialSkills: Record<string, number> = {};
      skillCategories.forEach(category => {
        category.skills.forEach(skill => {
          const key = `${category.title}-${skill.name}`;
          initialSkills[key] = 0;
        });
      });
      setAnimatedSkills(initialSkills);

      // Animate each skill bar
      skillCategories.forEach((category, categoryIndex) => {
        category.skills.forEach((skill, skillIndex) => {
          const key = `${category.title}-${skill.name}`;
          const delay = (categoryIndex * 150) + (skillIndex * 80) + 300;

          setTimeout(() => {
            const duration = 1200;
            const steps = 60;
            const stepDuration = duration / steps;
            let step = 0;

            const interval = setInterval(() => {
              step++;
              const progress = step / steps;
              const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
              const currentLevel = Math.round(skill.level * easeProgress);

              setAnimatedSkills(prev => ({
                ...prev,
                [key]: currentLevel
              }));

              if (step >= steps) {
                clearInterval(interval);
                // Ensure final value is set
                setAnimatedSkills(prev => ({
                  ...prev,
                  [key]: skill.level
                }));
              }
            }, stepDuration);
          }, delay);
        });
      });
    }
  }, [isInView, skillCategories]);

  // Specializations data
  const specializations = [
    "React.js Ecosystem",
    "Modern JavaScript (ES6+)",
    "Responsive Web Design",
    "Performance Optimization",
    "State Management",
    "TypeScript Development",
    "Component Architecture",
    "3D Web Technologies"
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary-gradient mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Expertise in modern web technologies and development practices
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass rounded-2xl p-8 border border-white/10 hover:border-primary-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 group hover:-translate-y-1"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <category.icon size={20} className="text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const skillKey = `${category.title}-${skill.name}`;
                  const animatedLevel = animatedSkills[skillKey] || 0;

                  return (
                    <div key={skillIndex} className="space-y-2">
                      {/* Skill Name and Percentage */}
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium text-sm">
                          {skill.name}
                        </span>
                        <span className="text-white font-semibold text-sm">
                          {animatedLevel}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-2 bg-gray-800/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${animatedLevel}%` }}
                          transition={{
                            duration: 1.5,
                            delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5,
                            ease: "easeOut"
                          }}
                          className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full shadow-lg shadow-primary-500/30"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specializations Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Specializations</h3>

          <div className="flex flex-wrap justify-center gap-3">
            {specializations.map((specialization, index) => (
              <div
                key={index}
                className="glass px-5 py-2.5 rounded-xl border border-white/10 hover:border-primary-500/30 hover:bg-primary-500/5 transition-all duration-300 cursor-default hover:-translate-y-0.5"
              >
                <span className="text-gray-300 font-medium text-sm">
                  {specialization}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;