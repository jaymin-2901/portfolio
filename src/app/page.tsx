"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter, Code, Briefcase, GraduationCap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { personalInfo, projects } from "@/lib/constants";

const socialLinks = [
  { icon: Github, href: personalInfo.github, label: "GitHub" },
  { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: personalInfo.twitter, label: "Twitter" },
];

const quickLinks = [
  { icon: Code, label: "Projects", href: "/projects", desc: "View my work" },
  { icon: GraduationCap, label: "Experience", href: "/experience", desc: "My journey" },
  { icon: Briefcase, label: "Resume", href: "/resume", desc: "Download CV" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HomePage() {
  return (
    <div className="relative">
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-72 h-72 sm:w-96 sm:h-96 bg-[var(--primary)] rounded-full opacity-10 blur-[80px]" />
          <div className="absolute -bottom-20 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-[var(--secondary)] rounded-full opacity-10 blur-[80px]" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--muted)] text-xs sm:text-sm font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Open to Opportunities
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold mb-4 leading-tight">
            <span className="block text-[var(--foreground)]">Hi, I&apos;m</span>
            <span className="block gradient-text">{personalInfo.name}</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl text-[var(--foreground-muted)] font-light px-2 mb-8 max-w-2xl mx-auto">
            {personalInfo.tagline}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
            <Link
              href="/projects"
              className="group flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-[var(--primary)]/25 transition-all w-full sm:w-auto text-sm sm:text-base"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 px-6 py-3 border border-[var(--border)] rounded-xl font-semibold hover:bg-[var(--muted)] transition-colors w-full sm:w-auto text-sm sm:text-base"
            >
              Contact Me
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 sm:gap-6 mb-16">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[var(--muted)]/50 hover:bg-[var(--primary)] text-[var(--foreground)] hover:text-white transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 sm:gap-6 max-w-md mx-auto">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group p-4 sm:p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)]/50 transition-all"
              >
                <link.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-[var(--primary)] group-hover:scale-110 transition-transform" />
                <p className="font-semibold text-sm sm:text-base">{link.label}</p>
                <p className="text-xs text-[var(--foreground-muted)] hidden sm:block">{link.desc}</p>
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="py-16 sm:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-xs sm:text-sm">Highlights</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2">Key Skills</h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {["React", "Next.js", "TypeScript", "Python", "Node.js", "MongoDB", "Git", "Docker", "Tailwind CSS"].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-4 py-2 rounded-full bg-[var(--muted)] text-sm font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 relative bg-gradient-to-b from-transparent via-[var(--primary)]/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-8"
          >
            <div>
              <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-xs sm:text-sm">My Work</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2">Featured Projects</h2>
            </div>
            <Link
              href="/projects"
              className="hidden sm:flex items-center gap-2 text-[var(--primary)] font-medium hover:gap-3 transition-all"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project, index) => (
              <motion.div
                key={`${project.id}-${project.title}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group rounded-2xl overflow-hidden bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)]/50 transition-all"
              >
                <div className="aspect-video relative overflow-hidden bg-[var(--muted)]">
                  <Image
                    src={project.image || "/projects/default.svg"}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">{project.title}</h3>
                  <p className="text-sm text-[var(--foreground-muted)] mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 rounded bg-[var(--muted)] text-xs font-medium">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/projects" className="inline-flex items-center gap-2 text-[var(--primary)] font-medium">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
