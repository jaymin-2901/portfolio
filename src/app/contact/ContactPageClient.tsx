"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, Linkedin, Github, Twitter, CheckCircle } from "lucide-react";
import { personalInfo } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: MapPin, label: "Location", value: personalInfo.location, href: "#" },
  { icon: Linkedin, label: "LinkedIn", value: "Connect", href: personalInfo.linkedin },
  { icon: Github, label: "GitHub", value: "Profile", href: personalInfo.github },
  { icon: Twitter, label: "Twitter", value: "Follow", href: personalInfo.twitter },
];

export default function ContactPageClient() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");

    try {
      await emailjs.send(
        "service_vlnsq9m",
        "template_15rlxus",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: personalInfo.email,
        },
        "k_zWk5ssQRTJ79nMM"
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-xs sm:text-sm">Get In Touch</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-sm sm:text-base text-[var(--foreground-muted)] max-w-2xl mx-auto px-4">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
            Feel free to reach out through any of the channels below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-bold">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)]/50 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-[var(--gradient-start)]/20 to-[var(--gradient-end)]/20 group-hover:from-[var(--gradient-start)]/30 group-hover:to-[var(--gradient-end)]/30 transition-colors shrink-0">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--primary)]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-[var(--foreground-muted)]">{item.label}</p>
                    <p className="font-medium text-sm sm:text-base truncate">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-[var(--gradient-start)]/10 to-[var(--gradient-end)]/10 border border-[var(--primary)]/20">
              <h4 className="font-bold mb-2 text-sm sm:text-base">Quick Response</h4>
              <p className="text-xs sm:text-sm text-[var(--foreground-muted)]">
                I typically respond within 24 hours. For urgent matters, feel free to reach out on LinkedIn.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)]">
              <h4 className="font-bold mb-4 text-sm sm:text-base">Connect on Social</h4>
              <div className="flex gap-3">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-[var(--muted)] hover:bg-[var(--primary)] transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-[var(--muted)] hover:bg-[var(--primary)] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-[var(--muted)] hover:bg-[var(--primary)] transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl bg-[var(--card)] border border-[var(--border)] space-y-6">
              <h3 className="text-xl font-bold">Send a Message</h3>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className={cn(
                    "w-full px-4 py-3 rounded-xl bg-[var(--muted)] border transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--ring)] text-sm sm:text-base",
                    errors.name ? "border-red-500" : "border-[var(--border)]"
                  )}
                />
                {errors.name && <p className="text-red-500 text-xs sm:text-sm">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className={cn(
                    "w-full px-4 py-3 rounded-xl bg-[var(--muted)] border transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--ring)] text-sm sm:text-base",
                    errors.email ? "border-red-500" : "border-[var(--border)]"
                  )}
                />
                {errors.email && <p className="text-red-500 text-xs sm:text-sm">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  className={cn(
                    "w-full px-4 py-3 rounded-xl bg-[var(--muted)] border transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--ring)] resize-none text-sm sm:text-base",
                    errors.message ? "border-red-500" : "border-[var(--border)]"
                  )}
                />
                {errors.message && <p className="text-red-500 text-xs sm:text-sm">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className={cn(
                  "w-full py-3 sm:py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all text-sm sm:text-base",
                  status === "success"
                    ? "bg-green-500 text-white"
                    : status === "error"
                    ? "bg-red-500 text-white"
                    : "bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white hover:shadow-lg hover:shadow-[var(--primary)]/25",
                  status === "sending" && "opacity-70 cursor-not-allowed"
                )}
              >
                {status === "sending" ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Sending...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : status === "error" ? (
                  "Something went wrong. Please try again."
                ) : (
                  <>
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
