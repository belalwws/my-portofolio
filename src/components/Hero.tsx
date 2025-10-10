"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, MapPin, Phone, Mail, Globe, ArrowRight, Coffee } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation effect
  useEffect(() => {
    const roles = [
      "Software Engineer",
      "Full-Stack Developer",
      "React & Next.js Expert",
      "Problem Solver"
    ];
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentRole.length) {
          setDisplayText(currentRole.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentRole.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((currentRoleIndex + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, currentRoleIndex, isDeleting]);

  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const contactInfo = [
    { icon: MapPin, text: "Alexandria, Egypt", link: null },
    { icon: Phone, text: "+201128300607", link: "tel:+201128300607" },
    { icon: Mail, text: "belal.ahmed121sq1@gmail.com", link: "mailto:belal.ahmed121sq1@gmail.com" },
    { icon: Globe, text: "BakTech Channel", link: "https://www.youtube.com/@BakTech" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(102, 126, 234, 0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(102, 126, 234, 0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-gray-300 mb-4 text-center lg:text-left"
            >
              Hello, I&apos;m
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight text-center lg:text-left"
            >
              <span className="gradient-text">Belal Ahmed</span>
              <br />
              <span className="text-white">Mohamed</span>
            </motion.h1>

            {/* Dynamic Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-10"
            >
              <p className="text-xl md:text-2xl lg:text-4xl font-semibold gradient-text h-12 md:h-14 flex items-center justify-center lg:justify-start">
                {displayText}
                <span className="ml-2 w-1 h-8 md:h-10 bg-primary-500 animate-pulse"></span>
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base md:text-lg text-gray-300 mb-6 max-w-2xl leading-relaxed text-center lg:text-left"
            >
              Passionate Software Engineer specializing in building scalable, high-performance web applications.
              Expert in modern JavaScript ecosystem with deep knowledge of React, Next.js, and full-stack development.
              Turning complex problems into elegant solutions.
            </motion.p>

            {/* Coffee Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex items-center space-x-2 mb-8 justify-center lg:justify-start"
            >
              <div className="flex items-center space-x-2 px-4 py-2 glass rounded-full border border-white/10">
                <Coffee size={18} className="text-amber-400" />
                <span className="text-sm text-gray-300">Fueled by coffee & code</span>
              </div>
            </motion.div>

            {/* Contact Info Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10"
            >
              {contactInfo.map((info, index) => {
                const content = (
                  <>
                    <div className="p-2.5 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg shadow-lg group-hover:shadow-primary-500/20 transition-shadow duration-300">
                      <info.icon size={16} className="text-white" />
                    </div>
                    <span className="text-gray-300 font-medium text-sm">{info.text}</span>
                  </>
                );

                if (info.link) {
                  return (
                    <a
                      key={index}
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center justify-center lg:justify-start space-x-3 glass rounded-xl p-3 border border-white/5 hover:border-white/10 transition-all duration-300 group cursor-pointer"
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <div
                    key={index}
                    className="flex items-center justify-center lg:justify-start space-x-3 glass rounded-xl p-3 border border-white/5 hover:border-white/10 transition-all duration-300 group"
                  >
                    {content}
                  </div>
                );
              })}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 bg-primary-gradient text-white font-semibold rounded-xl hover:opacity-90 transition-opacity duration-200 flex items-center justify-center space-x-2"
              >
                <span>View My Work</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 glass border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Let&apos;s Talk</span>
                <Mail size={18} />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 flex justify-center lg:justify-end relative mt-12 lg:mt-0"
          >
            <div className="relative">
              {/* Rotating Circles Around Image */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary-500 rounded-full shadow-lg"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-secondary-500 rounded-full shadow-lg"></div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-accent-500 rounded-full shadow-lg"></div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary-400 rounded-full shadow-lg"></div>
              </div>

              {/* Profile Image Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-white/10 bg-gradient-to-br from-primary-500/20 via-secondary-500/20 to-accent-500/20 shadow-xl">
                <Image
                  src="/images/profile.png"
                  alt="Belal Ahmed Mohamed"
                  width={384}
                  height={384}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* Tech Badges with Icons - Floating Animation */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-2 px-4 py-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl text-white font-semibold text-sm shadow-lg flex items-center space-x-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
                </svg>
                <span>React</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-2 -left-2 px-4 py-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl text-white font-semibold text-sm shadow-lg flex items-center space-x-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/>
                </svg>
                <span>Next.js</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Moved Down Even More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <p className="text-gray-400 text-sm mb-3 font-medium">Scroll to explore</p>
          <button
            onClick={scrollToNext}
            className="p-3 border-2 border-primary-500/30 rounded-full hover:border-primary-500/60 hover:bg-primary-500/10 transition-all duration-300 animate-bounce"
          >
            <ChevronDown size={22} className="text-primary-400" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;