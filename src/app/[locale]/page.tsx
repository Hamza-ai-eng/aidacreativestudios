import { Hero } from "@/components/home/hero";
import { ServicesPreview } from "@/components/home/services-preview";
import { OurClients } from "@/components/home/our-clients";
import { CTABanner } from "@/components/home/cta-banner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <OurClients />
      <CTABanner />
    </>
  );
}
