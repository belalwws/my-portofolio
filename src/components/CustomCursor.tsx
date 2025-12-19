"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [hoverType, setHoverType] = useState<"default" | "button" | "link" | "text">("default");
    const [isVisible, setIsVisible] = useState(false);
    const cursorRef = useRef<HTMLDivElement>(null);
    const cursorRingRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number | undefined>(undefined);

    // Magnetic effect function
    const handleMagneticEffect = useCallback((e: MouseEvent, element: HTMLElement) => {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distX = e.clientX - centerX;
        const distY = e.clientY - centerY;

        // Move element towards cursor
        gsap.to(element, {
            x: distX * 0.3,
            y: distY * 0.3,
            duration: 0.3,
            ease: "power2.out",
        });
    }, []);

    const resetMagneticEffect = useCallback((element: HTMLElement) => {
        gsap.to(element, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.3)",
        });
    }, []);

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

        // Detect hoverable elements with magnetic effect
        const addHoverListeners = () => {
            const buttons = document.querySelectorAll('button, .btn-primary, .btn-secondary');
            const links = document.querySelectorAll('a');
            const textElements = document.querySelectorAll('h1, h2, h3, p');

            buttons.forEach((el) => {
                el.addEventListener("mouseenter", (e) => {
                    setIsHovering(true);
                    setHoverType("button");
                    handleMagneticEffect(e as MouseEvent, el as HTMLElement);
                });
                el.addEventListener("mousemove", (e) => {
                    handleMagneticEffect(e as MouseEvent, el as HTMLElement);
                });
                el.addEventListener("mouseleave", () => {
                    setIsHovering(false);
                    setHoverType("default");
                    resetMagneticEffect(el as HTMLElement);
                });
            });

            links.forEach((el) => {
                el.addEventListener("mouseenter", () => {
                    setIsHovering(true);
                    setHoverType("link");
                });
                el.addEventListener("mouseleave", () => {
                    setIsHovering(false);
                    setHoverType("default");
                });
            });

            textElements.forEach((el) => {
                el.addEventListener("mouseenter", () => {
                    setHoverType("text");
                });
                el.addEventListener("mouseleave", () => {
                    setHoverType("default");
                });
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
    }, [handleMagneticEffect, resetMagneticEffect]);

    // Don't render on touch devices
    if (typeof window !== "undefined" && "ontouchstart" in window) {
        return null;
    }

    // Cursor size based on hover type
    const getCursorSize = () => {
        switch (hoverType) {
            case "button": return { dot: 6, ring: 60 };
            case "link": return { dot: 4, ring: 50 };
            case "text": return { dot: 2, ring: 30 };
            default: return { dot: 12, ring: 40 };
        }
    };

    const sizes = getCursorSize();

    return (
        <>
            {/* Main cursor dot */}
            <motion.div
                ref={cursorRef}
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden lg:block will-change-transform rounded-full"
                style={{
                    background: isHovering
                        ? "linear-gradient(135deg, #667eea, #764ba2)"
                        : "#fff",
                }}
                animate={{
                    width: sizes.dot,
                    height: sizes.dot,
                    x: mousePosition.x - sizes.dot / 2,
                    y: mousePosition.y - sizes.dot / 2,
                    scale: isHovering ? 1.5 : 1,
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5,
                }}
            />

            {/* Cursor ring */}
            <motion.div
                ref={cursorRingRef}
                className="fixed top-0 left-0 pointer-events-none z-[9998] hidden lg:block will-change-transform rounded-full"
                style={{
                    border: isHovering
                        ? "2px solid rgba(102, 126, 234, 0.8)"
                        : "2px solid rgba(255, 255, 255, 0.3)",
                    backgroundColor: isHovering
                        ? "rgba(102, 126, 234, 0.1)"
                        : "transparent",
                }}
                animate={{
                    width: sizes.ring,
                    height: sizes.ring,
                    x: mousePosition.x - sizes.ring / 2,
                    y: mousePosition.y - sizes.ring / 2,
                    scale: isHovering ? 1.2 : 1,
                    opacity: isVisible ? (isHovering ? 0.8 : 0.4) : 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 20,
                    mass: 0.8,
                }}
            />

            {/* Extra glow effect for button hover */}
            {isHovering && hoverType === "button" && (
                <motion.div
                    className="fixed top-0 left-0 pointer-events-none z-[9997] hidden lg:block will-change-transform rounded-full"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        width: 80,
                        height: 80,
                        x: mousePosition.x - 40,
                        y: mousePosition.y - 40,
                        opacity: 0.2,
                        scale: 1,
                    }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                    }}
                    style={{
                        background: "radial-gradient(circle, rgba(102,126,234,0.4) 0%, transparent 70%)",
                    }}
                />
            )}
        </>
    );
}
