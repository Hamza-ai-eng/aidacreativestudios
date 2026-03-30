import { Hero } from "@/components/home/hero";
import { ServicesPreview } from "@/components/home/services-preview";
import { FeaturedWork } from "@/components/home/featured-work";
import { ClientLogos } from "@/components/home/client-logos";
import { CTABanner } from "@/components/home/cta-banner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <FeaturedWork />
      <ClientLogos />
      <CTABanner />
    </>
  );
}
