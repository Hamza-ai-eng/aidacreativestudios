import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/contact-content";

export const metadata: Metadata = {
  title: "Contact AIDA — WhatsApp, Email, or Visit Shu'fat East Jerusalem",
  description:
    "Start your brand design project with AIDA Creative Studios. Message us on WhatsApp for the fastest response, or send a brief. Based in Shu'fat, East Jerusalem.",
};

export default function ContactPage() {
  return <ContactContent />;
}
