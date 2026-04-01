import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { playfair, inter, cairo, amiri, heebo, spaceGrotesk } from "@/lib/fonts";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFAB } from "@/components/shared/whatsapp-fab";
import "../globals.css";

const RTL_LOCALES = new Set(["ar", "he"]);

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#F4EDE4",
};

export const metadata: Metadata = {
  title: {
    default: "AIDA Creative Studios | Brand Design & Social Media Agency — East Jerusalem",
    template: "%s | AIDA Creative Studios",
  },
  description:
    "Brand identity, social media management, and digital strategy for Palestinian businesses in East Jerusalem. The only trilingual creative agency serving Shu'fat, Jerusalem, and beyond.",
  keywords: [
    "creative agency East Jerusalem",
    "brand design Jerusalem",
    "social media agency Palestine",
    "restaurant menu design Arabic",
    "branding agency Shu'fat",
    "graphic design East Jerusalem",
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
    "סוכנות קריאייטיב ירושלים",
    "עיצוב גרפי מזרח ירושלים",
    "שיווק דיגיטלי ירושלים",
  ],
  alternates: {
    canonical: "https://aidacreativestudios.com/en",
    languages: {
      en: "https://aidacreativestudios.com/en",
      ar: "https://aidacreativestudios.com/ar",
      he: "https://aidacreativestudios.com/he",
      "x-default": "https://aidacreativestudios.com/en",
    },
  },
  metadataBase: new URL("https://aidacreativestudios.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AIDA Creative Studios",
    title: "AIDA Creative Studios | Brand Design & Social Media — East Jerusalem",
    description:
      "Award-level creative work for Palestinian businesses. Brand identity, social media, menu design — powered by AI, rooted in Jerusalem.",
  },
  robots: { index: true, follow: true },
};

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
      className={`${playfair.variable} ${inter.variable} ${cairo.variable} ${amiri.variable} ${heebo.variable} ${spaceGrotesk.variable}`}
    >
      <body className="antialiased min-h-dvh">
        {process.env.NEXT_PUBLIC_UMAMI_URL && (
          <script
            async
            defer
            src={`${process.env.NEXT_PUBLIC_UMAMI_URL}/script.js`}
            data-website-id="d758e979-92b8-4663-aa52-4e82743d3aa2"
          />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://aidacreativestudios.com",
              name: "AIDA Creative Studios",
              alternateName: ["أيدا كرييتف", "AIDA Creative Consulting"],
              description:
                "Award-level brand identity, social media content, restaurant menu design, and campaign strategy for Palestinian businesses in East Jerusalem.",
              url: "https://aidacreativestudios.com",
              telephone: "+972524635937",
              email: "info@aidacreativestudios.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Shu'fat",
                addressRegion: "East Jerusalem",
                addressCountry: "PS",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 31.8065,
                longitude: 35.2293,
              },
              priceRange: "₪₪",
              image: "https://aidacreativestudios.com/og-image.png",
              sameAs: [
                "https://www.instagram.com/aida.creative.consultancy/",
                "https://www.facebook.com/profile.php?id=61587116201810",
                "https://www.tiktok.com/@aida.creative",
              ],
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
              knowsLanguage: ["en", "ar", "he"],
              serviceType: [
                "Brand Identity Design",
                "Social Media Management",
                "Food & Product Photography",
                "Google Business Profile Setup",
                "WhatsApp Business Setup",
                "Menu & Print Design",
                "Short-Form Video Production",
                "Paid Ads Management",
                "Website & Landing Page Design",
                "Seasonal Campaign Packages",
              ],
            }),
          }}
        />
        <NextIntlClientProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFAB />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
