import { Metadata } from "next";
import ProjectsPageClient from './ProjectsPageClient';

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Jaymin Chavda's projects - web applications, IoT solutions, and more.",
};

export default function Projects() {
  return <ProjectsPageClient />;
}
