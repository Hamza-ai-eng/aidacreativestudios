import type { Metadata } from "next";
import { localeAlternates } from "@/lib/seo";

export const revalidate = 300;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr ? "ملف صحفي · Press Kit" : "Press Kit · ملف صحفي",
    description: isAr
      ? "ملف صحفي لـ AIDA Creative Studios — معهد عايدة النقدي. سير ذاتيّة، صور، اقتباسات، وإرشادات الاستشهاد."
      : "Press kit for AIDA Creative Studios — Aida Critical Practice. Bios, photos, quotes, and citation guidance.",
    alternates: localeAlternates(locale, "/fatima/press"),
  };
}

const BIO_AR_100 = `عايدة كرييتف ستوديوز معهد فلسطيني نقدي من القدس. بنصدر تقارير مناصرة عن إقصاء الفلسطينيين الرقمي، وبنشتغل تصميم وهويّة بصريّة للمشاريع المحليّة. التصميم عندنا منهج بحث، مش تزيين.`;
const BIO_EN_100 = `AIDA Creative Studios is a Palestinian critical practice based in Jerusalem. We publish advocacy research on Palestinian digital exclusion and run a design studio that serves local businesses. For us, design is a method of investigation, not decoration.`;

const BIO_AR_250 = `عايدة كرييتف ستوديوز (AIDA Creative Studios) معهد فلسطيني نقدي من القدس، أسّسه حمزة برهمية سنة ٢٠٢٢. الشغل عندنا في غرفتين: غرفة حجّة خديجة بتصدر تقارير المناصرة وسلاسل المقالات الطويلة عن أنظمة الذكاء الاصطناعي وإقصاء الفلسطينيين الرقمي (تقرير «إقصاء مبرمَج» — أبريل ٢٠٢٦، سلسلة «الإنسان في الدوامة» — سبع مقالات). غرفة ستّ كريمة هي الدّكّان — هويّة بصريّة، تصميم منيو، إدارة سوشيال ميديا للمطاعم والمحلات الفلسطينيّة. الاستديو والمعهد بيتشاركوا في صوت، وأرشيف، وموقع واحد. اسم البيت «بيت عايدة» — على اسم مخيّم عايدة في بيت لحم. التصميم عندنا منهج بحث.`;
const BIO_EN_250 = `AIDA Creative Studios is a Palestinian critical practice in Jerusalem, founded by Hamzah Barhameyeh in 2022. The work runs in two rooms. Hajjeh Khadija's Room publishes advocacy reports and long-form essay series on AI systems and Palestinian digital exclusion (Report 01: "Offline by Design," April 2026; Series 01: "Human in the Loop," seven essays). Sitt Karimeh's Room is the studio — brand identity, menu design, and social media for Palestinian restaurants and shops across the Levant. The studio and the research arm share one voice, one archive, and one website. The house is called Bait Aida, named for the Aida refugee camp in Bethlehem. We treat design as a method of investigation, not decoration.`;

const BIO_AR_500 = `عايدة كرييتف ستوديوز (AIDA Creative Studios) معهد فلسطيني نقدي من القدس، أسّسه حمزة برهمية سنة ٢٠٢٢. اشتغالنا قائم على فكرة بسيطة: التصميم منهج بحث، مش تزيين. اللي بنرسمه لمطعم بالقدس هو نفسه السؤال اللي بنحلّله في تقرير عن إقصاء اللاجئين الفلسطينيين من النظام الرقمي. الشغل ما بنفصله.

البيت عبارة عن خمس غرف، كل واحدة باسم امرأة فلسطينيّة. غرفة عايدة (العتبة) هي البيت اللي اللي يدخل من الباب يلاقيه. غرفة فاطمة (الحارسة) هي الذاكرة، اللي بتخزّن وبتحكي مين إحنا. غرفة حجّة خديجة (الشاهدة) هي البيت الإعلامي والبحثي — تقارير المناصرة، السلاسل الطويلة، الملاحظات القصيرة. غرفة ستّ كريمة (الصانعة، تكريماً لكريمة عبود ١٨٩٦–١٩٤٠، «مصوّرة شمس» من بيت لحم) هي الدّكّان — كل شغلة تجاريّة بتطلع موقّعة باسم. غرفة حياة (الباب المفتوح) هي التواصل.

اشتغلنا منذ ٢٠٢٢ مع مطاعم ومحلات في القدس ورام الله وبيت لحم. أصدرنا تقرير «إقصاء مبرمَج» (أبريل ٢٠٢٦) عن إقصاء اللاجئين الفلسطينيين من أنظمة الذكاء الاصطناعي. سلسلة «الإنسان في الدوامة» — سبع مقالات عن استخدام الذكاء الاصطناعي ضد الحياة الفلسطينيّة. سلسلة «إقصاء مبرمَج — السلسلة» — ست مقالات عن بنية الإقصاء الرقمي.

كل اللي ينشر باللغتين — العربيّة الفلسطينيّة العامّيّة (مش الفصحى) والإنجليزيّة. كتابة موازية، مش ترجمة.`;

