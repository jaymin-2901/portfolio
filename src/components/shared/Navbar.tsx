"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/widgets/ThemeProvider";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "glass py-2 shadow-lg backdrop-blur-xl"
          : "bg-transparent py-4"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-base">JC</span>
            </div>
            <span className="text-lg sm:text-xl font-bold gradient-text hidden sm:block">
              Jaymin<span className="text-[var(--foreground-muted)]">.dev</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                    isActive
                      ? "text-[var(--primary)] bg-[var(--primary)]/10"
                      : "text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]/50"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 sm:p-2.5 rounded-xl bg-[var(--muted)]/50 hover:bg-[var(--primary)] text-[var(--foreground)] hover:text-white transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <Moon className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </button>

            <button
              className="lg:hidden p-2 sm:p-2.5 rounded-xl bg-[var(--muted)]/50 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-4 pb-4"
            >
              <div className="flex flex-col gap-1 bg-[var(--card)] rounded-2xl p-2 border border-[var(--border)]">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "block px-4 py-3 rounded-xl text-base font-medium transition-colors",
                        isActive
                          ? "bg-[var(--primary)] text-white"
                          : "hover:bg-[var(--muted)]"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
