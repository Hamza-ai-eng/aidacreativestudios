import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { goldenLineMobile } from "@/data/case-studies/golden-line-mobile";
import { alDaya } from "@/data/case-studies/al-daya";
import { CaseStudyContent } from "@/components/work/case-study-content";

const caseStudies = {
  "golden-line-mobile": goldenLineMobile,
  "al-daya": alDaya,
};

type CaseStudyKey = keyof typeof caseStudies;

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies[slug as CaseStudyKey];
  if (!study) return {};
  return {
    title: `${study.title} — Case Study`,
    description: study.description,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies[slug as CaseStudyKey];
  if (!study) notFound();

  return <CaseStudyContent study={study} />;
}
