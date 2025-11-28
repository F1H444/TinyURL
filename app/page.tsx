"use client";

import Hero from "@/components/Hero";
import UrlShortenerForm from "@/components/UrlShortenerForm";
import Features from "@/components/Features";
import About from "@/components/About";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col relative overflow-hidden">
            {/* Marquee Header */}
            <div className="bg-accent border-b-4 border-black py-3 overflow-hidden whitespace-nowrap">
                <div className="animate-marquee inline-block">
                    <span className="text-2xl font-black mx-4">TINYURL  /// CEPAT /// AMAN /// TINYURL /// CEPAT /// AMAN /// TINYURL /// CEPAT /// AMAN ///</span>
                    <span className="text-2xl font-black mx-4">TINYURL /// CEPAT /// AMAN /// TINYURL /// CEPAT /// AMAN /// TINYURL /// CEPAT /// AMAN ///</span>
                </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 relative z-10">
                <Hero />
                <UrlShortenerForm />
                <Features />
                <About />
            </div>

            {/* Background Grid */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                    backgroundSize: "40px 40px"
                }}
            />
        </main>
    );
}
