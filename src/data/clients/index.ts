export interface Client {
  slug: string;
  nameEn: string;
  nameAr: string;
  nameHe: string;
  descEn: string;
  descAr: string;
  descHe: string;
  taglineEn: string;
  taglineAr: string;
  location: string;
  locationAr: string;
  whatsapp: string;
  facebook: string;
  instagram: string;
  tiktok: string;
  phone: string;
  color: string;
  services: string[];
}

export const clients: Client[] = [
  {
    slug: "golden-line-mobile",
    nameEn: "Golden Line Mobile",
    nameAr: "جولدن لاين موبايل",
    nameHe: "גולדן ליין מובייל",
    descEn: "Premium phone accessories and smartphones — wholesale and retail with delivery across East Jerusalem. Serving Shu'fat and surrounding neighborhoods with the latest mobile technology, cases, chargers, earbuds, and power banks.",
    descAr: "إكسسوارات موبايلات وتلفونات فخمة — جملة ومفرق مع توصيل عبر القدس الشرقية. بنخدم شعفاط والأحياء المجاورة بأحدث التكنولوجيا، كفرات، شواحن، سماعات، وباور بانكات.",
    descHe: "אביזרי סלולר וסמארטפונים פרימיום — סיטונאי וקמעונאי עם משלוחים ברחבי מזרח ירושלים. משרתים את שועפאט והשכונות הסובבות עם הטכנולוגיה הניידת העדכנית ביותר.",
    taglineEn: "The gold standard in mobile accessories.",
    taglineAr: "أقوى العروض عنا",
    location: "Shu'fat, East Jerusalem",
    locationAr: "شعفاط، القدس",
    whatsapp: "https://wa.me/972502226559",
    facebook: "https://www.facebook.com/golden.line.mobile.1",
    instagram: "",
    tiktok: "",
    phone: "+972 50-222-6559",
    color: "#C5A059",
    services: ["Brand Identity", "Social Media Content", "Video Production"],
  },
  {
    slug: "al-daya",
    nameEn: "Al-Day'a Shu'afat",
    nameAr: "الضيعة شعفاط",
    nameHe: "אלדאיעה שועפאט",
    descEn: "Authentic Arabic cuisine in the heart of Shu'fat — shawarma, grilled meats, bites, family meals, and signature shakers. Fresh ingredients, generous portions, and delivery across Shu'fat and nearby neighborhoods. The taste of the village in the heart of the city.",
    descAr: "أكل عربي أصيل في قلب شعفاط — شاورما، مشاوي، بايتس، وجبات عائلية، وشيكرات مميزة. مكونات طازجة، حصص سخية، وتوصيل بشعفاط والأحياء المجاورة. طعم الضيعة الأصيل في قلب شعفاط.",
    descHe: "מטבח ערבי אותנטי בלב שועפאט — שווארמה, בשר על האש, ארוחות משפחתיות ומנות מיוחדות. מרכיבים טריים, מנות נדיבות, ומשלוחים בשועפאט והסביבה. טעם הכפר בלב העיר.",
    taglineEn: "Village taste in the heart of the city.",
    taglineAr: "طعم الضيعة الأصيل في قلب شعفاط",
    location: "Shu'fat, East Jerusalem",
    locationAr: "شعفاط، القدس",
    whatsapp: "",
    facebook: "",
    instagram: "",
    tiktok: "",
    phone: "",
    color: "#5B7553",
    services: ["Menu Design", "Brand Identity", "Photography"],
  },
];
