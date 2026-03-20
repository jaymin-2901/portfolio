import { Metadata } from "next";
import ExperiencePageClient from './ExperiencePageClient';

export const metadata: Metadata = {
  title: "Experience",
  description: "Explore Jaymin Chavda's academic and professional journey.",
};

export default function Experience() {
  return <ExperiencePageClient />;
}
