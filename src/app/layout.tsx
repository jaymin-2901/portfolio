import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/widgets/ThemeProvider";
import { Navbar } from "@/components/shared/Navbar";
import { PageTransition } from "@/components/shared/PageTransition";
import { Footer } from "@/components/sections/Footer";
import { ChatBotClient } from "@/components/widgets/ChatBotClient";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jaymin Chavda | B.Tech CSE | ML & Data Science | Tech Portfolio",
    template: "%s | Jaymin.dev",
  },
  description: "Portfolio of Jaymin Chavda – B.Tech CSE student, Machine Learning & Data Science enthusiast building smart solutions.",
  keywords: [
    "Jaymin Chavda",
    "Portfolio",
    "VGEC",
    "Vishwakarma Government Engineering College",
    "B.Tech CSE",
    "Machine Learning",
    "Data Science",
    "Data Scientist",
    "Web Developer",
    "Technology Enthusiast",
    "Gujarat",
    "India",
    "Full Stack Developer",
    "Tech Portfolio",
  ],
  authors: [{ name: "Jaymin Chavda" }],
  creator: "Jaymin Chavda",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Jaymin Chavda | B.Tech CSE    | CA Aspirant | Tech Portfolio",
    description: "Portfolio of Jaymin Chavda – B.Tech CSE    student, aspiring Chartered Accountant, and technology enthusiast building smart solutions.",
    siteName: "Jaymin.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaymin Chavda | B.Tech CSE    | CA Aspirant | Tech Portfolio",
    description: "Portfolio of Jaymin Chavda – B.Tech CSE    student, aspiring Chartered Accountant, and technology enthusiast building smart solutions.",
    creator: "@jayminchavda",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen flex flex-col overflow-x-hidden`}
      >
        <ThemeProvider>
          <Navbar />
          <PageTransition>
            <main className="flex-1 pt-16">{children}</main>
          </PageTransition>
          <Footer />
          <ChatBotClient />
        </ThemeProvider>
      </body>
    </html>
  );
}
