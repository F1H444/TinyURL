"use client";

import { motion } from "framer-motion";

export default function Features() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl text-center mb-16">
            {[
                { title: "SANGAT CEPAT", desc: "Pengalihan instan tanpa jeda." },
                { title: "TANPA PELACAKAN", desc: "Kami menghargai privasi Anda. Selalu." },
                { title: "GRATIS TOTAL", desc: "Tanpa kartu kredit. Tanpa daftar." },
            ].map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white border-4 border-black p-6 brutal-shadow-sm hover:translate-y-1 transition-transform"
                >
                    <h3 className="font-black text-xl mb-2 bg-accent inline-block px-2">{item.title}</h3>
                    <p className="font-mono text-sm">{item.desc}</p>
                </motion.div>
            ))}
        </div>
    );
}
