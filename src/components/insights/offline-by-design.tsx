"use client";

import Link from "next/link";
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
 */

function SectionHeader({ num, title }: { num: string; title: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        marginBottom: "40px",
        paddingBottom: "20px",
        borderBottom: "1px solid rgba(196,26,42,0.25)",
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
        }}
      >
        {num}
      </span>
      <h2
        style={{
          fontFamily: "var(--font-en)",
          fontWeight: 700,
          fontStyle: "italic",
          fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
          color: "var(--ink)",
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </h2>
    </div>
  );
}

function Pull({ children }: { children: React.ReactNode }) {
  return (
    <blockquote
      style={{
        borderLeft: "3px solid var(--wm-red)",
        paddingLeft: "28px",
        margin: "48px 0",
        fontFamily: "var(--font-en)",
        fontStyle: "italic",
        fontWeight: 700,
        fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)",
        lineHeight: 1.45,
        color: "var(--ink)",
      }}
    >
      {children}
    </blockquote>
  );
}

function Stat({ num, label }: { num: string; label: string }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
      }}
    >
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
          fontFamily: "var(--font-body)",
          fontStyle: "italic",
          fontSize: "0.9rem",
          color: "var(--ink-faded)",
          lineHeight: 1.4,
        }}
      >
        {label}
      </span>
    </div>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "var(--font-body)",
        fontStyle: "italic",
        fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)",
        lineHeight: 1.8,
        color: "var(--ink-dim)",
        marginBottom: "24px",
      }}
    >
      {children}
    </p>
  );
}

function SubHead({ children }: { children: React.ReactNode }) {
  return (
    <h3
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        letterSpacing: "3px",
        textTransform: "uppercase",
        color: "var(--ink)",
        marginBottom: "20px",
        marginTop: "48px",
        paddingTop: "24px",
        borderTop: "1px solid rgba(26,20,16,0.08)",
      }}
    >
      {children}
    </h3>
  );
}