const BIO_EN_500 = `AIDA Creative Studios is a Palestinian critical practice in Jerusalem, founded by Hamzah Barhameyeh in 2022. Our work rests on one premise: design is a method of investigation, not decoration. What we draw for a restaurant in Sheikh Jarrah is the same question we analyze in a report about Palestinian refugees being excluded from the digital system. We do not separate the work.

The house has five rooms, each named for a Palestinian woman. Aida's Room (the threshold) is what visitors meet at the door. Fatima's Room (the keeper) is the memory — who we are, what we hold. Hajjeh Khadija's Room (the witness) is the editorial and research arm — advocacy reports, long-form series, shorter Notes. Sitt Karimeh's Room (the maker, in honor of Karimeh Abbud, 1896–1940, "sun photographer" from Bethlehem) is the studio — every commercial piece signed with a name. Hayat's Room (the open door) is contact.

Since 2022 we have worked with restaurants and shops in Jerusalem, Ramallah, and Bethlehem. We published "Offline by Design" (April 2026) on the exclusion of Palestinian refugees from AI systems. The "Human in the Loop" series — seven essays on AI deployed against Palestinian life. The "Offline by Design — The Series" companion — six essays on the architecture of digital exclusion.

Everything we publish appears in both languages — Palestinian Levantine Arabic (not MSA) and English. Parallel composition, not translation.`;

export default async function PressKitPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";

  const Bios = isAr
    ? [
        { len: "١٠٠ كلمة", body: BIO_AR_100 },
        { len: "٢٥٠ كلمة", body: BIO_AR_250 },
        { len: "٥٠٠ كلمة", body: BIO_AR_500 },
      ]
    : [
        { len: "100 words", body: BIO_EN_100 },
        { len: "250 words", body: BIO_EN_250 },
        { len: "500 words", body: BIO_EN_500 },
      ];

  return (
    <main className="pt-32 pb-24 mx-auto max-w-3xl px-6" dir={isAr ? "rtl" : "ltr"}>
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--ink-faded)]">
        {isAr ? "غرفة فاطمة · ملف صحفي" : "Fatima's Room · Press"}
      </p>
      <h1
        className="mt-4 mb-6 leading-[0.95]"
        style={{
          fontFamily: isAr ? "var(--font-ar)" : "var(--font-en)",
          fontSize: "clamp(2.5rem, 7vw, 5rem)",
          color: "var(--ink)",
        }}
      >
        {isAr ? "ملف صحفي" : "Press kit"}
      </h1>
      <p className="text-[var(--ink-dim)] mb-12 max-w-prose leading-relaxed">
        {isAr
          ? "كل اللي بحتاجه صحفي أو محرّر للاستشهاد بشغلنا — سير ذاتيّة بثلاث أحجام، صور، اقتباسات، وإرشادات الاستشهاد."
          : "Everything a journalist or editor needs to cite our work — bios in three sizes, photos, pull quotes, and citation guidance."}
      </p>

      <section className="mb-16">
        <h2
          className="mb-6"
          style={{
            fontFamily: isAr ? "var(--font-ar)" : "var(--font-en)",
            fontSize: "1.5rem",
            color: "var(--ink)",
          }}
        >
          {isAr ? "السير الذاتيّة" : "Bios"}
        </h2>
        {Bios.map((b) => (
          <div key={b.len} className="mb-10">
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--wm-red)] mb-3">
              {b.len}
            </p>
            <p className="text-[var(--ink)] leading-relaxed whitespace-pre-line bg-[var(--paper-2)] p-5 rounded">
              {b.body}
            </p>
          </div>
        ))}
      </section>

      <section className="mb-16">
        <h2
          className="mb-4"
          style={{
            fontFamily: isAr ? "var(--font-ar)" : "var(--font-en)",
            fontSize: "1.5rem",
            color: "var(--ink)",
          }}
        >
          {isAr ? "إرشادات الاستشهاد" : "Citation guidance"}
        </h2>
        <p className="text-[var(--ink-dim)] mb-2 leading-relaxed">
          {isAr ? "الاسم الكامل:" : "Full name:"}
        </p>
        <p className="font-mono text-sm bg-[var(--paper-2)] p-3 mb-4">
          AIDA Creative Studios
        </p>
        <p className="text-[var(--ink-dim)] mb-2 leading-relaxed">
          {isAr ? "الموقع:" : "Web:"}
        </p>
        <p className="font-mono text-sm bg-[var(--paper-2)] p-3 mb-4">
          aidacreativestudios.com
        </p>
        <p className="text-[var(--ink-dim)] mb-2 leading-relaxed">
          {isAr ? "تواصل:" : "Contact:"}
        </p>
        <p className="font-mono text-sm bg-[var(--paper-2)] p-3 mb-4">
          info@aidacreativestudios.com
        </p>
        <p className="text-[var(--ink-dim)] mb-2 leading-relaxed">
          {isAr ? "صيغة استشهاد التقرير:" : "Citation format for the report:"}
        </p>
        <p className="font-mono text-xs bg-[var(--paper-2)] p-3 leading-relaxed">
          Barhameyeh, H. (2026). <em>Offline by Design: How Palestinian refugees are excluded from the AI system</em>. AIDA Creative Studios. https://aidacreativestudios.com/khadija/reports/offline-by-design
        </p>
      </section>

      <section>
        <h2
          className="mb-4"
          style={{
            fontFamily: isAr ? "var(--font-ar)" : "var(--font-en)",
            fontSize: "1.5rem",
            color: "var(--ink)",
          }}
        >
          {isAr ? "التواصل الإعلامي" : "Press contact"}
        </h2>
        <p className="text-[var(--ink-dim)] leading-relaxed">
          <a href="mailto:info@aidacreativestudios.com" className="text-[var(--wm-red)] underline">
            info@aidacreativestudios.com
          </a>
          <br />
          {isAr ? "واتساب: " : "WhatsApp: "}
          <a href="https://wa.me/972524635937" className="text-[var(--wm-red)] underline">
            +972 52-463-5937
          </a>
        </p>
      </section>
    </main>
  );
}
