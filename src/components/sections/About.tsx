"use client";

import { motion, type Variants } from "framer-motion";
import { Target, BookOpen, Lightbulb, Award } from "lucide-react";
import { personalInfo } from "@/lib/constants";
import { cn } from "@/lib/utils";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Combining analytical thinking from CA studies with technical implementation.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Always exploring new technologies and methodologies to stay ahead.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Creating solutions that bridge the gap between finance and technology.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Striving for the highest quality in every project and endeavor.",
  },
];

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--primary)]/5 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
        >
          <motion.div variants={fadeInUp} className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-xs sm:max-w-sm mx-auto aspect-square">
              <div className="absolute inset-2 sm:inset-4 bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] rounded-2xl sm:rounded-3xl opacity-20 blur-xl" />
              <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[var(--border)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--gradient-start)]/20 to-[var(--gradient-end)]/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="w-20 h-20 sm:w-28 sm:h-28 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center">
                      <span className="text-2xl sm:text-4xl font-bold text-white">
                        {personalInfo.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[var(--foreground-muted)]">{personalInfo.name}</p>
                  </div>
                </div>
              </div>
              
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-20 sm:h-20 border-2 border-dashed border-[var(--primary)] rounded-full hidden sm:block"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-16 sm:h-16 border-2 border-dashed border-[var(--secondary)] rounded-full hidden sm:block"
              />
            </div>
          </motion.div>

          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <motion.div variants={fadeInUp}>
              <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-xs sm:text-sm">
                About Me
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mt-2 mb-4 sm:mb-6">
                Where <span className="gradient-text">Finance</span> Meets{' '}
                <span className="gradient-text">Technology</span>
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-3 sm:space-y-4 text-sm sm:text-base text-[var(--foreground-muted)]">
              <p>
                I&apos;m {personalInfo.name}, a {personalInfo.role} at{' '}
                <span className="text-[var(--foreground)] font-medium">{personalInfo.university}</span>.
                With a current CPI of <span className="text-[var(--primary)] font-semibold">{personalInfo.cpi}</span>,
                I&apos;m charting a unique path that combines the rigor of{' '}
                <span className="text-[var(--foreground)] font-medium">Chartered Accountancy</span> with the
                innovation of modern technology.
              </p>
              <p>
                My journey is driven by a simple belief: the future belongs to those who can
                bridge traditional financial expertise with cutting-edge technological solutions.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="p-3 sm:p-4 rounded-xl bg-[var(--card)] border border-[var(--border)]">
                <p className="text-2xl sm:text-3xl font-bold gradient-text">{personalInfo.cpi}</p>
                <p className="text-xs sm:text-sm text-[var(--foreground-muted)]">Current CPI</p>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-[var(--card)] border border-[var(--border)]">
                <p className="text-2xl sm:text-3xl font-bold gradient-text">Sem 6</p>
                <p className="text-xs sm:text-sm text-[var(--foreground-muted)]">Current Semester</p>
              </div>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-3 sm:gap-4">
              {values.map((value) => (
                <motion.div
                  key={value.title}
                  variants={fadeInUp}
                  className={cn(
                    "p-3 sm:p-4 rounded-xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)] transition-colors group",
                  )}
                >
                  <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--primary)] mb-2 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-1 text-sm sm:text-base">{value.title}</h3>
                  <p className="text-xs sm:text-sm text-[var(--foreground-muted)]">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
