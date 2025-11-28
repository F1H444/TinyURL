"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-4xl bg-white border-4 border-black p-8 brutal-shadow relative mb-16"
        >
            <div className="absolute -top-4 -left-4 bg-black text-white px-4 py-1 font-black transform -rotate-2">
                APA INI?
            </div>
            <div className="prose prose-lg max-w-none font-mono">
                <p className="mb-4">
                    <strong>TinyURL</strong> adalah pemendek URL modern yang dibangun untuk kecepatan web masa kini.
                    Kami mengubah URL yang panjang dan rumit menjadi sesuatu yang ringkas dan mudah dibagikan.
                </p>
                <p>
                    Baik untuk media sosial, email, atau sekadar merapikan tautan Anda,
                    layanan kami menyediakan cara cepat, andal, dan aman untuk memendekkan tautan.
                    Tanpa perlu daftar, cukup tempel dan jalan!
                </p>
            </div>
        </motion.div>
    );
}
