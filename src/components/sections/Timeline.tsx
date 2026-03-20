"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Rocket } from "lucide-react";
import { timeline } from "@/lib/constants";
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

export function Timeline() {
  return (
    <section id="timeline" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--primary)]/5 to-transparent" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-xs sm:text-sm">
            My Journey
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mt-2 mb-3 sm:mb-4">
            Academic <span className="gradient-text">& Professional</span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--foreground-muted)] max-w-2xl mx-auto px-4">
            A timeline of growth, learning, and achievements
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)]" />

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
                        "px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium border",
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

                <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center shadow-lg z-10">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
