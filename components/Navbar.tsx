"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = ["Features", "Pricing", "Enterprise", "Company"];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-md bg-black/30 border-b border-white/5"
    >
      {/* Logo */}
      <Link href="/" className="text-white font-bold text-lg tracking-widest uppercase">
        One Platform
      </Link>

      {/* Links */}
      <ul className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link}>
            <Link
              href="#"
              className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <Link
          href="#"
          className="hidden md:block text-sm text-zinc-400 hover:text-white transition-colors duration-200"
        >
          Login
        </Link>
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="text-sm bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
        >
          Get Started
        </motion.a>
      </div>
    </motion.nav>
  );
}
