"use client";

import { motion } from "framer-motion";
import { Download, Mail, Phone, MapPin, Linkedin, Github, FileText, Award, Briefcase, GraduationCap, Code } from "lucide-react";
import { personalInfo, skills } from "@/lib/constants";
import Link from "next/link";

export default function ResumePageClient() {
  return (
    <div className="py-16 sm:py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-xs sm:text-sm">Curriculum Vitae</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            My <span className="gradient-text">Resume</span>
          </h1>
          <p className="text-sm sm:text-base text-[var(--foreground-muted)] max-w-2xl mx-auto px-4">
            A comprehensive overview of my education, skills, and experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-wrap justify-center gap-4"
        >
          <a 
            href="/Jaymin_Chavda_Resume.pdf" 
            download="Jaymin_Chavda_Resume.pdf"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-[var(--primary)]/25 transition-all"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
          <a 
            href="/Jaymin_Chavda_Resume.pdf" 
            target="_blank"
            className="flex items-center gap-2 px-6 py-3 bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] rounded-xl font-semibold hover:bg-[var(--muted)] transition-all"
          >
            <Download className="w-5 h-5" />
            Open in New Tab
          </a>
        </motion.div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-2xl bg-[var(--card)] border border-[var(--border)]"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center shrink-0">
                <span className="text-3xl sm:text-4xl font-bold text-white">
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="text-center sm:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold">{personalInfo.name}</h2>
                <p className="text-[var(--foreground-muted)]">{personalInfo.role}</p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-3 text-xs sm:text-sm text-[var(--foreground-muted)]">
                  <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5" /> {personalInfo.email}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {personalInfo.location}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center sm:justify-start gap-3">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--muted)] hover:bg-[var(--primary)] text-sm font-medium transition-colors">
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--muted)] hover:bg-[var(--primary)] text-sm font-medium transition-colors">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-2xl bg-[var(--card)] border border-[var(--border)]"
          >
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-[var(--primary)]" />
              <h3 className="text-xl font-bold">Objective</h3>
            </div>
            <p className="text-sm sm:text-base text-[var(--foreground-muted)]">
              {personalInfo.tagline}. Seeking opportunities in Machine Learning and Data Science
              to create innovative solutions. Currently pursuing B.Tech CSE degree.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-2xl bg-[var(--card)] border border-[var(--border)]"
          >
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-6 h-6 text-[var(--primary)]" />
              <h3 className="text-xl font-bold">Education</h3>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <p className="font-semibold">{personalInfo.university}</p>
                  <p className="text-sm text-[var(--foreground-muted)]">B.Tech in Computer Science and Engineering</p>
                </div>
                <span className="text-sm text-[var(--primary)] font-medium">2023 - Present</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <p className="font-semibold">CSE - Data Science </p>
                  <p className="text-sm text-[var(--foreground-muted)]">Specialization in Data Science and Machine Learning</p>
                </div>
                <span className="text-sm text-[var(--primary)] font-medium">2025</span>
              </div>
              <div className="p-4 rounded-xl bg-[var(--muted)]/50">
                <p className="font-semibold text-[var(--primary)]">Current CPI: {personalInfo.cpi}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-2xl bg-[var(--card)] border border-[var(--border)]"
          >
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-6 h-6 text-[var(--primary)]" />
              <h3 className="text-xl font-bold">Technical Skills</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold mb-2 text-sm">Programming Languages</p>
                <div className="flex flex-wrap gap-2">
                  {skills.programming.map(s => (
                    <span key={s.name} className="px-3 py-1 rounded-full bg-[var(--muted)] text-xs sm:text-sm">{s.name}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-semibold mb-2 text-sm">Tools & Platforms</p>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map(s => (
                    <span key={s.name} className="px-3 py-1 rounded-full bg-[var(--muted)] text-xs sm:text-sm">{s.name}</span>
                  ))}
                </div>
              </div>
              <div className="sm:col-span-2">
                <p className="font-semibold mb-2 text-sm">Core Concepts</p>
                <div className="flex flex-wrap gap-2">
                  {skills.concepts.map(s => (
                    <span key={s.name} className="px-3 py-1 rounded-full bg-[var(--muted)] text-xs sm:text-sm">{s.name}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-2xl bg-[var(--card)] border border-[var(--border)]"
          >
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-6 h-6 text-[var(--primary)]" />
              <h3 className="text-xl font-bold">Projects</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Bansari Homeopathic Clinic Management System</p>
                <p className="text-sm text-[var(--foreground-muted)]">Full-stack web application with patient records, appointment scheduling, and billing.</p>
                <p className="text-xs text-[var(--primary)] mt-1">React, Node.js, MongoDB</p>
              </div>
              <div>
                <p className="font-semibold">IoT Smart Agriculture System</p>
                <p className="text-sm text-[var(--foreground-muted)]">Environmental monitoring using ESP32 sensors with data analytics.</p>
                <p className="text-xs text-[var(--primary)] mt-1">ESP32, Python, TensorFlow, MQTT</p>
              </div>
              <div>
                <p className="font-semibold">Personal Portfolio Website</p>
                <p className="text-sm text-[var(--foreground-muted)]">Modern responsive portfolio with AI chatbot and animations.</p>
                <p className="text-xs text-[var(--primary)] mt-1">Next.js, TypeScript, Tailwind CSS, Framer Motion</p>
              </div>  <div>
                <p className="font-semibold">Car Price Prediction (ML)</p>
                <p className="text-sm text-[var(--foreground-muted)]">Machine learning model to predict car prices using Random Forest Regressor.</p>
                <p className="text-xs text-[var(--primary)] mt-1">Python, Scikit-learn, Random Forest, Flask, Heroku</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-2xl bg-[var(--card)] border border-[var(--border)]"
          >
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-[var(--primary)]" />
              <h3 className="text-xl font-bold">Achievements</h3>
            </div>
            <ul className="space-y-2 text-sm sm:text-base text-[var(--foreground-muted)]">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                Father achieved India Book of Records for small footwear record
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                Academic excellence with {personalInfo.cpi} CPI
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                Secured top 10% rank in college for 4 consecutive semesters
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                Multiple web development projects delivered
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-[var(--foreground-muted)] mb-4">Interested in working together?</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-[var(--primary)]/25 transition-all"
          >
            <Mail className="w-5 h-5" />
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
