"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import { personalInfo } from "@/lib/constants";

const socialLinks = [
  { icon: Github, href: personalInfo.github, label: "GitHub" },
  { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: personalInfo.twitter, label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="py-8 sm:py-12 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start gap-2"
          >
            <span className="text-xl sm:text-2xl font-bold gradient-text">
              Jaymin<span className="text-[var(--foreground-muted)]">.dev</span>
            </span>
            <p className="text-xs sm:text-sm text-[var(--foreground-muted)] text-center md:text-left">
              {personalInfo.name} - {personalInfo.role}
            </p>
          </motion.div>

          <div className="flex items-center gap-3 sm:gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 rounded-xl bg-[var(--muted)]/50 hover:bg-[var(--primary)] text-[var(--foreground)] hover:text-white transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm text-[var(--foreground-muted)] flex items-center gap-1"
          >
            Made with <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 animate-pulse" /> in India
          </motion.p>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-[var(--border)] text-center">
          <p className="text-xs sm:text-sm text-[var(--foreground-muted)]">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-[var(--foreground-muted)] mt-2 hidden sm:block">
            Built with Next.js, TypeScript, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
