import { Metadata } from "next";
import ResumePageClient from './ResumePageClient';

export const metadata: Metadata = {
  title: "Resume",
  description: "Download Jaymin Chavda's resume - B.Tech CSE    student, aspiring CA, and technology enthusiast.",
};

export default function Resume() {
  return <ResumePageClient />;
}
