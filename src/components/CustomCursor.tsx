"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const rafRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        // Throttle mouse position updates using requestAnimationFrame
        const updateMousePosition = (e: MouseEvent) => {
            if (rafRef.current) return;
            
            rafRef.current = requestAnimationFrame(() => {
                setMousePosition({ x: e.clientX, y: e.clientY });
                setIsVisible(true);
                rafRef.current = undefined;
            });
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        // Detect hoverable elements
        const addHoverListeners = () => {
            const hoverables = document.querySelectorAll('a, button, [role="button"], input, textarea');
            hoverables.forEach((el) => {
                el.addEventListener("mouseenter", () => setIsHovering(true));
                el.addEventListener("mouseleave", () => setIsHovering(false));
            });
        };

        window.addEventListener("mousemove", updateMousePosition, { passive: true });
        document.addEventListener("mouseenter", handleMouseEnter);
        document.addEventListener("mouseleave", handleMouseLeave);

        // Add hover listeners after a short delay to ensure DOM is ready
        const timeout = setTimeout(addHoverListeners, 1000);

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            window.removeEventListener("mousemove", updateMousePosition);
            document.removeEventListener("mouseenter", handleMouseEnter);
            document.removeEventListener("mouseleave", handleMouseLeave);
            clearTimeout(timeout);
        };
    }, []);

    // Don't render on touch devices
    if (typeof window !== "undefined" && "ontouchstart" in window) {
        return null;
    }

    return (
        <>
            {/* Main cursor dot */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-primary-500 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden lg:block will-change-transform"
                animate={{
                    x: mousePosition.x - 6,
                    y: mousePosition.y - 6,
                    scale: isHovering ? 0.5 : 1,
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{
                    type: "tween",
                    duration: 0.1,
                    ease: "linear",
                }}
            />

            {/* Cursor ring */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border-2 border-primary-400/50 rounded-full pointer-events-none z-[9998] hidden lg:block will-change-transform"
                animate={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 20,
                    scale: isHovering ? 1.5 : 1,
                    opacity: isVisible ? 0.5 : 0,
                }}
                transition={{
                    type: "tween",
                    duration: 0.15,
                    ease: "easeOut",
                }}
            />
        </>
    );
}
