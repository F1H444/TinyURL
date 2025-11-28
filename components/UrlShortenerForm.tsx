"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, ArrowRight, Scissors, Zap } from "lucide-react";
import clsx from "clsx";

export default function UrlShortenerForm() {
    const [url, setUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [copied, setCopied] = useState(false);
    const [error, setError] = useState("");

    const handleShorten = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!url) return;

        setLoading(true);
        setError("");
        setShortUrl("");

        try {
            const response = await fetch('/api/shorten', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Something went wrong');
            }

            setShortUrl(data.shortUrl);
        } catch (err) {
            setError("Failed to shorten URL. Please try again.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(shortUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="w-full max-w-3xl bg-white border-4 border-black p-4 md:p-8 brutal-shadow relative mb-16"
        >
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 bg-accent-secondary w-12 h-12 border-4 border-black flex items-center justify-center animate-bounce">
                <Scissors className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent w-12 h-12 border-4 border-black flex items-center justify-center animate-pulse">
                <Zap className="w-6 h-6 text-black" />
            </div>

            <form onSubmit={handleShorten} className="flex flex-col md:flex-row gap-4">
                <input
                    type="url"
                    placeholder="TEMPEL URL PANJANG ANDA DI SINI..."
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="brutal-input flex-1"
                    required
                />
                <button
                    type="submit"
                    disabled={loading}
                    className={clsx(
                        "brutal-btn flex items-center justify-center gap-2 min-w-[200px]",
                        loading && "opacity-80 cursor-wait"
                    )}
                >
                    {loading ? (
                        <span className="animate-spin">⏳</span>
                    ) : (
                        <>
                            PENDEKKAN <ArrowRight className="w-6 h-6" />
                        </>
                    )}
                </button>
            </form>

            {error && (
                <div className="mt-4 p-2 bg-red-100 border-2 border-red-500 text-red-700 font-bold text-center">
                    {error}
                </div>
            )}

            {/* Result Section */}
            <AnimatePresence>
                {shortUrl && (
                    <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 32 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="bg-black p-1">
                            <div className="bg-accent p-4 flex flex-col md:flex-row items-center justify-between gap-4 border-2 border-white border-dashed">
                                <span className="font-mono text-lg md:text-2xl font-bold break-all text-black">
                                    {shortUrl}
                                </span>
                                <button
                                    onClick={handleCopy}
                                    className="bg-white text-black border-4 border-black px-6 py-2 font-bold uppercase hover:bg-black hover:text-white transition-colors flex items-center gap-2 whitespace-nowrap"
                                >
                                    {copied ? "TERSALIN!" : "SALIN"} <Copy className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
