import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D97767] via-[#B5935B] to-[#D97767] origin-left z-[100] blur-[0.5px]"
            style={{ scaleX }}
        >
            <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-r from-transparent to-white/20 blur-sm" />
        </motion.div>
    )
}
