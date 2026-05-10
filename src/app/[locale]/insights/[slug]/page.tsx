import { notFound } from "next/navigation";

export const revalidate = 3600; // ISR — 3600s


export default async function ArticlePage() {
  notFound();
}