export function OfflineByDesignReport() {
  const locale = useLocale();
  const isAr = locale === "ar";

  const bodyDir = isAr ? "rtl" : "ltr";

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

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "900px",
          }}
        >
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
              {isAr ? "حريّة" : "حريّة"}
            </Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: "var(--ink-faded)" }}>
              {isAr ? "تقرير ٠١" : "Report 01"}
            </span>
          </div>

          {/* Arabic title */}
          <h1
            style={{
              fontFamily: "var(--font-ar)",
              fontWeight: 700,
              fontSize: "clamp(4rem, 10vw, 9rem)",
              lineHeight: 0.95,
              color: "var(--ink)",
              letterSpacing: "-0.02em",
              marginBottom: "24px",
              direction: "rtl",
            }}
          >
            إقصاءٌ مبرمَج
          </h1>

          {/* English title */}
          <div
            style={{
              fontFamily: "var(--font-en)",
              fontWeight: 900,
              fontStyle: "italic",
              fontSize: "clamp(1.8rem, 3.5vw, 3.2rem)",
              color: "var(--wm-red)",
              marginBottom: "48px",
              lineHeight: 1,
            }}
          >
            Offline by Design
          </div>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontStyle: "italic",
              fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
              lineHeight: 1.7,
              color: "var(--ink-dim)",
              maxWidth: "700px",
              marginBottom: "40px",
            }}
          >
            Structural Barriers to AI Access for Palestinian Refugees in Lebanon,
            Jordan, Syria, and the Occupied West Bank
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
            }}
          >
            <span>A Policy and Advocacy Report</span>
            <span style={{ color: "var(--wm-red)", opacity: 0.4 }}>·</span>
            <span>AIDA Critical Institute</span>
            <span style={{ color: "var(--wm-red)", opacity: 0.4 }}>·</span>
            <span>April 2026</span>
          </div>
        </div>
      </section>

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
        <Stat num="5.9M" label="registered Palestinian refugees (UNRWA)" />
        <div style={{ width: "1px", height: "48px", background: "rgba(26,20,16,0.15)" }} />
        <Stat num="$20" label="ChatGPT Plus / month" />
        <div style={{ width: "1px", height: "48px", background: "rgba(26,20,16,0.15)" }} />
        <Stat num="$16.67" label="UNRWA emergency cash assistance / person / month" />
        <div style={{ width: "1px", height: "48px", background: "rgba(26,20,16,0.15)" }} />
        <Stat num="0" label="bank accounts. No card. No access." />
      </section>

      {/* ── Report body ──────────────────────────────────────── */}
      <article
        style={{
          background: "var(--ground)",
          padding: "80px 6vw 120px",
        }}
      >
        <div
          style={{
            maxWidth: "780px",
            margin: "0 auto",
          }}
        >

          {/* I. The Claim */}
          <SectionHeader num="I" title="The Claim" />

          <Body>
            In July 2024, the International Court of Justice ruled that Israel's occupation
            of Palestinian territory is unlawful and must end as rapidly as possible. Three
            months later, every member state of the United Nations signed the Global Digital
            Compact, committing to digital inclusion for all people — including refugees and
            forcibly displaced populations.
          </Body>
          <Body>
            Neither has been implemented.
          </Body>
          <Body>
            Palestinian refugees — approximately 5.9 million people registered with UNRWA
            across Lebanon, Jordan, Syria, and the occupied West Bank — cannot access the
            AI tools that have become standard infrastructure in the countries that surround
            them. A nursing student in Shatila camp reaches the free limit of ChatGPT and
            is asked for $20 a month. Her family&apos;s UNRWA emergency assistance is $16.67 per
            person. It arrives in cash. There is no card.
          </Body>
          <Body>
            This is not a technology gap. It is not a market failure awaiting correction.
            It is the latest expression of a structure that has been deliberately maintained
            for three generations.
          </Body>

          <Pull>
            Palestinian refugees are not excluded from AI by accident or oversight. They are
            excluded by the same architecture of dispossession the AI industry is contracted
            to sustain.
          </Pull>

          {/* II. Architecture of Exclusion */}
          <SectionHeader num="II" title="The Architecture of Exclusion" />

          <Body>
            AI access barriers for Palestinian refugees are not five separate problems. They
            are five expressions of one problem: that the conditions of AI access — power,
            banking, connectivity, devices, language — were built by and for populations
            whose relationship to the state is one of legal belonging. Palestinian refugees
            have been legally excluded from that relationship for three generations.
          </Body>

          <SubHead>Electricity</SubHead>
          <Body>
            Shatila camp in Beirut houses approximately 23,000 people in one square kilometer.
            It has existed since 1948. Municipal electricity reaches it for one to two hours
            per day. This is not a technical failure. Lebanon&apos;s electricity infrastructure
            excludes Palestinian refugee camps through a single legal mechanism: municipal
            service subscription requires legal residency — a status Palestinian refugees are
            systematically denied.
          </Body>
          <Body>
            Between 2015 and 2023, eighty-six people were electrocuted in Burj el-Barajneh
            camp. Not by bombs. By wires — because the informal wiring that covers every
            available surface in the camp is the only infrastructure that exists. Yarmouk camp
            in Damascus receives one hour of electricity per day.
          </Body>

          <SubHead>Payment</SubHead>
          <Body>
            ChatGPT Plus costs $20 per month. Claude Pro costs $20. Gemini Advanced costs $19.99.
            UNRWA emergency cash assistance for Palestinian refugees in Lebanon is $16.67 per
            person per month. For 70% of Lebanon&apos;s camp residents, this is the income —
            not supplementary, not one source among others. The income. It arrives in cash.
            There is no card. There is no account.
          </Body>

          <SubHead>Connectivity</SubHead>
          <Body>
            Lebanon&apos;s national internet speed ranks among the lowest in the world. In the
            occupied West Bank, Israel controls spectrum allocation: no independent Palestinian
            3G or 4G network exists. 7amleh has documented systematic throttling and blocking
            of Palestinian digital space. An AI session interrupted mid-reply is not an AI
            session. It is data spent on a timeout error.
          </Body>

          <SubHead>Devices</SubHead>
          <Body>
            In Jerash camp, Jordan — home to approximately 30,000 Palestinians — fewer than
            one percent of households own a computer. Smartphones are the universal device.
            But the smartphone in a camp is not the smartphone in Amman: it is lower-capability,
            running on 3G, with a data plan purchased in small amounts when income permits.
            AI tools were not designed for this device. They were not designed for this user.
          </Body>

          <SubHead>Language</SubHead>
          <Body>
            Arabic is formally supported by all four major platforms. But Palestinian colloquial
            Arabic differs substantially from Modern Standard Arabic and from Egyptian dialect,
            which dominates Arabic-language training data. The model was not built on their
            experience. It does not know their questions. It does not know they tried.
          </Body>

          {/* III. The Geography */}
          <SectionHeader num="III" title="The Geography" />

          <SubHead>Lebanon — 489,000 registered refugees. 1–2 hrs electricity.</SubHead>
          <Body>
            UNRWA&apos;s 2023 socioeconomic survey found 83% of Lebanon&apos;s camp residents living
            below the adjusted national poverty line. Unemployment runs at 32% — nearly triple
            the national rate. These are the people for whom AI assistance would matter most.
            These are also the people structurally excluded from AI by the Lebanese legal
            framework that produced those same statistics. The exclusion is self-reinforcing.
          </Body>
          <Body>
            A student in Tel Aviv — sixty kilometers across the sea — has broadband internet,
            a bank account, and access to an AI subscription that costs roughly three hours of
            minimum wage work. The geography of exclusion is that precise.
          </Body>

          <SubHead>Jordan — 2.4M registered. Fewer than 1% of Jerash households with a computer.</SubHead>
          <Body>
            Jordan is a ChatGPT-supported country. The geo-block is not the barrier. In Jerash
            camp, 52.7% of residents live below Jordan&apos;s national poverty line. The AI tools
            increasingly used in formal institutions across Jordan are inaccessible to the camp
            residents who need them most to navigate those same institutions.
          </Body>

          <SubHead>Syria — 89% below the poverty line. Yarmouk: one hour of electricity per day.</SubHead>
          <Body>
            Yarmouk camp had universities. It had markets, professional associations, a Palestinian
            civil society infrastructure built across three generations. After 2011 it was besieged.
            Bombed. Occupied. Besieged again. After December 2024 and the fall of the Assad
            government, residents began to return to one hour of electricity per day. 96% dependent
            on UNRWA for basic needs. 72% of homes damaged.
          </Body>

          <SubHead>West Bank — Infrastructure under an unlawful occupation.</SubHead>
          <Body>
            In the occupied West Bank, the infrastructure nominally exists. Israel controls it.
            Spectrum allocation, electricity transmission, and telecommunications infrastructure
            are under Israeli control. No Palestinian network operates independently. During
            military incursions into Jenin and Tulkarm (2023–2025), telecommunications were cut
            to entire districts for days. The ICJ ruled in July 2024 that this control is
            exercised through an unlawful occupation.
          </Body>

          {/* IV. The Second Life */}
          <SectionHeader num="IV" title="The Second Life" />

          <Body>
            The technology that Palestinian refugees cannot access is being used to target Palestinians.
          </Body>
          <Body>
            Microsoft, Google, and Amazon provide cloud computing infrastructure to the Israeli
            military. Google and Amazon&apos;s $1.2 billion Project Nimbus contract covers cloud
            services and AI capabilities for the Israeli Defense Ministry. Al-Haq&apos;s December 2025
            legal brief documents how this infrastructure underpins targeting systems operating in
            Gaza: Lavender, which generated targeting lists of tens of thousands of Palestinians;
            Habsora, which processed targets at a rate that outpaced human review; Where&apos;s Daddy,
            which tracked individuals to their family homes.
          </Body>

          <Pull>
            These are the same companies whose platforms the nursing student in Shatila cannot afford.
          </Pull>

          <Body>
            This is not an argument by analogy. The cloud is not separate. The company is not divided
            between its humanitarian marketing and its military contracts. The absence of intent is
            not a defense — it is a description of a system that produces harm without a
            decision-maker willing to own it.
          </Body>

          {/* V. Accountability Gap */}
          <SectionHeader num="V" title="The Accountability Gap" />

          <Body>
            The instruments of accountability exist. The decision to apply them does not.
          </Body>
          <Body>
            In September 2024, every UN member state signed the Global Digital Compact.
            UNRWA&apos;s Emergency Appeals, published after governments signed, contain no line item
            for digital infrastructure. The commitment is on paper. The programming does not
            reflect it.
          </Body>
          <Body>
            OpenAI, Google, Anthropic, and Microsoft have each published commitments to responsible
            AI, to safety, to building for everyone. None has published a humanitarian access
            program for UNRWA-registered refugees. None has published data on the geographic
            distribution of their user base. None has publicly addressed the gap between its
            military contracts and its access commitments. None has looked.
          </Body>
          <Body>
            The accountability gap is not a gap in evidence. The violations are documented.
            The instruments are in place. The gap has a name. It is impunity.
          </Body>

          {/* VI. What Must Change */}
          <SectionHeader num="VI" title="What Must Change" />

          <Body>
            These recommendations are addressed to named actors. They are stated in command
            register. Each is grounded in the legal instruments this report has established.
            None is a suggestion.
          </Body>

          <SubHead>To OpenAI, Google, Anthropic, and Microsoft</SubHead>

          {[
            "Establish a free-access tier for UNRWA-registered Palestinian refugees. Accept UNRWA refugee registration documentation as eligibility verification in place of payment credentials. This is not a novel mechanism — academic and nonprofit licensing programs already exist within each of your organizations. The target population is what is novel. It requires a decision, not a new capability.",
            "Commission an independent human rights due diligence assessment of all active military contracts — published in full. Address specifically whether those contracts are consistent with the ICJ Advisory Opinion of July 2024 and your stated commitments to universal access. Cease any contracts found to be inconsistent with the corporate responsibility not to cause or contribute to human rights harm.",
            "Publish quarterly geographic access data disaggregated to country and refugee population level, identifying where paid tiers are structurally inaccessible. You cannot claim universal access as a mission while declining to measure where that access ends.",
          ].map((text, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "32px 1fr",
                gap: "16px",
                marginBottom: "20px",
                alignItems: "start",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  color: "var(--wm-red)",
                  paddingTop: "4px",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <Body>{text}</Body>
            </div>
          ))}

          <SubHead>To UN Bodies and UNRWA</SubHead>

          {[
            "The Committee on Economic, Social and Cultural Rights: issue a formal statement under General Comment 25 clarifying that AI access for educational and professional purposes constitutes a right under ICESCR Article 15(1)(b), and that this right extends to refugee and stateless populations. Name the structural barriers — electricity exclusion, banking exclusion, spectrum control — as violations. Do not leave the framework abstract.",
            "UNRWA: integrate digital access into emergency assistance programming. Include a digital infrastructure line in Emergency Appeals from 2027. Negotiate directly with AI companies for humanitarian access programs for registered refugees. The Global Digital Compact your member states signed requires it.",
            "The UN High Commissioner for Human Rights: commission independent monitoring of AI platform access in Palestinian refugee camps. Publish findings within twelve months of this report. The absence of data sustains the impunity. End the absence.",
          ].map((text, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "32px 1fr",
                gap: "16px",
                marginBottom: "20px",
                alignItems: "start",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  color: "var(--wm-red)",
                  paddingTop: "4px",
                }}
              >
                {String(i + 4).padStart(2, "0")}
              </span>
              <Body>{text}</Body>
            </div>
          ))}

          <SubHead>To Donor Governments</SubHead>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "32px 1fr",
              gap: "16px",
              marginBottom: "20px",
              alignItems: "start",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "2px",
                color: "var(--wm-red)",
                paddingTop: "4px",
              }}
            >
              07
            </span>
            <Body>
              Reverse the funding cuts to UNRWA and restore support to at minimum 2023 levels.
              The $450 million cut by the United States in 2024 was a named decision with named
              consequences. It can be reversed. Condition public procurement contracts provided
              to AI companies on publication of geographic access data and adoption of humanitarian
              access programs. Public money carries public interest obligations.
            </Body>
          </div>

          <SubHead>To 7amleh and Access Now</SubHead>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "32px 1fr",
              gap: "16px",
              marginBottom: "20px",
              alignItems: "start",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "2px",
                color: "var(--wm-red)",
                paddingTop: "4px",
              }}
            >
              08
            </span>
            <Body>
              Issue a joint public demand — addressed by name to OpenAI, Google, Anthropic,
              and Microsoft — requiring compliance with Recommendations 1, 2, and 3 within
              twelve months. Publish the dual harm — exclusion from AI access, integration
              into military targeting — as a single, unified accountability claim. The evidence
              base exists. The coalition exists. The demand is overdue.
            </Body>
          </div>

          {/* Conclusion */}
          <div
            style={{
              marginTop: "80px",
              paddingTop: "48px",
              borderTop: "2px solid var(--wm-red)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "var(--wm-red)",
                marginBottom: "32px",
              }}
            >
              Conclusion
            </div>

            <Body>
              The nursing student in Shatila charged her phone when the generator came on at
              nine in the evening. In the morning she would open the browser and try again.
            </Body>
            <Body>
              Whether anything has changed when she opens it depends on decisions that named
              actors in named organizations have not yet made. This report has named them.
            </Body>

            <Pull>
              The architecture of her exclusion was built by specific policy choices, specific
              legal instruments, and specific corporate decisions. It will be dismantled the
              same way — or it will not be dismantled at all.
            </Pull>

            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginTop: "48px",
              }}
            >
              AIDA Critical Institute · القدس · April 2026
            </div>
          </div>

          {/* Sources */}
          <div
            style={{
              marginTop: "80px",
              paddingTop: "48px",
              borderTop: "1px solid rgba(26,20,16,0.10)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "var(--ink-faded)",
                marginBottom: "28px",
              }}
            >
              Key Sources · Full documentation: camp_ai_dossier_v1.1 (AIDA, April 2026)
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
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

      {/* ── Back to حريّة ─────────────────────────────────────── */}
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
          <span>←</span>
          <span>{isAr ? "العودة إلى حريّة" : "Back to حريّة"}</span>
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
          AIDA Critical Institute · القدس · 2026
        </div>
      </section>
    </>
  );
}
