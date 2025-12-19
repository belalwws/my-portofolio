"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";

export default function PageLoader() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Animate progress counter
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 100);

        // Text animation with GSAP
        if (textRef.current) {
            const chars = textRef.current.querySelectorAll(".char");
            gsap.fromTo(
                chars,
                {
                    y: 100,
                    opacity: 0,
                    rotateX: -90,
                },
                {
                    y: 0,
                    opacity: 1,
                    rotateX: 0,
                    duration: 0.8,
                    stagger: 0.05,
                    ease: "back.out(1.7)",
                    delay: 0.2,
                }
            );
        }

        // Line slash animation
        if (lineRef.current) {
            gsap.fromTo(
                lineRef.current,
                {
                    scaleX: 0,
                    transformOrigin: "left center",
                },
                {
                    scaleX: 1,
                    duration: 1.5,
                    ease: "power4.inOut",
                    delay: 0.5,
                }
            );
        }

        // Complete loading after animation
        const timer = setTimeout(() => {
            setProgress(100);
            setTimeout(() => setIsLoading(false), 300);
        }, 2500);

        return () => {
            clearInterval(progressInterval);
            clearTimeout(timer);
        };
    }, []);

    // Split text into characters
    const name = "BELAL AHMED";
    const chars = name.split("");

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    ref={containerRef}
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        scale: 1.1,
                        filter: "blur(10px)",
                    }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#050508] overflow-hidden"
                >
                    {/* Background Effects */}
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0c0a1d] to-slate-950" />

                        {/* Animated glow orbs */}
                        <motion.div
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.2, 0.4, 0.2],
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/20 rounded-full blur-[120px]"
                        />
                        <motion.div
                            animate={{
                                scale: [1.2, 1, 1.2],
                                opacity: [0.15, 0.3, 0.15],
                            }}
                            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-secondary-500/20 rounded-full blur-[100px]"
                        />
                    </div>

                    {/* Main Content */}
                    <div className="relative flex flex-col items-center">
                        {/* Name with character animation */}
                        <div
                            ref={textRef}
                            className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 perspective-1000"
                            style={{ perspective: "1000px" }}
                        >
                            {chars.map((char, index) => (
                                <span
                                    key={index}
                                    className="char inline-block gradient-text"
                                    style={{
                                        display: "inline-block",
                                        transformStyle: "preserve-3d",
                                    }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                        </div>

                        {/* Animated slash line */}
                        <div
                            ref={lineRef}
                            className="w-64 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 rounded-full mb-8"
                        />

                        {/* Role text */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.6 }}
                            className="text-gray-400 text-lg md:text-xl tracking-[0.3em] uppercase mb-8"
                        >
                            Frontend Developer
                        </motion.p>

                        {/* Progress indicator */}
                        <div className="flex items-center gap-4">
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-4xl md:text-5xl font-bold text-white tabular-nums"
                            >
                                {Math.min(Math.round(progress), 100)}
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="text-2xl text-gray-500"
                            >
                                %
                            </motion.span>
                        </div>

                        {/* Loading bar */}
                        <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden mt-6">
                            <motion.div
                                className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
                                initial={{ width: 0 }}
                                animate={{ width: `${Math.min(progress, 100)}%` }}
                                transition={{ ease: "easeOut" }}
                            />
                        </div>
                    </div>

                    {/* Corner decorations */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="absolute bottom-8 left-8 text-gray-600 text-sm font-mono"
                    >
                        PORTFOLIO.2024
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="absolute bottom-8 right-8 text-gray-600 text-sm font-mono"
                    >
                        ALEXANDRIA, EG
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
