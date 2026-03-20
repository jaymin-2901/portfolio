"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useState } from "react";

const categories = ["All", "Web Application", "IoT"];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--accent)]/5 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-xs sm:text-sm">
            My Work
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mt-2 mb-3 sm:mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--foreground-muted)] max-w-2xl mx-auto px-4">
            From clinic management systems to IoT solutions - exploring technology&apos;s potential
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={cn(
                "px-4 sm:px-6 py-2 rounded-full font-medium transition-all text-sm",
                activeFilter === category
                  ? "bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white"
                  : "bg-[var(--muted)] hover:bg-[var(--primary)] hover:text-white"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group rounded-2xl overflow-hidden bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)]/50 transition-all"
              >
                <div className="aspect-video relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--gradient-start)]/20 to-[var(--gradient-end)]/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-[var(--muted)] flex items-center justify-center">
                      <span className="text-xl sm:text-2xl font-bold gradient-text">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="p-4 sm:p-6">
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <span className="px-2 sm:px-3 py-1 rounded-full bg-[var(--muted)] text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-[var(--foreground-muted)] mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 sm:py-1 rounded bg-[var(--muted)] text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 sm:gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-[var(--muted)] hover:bg-[var(--primary)] text-xs sm:text-sm font-medium transition-colors"
                      >
                        <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-[var(--primary)] hover:bg-[var(--secondary)] text-white text-xs sm:text-sm font-medium transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
