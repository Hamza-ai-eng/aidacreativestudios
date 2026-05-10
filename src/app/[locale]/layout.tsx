import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { playfair, inter, cairo, amiri, heebo, spaceGrotesk, garamond, spaceMono, reemKufi } from "@/lib/fonts";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFAB } from "@/components/shared/whatsapp-fab";
import { Grain } from "@/components/shared/grain";
import { SiteSearch } from "@/components/shared/site-search";
import { homeAlternates } from "@/lib/seo";
import "../globals.css";

const RTL_LOCALES = new Set(["ar", "he"]);

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#F2EBE0",
};

// Per-locale alternates set in generateMetadata so every page can override.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: {
      default: "AIDA Creative Studios · عايدة كرييتف ستوديوز — القدس",
      template: "%s · AIDA Creative Studios",
    },
    description:
      "عايدة كرييتف ستوديوز — استوديو إبداعي فلسطيني من القدس. هويّة بصريّة، محتوى، تقارير مناصرة، وشغل تصميم. AIDA Creative Studios — a Palestinian creative studio in Jerusalem. Brand identity, content, advocacy reports, and design.",
    keywords: [
      "creative agency Jerusalem",
      "brand design Jerusalem",
      "social media agency Palestine",
      "restaurant menu design Arabic",
      "branding agency Jerusalem",
      "graphic design Jerusalem",
      "Palestinian business branding",
      "trilingual website design Jerusalem",
      "Google Business Profile Palestine",
      "WhatsApp Business setup",
      "food photography Jerusalem",
      "paid ads management Palestine",
      "وكالة إبداعية القدس",
      "تصميم هوية بصرية فلسطين",
      "إدارة سوشيال ميديا القدس",
      "تصوير أكل القدس",
    ],
    metadataBase: new URL("https://aidacreativestudios.com"),
    alternates: homeAlternates(locale),
    openGraph: {
      type: "website",
      siteName: "AIDA Creative Studios",
      title: "AIDA Creative Studios | Brand, Content & Advocacy — Jerusalem",
      description:
        "A Palestinian creative studio based in Jerusalem. Brand identity, content, advocacy reports, and design — rooted in the city.",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "AIDA Creative Studios — a house from Jerusalem",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "AIDA Creative Studios | Brand, Content & Advocacy — Jerusalem",
      description:
        "A Palestinian creative studio based in Jerusalem. Brand identity, content, advocacy reports, and design — rooted in the city.",
      images: ["/og-image.png"],
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const dir = RTL_LOCALES.has(locale) ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${playfair.variable} ${inter.variable} ${cairo.variable} ${amiri.variable} ${heebo.variable} ${spaceGrotesk.variable} ${garamond.variable} ${spaceMono.variable} ${reemKufi.variable}`}
    >
      <body className="antialiased min-h-dvh">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "ResearchOrganization"],
              "@id": "https://aidacreativestudios.com",
              name: "AIDA Creative Studios",
              alternateName: ["عايدة كرييتف ستوديوز", "عايدة", "AIDA Creative Consulting"],
              description:
                "A Palestinian critical practice — a research institute where design is the method and the studio is the proof. Advocacy research, editorial content, and design services for Palestinian communities.",
              url: "https://aidacreativestudios.com",
              telephone: "+972524635937",
              email: "info@aidacreativestudios.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Jerusalem",
                addressRegion: "Jerusalem",
                addressCountry: "PS",
              },
              image: "https://aidacreativestudios.com/og-image.png",
              sameAs: [
                "https://www.instagram.com/aida.creative.consultancy/",
                "https://www.facebook.com/profile.php?id=61587116201810",
                "https://www.tiktok.com/@aida.creative",
              ],
              knowsLanguage: ["en", "ar", "he"],
              subOrganization: {
                "@type": "LocalBusiness",
                name: "AIDA Studio · الدّكّان",
                priceRange: "₪₪",
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                areaServed: {
                  "@type": "City",
                  name: "Jerusalem",
                },
                serviceType: [
                  "Brand Identity Design",
                  "Social Media Management",
                  "Food and Product Photography",
                  "Google Business Profile Setup",
                  "WhatsApp Business Setup",
                  "Menu and Print Design",
                  "Short-Form Video Production",
                  "Paid Ads Management",
                  "Website and Landing Page Design",
                  "Seasonal Campaign Packages",
                ],
              },
            }),
          }}
        />
        <NextIntlClientProvider>
          <Grain />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFAB />
          <SiteSearch />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
