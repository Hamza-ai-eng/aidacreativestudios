"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale } from "next-intl";
import {
  CalligraphyGhost,
  ArchiveStamp,
  RegistrationMarks,
  InkSplotch,
  RulerMark,
} from "@/components/shared/paper-ornaments";

/**
 * Offline by Design — إقصاء مبرمَج
 * Full advocacy report page. AIDA Critical Institute · April 2026.
 * Fully bilingual: Arabic (ar) and English (en) locales.
 */

function SectionHeader({ num, title, isAr }: { num: string; title: string; isAr: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        marginBottom: "40px",
        paddingBottom: "20px",
        borderBottom: "1px solid rgba(196,26,42,0.25)",
        direction: isAr ? "rtl" : "ltr",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: "var(--wm-red)",
          opacity: 0.7,
          flexShrink: 0,
        }}
      >
        {num}
      </span>
      <h2
        style={{
          fontFamily: isAr ? "var(--font-ar)" : "var(--font-en)",
          fontWeight: 700,
          fontStyle: isAr ? "normal" : "italic",
          fontSize: isAr ? "clamp(1.3rem, 2.2vw, 1.8rem)" : "clamp(1.2rem, 2vw, 1.6rem)",
          color: "var(--ink)",
          letterSpacing: isAr ? "0" : "-0.01em",
          lineHeight: isAr ? 1.4 : 1.2,
        }}
      >
        {title}
      </h2>
    </div>
  );
}

function Pull({ children, isAr }: { children: React.ReactNode; isAr: boolean }) {
  return (
    <blockquote
      style={{
        borderRight: isAr ? "3px solid var(--wm-red)" : "none",
        borderLeft: isAr ? "none" : "3px solid var(--wm-red)",
        paddingRight: isAr ? "28px" : "0",
        paddingLeft: isAr ? "0" : "28px",
        margin: "48px 0",
        fontFamily: isAr ? "var(--font-ar)" : "var(--font-en)",
        fontStyle: isAr ? "normal" : "italic",
        fontWeight: 700,
        fontSize: isAr ? "clamp(1.15rem, 2vw, 1.5rem)" : "clamp(1.1rem, 1.8vw, 1.5rem)",
        lineHeight: isAr ? 1.75 : 1.45,
        color: "var(--ink)",
        direction: isAr ? "rtl" : "ltr",
      }}
    >
      {children}
    </blockquote>
  );
}

function Stat({ num, label, isAr }: { num: string; label: string; isAr: boolean }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontWeight: 700,
          fontSize: "clamp(2rem, 3.5vw, 3rem)",
          color: "var(--wm-red-hot)",
          lineHeight: 1,
        }}
      >
        {num}
      </span>
      <span
        style={{
          fontFamily: isAr ? "var(--font-ar-body)" : "var(--font-body)",
          fontStyle: isAr ? "normal" : "italic",
          fontSize: "0.9rem",
          color: "var(--ink-faded)",
          lineHeight: 1.4,
          direction: isAr ? "rtl" : "ltr",
          textAlign: isAr ? "right" : "left",
        }}
      >
        {label}
      </span>
    </div>
  );
}

function Body({ children, isAr }: { children: React.ReactNode; isAr: boolean }) {
  return (
    <p
      style={{
        fontFamily: isAr ? "var(--font-ar-body)" : "var(--font-body)",
        fontStyle: isAr ? "normal" : "italic",
        fontSize: isAr ? "clamp(1rem, 1.4vw, 1.15rem)" : "clamp(0.95rem, 1.3vw, 1.1rem)",
        lineHeight: isAr ? 1.95 : 1.8,
        color: "var(--ink-dim)",
        marginBottom: "24px",
        direction: isAr ? "rtl" : "ltr",
      }}
    >
      {children}
    </p>
  );
}

function SubHead({ children, isAr }: { children: React.ReactNode; isAr: boolean }) {
  return (
    <h3
      style={{
        fontFamily: isAr ? "var(--font-ar-body)" : "var(--font-mono)",
        fontSize: isAr ? "0.95rem" : "11px",
        fontWeight: isAr ? 700 : 400,
        letterSpacing: isAr ? "0" : "3px",
        textTransform: isAr ? "none" : "uppercase",
        color: "var(--ink)",
        marginBottom: "20px",
        marginTop: "48px",
        paddingTop: "24px",
        borderTop: "1px solid rgba(26,20,16,0.08)",
        direction: isAr ? "rtl" : "ltr",
      }}
    >
      {children}
    </h3>
  );
}

function ImageBreak({
  src,
  captionAr,
  captionEn,
  isAr,
  aspect = "16/9",
}: {
  src: string;
  captionAr?: string;
  captionEn?: string;
  isAr: boolean;
  aspect?: string;
}) {
  return (
    <div style={{ margin: "56px 0 48px", position: "relative" }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: aspect,
          overflow: "hidden",
          background: "var(--void)",
        }}
      >
        <Image
          src={src}
          alt={isAr ? (captionAr || "") : (captionEn || "")}
          fill
          sizes="(max-width: 780px) 100vw, 780px"
          style={{ objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(26,20,16,0.35) 0%, transparent 55%)",
          }}
        />
      </div>
      {(captionAr || captionEn) && (
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "8px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            marginTop: "10px",
            direction: isAr ? "rtl" : "ltr",
          }}
        >
          {isAr ? captionAr : captionEn}
        </div>
      )}
    </div>
  );
}

