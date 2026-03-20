"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/lib/constants";

const socialLinks = [
  { icon: Github, href: personalInfo.github, label: "GitHub" },
  { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: personalInfo.twitter, label: "Twitter" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 sm:w-96 sm:h-96 bg-[var(--primary)] rounded-full opacity-10 sm:opacity-20 blur-[80px] sm:blur-[128px] animate-pulse" />
        <div className="absolute -bottom-20 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-[var(--secondary)] rounded-full opacity-10 sm:opacity-20 blur-[80px] sm:blur-[128px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-[var(--accent)] rounded-full opacity-5 sm:opacity-10 blur-[60px] sm:blur-[96px] animate-pulse" style={{ animationDelay: "2s" }} />
        
        <div 
          className="absolute inset-0 hidden sm:block" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)`,
            backgroundSize: '64px 64px',
            opacity: 0.3,
          }} 
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[var(--muted)] text-xs sm:text-sm font-medium">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Open to Opportunities
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 leading-tight"
        >
          <span className="block text-[var(--foreground)]">Hi, I&apos;m</span>
          <span className="block gradient-text">{personalInfo.name}</span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="mb-6 sm:mb-8"
        >
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[var(--foreground-muted)] font-light px-2">
            {personalInfo.tagline}
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12"
        >
          <Link
            href="#projects"
            className="group flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-[var(--primary)]/25 transition-all w-full sm:w-auto text-sm sm:text-base"
          >
            View Projects
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
          <Link
            href="#contact"
            className="flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 border border-[var(--border)] rounded-xl font-semibold hover:bg-[var(--muted)] transition-colors w-full sm:w-auto text-sm sm:text-base"
          >
            Contact Me
          </Link>
          <button className="flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 border border-[var(--border)] rounded-xl font-semibold hover:bg-[var(--muted)] transition-colors w-full sm:w-auto text-sm sm:text-base">
            <Download className="w-4 h-4 sm:w-5 sm:h-5" />
            Resume
          </button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4 sm:gap-6"
        >
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 rounded-xl bg-[var(--muted)]/50 hover:bg-[var(--primary)] text-[var(--foreground)] hover:text-white transition-all"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 hidden sm:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-[var(--foreground-muted)] rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-[var(--foreground-muted)] rounded-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
