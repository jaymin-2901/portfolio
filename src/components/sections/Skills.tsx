"use client";

import { motion } from "framer-motion";
import { Code, Wrench, Brain } from "lucide-react";
import { skills } from "@/lib/constants";
import { useEffect, useState } from "react";

interface SkillBarProps {
  name: string;
  level: number;
  index: number;
}

function SkillBar({ name, level, index }: SkillBarProps) {
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setAnimatedLevel(level);
    }, index * 100);
    return () => clearTimeout(timer);
  }, [level, index]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-xs sm:text-sm font-medium">{name}</span>
        <span className="text-xs sm:text-sm text-[var(--foreground-muted)]">{level}%</span>
      </div>
      <div className="h-1.5 sm:h-2 bg-[var(--muted)] rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] rounded-full"
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${animatedLevel}%` : 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

interface SkillCategoryProps {
  title: string;
  icon: React.ElementType;
  items: { name: string; level: number }[];
  index: number;
}

function SkillCategory({ title, icon: Icon, items, index }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="p-4 sm:p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)]/50 transition-colors"
    >
      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
        <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-br from-[var(--gradient-start)]/20 to-[var(--gradient-end)]/20">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--primary)]" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold">{title}</h3>
      </div>
      <div className="space-y-3 sm:space-y-4">
        {items.map((skill, i) => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i} />
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--secondary)]/5 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-xs sm:text-sm">
            My Expertise
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mt-2 mb-3 sm:mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--foreground-muted)] max-w-2xl mx-auto px-4">
            A diverse toolkit honed through academic projects and personal exploration
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <SkillCategory
            title="Programming"
            icon={Code}
            items={skills.programming}
            index={0}
          />
          <SkillCategory
            title="Tools & Platforms"
            icon={Wrench}
            items={skills.tools}
            index={1}
          />
          <SkillCategory
            title="Concepts"
            icon={Brain}
            items={skills.concepts}
            index={2}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 sm:mt-16"
        >
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-center mb-6 sm:mb-8">Tech Stack Cloud</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4">
            {[
              "React", "Next.js", "TypeScript", "Python", "Node.js", 
              "MongoDB", "PostgreSQL", "Git", "Docker", "AWS",
              "Tailwind CSS", "Framer Motion", "TensorFlow", "FastAPI", "REST APIs"
            ].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[var(--muted)] text-xs sm:text-sm font-medium hover:bg-[var(--primary)] hover:text-white transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
