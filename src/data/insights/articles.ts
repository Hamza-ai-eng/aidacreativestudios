export interface Article {
  slug: string;
  collection: "brand-building" | "social-media" | "ai-design" | "local-business" | "seasonal" | "design-essentials";
  publishedAt: string;
  readingTime: number;
  titleKey: string;
  descKey: string;
  bodyKey: string;
}

export const COLLECTIONS = [
  { id: "brand-building", color: "#B85C38", icon: "Palette" },
  { id: "social-media", color: "#4A7C8A", icon: "Instagram" },
  { id: "ai-design", color: "#5B7553", icon: "Cpu" },
  { id: "local-business", color: "#8E4428", icon: "MapPin" },
  { id: "seasonal", color: "#B85C38", icon: "Calendar" },
  { id: "design-essentials", color: "#2E5A66", icon: "Layers" },
] as const;

export const articles: Article[] = [
  {
    slug: "how-much-does-branding-cost",
    collection: "brand-building",
    publishedAt: "2026-03-29",
    readingTime: 8,
    titleKey: "brandingCost",
    descKey: "brandingCostDesc",
    bodyKey: "brandingCostBody",
  },
  {
    slug: "ai-logo-generators-vs-professional-designers",
    collection: "ai-design",
    publishedAt: "2026-03-29",
    readingTime: 10,
    titleKey: "aiVsDesigner",
    descKey: "aiVsDesignerDesc",
    bodyKey: "aiVsDesignerBody",
  },
  {
    slug: "arabic-social-media-captions-that-convert",
    collection: "social-media",
    publishedAt: "2026-03-29",
    readingTime: 7,
    titleKey: "arabicCaptions",
    descKey: "arabicCaptionsDesc",
    bodyKey: "arabicCaptionsBody",
  },
  {
    slug: "instagram-marketing-small-business",
    collection: "social-media",
    publishedAt: "2026-03-29",
    readingTime: 9,
    titleKey: "instagramMarketing",
    descKey: "instagramMarketingDesc",
    bodyKey: "instagramMarketingBody",
  },
  {
    slug: "palestinian-businesses-digital-marketing",
    collection: "local-business",
    publishedAt: "2026-03-29",
    readingTime: 11,
    titleKey: "palestinianDigital",
    descKey: "palestinianDigitalDesc",
    bodyKey: "palestinianDigitalBody",
  },
  {
    slug: "small-business-branding-101",
    collection: "brand-building",
    publishedAt: "2026-03-29",
    readingTime: 12,
    titleKey: "branding101",
    descKey: "branding101Desc",
    bodyKey: "branding101Body",
  },
];
