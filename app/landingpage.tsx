"use client";

import { motion, useScroll, useSpring, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

// ─── Animation Variants ───────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7 } },
};

// ─── Shared UI ────────────────────────────────────────────────────────────────

function SectionLabel({ dark = false, children }: { dark?: boolean; children: React.ReactNode }) {
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold tracking-widest uppercase mb-4 ${
      dark
        ? "border-indigo-200 bg-indigo-50 text-indigo-600"
        : "border-indigo-500/40 bg-indigo-500/10 text-indigo-300"
    }`}>
      <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${dark ? "bg-indigo-500" : "bg-indigo-400"}`} />
      {children}
    </span>
  );
}

function SectionHeading({ dark = false, children }: { dark?: boolean; children: React.ReactNode }) {
  return (
    <h2 className={`text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-3 ${dark ? "text-zinc-900" : "text-white"}`}>
      {children}
    </h2>
  );
}

function SectionSub({ dark = false, children }: { dark?: boolean; children: React.ReactNode }) {
  return (
    <p className={`text-base max-w-xl mx-auto leading-relaxed ${dark ? "text-zinc-500" : "text-zinc-400"}`}>
      {children}
    </p>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

const navLinks = [
  { label: "Features",   href: "#features"   },
  { label: "Preview",    href: "#preview"    },
  { label: "Pricing",    href: "#pricing"    },
  { label: "Use Cases",  href: "#use-cases"  },
];

function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-3.5 backdrop-blur-md bg-black/50 border-b border-white/5"
    >
      {/* Logo with blue dot */}
      <Link href="/" className="flex items-center gap-0.5 text-white font-bold text-sm tracking-widest uppercase">
        One Platform
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mb-1 ml-0.5 flex-shrink-0 self-end" />
      </Link>

      <ul className="hidden md:flex items-center gap-7">
        {navLinks.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-xs text-zinc-400 hover:text-white transition-colors duration-200 font-medium"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <Link href="#" className="hidden md:block text-xs text-zinc-400 hover:text-white transition-colors font-medium">
          Login
        </Link>
        <motion.a
          href="#pricing"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="text-xs bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
        >
          Get Started
        </motion.a>
      </div>
    </motion.nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#060612]">
      {/* BG image — aerial city / data center */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 18, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
      >
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover opacity-25"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#060612]/80 via-[#060612]/60 to-[#060612]" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-indigo-950/40 via-transparent to-purple-950/30" />

      {/* Grid */}
      <div className="absolute inset-0 z-10 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Orbs */}
      <motion.div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full bg-indigo-600/15 blur-3xl z-10"
        animate={{ y: [0, -18, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-purple-700/12 blur-3xl z-10"
        animate={{ y: [0, 18, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} />

      {/* Content */}
      <motion.div
        variants={staggerContainer} initial="hidden" animate="show"
        className="relative z-20 flex flex-col items-center text-center px-6 max-w-4xl mx-auto"
      >
        <motion.div variants={fadeUp}>
          <SectionLabel>One Platform</SectionLabel>
        </motion.div>

        <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-2">
          Stop Wondering.
        </motion.h1>
        <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Start Knowing.
        </motion.h1>

        <motion.p variants={fadeUp} className="text-zinc-300 text-base md:text-lg max-w-xl leading-relaxed mb-8">
          One Platform is a strategic reporting system for leadership teams — giving you real-time clarity on what matters, so you can move faster and decide smarter.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
            className="px-7 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl text-sm transition-colors shadow-lg shadow-indigo-500/30"
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
            className="px-7 py-3 border border-white/30 hover:border-white/60 hover:bg-white/8 text-white font-semibold rounded-xl text-sm transition-all"
          >
            View Demo
          </motion.button>
        </motion.div>

        <motion.p variants={fadeUp} className="mt-8 text-zinc-500 text-xs tracking-wide">
          Trusted by 500+ leadership teams worldwide
        </motion.p>
      </motion.div>
    </section>
  );
}

// ─── Features ─────────────────────────────────────────────────────────────────

const leftCard: Variants = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

const rightCard: Variants = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: "bg-indigo-50 text-indigo-600",
    title: "Project Tracking",
    desc: "Monitor every initiative in real time with live status updates and milestone tracking across your entire portfolio.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    color: "bg-purple-50 text-purple-600",
    title: "Executive Dashboard",
    desc: "A single pane of glass for leadership — KPIs, risks, and decisions surfaced exactly when you need them.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "bg-amber-50 text-amber-600",
    title: "Action Management",
    desc: "Assign, track, and close actions across teams without losing context. Nothing falls through the cracks.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
    color: "bg-emerald-50 text-emerald-600",
    title: "Public Sharing",
    desc: "Share live reports with stakeholders via secure, branded public links — no login required.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    color: "bg-blue-50 text-blue-600",
    title: "Export Reports",
    desc: "One-click export to PDF or PowerPoint. Board-ready presentations generated in seconds, not hours.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: "bg-rose-50 text-rose-600",
    title: "Enterprise Security",
    desc: "SSO, role-based access, and full audit logs. Built for enterprise compliance from day one.",
  },
];

function Features() {
  return (
    <section className="bg-white py-20 px-6" id="features">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={fadeUp} className="text-center mb-12">
          <SectionLabel dark>Features</SectionLabel>
          <SectionHeading dark>Everything your leadership team needs</SectionHeading>
          <SectionSub dark>Built for clarity, speed, and scale — from startup to enterprise.</SectionSub>
        </motion.div>

        {/* Cards — alternating left/right */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              variants={i % 2 === 0 ? leftCard : rightCard}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                boxShadow: "0 20px 40px -8px rgba(0,0,0,0.12)",
              }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="p-6 rounded-2xl border border-zinc-100 bg-white shadow-sm text-left cursor-default"
            >
              <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${f.color} mb-4`}>
                {f.icon}
              </div>
              <h3 className="text-zinc-900 font-semibold text-base mb-2">{f.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

// ─── Dashboard Preview ────────────────────────────────────────────────────────

function DashboardPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [30, -30]), { stiffness: 80, damping: 20 });

  const bullets = [
    { icon: "✦", text: "Real-time KPIs across every project and team" },
    { icon: "✦", text: "Executive-ready reports generated in one click" },
    { icon: "✦", text: "Live risk tracking with instant stakeholder alerts" },
    { icon: "✦", text: "Full audit trail — every decision, documented" },
  ];

  return (
    <section ref={sectionRef} className="relative bg-white py-24 px-6 overflow-hidden" id="preview">

      {/* Soft parallax orbs */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-0 w-72 h-72 rounded-full bg-indigo-50 blur-3xl opacity-70" />
        <motion.div animate={{ y: [0, 18, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-purple-50 blur-3xl opacity-60" />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — text content */}
          <motion.div
            variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="flex flex-col"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel dark>Live Preview</SectionLabel>
            </motion.div>

            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight leading-tight mb-4">
              Your command center,{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                always on
              </span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-zinc-500 text-base leading-relaxed mb-8">
              One Platform gives leadership teams a single, live view of everything that matters — projects, risks, actions, and outcomes — without the noise of status meetings or scattered spreadsheets.
            </motion.p>

            <motion.ul variants={staggerContainer} className="space-y-3 mb-10">
              {bullets.map((b, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-3"
                >
                  <span className="text-indigo-500 text-xs mt-1 font-bold">{b.icon}</span>
                  <span className="text-zinc-600 text-sm leading-relaxed">{b.text}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp} className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-colors shadow-md shadow-indigo-200"
              >
                See it live
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                className="px-6 py-2.5 border border-zinc-200 hover:border-zinc-300 text-zinc-600 text-sm font-semibold rounded-xl transition-colors"
              >
                Book a demo
              </motion.button>
            </motion.div>
          </motion.div>

          {/* RIGHT — raw video, no card wrapper */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <video
                src="/livepreview.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-2xl shadow-2xl shadow-indigo-100/60"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// ─── Use Cases ────────────────────────────────────────────────────────────────

const useCases = [
  {
    num: "01",
    tag: "Startups",
    title: "Move fast without losing control",
    desc: "Give your founding team a single source of truth. Track OKRs, ship faster, and keep investors in the loop — all from one place.",
    stat: "3×",
    statLabel: "faster reporting cycles",
    color: "from-indigo-500 to-indigo-600",
    light: "bg-indigo-50 text-indigo-600",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Analytics dashboard with charts and KPIs",
  },
  {
    num: "02",
    tag: "Enterprises",
    title: "Govern at scale, decide with confidence",
    desc: "Consolidate reporting across hundreds of projects. Eliminate status meetings and give executives the clarity they need, instantly.",
    stat: "80%",
    statLabel: "reduction in status meetings",
    color: "from-violet-500 to-purple-600",
    light: "bg-violet-50 text-violet-600",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Executive reporting dashboard on screen",
  },
  {
    num: "03",
    tag: "Product Teams",
    title: "Ship with full visibility",
    desc: "Align product, engineering, and design around shared goals. Surface blockers early and keep every stakeholder informed.",
    stat: "2×",
    statLabel: "improvement in on-time delivery",
    color: "from-blue-500 to-indigo-500",
    light: "bg-blue-50 text-blue-600",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Product roadmap and project tracking dashboard",
  },
];

function UseCases() {
  return (
    <section className="bg-white py-24 px-6" id="use-cases">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div variants={fadeUp}><SectionLabel dark>Use Cases</SectionLabel></motion.div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <motion.div variants={fadeUp}>
              <SectionHeading dark>Built for every kind of team</SectionHeading>
            </motion.div>
            <motion.p variants={fadeUp} className="text-zinc-400 text-sm max-w-xs md:text-right leading-relaxed">
              Whether you're 10 people or 10,000 — One Platform scales with you.
            </motion.p>
          </div>
        </motion.div>

        {/* Alternating rows: odd → text left / image right, even → image left / text right */}
        <div className="space-y-24">
          {useCases.map((u, i) => {
            const textFromLeft  = i % 2 === 0;
            const imageFromLeft = !textFromLeft;

            const textBlock = (
              <motion.div
                key="text"
                initial={{ opacity: 0, x: textFromLeft ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex flex-col justify-center"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-full ${u.light}`}>{u.tag}</span>
                  <span className={`text-sm font-black bg-gradient-to-r ${u.color} bg-clip-text text-transparent`}>{u.num}</span>
                </div>
                <h3 className="text-zinc-900 font-bold text-2xl md:text-3xl leading-tight mb-4 tracking-tight">
                  {u.title}
                </h3>
                <p className="text-zinc-500 text-base leading-relaxed mb-8 max-w-md">
                  {u.desc}
                </p>
                <div className="flex items-end gap-3">
                  <span className={`text-5xl font-black bg-gradient-to-br ${u.color} bg-clip-text text-transparent leading-none`}>
                    {u.stat}
                  </span>
                  <span className="text-zinc-400 text-sm leading-snug pb-1 max-w-[100px]">{u.statLabel}</span>
                </div>
              </motion.div>
            );

            const imageBlock = (
              <motion.div
                key="image"
                initial={{ opacity: 0, x: imageFromLeft ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
                className="relative"
              >
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${u.color} opacity-10 blur-2xl scale-105`} />
                <img
                  src={u.image}
                  alt={u.imageAlt}
                  className="relative w-full h-72 md:h-80 object-cover rounded-3xl shadow-xl shadow-zinc-200/60"
                />
              </motion.div>
            );

            return (
              <div
                key={u.num}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center ${
                  textFromLeft ? "" : "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1"
                }`}
              >
                {textBlock}
                {imageBlock}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ──────────────────────────────────────────────────────────────────

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/mo",
    desc: "For small teams getting started with strategic reporting.",
    features: ["Up to 5 projects", "Basic dashboard", "PDF export", "Email support"],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Business",
    price: "$99",
    period: "/mo",
    desc: "For growing teams that need full visibility and control.",
    features: ["Unlimited projects", "Executive dashboard", "Public sharing", "Action management", "Priority support"],
    cta: "Start Free Trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For large organizations with complex governance needs.",
    features: ["Everything in Business", "SSO & SAML", "Audit logs", "Custom integrations", "Dedicated CSM"],
    cta: "Contact Sales",
    highlight: false,
  },
];

function Pricing() {
  return (
    <section className="bg-zinc-50 py-24 px-6" id="pricing">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.div variants={fadeUp}><SectionLabel dark>Pricing</SectionLabel></motion.div>
          <motion.div variants={fadeUp}><SectionHeading dark>Simple, transparent pricing</SectionHeading></motion.div>
          <motion.div variants={fadeUp}><SectionSub dark>No hidden fees. No surprises. Cancel anytime.</SectionSub></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`relative flex flex-col rounded-2xl p-7 transition-shadow duration-300 ${
                p.highlight
                  ? "bg-zinc-900 text-white shadow-2xl shadow-zinc-900/20 ring-1 ring-zinc-800"
                  : "bg-white border border-zinc-100 shadow-sm hover:shadow-md"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
              )}
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-indigo-600 text-white text-[10px] font-bold tracking-widest uppercase">
                  Most Popular
                </span>
              )}

              <div className="mb-6">
                <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${p.highlight ? "text-zinc-400" : "text-zinc-400"}`}>{p.name}</p>
                <div className="flex items-end gap-1 mb-2">
                  <span className={`text-5xl font-black tracking-tight ${p.highlight ? "text-white" : "text-zinc-900"}`}>{p.price}</span>
                  {p.period && <span className={`text-sm mb-2 ${p.highlight ? "text-zinc-400" : "text-zinc-400"}`}>{p.period}</span>}
                </div>
                <p className={`text-sm leading-relaxed ${p.highlight ? "text-zinc-400" : "text-zinc-500"}`}>{p.desc}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className={`flex items-center gap-2.5 text-sm ${p.highlight ? "text-zinc-300" : "text-zinc-600"}`}>
                    <span className={`flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${p.highlight ? "bg-indigo-500/20 text-indigo-400" : "bg-indigo-50 text-indigo-500"}`}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                  p.highlight
                    ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/25"
                    : "border border-zinc-200 hover:border-indigo-300 hover:bg-indigo-50 text-zinc-700 hover:text-indigo-700"
                }`}
              >
                {p.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-zinc-400 text-xs mt-8"
        >
          All plans include a 14-day free trial · No credit card required
        </motion.p>
      </div>
    </section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────

function CTA() {
  return (
    <section className="relative py-16 px-6 overflow-hidden">
      {/* Full-bleed Unsplash bg */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Glass overlay */}
        <div className="absolute inset-0 bg-zinc-900/75 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-transparent to-purple-900/40" />
      </div>

      {/* Floating orbs */}
      <motion.div animate={{ y: [0, -18, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-1/4 w-64 h-64 rounded-full bg-indigo-500/15 blur-3xl z-10 pointer-events-none" />
      <motion.div animate={{ y: [0, 16, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-purple-500/15 blur-3xl z-10 pointer-events-none" />

      <div className="relative z-20 max-w-3xl mx-auto text-center">
        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}
        >
          <motion.p variants={fadeUp} className="text-indigo-300 text-xs font-bold tracking-widest uppercase mb-4">
            Get Started Today
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
            Start knowing what's happening in your organization.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-zinc-300 text-base mb-10 leading-relaxed">
            Join 500+ leadership teams who replaced status meetings with One Platform. Set up in minutes, not months.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
              className="px-8 py-3.5 bg-white text-zinc-900 font-bold rounded-xl text-sm hover:bg-zinc-100 transition-colors shadow-xl"
            >
              Start for Free
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}
              className="px-8 py-3.5 border border-white/20 text-white font-semibold rounded-xl text-sm hover:border-white/40 hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Talk to Sales
            </motion.button>
          </motion.div>

          {/* Social proof row */}
          <motion.div variants={fadeUp} className="mt-10 flex items-center justify-center gap-6 flex-wrap">
            {["SOC 2 Certified", "GDPR Ready", "99.9% Uptime", "14-day free trial"].map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-zinc-400 text-xs">
                <span className="w-1 h-1 rounded-full bg-indigo-400" />{t}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


// ─── Footer ───────────────────────────────────────────────────────────────────

const footerLinks = {
  Product:  ["Features", "Pricing", "Changelog", "Roadmap"],
  Company:  ["About", "Blog", "Careers", "Press"],
  Legal:    ["Privacy", "Terms", "Security", "Cookies"],
};

function Footer() {
  return (
    <motion.footer
      variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}
      className="bg-white border-t border-zinc-100 px-6 pt-16 pb-10"
    >
      <div className="max-w-6xl mx-auto">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-14">

          {/* Brand col — wider */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-0.5 mb-4">
              <span className="text-zinc-900 font-bold text-sm tracking-widest uppercase">One Platform</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mb-1 ml-0.5 flex-shrink-0 self-end" />
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs mb-6">
              Strategic reporting for leadership teams that move fast. One view. Every decision.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { label: "X", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.25 2.25h6.844l4.262 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                { label: "LI", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" },
              ].map((s) => (
                <Link key={s.label} href="#"
                  className="w-8 h-8 rounded-lg border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-zinc-900 hover:border-zinc-400 transition-colors">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-zinc-900 text-xs font-semibold uppercase tracking-widest mb-4">{group}</p>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l}>
                    <Link href="#" className="text-zinc-400 text-sm hover:text-zinc-900 transition-colors duration-150">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-400 text-xs">© 2026 One Platform, Inc. All rights reserved.</p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((l) => (
              <Link key={l} href="#" className="text-zinc-400 text-xs hover:text-zinc-700 transition-colors">{l}</Link>
            ))}
          </div>
        </div>

      </div>
    </motion.footer>
  );
}

// ─── Page Export ──────────────────────────────────────────────────────────────

export default function LandingPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <DashboardPreview />
      <UseCases />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
