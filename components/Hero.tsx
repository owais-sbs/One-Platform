"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const buttonHover = {
  scale: 1.05,
  transition: { type: "spring", stiffness: 200 },
};

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0B0B0B]">

      {/* Background image with slow zoom */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
      >
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80&auto=format&fit=crop"
          alt="Dashboard background"
          className="w-full h-full object-cover opacity-20"
        />
      </motion.div>

      {/* Overlay gradients */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/60 to-[#0B0B0B]" />
      <div className="absolute inset-0 z-10 bg-gradient-to-tr from-purple-900/30 via-transparent to-indigo-900/20" />

      {/* Floating blur orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-indigo-600/20 blur-3xl z-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-700/15 blur-3xl z-10"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 z-10 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-20 flex flex-col items-center text-center px-6 max-w-5xl mx-auto"
      >
        {/* Badge */}
        <motion.div variants={item}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/40 bg-indigo-500/10 text-indigo-300 text-xs font-semibold tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Product C — One Platform
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1 variants={item} className="text-6xl md:text-8xl font-black text-white leading-none tracking-tight mb-2">
          Stop Wondering.
        </motion.h1>
        <motion.h1 variants={item} className="text-6xl md:text-8xl font-black leading-none tracking-tight mb-8 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Start Knowing.
        </motion.h1>

        {/* Subtext */}
        <motion.p variants={item} className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
          One Platform is a strategic reporting system for leadership teams — giving you real-time clarity on what matters, so you can move faster and decide smarter.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4">
          <motion.button
            whileHover={buttonHover}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl text-base transition-colors duration-200 shadow-lg shadow-indigo-500/25"
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover={buttonHover}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border border-white/15 hover:border-white/30 text-white font-semibold rounded-xl text-base transition-colors duration-200 backdrop-blur-sm"
          >
            View Demo
          </motion.button>
        </motion.div>

        {/* Social proof */}
        <motion.p variants={item} className="mt-10 text-zinc-600 text-sm">
          Trusted by 500+ leadership teams worldwide
        </motion.p>
      </motion.div>
    </section>
  );
}
