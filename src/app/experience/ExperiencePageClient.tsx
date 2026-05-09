"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Rocket, Github, ExternalLink } from "lucide-react";
import { projects, timeline } from "@/lib/constants";
import { cn } from "@/lib/utils";

const typeIcons = {
  education: GraduationCap,
  work: Briefcase,
  project: Rocket,
  research: Rocket,
};

const typeColors = {
  education: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  work: "bg-green-500/20 text-green-400 border-green-500/30",
  project: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  research: "bg-amber-500/20 text-amber-400 border-amber-500/30",
};

export default function ExperiencePageClient() {
  return (
    <div className="py-16 sm:py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-xs sm:text-sm">My Journey</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Academic & <span className="gradient-text">Professional</span>
          </h1>
          <p className="text-sm sm:text-base text-[var(--foreground-muted)] max-w-2xl mx-auto px-4">
            A timeline of growth, learning, and achievements that have shaped my path.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            whileInView={{ opacity: 1, height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)]"
          />

          {timeline.map((item, index) => {
            const Icon = typeIcons[item.type as keyof typeof typeIcons] || Rocket;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={cn(
                  "relative flex items-center mb-6 sm:mb-8 md:mb-12",
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                <div className={cn(
                  "flex-1 ml-12 sm:ml-14 md:ml-0",
                  isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                )}>
                  <div className={cn(
                    "p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)]/50 transition-colors",
                  )}>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <span className={cn(
                        "px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium border capitalize",
                        typeColors[item.type as keyof typeof typeColors]
                      )}>
                        {item.type}
                      </span>
                      <span className="text-xs sm:text-sm text-[var(--foreground-muted)]">
                        {item.date}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-[var(--primary)] font-medium mb-1 sm:mb-2 text-sm sm:text-base">{item.organization}</p>
                    <p className="text-xs sm:text-sm text-[var(--foreground-muted)]">{item.description}</p>
                  </div>
                </div>

                <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center shadow-lg z-10">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16"
        >
          <div className="text-center mb-8 sm:mb-10">
            <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-xs sm:text-sm">Projects Journey</span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-2">
              Full <span className="gradient-text">Project Portfolio</span>
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground-muted)] max-w-2xl mx-auto px-4">
              A complete view of the projects that shaped my hands-on learning and delivery experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {projects.map((project) => (
              <div
                key={`${project.id}-${project.title}`}
                className="rounded-2xl bg-[var(--card)] border border-[var(--border)] p-4 sm:p-6 hover:border-[var(--primary)]/50 transition-colors"
              >
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[var(--muted)] text-xs font-medium">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--foreground-muted)] mb-3 sm:mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.tech.slice(0, 6).map((tech) => (
                    <span
                      key={`${project.id}-${tech}`}
                      className="px-2 py-0.5 sm:py-1 rounded bg-[var(--muted)] text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 6 && (
                    <span className="px-2 py-0.5 sm:py-1 rounded bg-[var(--muted)] text-xs font-medium">
                      +{project.tech.length - 6}
                    </span>
                  )}
                </div>
                <div className="flex gap-2 sm:gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--muted)] hover:bg-[var(--primary)] text-xs sm:text-sm font-medium transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--primary)] hover:bg-[var(--secondary)] text-white text-xs sm:text-sm font-medium transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[var(--gradient-start)]/10 to-[var(--gradient-end)]/10 border border-[var(--primary)]/20"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center shrink-0">
              <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Looking Forward</h3>
              <p className="text-sm sm:text-base text-[var(--foreground-muted)]">
                Currently focused on completing my B.Tech CSE    degree while advancing through CA examinations.
                Actively seeking internship opportunities in software development, fintech, and web technologies.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
