"use client";

import { motion } from "framer-motion";
import { Trophy, TrendingUp, Users, Zap } from "lucide-react";
import { achievements } from "@/lib/constants";
import { useEffect, useState } from "react";

interface CounterProps {
  value: string;
  suffix: string;
  duration?: number;
}

function Counter({ value, suffix, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
    const isDecimal = value.includes(".");
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            
            if (isDecimal) {
              setCount(parseFloat((numericValue * eased).toFixed(2)));
            } else if (value.includes("+")) {
              setCount(Math.floor(numericValue * eased));
            } else {
              setCount(Math.floor(numericValue * eased));
            }

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`counter-${value}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  const displayValue = value.includes(".") 
    ? count.toFixed(2)
    : value.includes("+") 
      ? `${count}+`
      : count.toString();

  return <span id={`counter-${value}`}>{displayValue}{suffix}</span>;
}

const icons = [Trophy, TrendingUp, Users, Zap];

export function Achievements() {
  return (
    <section id="achievements" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--secondary)]/5 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-xs sm:text-sm">
            Recognition
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mt-2 mb-3 sm:mb-4">
            Achievements & <span className="gradient-text">Milestones</span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--foreground-muted)] max-w-2xl mx-auto px-4">
            Celebrating academic excellence and personal accomplishments
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {achievements.map((achievement, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-4 sm:p-6 md:p-8 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)]/50 transition-all overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 md:w-32 md:h-32 bg-gradient-to-br from-[var(--gradient-start)]/10 to-[var(--gradient-end)]/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
                
                <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[var(--primary)] mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
                
                <div className="relative">
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-1 sm:mb-2">
                    <Counter value={achievement.value} suffix={achievement.suffix} />
                  </p>
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-1">{achievement.title}</h3>
                  <p className="text-xs sm:text-sm text-[var(--foreground-muted)] hidden sm:block">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 sm:mt-12 md:mt-16 p-4 sm:p-6 md:p-8 rounded-2xl bg-gradient-to-r from-[var(--gradient-start)]/10 to-[var(--gradient-end)]/10 border border-[var(--primary)]/20"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center shrink-0">
              <span className="text-2xl sm:text-3xl">🏆</span>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">Father&apos;s India Book of Records Achievement</h3>
              <p className="text-xs sm:text-sm md:text-base text-[var(--foreground-muted)]">
                A testament to the family legacy of excellence and record-breaking achievements.
                This accomplishment inspires my journey to create impact through technology and finance.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
