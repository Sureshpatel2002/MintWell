"use client";
import { useScroll, useSpring, motion } from "framer-motion";

export default function ScrollProgressBar() {
    // Get scroll progress (0 to 1)
    const { scrollYProgress } = useScroll();

    // Smooth the progress with a spring
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 140,
        damping: 24,
        restDelta: 0.001,
    });

    return (
        <motion.div
            style={{
                scaleX,
                originX: 0,
            }}
            className="fixed top-0 left-0 right-0 h-[2.5px] z-[9999] bg-gradient-to-r from-primary-600 to-primary-400"
        />
    );
}