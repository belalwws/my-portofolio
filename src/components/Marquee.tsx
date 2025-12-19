"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
    text?: string;
    speed?: number;
    className?: string;
    separator?: string;
}

export default function Marquee({
    text = "BUILD • SHIP • SCALE • INNOVATE • CREATE • DESIGN • DEVELOP",
    speed = 30,
    className = "",
    separator = " • ",
}: MarqueeProps) {
    // Double the text for seamless loop
    const items = text.split(separator);
    const repeatedItems = [...items, ...items, ...items, ...items];

    return (
        <div className={`relative overflow-hidden py-8 ${className}`}>
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050508] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050508] to-transparent z-10" />

            <motion.div
                className="flex whitespace-nowrap"
                animate={{
                    x: [0, -50 + "%"],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: speed,
                        ease: "linear",
                    },
                }}
            >
                {repeatedItems.map((item, index) => (
                    <span
                        key={index}
                        className="mx-6 text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/10 via-white/20 to-white/10 uppercase tracking-wider select-none"
                    >
                        {item}
                    </span>
                ))}
            </motion.div>
        </div>
    );
}

// Variant with different style
export function MarqueeFilled({
    text = "FRONTEND DEVELOPER",
    speed = 25,
    className = "",
}: Omit<MarqueeProps, "separator">) {
    const items = new Array(10).fill(text);

    return (
        <div className={`relative overflow-hidden py-6 bg-gradient-to-r from-primary-500 to-secondary-500 ${className}`}>
            <motion.div
                className="flex whitespace-nowrap"
                animate={{
                    x: [0, -50 + "%"],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: speed,
                        ease: "linear",
                    },
                }}
            >
                {items.map((item, index) => (
                    <span
                        key={index}
                        className="mx-8 text-2xl md:text-4xl font-black text-white/90 uppercase tracking-widest select-none"
                    >
                        {item} ✦
                    </span>
                ))}
            </motion.div>
        </div>
    );
}
