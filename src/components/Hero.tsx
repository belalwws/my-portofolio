"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, ArrowRight, Coffee, Download, Zap } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Text scramble effect hook
const useTextScramble = (text: string, isActive: boolean) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "!<>-_\\/[]{}—=+*^?#________";

  useEffect(() => {
    if (!isActive) {
      setDisplayText(text);
      return;
    }

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 2;
    }, 50);

    return () => clearInterval(interval);
  }, [text, isActive, chars]);

  return displayText;
};

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isScrambling, setIsScrambling] = useState(true);

  const roles = [
    "Software Engineer",
    "Full-Stack Developer",
    "React & Next.js Expert",
    "Problem Solver"
  ];

  const scrambledText = useTextScramble(roles[currentRoleIndex], isScrambling);

  // Role rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsScrambling(true);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [roles.length]);

  useEffect(() => {
    if (isScrambling) {
      const timeout = setTimeout(() => setIsScrambling(false), 1000);
      return () => clearTimeout(timeout);
    }
  }, [isScrambling, currentRoleIndex]);

  const contactInfo = [
    { icon: MapPin, text: "Alexandria, Egypt", link: null },
    { icon: Phone, text: "+201128300607", link: "tel:+201128300607" },
    { icon: Mail, text: "belal.ahmed121sq1@gmail.com", link: "mailto:belal.ahmed121sq1@gmail.com" },
    { icon: Globe, text: "BakTech Channel", link: "https://www.youtube.com/@BakTech" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(102, 126, 234, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(102, 126, 234, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Gradient orbs - Optimized */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-500/15 rounded-full blur-[80px] will-change-transform"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary-500/15 rounded-full blur-[80px] will-change-transform"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-20">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-sm text-gray-300">Available for freelance work</span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-gray-400 mb-3 sm:mb-4"
            >
              Hello, I&apos;m
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 leading-[1.1]"
            >
              <span className="gradient-text">Belal Ahmed</span>
              <br />
              <span className="text-white">Mohamed</span>
            </motion.h1>

            {/* Dynamic Role with Scramble Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-6 sm:mb-8"
            >
              <div className="flex items-center gap-2 sm:gap-3 justify-center lg:justify-start">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-mono font-semibold text-white break-words">
                  {scrambledText}
                  <span className="ml-1 inline-block w-[2px] sm:w-[3px] h-6 sm:h-8 bg-primary-400 animate-pulse" />
                </p>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 sm:mb-8 max-w-xl leading-relaxed px-2 sm:px-0"
            >
              A dedicated Software Engineer based in Alexandria with <span className="text-white font-medium">2+ years</span> of hands-on experience.
              I craft modern web solutions using React and Next.js, focusing on <span className="text-white font-medium">clean code</span> and <span className="text-white font-medium">smooth user experiences</span>.
            </motion.p>

            {/* Coffee Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex justify-center lg:justify-start mb-8"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
                <Coffee size={16} className="text-white" />
                <span className="text-sm text-white/80">Fueled by coffee & code</span>
              </div>
            </motion.div>

            {/* Contact Info Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10"
            >
              {contactInfo.map((info, index) => {
                const content = (
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "p-2.5 rounded-xl transition-all duration-300",
                      "bg-gradient-to-br from-primary-500/20 to-secondary-500/20",
                      "group-hover:from-primary-500 group-hover:to-secondary-500"
                    )}>
                      <info.icon size={16} className="text-white" />
                    </div>
                    <span className="text-gray-300 font-medium text-sm truncate">{info.text}</span>
                  </div>
                );

                if (info.link) {
                  return (
                    <motion.a
                      key={index}
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="group p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.05] transition-all duration-300 cursor-pointer"
                    >
                      {content}
                    </motion.a>
                  );
                }

                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="group p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.05] transition-all duration-300"
                  >
                    {content}
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              {/* Primary CTA */}
              <motion.button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 overflow-hidden rounded-xl font-semibold transition-all duration-300"
              >
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500" />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
                {/* Content */}
                <span className="relative flex items-center justify-center gap-2 text-white">
                  View My Work
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              {/* Secondary CTA */}
              <motion.a
                href="https://drive.google.com/file/d/1_qXTfhh8ddxzfqKENA3b4Gq46IfV656C/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 rounded-xl font-semibold overflow-hidden"
              >
                {/* Border gradient */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 opacity-50" />
                <div className="absolute inset-[1px] rounded-xl bg-[#0a0a0a]" />
                {/* Content */}
                <span className="relative flex items-center justify-center gap-2 text-white">
                  <Download size={18} />
                  Download CV
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 flex justify-center lg:justify-end relative"
          >
            <div className="relative">
              {/* Rotating Rings */}
              <div className="absolute inset-[-20px] animate-spin-slow">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary-500 rounded-full shadow-[0_0_20px_rgba(102,126,234,0.8)]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-secondary-500 rounded-full shadow-[0_0_20px_rgba(240,147,251,0.8)]" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-accent-500 rounded-full shadow-[0_0_20px_rgba(79,172,254,0.8)]" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary-400 rounded-full shadow-[0_0_20px_rgba(143,163,255,0.8)]" />
              </div>

              {/* Profile Image Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px]">
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 opacity-20 blur-2xl animate-pulse-glow" />

                {/* Image container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 bg-gradient-to-br from-primary-500/10 via-secondary-500/10 to-accent-500/10">
                  <Image
                    src="/images/profile.png"
                    alt="Belal Ahmed Mohamed"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating Tech Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-[0_10px_40px_rgba(59,130,246,0.4)] flex items-center gap-2"
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
                </svg>
                <span className="text-white font-semibold text-sm">React</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-[0_10px_40px_rgba(139,92,246,0.4)] flex items-center gap-2"
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
                </svg>
                <span className="text-white font-semibold text-sm">Next.js</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 -right-8 px-4 py-2 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 shadow-[0_10px_40px_rgba(59,130,246,0.4)] flex items-center gap-2"
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.397c.272.12.576.241.909.363.523.19.994.398 1.414.62.42.22.777.468 1.071.745.295.276.521.588.68.936.159.348.238.743.238 1.185 0 .711-.147 1.305-.44 1.783-.294.477-.688.857-1.183 1.137-.495.281-1.065.481-1.709.602-.644.121-1.321.181-2.032.181-.665 0-1.299-.053-1.902-.158a8.17 8.17 0 0 1-1.712-.493v-2.63a5.36 5.36 0 0 0 .894.412c.318.12.636.213.955.281.319.068.63.112.933.132.303.021.573.031.81.031.617 0 1.086-.083 1.407-.248.321-.164.481-.413.481-.746 0-.209-.065-.389-.195-.538a1.888 1.888 0 0 0-.55-.408 5.586 5.586 0 0 0-.829-.368 31.148 31.148 0 0 0-1.048-.398 11.26 11.26 0 0 1-1.33-.568 4.537 4.537 0 0 1-1.018-.749 3.081 3.081 0 0 1-.651-1.017 3.506 3.506 0 0 1-.227-1.312c0-.633.131-1.18.394-1.64.262-.461.62-.843 1.073-1.145a5.027 5.027 0 0 1 1.588-.711 7.384 7.384 0 0 1 1.923-.241zm-11.79.257h5.424v2.025h-1.597v8.717H8.295V12.032H6.7V9.866z" />
                </svg>
                <span className="text-white font-semibold text-sm">TypeScript</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;