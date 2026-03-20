"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { chatBotResponses, quickQuestions } from "@/lib/constants";
import { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", role: "assistant", content: chatBotResponses.greeting },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes("who") || lowerQuestion.includes("about") || lowerQuestion.includes("jaymin")) {
      return chatBotResponses.about;
    }
    if (lowerQuestion.includes("skill") || lowerQuestion.includes("tech") || lowerQuestion.includes("know")) {
      return chatBotResponses.skills;
    }
    if (lowerQuestion.includes("project")) {
      return chatBotResponses.projects;
    }
    if (lowerQuestion.includes("availab") || lowerQuestion.includes("work") || lowerQuestion.includes("internship")) {
      return chatBotResponses.availability;
    }
    if (lowerQuestion.includes("contact") || lowerQuestion.includes("email") || lowerQuestion.includes("reach")) {
      return chatBotResponses.contact;
    }
    if (lowerQuestion.includes("education") || lowerQuestion.includes("study") || lowerQuestion.includes("university") || lowerQuestion.includes("college")) {
      return chatBotResponses.education;
    }
    if (lowerQuestion.includes("hello") || lowerQuestion.includes("hi") || lowerQuestion.includes("hey")) {
      return "Hey there! I'm Jaymin's virtual assistant. Feel free to ask me anything about Jaymin's skills, projects, education, or availability!";
    }
    return chatBotResponses.default;
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = generateResponse(input);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: response,
        },
      ]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickQuestion = (question: string) => {
    setInput(question);
    setTimeout(handleSend, 100);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-4 left-4 sm:left-auto sm:right-6 z-40 w-auto sm:w-80 md:w-96 max-h-[500px] glass rounded-2xl overflow-hidden shadow-2xl max-w-[calc(100vw-2rem)]"
          >
            <div className="bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] p-3 sm:p-4 flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-lg sm:text-xl">AI</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm sm:text-base">Jaymin.dev Assistant</h3>
                  <p className="text-white/70 text-xs hidden sm:block">Ask me anything!</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            <div className="h-64 sm:h-72 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "flex",
                    message.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[85%] p-2.5 sm:p-3 rounded-2xl text-xs sm:text-sm whitespace-pre-wrap",
                      message.role === "user"
                        ? "bg-[var(--primary)] text-white rounded-br-md"
                        : "bg-[var(--muted)] text-[var(--foreground)] rounded-bl-md"
                    )}
                  >
                    {message.content}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-[var(--muted)] p-3 rounded-2xl rounded-bl-md">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                          className="w-2 h-2 bg-[var(--foreground-muted)] rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-2 sm:p-3 border-t border-[var(--border)]">
              <div className="hidden sm:flex flex-wrap gap-2 mb-3">
                {quickQuestions.map((question) => (
                  <button
                    key={question}
                    onClick={() => handleQuickQuestion(question)}
                    className="text-xs px-3 py-1 rounded-full bg-[var(--muted)] hover:bg-[var(--primary)] hover:text-white transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask me anything..."
                  className="flex-1 px-3 sm:px-4 py-2 rounded-xl bg-[var(--muted)] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)] text-xs sm:text-sm"
                />
                <button
                  onClick={handleSend}
                  className="px-3 sm:px-4 py-2 bg-[var(--primary)] hover:bg-[var(--secondary)] text-white rounded-xl transition-colors font-medium text-xs sm:text-sm"
                >
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white shadow-lg flex items-center justify-center transition-transform hover:scale-110",
          isOpen && "rotate-45"
        )}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <span className="text-xl sm:text-2xl">{isOpen ? "X" : "AI"}</span>
      </motion.button>
    </>
  );
}
