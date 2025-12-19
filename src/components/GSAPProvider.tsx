"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function GSAPProvider({ children }: { children: React.ReactNode }) {
    const initialized = useRef(false);

    useEffect(() => {
        if (initialized.current) return;
        initialized.current = true;

        // Configure GSAP defaults
        gsap.config({
            nullTargetWarn: false,
        });

        // Set up ScrollTrigger defaults
        ScrollTrigger.defaults({
            toggleActions: "play none none reverse",
            start: "top 80%",
            end: "bottom 20%",
        });

        // Refresh ScrollTrigger on resize
        const handleResize = () => {
            ScrollTrigger.refresh();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            ScrollTrigger.killAll();
        };
    }, []);

    return <>{children}</>;
}

// Custom hooks for common animations
export function useScrollReveal(ref: React.RefObject<HTMLElement | null>, options = {}) {
    useEffect(() => {
        if (!ref.current) return;

        const element = ref.current;

        gsap.fromTo(
            element,
            {
                opacity: 0,
                y: 60,
                filter: "blur(10px)",
            },
            {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                    ...options,
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => {
                if (trigger.trigger === element) {
                    trigger.kill();
                }
            });
        };
    }, [ref, options]);
}

export function useParallax(ref: React.RefObject<HTMLElement | null>, speed = 0.5) {
    useEffect(() => {
        if (!ref.current) return;

        const element = ref.current;

        gsap.to(element, {
            yPercent: -20 * speed,
            ease: "none",
            scrollTrigger: {
                trigger: element,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => {
                if (trigger.trigger === element) {
                    trigger.kill();
                }
            });
        };
    }, [ref, speed]);
}

export function useTextReveal(ref: React.RefObject<HTMLElement | null>) {
    useEffect(() => {
        if (!ref.current) return;

        const element = ref.current;

        // Split text into spans for character animation
        const text = element.innerText;
        element.innerHTML = text
            .split("")
            .map((char) => `<span class="inline-block">${char === " " ? "&nbsp;" : char}</span>`)
            .join("");

        const chars = element.querySelectorAll("span");

        gsap.fromTo(
            chars,
            {
                opacity: 0,
                y: 50,
                rotateX: -90,
            },
            {
                opacity: 1,
                y: 0,
                rotateX: 0,
                duration: 0.8,
                stagger: 0.02,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => {
                if (trigger.trigger === element) {
                    trigger.kill();
                }
            });
        };
    }, [ref]);
}

// Stagger animation for lists/grids
export function useStaggerReveal(containerRef: React.RefObject<HTMLElement | null>, itemSelector: string) {
    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const items = container.querySelectorAll(itemSelector);

        gsap.fromTo(
            items,
            {
                opacity: 0,
                y: 40,
                scale: 0.95,
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: container,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => {
                if (trigger.trigger === container) {
                    trigger.kill();
                }
            });
        };
    }, [containerRef, itemSelector]);
}
