"use client";

import { motion, type Variants } from "framer-motion";
import { Target, BookOpen, Lightbulb, Award, MapPin, Mail, GraduationCap, TrendingUp } from "lucide-react";
import { personalInfo, skills } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const values = [
  { icon: Target, title: "Precision", description: "Patinated about Tech and Innovation." },
  { icon: BookOpen, title: "Continuous Learning", description: "Always exploring new technologies and methodologies to stay ahead." },
  { icon: Lightbulb, title: "Innovation", description: "Creating solutions that bridge the gap between data science and techchnology." },
  { icon: Award, title: "Excellence", description: "Striving for the highest quality in every project and endeavor." },
];

export default function AboutPage() {
  return (
    <div className="relative">
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 lg:items-center"
          >
            <motion.div variants={fadeInUp} className="relative order-2 lg:order-1">
              <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative aspect-square"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] rounded-3xl blur-2xl opacity-20" />
                  
                  <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-[var(--border)] bg-gradient-to-br from-[var(--card)] to-[var(--background)]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-8 w-full">
                        <div className="relative inline-block">
                          <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto">
                            <Image
                              src={personalInfo.profileImage}
                              alt={personalInfo.name}
                              fill
                              sizes="(max-width: 640px) 160px, 192px"
                              className="rounded-full object-cover shadow-xl"
                              priority
                            />
                            <div className="hidden w-full h-full rounded-full bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center shadow-xl">
                              <span className="text-4xl sm:text-5xl font-bold text-white">
                                {personalInfo.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                          </div>
                          
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -inset-4 border-2 border-dashed border-[var(--primary)]/50 rounded-full hidden sm:block"
                          />
                        </div>
                        <p className="mt-6 text-lg sm:text-xl font-semibold">{personalInfo.name}</p>
                        <p className="text-sm text-[var(--foreground-muted)]">{personalInfo.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 p-3 sm:p-4 rounded-2xl bg-[var(--card)] border border-[var(--border)] shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">{personalInfo.cpi} CPI</p>
                      <p className="text-xs text-[var(--foreground-muted)]">Academic Excellence</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 px-3 py-1.5 rounded-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white text-xs sm:text-sm font-medium shadow-lg"
                >
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    Available for Opportunities
                  </span>
                </motion.div>
              </div>
            </motion.div>

            <div className="space-y-6 order-1 lg:order-2">
              <motion.div variants={fadeInUp}>
                <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-xs sm:text-sm">About Me</span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-4">
               
                  <span className="gradient-text">Technology</span>
                </h1>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-4 text-sm sm:text-base text-[var(--foreground-muted)]">
                <p>
                  I am <span className="text-[var(--foreground)] font-semibold">{personalInfo.name}</span>, a{' '}
                  <span className="text-[var(--foreground)] font-semibold">{personalInfo.role}</span> at{' '}
                  <span className="text-[var(--primary)]">{personalInfo.university}</span>.
                </p>
                <p>
                  My journey is driven by a passion for{' '}
                  <span className="text-[var(--foreground)] font-semibold">Machine Learning & Data Science</span> with the
                  innovation of modern technology to create meaningful solutions.
                </p>
                <p>
                  With a current CPI of <span className="text-[var(--primary)] font-semibold">{personalInfo.cpi}</span>,
                  I maintain a strong academic foundation while actively exploring machine learning, data science, and
                  web development applications.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[var(--card)] border border-[var(--border)]">
                  <GraduationCap className="w-5 h-5 text-[var(--primary)]" />
                  <div>
                    <p className="text-xs text-[var(--foreground-muted)]">University</p>
                    <p className="font-medium text-sm">{personalInfo.university}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[var(--card)] border border-[var(--border)]">
                  <MapPin className="w-5 h-5 text-[var(--primary)]" />
                  <div>
                    <p className="text-xs text-[var(--foreground-muted)]">Location</p>
                    <p className="font-medium text-sm">{personalInfo.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[var(--card)] border border-[var(--border)]">
                  <Mail className="w-5 h-5 text-[var(--primary)]" />
                  <div>
                    <p className="text-xs text-[var(--foreground-muted)]">Email</p>
                    <p className="font-medium text-xs truncate">{personalInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[var(--card)] border border-[var(--border)]">
                  <Award className="w-5 h-5 text-[var(--primary)]" />
                  <div>
                    <p className="text-xs text-[var(--foreground-muted)]">Goal</p>
                    <p className="font-medium text-sm">{personalInfo.goal}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gradient-to-b from-transparent via-[var(--primary)]/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-xs sm:text-sm">My Values</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2">What Drives Me</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="p-4 sm:p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)]/50 transition-all group"
              >
                <value.icon className="w-8 h-8 sm:w-10 sm:h-10 text-[var(--primary)] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-[var(--foreground-muted)]">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-xs sm:text-sm">Expertise</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2">Skills Overview</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {[
              ...skills.programming.slice(0, 4),
              ...skills.tools.slice(0, 4),
              ...skills.concepts.slice(0, 4),
            ].map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center justify-between p-4 rounded-xl bg-[var(--card)] border border-[var(--border)]"
              >
                <span className="font-medium text-sm sm:text-base">{skill.name}</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 sm:w-24 h-2 bg-[var(--muted)] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] rounded-full"
                    />
                  </div>
                  <span className="text-xs text-[var(--foreground-muted)] w-8">{skill.level}%</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-[var(--primary)]/25 transition-all"
            >
              View All Projects
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
