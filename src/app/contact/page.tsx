import { Metadata } from "next";
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Jaymin Chavda - B.Tech CSE    student and aspiring CA.",
};

export default function Contact() {
  return <ContactPageClient />;
}
