"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
        >
            <div className="inline-block bg-black text-white p-2 mb-4 transform -rotate-2">
                <span className="font-bold tracking-widest text-sm">EST. 2025</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black mb-4 tracking-tighter uppercase leading-none drop-shadow-[4px_4px_0px_rgba(204,255,0,1)]">
                Tiny<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary stroke-black" style={{ WebkitTextStroke: "2px black" }}>URL</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold bg-white inline-block border-4 border-black p-2 transform rotate-1 brutal-shadow-sm">
                SINGKAT. CEPAT.
            </p>
        </motion.div>
    );
}
