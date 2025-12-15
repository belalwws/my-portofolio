"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function SmoothScroller() {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Disable smooth scroll on mobile for better performance
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
        
        if (isMobile) return;

        lenisRef.current = new Lenis({
            duration: 1,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        function raf(time: number) {
            lenisRef.current?.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenisRef.current?.destroy();
        };
    }, []);

    return null;
}
