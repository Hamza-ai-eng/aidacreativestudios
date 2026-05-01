import { Hero } from "@/components/home/hero";
import { DataMoment } from "@/components/home/data-moment";
import { ReportFeature } from "@/components/home/report-feature";
import { SeriesStrip } from "@/components/home/series-strip";
import { DukkanStrip } from "@/components/home/dukkan-strip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <DataMoment />
      <ReportFeature />
      <SeriesStrip />
      <DukkanStrip />
    </>
  );
}
