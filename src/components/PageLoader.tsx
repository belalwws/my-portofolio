"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time and then hide loader
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#050508]"
                >
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0c0a1d] to-slate-950" />

                    {/* Animated orbs */}
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute w-[400px] h-[400px] bg-primary-500/20 rounded-full blur-[100px]"
                    />

                    {/* Loader content */}
                    <div className="relative flex flex-col items-center gap-8">
                        {/* Logo animation */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl font-bold"
                        >
                            <span className="gradient-text">Belal</span>
                            <span className="text-white ml-2">Ahmed</span>
                        </motion.div>

                        {/* Loading bar */}
                        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="w-full h-full bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500"
                            />
                        </div>

                        {/* Loading text */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-gray-400 text-sm font-medium tracking-wider"
                        >
                            Loading Experience...
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
