import { Hero } from "@/components/home/hero";
import { DataMoment } from "@/components/home/data-moment";
import { StudioStrip } from "@/components/home/studio-strip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <DataMoment />
      <StudioStrip />
    </>
  );
}
