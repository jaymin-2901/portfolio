"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 3;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--background)]"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="text-center px-4"
      >
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl font-bold gradient-text mb-3 sm:mb-4"
          animate={{ 
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ backgroundSize: "200% 200%" }}
        >
          Jaymin<span className="text-[var(--foreground-muted)]">.dev</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-[var(--foreground-muted)] text-sm sm:text-base"
        >
          Jaymin Chavda
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8 sm:mt-12 w-48 sm:w-64"
      >
        <div className="h-1 sm:h-1.5 bg-[var(--muted)] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        <p className="text-center text-xs sm:text-sm text-[var(--foreground-muted)] mt-2">
          {progress}%
        </p>
      </motion.div>
    </motion.div>
  );
}