export function OfflineByDesignReport() {
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <>
      {/* ── Report Cover ─────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          background: "var(--ground)",
          padding: "160px 6vw 80px",
          overflow: "hidden",
          borderBottom: "2px solid var(--wm-red)",
        }}
      >
        <RegistrationMarks color="var(--ink-faded)" inset={28} size={16} opacity={0.35} />

        <CalligraphyGhost
          text="إقصاء"
          size="clamp(22rem, 40vw, 55rem)"
          color="var(--wm-red-deep)"
          opacity={0.035}
          top="5%"
          right={isAr ? "auto" : "-8%"}
          left={isAr ? "-8%" : "auto"}
          rotation={-4}
        />

        <RulerMark
          orientation="vertical"
          length="75%"
          ticks={22}
          color="var(--ink-faded)"
          opacity={0.15}
          top="10%"
          left={isAr ? "auto" : "1.5vw"}
          right={isAr ? "1.5vw" : "auto"}
        />

        <ArchiveStamp
          lines={["REPORT — 01", "AIDA · القدس", "APRIL 2026", "ADVOCACY"]}
          color="var(--patina-copper)"
          rotation={-3.5}
          top="18%"
          left={isAr ? "auto" : "5%"}
          right={isAr ? "5%" : "auto"}
          opacity={0.65}
        />

        <InkSplotch
          color="var(--wm-red)"
          opacity={0.05}
          size={480}
          bottom="-5%"
          left={isAr ? "auto" : "60%"}
          right={isAr ? "60%" : "auto"}
          rotation={20}
          seed={9}
        />

        <div style={{ position: "relative", zIndex: 2, maxWidth: "900px" }}>
          {/* Breadcrumb */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "48px",
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              direction: isAr ? "rtl" : "ltr",
            }}
          >
            <Link
              href={`/${locale}/insights`}
              className="hover:text-[var(--wm-red)]"
              style={{ transition: "color 0.2s" }}
            >
              {isAr ? "حريّة" : "Hurriyeh"}
            </Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: "var(--ink-faded)" }}>
              {isAr ? "تقرير ٠١" : "Report 01"}
            </span>
          </div>

          {/* Primary title */}
          <h1
            style={{
              fontFamily: isAr ? "var(--font-ar)" : "var(--font-en)",
              fontWeight: 700,
              fontStyle: isAr ? "normal" : "italic",
              fontSize: isAr ? "clamp(4rem, 10vw, 9rem)" : "clamp(3rem, 8vw, 7rem)",
              lineHeight: 0.95,
              color: "var(--ink)",
              letterSpacing: "-0.02em",
              marginBottom: "24px",
              direction: isAr ? "rtl" : "ltr",
            }}
          >
            {isAr ? "إقصاءٌ مبرمَج" : "Offline by Design"}
          </h1>

          {/* Secondary title */}
          <div
            style={{
              fontFamily: isAr ? "var(--font-en)" : "var(--font-ar)",
              fontWeight: isAr ? 900 : 400,
              fontStyle: isAr ? "italic" : "normal",
              fontSize: isAr ? "clamp(1.8rem, 3.5vw, 3.2rem)" : "clamp(1.2rem, 2vw, 1.8rem)",
              color: "var(--wm-red)",
              marginBottom: "48px",
              lineHeight: 1,
              direction: isAr ? "ltr" : "rtl",
            }}
          >
            {isAr ? "Offline by Design" : "إقصاءٌ مبرمَج"}
          </div>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: isAr ? "var(--font-ar-body)" : "var(--font-body)",
              fontStyle: isAr ? "normal" : "italic",
              fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
              lineHeight: isAr ? 1.85 : 1.7,
              color: "var(--ink-dim)",
              maxWidth: "700px",
              marginBottom: "40px",
              direction: isAr ? "rtl" : "ltr",
            }}
          >
            {isAr
              ? "العوائق البنيوية أمام وصول اللاجئين الفلسطينيين إلى الذكاء الاصطناعي في لبنان والأردن وسوريا والضفة الغربية المحتلة"
              : "Structural Barriers to AI Access for Palestinian Refugees in Lebanon, Jordan, Syria, and the Occupied West Bank"}
          </p>

          {/* Meta */}
          <div
            style={{
              display: "flex",
              gap: "24px",
              flexWrap: "wrap",
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              paddingTop: "32px",
              borderTop: "1px solid rgba(26,20,16,0.12)",
              direction: isAr ? "rtl" : "ltr",
            }}
          >
            <span>{isAr ? "تقرير سياسات ومناصرة" : "A Policy and Advocacy Report"}</span>
            <span style={{ color: "var(--wm-red)", opacity: 0.4 }}>·</span>
            <span>{isAr ? "معهد عايدة النقدي" : "AIDA Critical Institute"}</span>
            <span style={{ color: "var(--wm-red)", opacity: 0.4 }}>·</span>
            <span>{isAr ? "أبريل ٢٠٢٦" : "April 2026"}</span>
          </div>
        </div>
      </section>

      {/* ── Cover image — REPORT-A ───────────────────────────── */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "21/9",
          overflow: "hidden",
          background: "var(--void)",
        }}
      >
        <Image
          src="/editorial/images/report/report-a.jpg"
          alt={isAr ? "يد تمسك هاتفاً أمام جدار إسمنتي" : "Hand holding a phone against concrete wall"}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(26,20,16,0.4) 0%, transparent 35%, transparent 65%, rgba(26,20,16,0.5) 100%)",
          }}
        />
      </div>

      {/* ── Stats bar ────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--void)",
          padding: "48px 6vw",
          display: "flex",
          gap: "64px",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stat isAr={isAr} num="5.9M" label={isAr ? "لاجئ فلسطيني مسجّل لدى الأونروا" : "registered Palestinian refugees (UNRWA)"} />
        <div style={{ width: "1px", height: "48px", background: "rgba(26,20,16,0.15)" }} />
        <Stat isAr={isAr} num="$20" label={isAr ? "اشتراك ChatGPT Plus شهرياً" : "ChatGPT Plus / month"} />
        <div style={{ width: "1px", height: "48px", background: "rgba(26,20,16,0.15)" }} />
        <Stat isAr={isAr} num="$16.67" label={isAr ? "مساعدة الأونروا النقدية الطارئة / للشخص / شهرياً" : "UNRWA emergency cash assistance / person / month"} />
        <div style={{ width: "1px", height: "48px", background: "rgba(26,20,16,0.15)" }} />
        <Stat isAr={isAr} num="0" label={isAr ? "حسابات مصرفية. لا بطاقة. لا وصول." : "bank accounts. No card. No access."} />
      </section>

      {/* ── Report body ──────────────────────────────────────── */}
      <article style={{ background: "var(--ground)", padding: "80px 6vw 120px" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>

          {/* I */}
          <SectionHeader isAr={isAr} num="I" title={isAr ? "اللي عم يصير" : "The Claim"} />

          {isAr ? (
            <>
              <Body isAr={isAr}>
                اسمها مش موجود في هاد التقرير. هاد مقصود.
              </Body>
              <Body isAr={isAr}>
                بتدرس تمريض في شاتيلا. عندها سنة كمان. زملاتها — اللي ساكنات بره المخيم، في المدينة — عم يستعملوا الذكاء الاصطناعي. بتحكيلها: بتكتبي السؤال، بتيجيك الجواب. وحدة منهن قالتلها إنها عدّت امتحان كانت رح تقع فيه بسببه. تانية عم تكتب تقارير سريرية فيه. عم يحكوا عنه زي ما بيحكوا عن المكتبة: شي موجود، متاح، مأخوذ كمسلّمة.
              </Body>
              <Body isAr={isAr}>
                عندها هاتف. عندها باقة بيانات بتعبّيها لما تقدر. قالولها إن ChatGPT مجاني.
              </Body>
              <Body isAr={isAr}>
                فتحت المتصفح. الصفحة اتحمّلت. عملت حساب. كتبت سؤالها.
              </Body>
              <Body isAr={isAr}>
                وصلت للحد. للزيادة: اشتركي في بلس. بلس بكلّف عشرين دولار بالشهر.
              </Body>
              <Body isAr={isAr}>
                مساعدة الأونروا الطارئة لأهلها: ستة عشر دولار وسبعة وستين سنتاً للشخص. هاد هو الدخل. كله. لكل شي. بييجي نقدي. ما في بطاقة.
              </Body>
              <Body isAr={isAr}>
                أقفلت المتصفح. حطّت الهاتف على ظهره لتحافظ على البطارية. أخذت كتابها.
              </Body>
              <Body isAr={isAr}>
                في مكان تاني — في سان فرانسيسكو، في لندن، في عمّان — طالبة تانية عم تسأل نفس الذكاء الاصطناعي نفس السؤال. الأداة مش عارفة إنها جرّبت.
              </Body>
              <Body isAr={isAr}>
                هاد مش فجوة تكنولوجية. مش فشل سوق ينتظر إصلاح. هو أحدث تعبير عن بنية عم تتحافظ عليها من ثلاثة أجيال. خمسة مليون وتسعمية ألف لاجئ فلسطيني مسجّلين لدى الأونروا في لبنان والأردن وسوريا والضفة الغربية — ما يقدروا يوصلوا لأدوات صارت بنية تحتية أساسية في كل دولة مجاورة.
              </Body>
              <Pull isAr={isAr}>
                اللاجئون الفلسطينيون مش مستبعدين من الذكاء الاصطناعي بالصدفة أو الإهمال. مستبعدين بنفس البنية اللي صناعة الذكاء الاصطناعي عم تتعاقد لتديمها.
              </Pull>
            </>
          ) : (
            <>
              <Body isAr={isAr}>
                In July 2024, the International Court of Justice ruled that Israel&apos;s occupation of Palestinian territory is unlawful and must end as rapidly as possible. Three months later, every member state of the United Nations signed the Global Digital Compact, committing to digital inclusion for all people — including refugees and forcibly displaced populations.
              </Body>
              <Body isAr={isAr}>Neither has been implemented.</Body>
              <Body isAr={isAr}>
                Palestinian refugees — approximately 5.9 million people registered with UNRWA across Lebanon, Jordan, Syria, and the occupied West Bank — cannot access the AI tools that have become standard infrastructure in the countries that surround them. A nursing student in Shatila camp reaches the free limit of ChatGPT and is asked for $20 a month. Her family&apos;s UNRWA emergency assistance is $16.67 per person. It arrives in cash. There is no card.
              </Body>
              <Body isAr={isAr}>
                This is not a technology gap. It is not a market failure awaiting correction. It is the latest expression of a structure that has been deliberately maintained for three generations.
              </Body>
              <Pull isAr={isAr}>
                Palestinian refugees are not excluded from AI by accident or oversight. They are excluded by the same architecture of dispossession the AI industry is contracted to sustain.
              </Pull>
            </>
          )}

          <ImageBreak
            src="/editorial/images/report/report-g.jpg"
            captionAr="مخيم لاجئين فلسطينيين من الجو ليلاً"
            captionEn="Palestinian refugee camp — aerial view, night"
            isAr={isAr}
            aspect="21/9"
          />

          {/* II */}
          <SectionHeader isAr={isAr} num="II" title={isAr ? "البنية" : "The Architecture of Exclusion"} />

          {isAr ? (
            <>
              <Body isAr={isAr}>
                العوائق مش خمس مشاكل منفصلة. هي خمسة تعبيرات عن مشكلة وحدة: إن شروط الوصول للذكاء الاصطناعي — الكهرباء، المصرف، النت، الجهاز، اللغة — اتبنت من قِبَل وعلشان شعوب علاقتها بالدولة قايمة على الانتماء القانوني. اللاجئون الفلسطينيون مستبعدين قانونياً من هاي العلاقة من ثلاثة أجيال.
              </Body>
              <SubHead isAr={isAr}>الكهرباء</SubHead>
              <Body isAr={isAr}>
                شاتيلا. كيلومتر مربع واحد. 23,000 شخص. قايمة من 1948. الكهرباء البلدية بتوصلها ساعة لساعتين باليوم. هاد مش خلل تقني. القانون اللبناني بيشترط الإقامة القانونية للاشتراك في الخدمة البلدية. الإقامة القانونية محجوبة ممنهجاً عن اللاجئين الفلسطينيين. بين 2015 و2023، ستة وثمانين شخص انصعقوا بالكهرباء في برج البراجنة. مش بالقنابل — بالأسلاك. لأنه ما في غيرها. اليرموك في دمشق بيتلقى ساعة كهرباء باليوم.
              </Body>
              <ImageBreak
                src="/editorial/images/report/report-c.jpg"
                captionAr="مقبس كهربائي على جدار متشقق"
                captionEn="Bare electrical socket — cracked concrete"
                isAr={isAr}
              />
              <SubHead isAr={isAr}>الدفع</SubHead>
              <Body isAr={isAr}>
                ChatGPT Plus: 20 دولار. Claude Pro: 20 دولار. Gemini Advanced: 19.99 دولار. مساعدة الأونروا الطارئة في لبنان: 16.67 دولار للشخص بالشهر. لـ70% من سكان المخيمات في لبنان، هاد هو الدخل. مش مكمّل. مش مصدر من بين مصادر. هو. بييجي نقدي. ما في بطاقة. ما في حساب.
              </Body>
              <ImageBreak
                src="/editorial/images/report/report-d.jpg"
                captionAr="يد تمتد نحو فتحة صراف آلي في جدار إسمنتي"
                captionEn="Hand reaching toward a sealed ATM slot"
                isAr={isAr}
              />
              <SubHead isAr={isAr}>النت</SubHead>
              <Body isAr={isAr}>
                لبنان: من أبطأ إنترنت بالعالم. الضفة الغربية المحتلة: إسرائيل بتتحكم بتخصيص الطيف الترددي. ما في شبكة فلسطينية مستقلة — لا 3G ولا 4G. منظمة 7amleh وثّقت تقليص وحجب ممنهج للفضاء الرقمي الفلسطيني. جلسة ذكاء اصطناعي بتنقطع بنص الجواب — مش جلسة ذكاء اصطناعي. بيانات راحت على رسالة خطأ.
              </Body>
              <SubHead isAr={isAr}>الجهاز</SubHead>
              <Body isAr={isAr}>
                مخيم جرش، الأردن: أقل من 1% من الأسر عندها حاسوب. الهاتف الذكي هو الجهاز العالمي. بس الهاتف في المخيم مش نفس الهاتف في عمّان: قدراته أقل، عم يشتغل على 3G، باقة بيانات بتشتريها بكميات صغيرة لما الدخل يسمح. أدوات الذكاء الاصطناعي ما اتصمّمت لهاد الجهاز. ما اتصمّمت لهاد المستخدم.
              </Body>
              <SubHead isAr={isAr}>اللغة</SubHead>
              <Body isAr={isAr}>
                العربية مدعومة رسمياً من كل المنصات. بس العربية العامية الفلسطينية مختلفة اختلاف جوهري عن الفصحى وعن المصرية اللي بتهيمن على بيانات التدريب. النموذج مش مبني على تجربتهم. مش عارف أسئلتهم. مش عارف إنهم جرّبوا.
              </Body>
            </>
          ) : (
            <>
              <Body isAr={isAr}>
                AI access barriers for Palestinian refugees are not five separate problems. They are five expressions of one problem: that the conditions of AI access — power, banking, connectivity, devices, language — were built by and for populations whose relationship to the state is one of legal belonging. Palestinian refugees have been legally excluded from that relationship for three generations.
              </Body>
              <SubHead isAr={isAr}>Electricity</SubHead>
              <Body isAr={isAr}>
                Shatila camp in Beirut houses approximately 23,000 people in one square kilometer. It has existed since 1948. Municipal electricity reaches it for one to two hours per day. This is not a technical failure. Lebanon&apos;s electricity infrastructure excludes Palestinian refugee camps through a single legal mechanism: municipal service subscription requires legal residency — a status Palestinian refugees are systematically denied.
              </Body>
              <Body isAr={isAr}>
                Between 2015 and 2023, eighty-six people were electrocuted in Burj el-Barajneh camp. Not by bombs. By wires — because the informal wiring that covers every available surface in the camp is the only infrastructure that exists. Yarmouk camp in Damascus receives one hour of electricity per day.
              </Body>
              <ImageBreak
                src="/editorial/images/report/report-c.jpg"
                captionAr="مقبس كهربائي على جدار متشقق"
                captionEn="Bare electrical socket — cracked concrete"
                isAr={isAr}
              />
              <SubHead isAr={isAr}>Payment</SubHead>
              <Body isAr={isAr}>
                ChatGPT Plus costs $20 per month. Claude Pro costs $20. Gemini Advanced costs $19.99. UNRWA emergency cash assistance for Palestinian refugees in Lebanon is $16.67 per person per month. For 70% of Lebanon&apos;s camp residents, this is the income — not supplementary, not one source among others. The income. It arrives in cash. There is no card. There is no account.
              </Body>
              <ImageBreak
                src="/editorial/images/report/report-d.jpg"
                captionAr="يد تمتد نحو فتحة صراف آلي في جدار إسمنتي"
                captionEn="Hand reaching toward a sealed ATM slot"
                isAr={isAr}
              />
              <SubHead isAr={isAr}>Connectivity</SubHead>
              <Body isAr={isAr}>
                Lebanon&apos;s national internet speed ranks among the lowest in the world. In the occupied West Bank, Israel controls spectrum allocation: no independent Palestinian 3G or 4G network exists. 7amleh has documented systematic throttling and blocking of Palestinian digital space. An AI session interrupted mid-reply is not an AI session. It is data spent on a timeout error.
              </Body>
              <SubHead isAr={isAr}>Devices</SubHead>
              <Body isAr={isAr}>
                In Jerash camp, Jordan — home to approximately 30,000 Palestinians — fewer than one percent of households own a computer. Smartphones are the universal device. But the smartphone in a camp is not the smartphone in Amman: it is lower-capability, running on 3G, with a data plan purchased in small amounts when income permits. AI tools were not designed for this device. They were not designed for this user.
              </Body>
              <SubHead isAr={isAr}>Language</SubHead>
              <Body isAr={isAr}>
                Arabic is formally supported by all four major platforms. But Palestinian colloquial Arabic differs substantially from Modern Standard Arabic and from Egyptian dialect, which dominates Arabic-language training data. The model was not built on their experience. It does not know their questions. It does not know they tried.
              </Body>
            </>
          )}

          <ImageBreak
            src="/editorial/images/report/report-e.jpg"
            captionAr="موجة صوتية: اللهجة المحلية فوق، اللغة المعيارية المُجرَّدة أسفل"
            captionEn="Waveform: Palestinian dialect above, MSA flattened below"
            isAr={isAr}
          />

          {/* III */}
          <SectionHeader isAr={isAr} num="III" title={isAr ? "الجغرافيا" : "The Geography"} />

          {isAr ? (
            <>
              <SubHead isAr={isAr}>لبنان — 489,000 مسجّل. ساعة لساعتين كهرباء.</SubHead>
              <Body isAr={isAr}>
                مسح الأونروا الاجتماعي والاقتصادي لعام 2023: 83% من سكان المخيمات في لبنان تحت خط الفقر الوطني المعدَّل. البطالة 32% — تقريباً تلت أضعاف المعدل الوطني. هؤلاء هم اللي الذكاء الاصطناعي كان ممكن يفيدهم أكثر من غيرهم. وهم أيضاً اللي عم يتستثنوا هيكلياً من الذكاء الاصطناعي بسبب نفس الإطار القانوني اللي أنتج تلك الإحصاءات. الإقصاء عم يعزز حاله بنفسه.
              </Body>
              <Body isAr={isAr}>
                طالب في تل أبيب — ستين كيلومتر على البحر — عنده إنترنت واسع، حساب مصرفي، واشتراك ذكاء اصطناعي بكلّفه حوالي ثلاث ساعات من الحد الأدنى للأجر. الجغرافيا بهاد الدقة.
              </Body>
              <SubHead isAr={isAr}>الأردن — 2.4 مليون مسجّل. أقل من 1% من أسر جرش عندها حاسوب.</SubHead>
              <Body isAr={isAr}>
                الأردن دولة مدعومة من ChatGPT. الحجب الجغرافي مش العائق. في مخيم جرش، 52.7% من السكان تحت خط الفقر الوطني الأردني. أدوات الذكاء الاصطناعي اللي عم تستعملها المؤسسات الرسمية في الأردن — مش متاحة لسكان المخيمات اللي محتاجينها أكثر للتعامل مع نفس تلك المؤسسات.
              </Body>
              <SubHead isAr={isAr}>سوريا — 89% تحت خط الفقر. اليرموك: ساعة كهرباء باليوم.</SubHead>
              <Body isAr={isAr}>
                اليرموك كان فيه جامعات. أسواق. جمعيات مهنية. مجتمع مدني فلسطيني اتبنى على مدى ثلاثة أجيال. بعد 2011 حاصروه. قصفوه. احتلوه. حاصروه مجدداً. بعد ديسمبر 2024 وسقوط الأسد، السكان بدأوا يرجعوا على ساعة كهرباء باليوم. 96% معتمدين على الأونروا للاحتياجات الأساسية. 72% من البيوت تضررت.
              </Body>
              <SubHead isAr={isAr}>الضفة الغربية — بنية تحتية تحت احتلال غير مشروع.</SubHead>
              <Body isAr={isAr}>
                في الضفة، البنية التحتية موجودة اسمياً. إسرائيل بتتحكم فيها. تخصيص الطيف الترددي، نقل الكهرباء، البنية التحتية للاتصالات — كلها تحت سيطرة إسرائيلية. ما في شبكة فلسطينية بتشتغل باستقلالية. خلال اقتحامات جنين وطولكرم (2023–2025)، الاتصالات انقطعت عن مناطق كاملة لأيام. محكمة العدل الدولية حكمت في يوليو 2024 إن هاي السيطرة عم تمارَس عبر احتلال غير مشروع.
              </Body>
            </>
          ) : (
            <>
              <SubHead isAr={isAr}>Lebanon — 489,000 registered refugees. 1–2 hrs electricity.</SubHead>
              <Body isAr={isAr}>
                UNRWA&apos;s 2023 socioeconomic survey found 83% of Lebanon&apos;s camp residents living below the adjusted national poverty line. Unemployment runs at 32% — nearly triple the national rate. These are the people for whom AI assistance would matter most. These are also the people structurally excluded from AI by the Lebanese legal framework that produced those same statistics. The exclusion is self-reinforcing.
              </Body>
              <Body isAr={isAr}>
                A student in Tel Aviv — sixty kilometers across the sea — has broadband internet, a bank account, and access to an AI subscription that costs roughly three hours of minimum wage work. The geography of exclusion is that precise.
              </Body>
              <SubHead isAr={isAr}>Jordan — 2.4M registered. Fewer than 1% of Jerash households with a computer.</SubHead>
              <Body isAr={isAr}>
                Jordan is a ChatGPT-supported country. The geo-block is not the barrier. In Jerash camp, 52.7% of residents live below Jordan&apos;s national poverty line. The AI tools increasingly used in formal institutions across Jordan are inaccessible to the camp residents who need them most to navigate those same institutions.
              </Body>
              <SubHead isAr={isAr}>Syria — 89% below the poverty line. Yarmouk: one hour of electricity per day.</SubHead>
              <Body isAr={isAr}>
                Yarmouk camp had universities. It had markets, professional associations, a Palestinian civil society infrastructure built across three generations. After 2011 it was besieged. Bombed. Occupied. Besieged again. After December 2024 and the fall of the Assad government, residents began to return to one hour of electricity per day. 96% dependent on UNRWA for basic needs. 72% of homes damaged.
              </Body>
              <SubHead isAr={isAr}>West Bank — Infrastructure under an unlawful occupation.</SubHead>
              <Body isAr={isAr}>
                In the occupied West Bank, the infrastructure nominally exists. Israel controls it. Spectrum allocation, electricity transmission, and telecommunications infrastructure are under Israeli control. No Palestinian network operates independently. During military incursions into Jenin and Tulkarm (2023–2025), telecommunications were cut to entire districts for days. The ICJ ruled in July 2024 that this control is exercised through an unlawful occupation.
              </Body>
            </>
          )}

          <ImageBreak
            src="/editorial/images/report/report-b.jpg"
            captionAr="تمثيل بصري: الفجوة بين تكلفة الذكاء الاصطناعي والمساعدة الإنسانية"
            captionEn="Visual: the gap between AI pricing and humanitarian aid"
            isAr={isAr}
          />

          {/* IV */}
          <SectionHeader isAr={isAr} num="IV" title={isAr ? "الحياة التانية" : "The Second Life"} />

          {isAr ? (
            <>
              <Body isAr={isAr}>
                التكنولوجيا اللي ما يقدر اللاجئون الفلسطينيون يوصلوا إليها — عم تُستخدم لاستهداف الفلسطينيين.
              </Body>
              <Body isAr={isAr}>
                Microsoft وGoogle وAmazon بيقدموا بنية تحتية حوسبة سحابية للجيش الإسرائيلي. عقد &quot;مشروع نيمبس&quot; بمليار وميتين مليون دولار بين Google وAmazon بيشمل خدمات سحابية وقدرات ذكاء اصطناعي لوزارة الدفاع الإسرائيلية. الموجزة القانونية لمنظمة الحق في ديسمبر 2025 بتوثّق كيف هاي البنية التحتية عم تدعم أنظمة الاستهداف الشغّالة في غزة: &quot;لافندر&quot; — اللي أنتج قوائم استهداف لعشرات الآلاف من الفلسطينيين؛ &quot;هابسورا&quot; — اللي عالج الأهداف بمعدل أسرع من أي مراجعة بشرية؛ &quot;وين أبو&quot; — اللي تتبّع الأفراد لبيوت عيلاتهم.
              </Body>
              <Pull isAr={isAr}>
                هاي نفس الشركات اللي الطالبة في شاتيلا ما تقدر تدفع لها.
              </Pull>
              <Body isAr={isAr}>
                هاد مش حجة بالقياس. السحابة مش منفصلة. الشركة مش مقسّمة بين تسويقها الإنساني وعقودها العسكرية. غياب النية مش دفاع — هو وصف لنظام عم ينتج الضرر بدون صانع قرار مستعد يتحمل المسؤولية.
              </Body>
            </>
          ) : (
            <>
              <Body isAr={isAr}>
                The technology that Palestinian refugees cannot access is being used to target Palestinians.
              </Body>
              <Body isAr={isAr}>
                Microsoft, Google, and Amazon provide cloud computing infrastructure to the Israeli military. Google and Amazon&apos;s $1.2 billion Project Nimbus contract covers cloud services and AI capabilities for the Israeli Defense Ministry. Al-Haq&apos;s December 2025 legal brief documents how this infrastructure underpins targeting systems operating in Gaza: Lavender, which generated targeting lists of tens of thousands of Palestinians; Habsora, which processed targets at a rate that outpaced human review; Where&apos;s Daddy, which tracked individuals to their family homes.
              </Body>
              <Pull isAr={isAr}>
                These are the same companies whose platforms the nursing student in Shatila cannot afford.
              </Pull>
              <Body isAr={isAr}>
                This is not an argument by analogy. The cloud is not separate. The company is not divided between its humanitarian marketing and its military contracts. The absence of intent is not a defense — it is a description of a system that produces harm without a decision-maker willing to own it.
              </Body>
            </>
          )}

          <ImageBreak
            src="/editorial/images/report/report-f.jpg"
            captionAr="رف خوادم في الظلام — البنية التحتية التقنية للذكاء الاصطناعي"
            captionEn="Server rack in darkness — AI infrastructure"
            isAr={isAr}
          />

          {/* V */}
          <SectionHeader isAr={isAr} num="V" title={isAr ? "المساءلة" : "The Accountability Gap"} />

          {isAr ? (
            <>
              <Body isAr={isAr}>أدوات المساءلة موجودة. القرار بتطبيقها مش موجود.</Body>
              <Body isAr={isAr}>
                في سبتمبر 2024، كل دولة عضو في الأمم المتحدة وقّعت على الميثاق الرقمي العالمي. نداءات الطوارئ للأونروا، الصادرة بعد ما وقّعت الحكومات، ما فيها بند للبنية التحتية الرقمية. الالتزام على الورق. البرامج مش عم تعكسه.
              </Body>
              <Body isAr={isAr}>
                OpenAI وGoogle وAnthropic وMicrosoft كلهم نشروا التزامات بالذكاء الاصطناعي المسؤول، بالسلامة، ببناء خدمات للجميع. ما في وحدة منهم نشرت برنامج وصول إنساني للاجئين المسجّلين لدى الأونروا. ما في وحدة نشرت بيانات عن التوزيع الجغرافي لقاعدة مستخدميها. ما في وحدة عالجت علنياً الفجوة بين عقودها العسكرية والتزاماتها بالوصول.
              </Body>
              <Body isAr={isAr}>
                ما حدا نظر.
              </Body>
              <Body isAr={isAr}>
                فجوة المساءلة مش فجوة في الأدلة. الانتهاكات موثّقة. الأدوات في مكانها. للفجوة اسم. اسمه الإفلات من العقاب.
              </Body>
            </>
          ) : (
            <>
              <Body isAr={isAr}>The instruments of accountability exist. The decision to apply them does not.</Body>
              <Body isAr={isAr}>
                In September 2024, every UN member state signed the Global Digital Compact. UNRWA&apos;s Emergency Appeals, published after governments signed, contain no line item for digital infrastructure. The commitment is on paper. The programming does not reflect it.
              </Body>
              <Body isAr={isAr}>
                OpenAI, Google, Anthropic, and Microsoft have each published commitments to responsible AI, to safety, to building for everyone. None has published a humanitarian access program for UNRWA-registered refugees. None has published data on the geographic distribution of their user base. None has publicly addressed the gap between its military contracts and its access commitments. None has looked.
              </Body>
              <Body isAr={isAr}>
                The accountability gap is not a gap in evidence. The violations are documented. The instruments are in place. The gap has a name. It is impunity.
              </Body>
            </>
          )}

          {/* VI */}
          <SectionHeader isAr={isAr} num="VI" title={isAr ? "اللي لازم يتغيّر" : "What Must Change"} />

          {isAr ? (
            <>
              <Body isAr={isAr}>
                هاي التوصيات موجّهة لجهات مسمّاة. بصيغة الأمر. كل وحدة مستندة للأدوات القانونية اللي أرسى هاد التقرير أسسها. ما في وحدة منها مجرد اقتراح.
              </Body>
              <SubHead isAr={isAr}>للشركات: OpenAI وGoogle وAnthropic وMicrosoft</SubHead>
              {[
                "أنشئوا مستوى وصول مجاني للاجئين الفلسطينيين المسجّلين لدى الأونروا. اقبلوا وثائق تسجيل الأونروا كدليل أهلية بدل بيانات الدفع. هاد مش آلية جديدة — برامج الترخيص الأكاديمية والمؤسسات غير الربحية موجودة فعلاً في كل منظمة من منظماتكم. الفئة المستهدفة هي الجديدة. بتحتاج قرار، مش قدرة جديدة.",
                "اطلبوا تقييم مستقل لواجب العناية في حقوق الإنسان لكل العقود العسكرية النشطة — وانشروه كاملاً. عالجوا إذا كانت تلك العقود متسقة مع رأي محكمة العدل الدولية الاستشاري في يوليو 2024 والتزاماتكم المُعلنة بالوصول الشامل. أوقفوا أي عقود بتبيّن إنها مش متسقة مع المسؤولية الشركاتية عن عدم التسبب بضرر لحقوق الإنسان.",
                "انشروا بيانات الوصول الجغرافي ربع السنوية مصنّفة حسب البلد ومستوى اللاجئين. ما تقدروا تدّعوا الوصول الشامل برسالة بينما بترفضوا تقيسوا وين بينتهي هاد الوصول.",
              ].map((text, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "32px 1fr", gap: "16px", marginBottom: "20px", alignItems: "start", direction: "rtl" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "2px", color: "var(--wm-red)", paddingTop: "4px" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Body isAr={isAr}>{text}</Body>
                </div>
              ))}
              <SubHead isAr={isAr}>للأمم المتحدة والأونروا</SubHead>
              {[
                "اللجنة المعنية بالحقوق الاقتصادية والاجتماعية والثقافية: أصدروا بيان رسمي بموجب التعليق العام 25 يوضّح إن الوصول للذكاء الاصطناعي لأغراض التعليم والعمل بيشكّل حقاً بموجب المادة 15(1)(ب) من العهد الدولي، وإن هاد الحق بيمتد لمجتمعات اللاجئين وعديمي الجنسية. سمّوا العوائق البنيوية انتهاكات. ما تتركوا الإطار مجرداً.",
                "الأونروا: ادمجوا الوصول الرقمي في برمجة المساعدة الطارئة. ضمّنوا بند بنية تحتية رقمية في نداءات الطوارئ من 2027. تفاوضوا مباشرة مع شركات الذكاء الاصطناعي على برامج وصول إنساني للاجئين المسجّلين. الميثاق الرقمي العالمي اللي وقّعته دولكم الأعضاء بيوجب ذلك.",
                "مفوضية الأمم المتحدة السامية لحقوق الإنسان: اطلبوا رصد مستقل لوصول منصات الذكاء الاصطناعي في مخيمات اللاجئين الفلسطينيين. انشروا النتائج خلال اثني عشر شهر من هاد التقرير. غياب البيانات عم يديم الإفلات من العقاب. خلّصوا هاد الغياب.",
              ].map((text, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "32px 1fr", gap: "16px", marginBottom: "20px", alignItems: "start", direction: "rtl" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "2px", color: "var(--wm-red)", paddingTop: "4px" }}>
                    {String(i + 4).padStart(2, "0")}
                  </span>
                  <Body isAr={isAr}>{text}</Body>
                </div>
              ))}
              <SubHead isAr={isAr}>لحكومات المانحين</SubHead>
              <div style={{ display: "grid", gridTemplateColumns: "32px 1fr", gap: "16px", marginBottom: "20px", alignItems: "start", direction: "rtl" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "2px", color: "var(--wm-red)", paddingTop: "4px" }}>07</span>
                <Body isAr={isAr}>
                  ارجعوا عن تخفيضات تمويل الأونروا واستعيدوا الدعم لمستويات 2023 على الأقل. التخفيض بـ450 مليون دولار اللي نفّذته الولايات المتحدة في 2024 كان قرار مسمّى بعواقب مسمّاة. ممكن يتعكس. ربطوا عقود المشتريات العامة الممنوحة لشركات الذكاء الاصطناعي بنشر بيانات الوصول الجغرافي واعتماد برامج الوصول الإنساني. المال العام بيحمل التزامات المصلحة العامة.
                </Body>
              </div>
              <SubHead isAr={isAr}>لـ 7amleh وAccess Now</SubHead>
              <div style={{ display: "grid", gridTemplateColumns: "32px 1fr", gap: "16px", marginBottom: "20px", alignItems: "start", direction: "rtl" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "2px", color: "var(--wm-red)", paddingTop: "4px" }}>08</span>
                <Body isAr={isAr}>
                  أصدروا مطالبة عامة مشتركة — موجّهة بالاسم لـOpenAI وGoogle وAnthropic وMicrosoft — بتستلزم الامتثال للتوصيات 1 و2 و3 خلال اثني عشر شهر. انشروا الضرر المزدوج — الإقصاء من وصول الذكاء الاصطناعي، والإدماج في الاستهداف العسكري — كمطالبة مساءلة وحدة موحّدة. قاعدة الأدلة موجودة. التحالف موجود. المطالبة متأخرة.
                </Body>
              </div>
            </>
          ) : (
            <>
              <Body isAr={isAr}>
                These recommendations are addressed to named actors. They are stated in command register. Each is grounded in the legal instruments this report has established. None is a suggestion.
              </Body>
              <SubHead isAr={isAr}>To OpenAI, Google, Anthropic, and Microsoft</SubHead>
              {[
                "Establish a free-access tier for UNRWA-registered Palestinian refugees. Accept UNRWA refugee registration documentation as eligibility verification in place of payment credentials. This is not a novel mechanism — academic and nonprofit licensing programs already exist within each of your organizations. The target population is what is novel. It requires a decision, not a new capability.",
                "Commission an independent human rights due diligence assessment of all active military contracts — published in full. Address specifically whether those contracts are consistent with the ICJ Advisory Opinion of July 2024 and your stated commitments to universal access. Cease any contracts found to be inconsistent with the corporate responsibility not to cause or contribute to human rights harm.",
                "Publish quarterly geographic access data disaggregated to country and refugee population level, identifying where paid tiers are structurally inaccessible. You cannot claim universal access as a mission while declining to measure where that access ends.",
              ].map((text, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "32px 1fr", gap: "16px", marginBottom: "20px", alignItems: "start" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "2px", color: "var(--wm-red)", paddingTop: "4px" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Body isAr={isAr}>{text}</Body>
                </div>
              ))}
              <SubHead isAr={isAr}>To UN Bodies and UNRWA</SubHead>
              {[
                "The Committee on Economic, Social and Cultural Rights: issue a formal statement under General Comment 25 clarifying that AI access for educational and professional purposes constitutes a right under ICESCR Article 15(1)(b), and that this right extends to refugee and stateless populations. Name the structural barriers — electricity exclusion, banking exclusion, spectrum control — as violations. Do not leave the framework abstract.",
                "UNRWA: integrate digital access into emergency assistance programming. Include a digital infrastructure line in Emergency Appeals from 2027. Negotiate directly with AI companies for humanitarian access programs for registered refugees. The Global Digital Compact your member states signed requires it.",
                "The UN High Commissioner for Human Rights: commission independent monitoring of AI platform access in Palestinian refugee camps. Publish findings within twelve months of this report. The absence of data sustains the impunity. End the absence.",
              ].map((text, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "32px 1fr", gap: "16px", marginBottom: "20px", alignItems: "start" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "2px", color: "var(--wm-red)", paddingTop: "4px" }}>
                    {String(i + 4).padStart(2, "0")}
                  </span>
                  <Body isAr={isAr}>{text}</Body>
                </div>
              ))}
              <SubHead isAr={isAr}>To Donor Governments</SubHead>
              <div style={{ display: "grid", gridTemplateColumns: "32px 1fr", gap: "16px", marginBottom: "20px", alignItems: "start" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "2px", color: "var(--wm-red)", paddingTop: "4px" }}>07</span>
                <Body isAr={isAr}>
                  Reverse the funding cuts to UNRWA and restore support to at minimum 2023 levels. The $450 million cut by the United States in 2024 was a named decision with named consequences. It can be reversed. Condition public procurement contracts provided to AI companies on publication of geographic access data and adoption of humanitarian access programs. Public money carries public interest obligations.
                </Body>
              </div>
              <SubHead isAr={isAr}>To 7amleh and Access Now</SubHead>
              <div style={{ display: "grid", gridTemplateColumns: "32px 1fr", gap: "16px", marginBottom: "20px", alignItems: "start" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "2px", color: "var(--wm-red)", paddingTop: "4px" }}>08</span>
                <Body isAr={isAr}>
                  Issue a joint public demand — addressed by name to OpenAI, Google, Anthropic, and Microsoft — requiring compliance with Recommendations 1, 2, and 3 within twelve months. Publish the dual harm — exclusion from AI access, integration into military targeting — as a single, unified accountability claim. The evidence base exists. The coalition exists. The demand is overdue.
                </Body>
              </div>
            </>
          )}

          {/* Conclusion */}
          <div style={{ marginTop: "80px", paddingTop: "48px", borderTop: "2px solid var(--wm-red)" }}>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "var(--wm-red)",
                marginBottom: "32px",
                direction: isAr ? "rtl" : "ltr",
              }}
            >
              {isAr ? "الخاتمة" : "Conclusion"}
            </div>

            {isAr ? (
              <>
                <Body isAr={isAr}>
                  المولد اشتغل في التاسعة مساءً. شحنت الهاتف. في الصبح رح تفتح المتصفح وتجرّب مجدداً.
                </Body>
                <Body isAr={isAr}>
                  إذا في شي تغيّر لما بتفتحه — هاد بيتوقف على قرارات ما اتخذتها بعد جهات مسمّاة في منظمات مسمّاة. هاد التقرير سمّاها.
                </Body>
                <Pull isAr={isAr}>
                  البنية اللي جعلت إقصاءها ممكناً اتبنت بخيارات سياسية محددة، وأدوات قانونية محددة، وقرارات شركاتية محددة. رح تتفكّك بنفس الطريقة — أو مش رح تتفكّك خلص.
                </Pull>
              </>
            ) : (
              <>
                <Body isAr={isAr}>
                  The nursing student in Shatila charged her phone when the generator came on at nine in the evening. In the morning she would open the browser and try again.
                </Body>
                <Body isAr={isAr}>
                  Whether anything has changed when she opens it depends on decisions that named actors in named organizations have not yet made. This report has named them.
                </Body>
                <Pull isAr={isAr}>
                  The architecture of her exclusion was built by specific policy choices, specific legal instruments, and specific corporate decisions. It will be dismantled the same way — or it will not be dismantled at all.
                </Pull>
              </>
            )}

            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginTop: "48px",
                direction: isAr ? "rtl" : "ltr",
              }}
            >
              {isAr ? "معهد عايدة النقدي · القدس · أبريل ٢٠٢٦" : "AIDA Critical Institute · القدس · April 2026"}
            </div>
          </div>

          {/* Sources */}
          <div style={{ marginTop: "80px", paddingTop: "48px", borderTop: "1px solid rgba(26,20,16,0.10)" }}>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "var(--ink-faded)",
                marginBottom: "28px",
                direction: isAr ? "rtl" : "ltr",
              }}
            >
              {isAr
                ? "المصادر الرئيسية · التوثيق الكامل: camp_ai_dossier_v1.1 (عايدة، أبريل ٢٠٢٦)"
                : "Key Sources · Full documentation: camp_ai_dossier_v1.1 (AIDA, April 2026)"}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { label: "UNRWA/AUB Socioeconomic Survey 2023 — Palestine Refugees in Lebanon", url: "https://reliefweb.int/report/lebanon/2023-socioeconomic-survey-palestine-refugees-lebanon" },
                { label: "UNRWA Emergency Appeal 2025 (Lebanon, Syria, Jordan)", url: "https://unrwa.org" },
                { label: "EUAA COI Report: Syria Country Focus, July 2025", url: "https://euaa.europa.eu/coi/syria/2025" },
                { label: "ICJ Advisory Opinion on Israeli Occupation, July 2024", url: "https://icj-cij.org/node/203454" },
                { label: "ICESCR General Comment 25 (2020) — digital technologies", url: "https://ohchr.org" },
                { label: "UN Global Digital Compact, September 2024", url: "https://un.org/global-digital-compact" },
                { label: "HRW, Cut Off From Life Itself: Lebanon's Failure on the Right to Electricity, March 2023", url: "https://hrw.org" },
                { label: "Al-Haq, Legal Brief on AI Infrastructure and Israeli Military Operations, December 2025", url: "https://alhaq.org" },
                { label: "7amleh — Arab Center for the Advancement of Social Media", url: "https://7amleh.org" },
                { label: "UNICEF, Jerash Socio-Economic Assessment, May 2021", url: "https://unicef.org/jordan" },
                { label: "UN Guiding Principles on Business and Human Rights (2011)", url: "https://ohchr.org/en/publications/reference-publications/guiding-principles-business-and-human-rights" },
              ].map((source, i) => (
                <a
                  key={i}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "9px",
                    letterSpacing: "1px",
                    color: "var(--text-muted)",
                    display: "flex",
                    gap: "12px",
                    alignItems: "baseline",
                    transition: "color 0.2s",
                    lineHeight: 1.6,
                    direction: isAr ? "rtl" : "ltr",
                  }}
                  className="hover:text-[var(--wm-red)]"
                >
                  <span style={{ color: "var(--wm-red)", opacity: 0.5, flexShrink: 0 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{source.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* ── Back link ─────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--ground-mid)",
          padding: "48px 6vw",
          borderTop: "1px solid rgba(26,20,16,0.10)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "24px",
          direction: isAr ? "rtl" : "ltr",
        }}
      >
        <Link
          href={`/${locale}/insights`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "var(--ink-dim)",
            transition: "color 0.2s",
          }}
          className="hover:text-[var(--wm-red)]"
        >
          <span>{isAr ? "→" : "←"}</span>
          <span>{isAr ? "العودة إلى حريّة" : "Back to Hurriyeh"}</span>
        </Link>

        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "var(--text-muted)",
          }}
        >
          {isAr ? "معهد عايدة النقدي · القدس · ٢٠٢٦" : "AIDA Critical Institute · Jerusalem · 2026"}
        </div>
      </section>
    </>
  );
}
