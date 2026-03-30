"use client";

import { useState } from "react";
import { MessageCircle, Mail, MapPin, Send, ArrowRight, ArrowLeft, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { GlassPanel } from "@/components/shared/glass-panel";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { GoldButton } from "@/components/shared/gold-button";
import { SITE } from "@/lib/constants";

const STEPS = ["info", "project", "details"] as const;

export function ContactContent() {
  const t = useTranslations("contact");
  const [step, setStep] = useState(0);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit() {
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      // WhatsApp is primary channel
    } finally {
      setSending(false);
    }
  }

  const canProceed = step === 0
    ? formState.name.trim() && formState.email.trim()
    : step === 1
    ? formState.service
    : formState.message.trim();

  return (
    <section className="pt-32 pb-20 paper-texture relative">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <SectionHeading label={t("label")} title={t("title")} subtitle={t("subtitle")} />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* WhatsApp side */}
          <ScrollReveal>
            <div className="space-y-6">
              <GlassPanel className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle size={32} className="text-green-600" />
                </div>
                <h3 className="font-serif text-2xl text-[var(--ink)] mb-2">{t("whatsappTitle")}</h3>
                <p className="text-[var(--stone-gray)] text-sm mb-6">{t("whatsappDesc")}</p>
                <GoldButton href={SITE.whatsapp} external variant="terracotta" size="lg">
                  <MessageCircle size={20} />
                  {t("openWhatsapp")}
                </GoldButton>
              </GlassPanel>

              <GlassPanel>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-[var(--terracotta)]" />
                    <span className="text-[var(--stone-gray)] text-sm">{SITE.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-[var(--terracotta)]" />
                    <span className="text-[var(--stone-gray)] text-sm">{SITE.location}</span>
                  </div>
                </div>
              </GlassPanel>
            </div>
          </ScrollReveal>

          {/* Multi-step form */}
          <ScrollReveal delay={0.15}>
            <GlassPanel>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[var(--terracotta-dim)] flex items-center justify-center mx-auto mb-4">
                    <Check size={28} className="text-[var(--terracotta)]" />
                  </div>
                  <h3 className="font-serif text-2xl text-[var(--ink)] mb-2">{t("sentTitle")}</h3>
                  <p className="text-[var(--stone-gray)] text-sm">{t("sentDesc")}</p>
                </div>
              ) : (
                <div>
                  <h3 className="font-serif text-xl text-[var(--ink)] mb-2">{t("sendMessage")}</h3>

                  {/* Progress dots */}
                  <div className="flex items-center gap-2 mb-6">
                    {STEPS.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1.5 rounded-full transition-all ${
                          i <= step
                            ? "bg-[var(--terracotta)] w-8"
                            : "bg-[var(--mist)] w-4"
                        }`}
                      />
                    ))}
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      {step === 0 && (
                        <>
                          <div>
                            <label className="font-space text-sm text-[var(--stone-gray)] mb-1.5 block">{t("name")}</label>
                            <input
                              type="text"
                              required
                              value={formState.name}
                              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl bg-[var(--sand)] border border-[var(--border)] text-[var(--ink)] text-sm focus:outline-none focus:border-[var(--terracotta)] transition-colors"
                              placeholder={t("namePlaceholder")}
                              autoFocus
                            />
                          </div>
                          <div>
                            <label className="font-space text-sm text-[var(--stone-gray)] mb-1.5 block">{t("email")}</label>
                            <input
                              type="email"
                              required
                              value={formState.email}
                              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl bg-[var(--sand)] border border-[var(--border)] text-[var(--ink)] text-sm focus:outline-none focus:border-[var(--terracotta)] transition-colors"
                              placeholder={t("emailPlaceholder")}
                            />
                          </div>
                          <div>
                            <label className="font-space text-sm text-[var(--stone-gray)] mb-1.5 block">{t("company")}</label>
                            <input
                              type="text"
                              value={formState.company}
                              onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl bg-[var(--sand)] border border-[var(--border)] text-[var(--ink)] text-sm focus:outline-none focus:border-[var(--terracotta)] transition-colors"
                              placeholder={t("companyPlaceholder")}
                            />
                          </div>
                        </>
                      )}

                      {step === 1 && (
                        <>
                          <div>
                            <label className="font-space text-sm text-[var(--stone-gray)] mb-1.5 block">{t("serviceNeeded")}</label>
                            <select
                              value={formState.service}
                              onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl bg-[var(--sand)] border border-[var(--border)] text-[var(--ink)] text-sm focus:outline-none focus:border-[var(--terracotta)] transition-colors"
                            >
                              <option value="">{t("servicePlaceholder")}</option>
                              <option value="branding">{t("serviceOptions.branding")}</option>
                              <option value="social">{t("serviceOptions.social")}</option>
                              <option value="menu">{t("serviceOptions.menu")}</option>
                              <option value="photo">{t("serviceOptions.photo")}</option>
                              <option value="website">{t("serviceOptions.website")}</option>
                              <option value="ads">{t("serviceOptions.ads")}</option>
                              <option value="other">{t("serviceOptions.other")}</option>
                            </select>
                          </div>
                          <div>
                            <label className="font-space text-sm text-[var(--stone-gray)] mb-1.5 block">{t("budget")}</label>
                            <select
                              value={formState.budget}
                              onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl bg-[var(--sand)] border border-[var(--border)] text-[var(--ink)] text-sm focus:outline-none focus:border-[var(--terracotta)] transition-colors"
                            >
                              <option value="">{t("budgetPlaceholder")}</option>
                              <option value="500-1500">500 – 1,500 ₪</option>
                              <option value="1500-3000">1,500 – 3,000 ₪</option>
                              <option value="3000-5000">3,000 – 5,000 ₪</option>
                              <option value="5000+">5,000+ ₪</option>
                            </select>
                          </div>
                        </>
                      )}

                      {step === 2 && (
                        <div>
                          <label className="font-space text-sm text-[var(--stone-gray)] mb-1.5 block">{t("message")}</label>
                          <textarea
                            required
                            rows={6}
                            value={formState.message}
                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-[var(--sand)] border border-[var(--border)] text-[var(--ink)] text-sm focus:outline-none focus:border-[var(--terracotta)] transition-colors resize-none"
                            placeholder={t("messagePlaceholder")}
                            autoFocus
                          />
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation buttons */}
                  <div className="flex items-center justify-between mt-6">
                    {step > 0 ? (
                      <button
                        type="button"
                        onClick={() => setStep(step - 1)}
                        className="flex items-center gap-2 text-sm text-[var(--stone-gray)] hover:text-[var(--ink)] transition-colors"
                      >
                        <ArrowLeft size={16} />
                        {t("back")}
                      </button>
                    ) : (
                      <div />
                    )}

                    {step < STEPS.length - 1 ? (
                      <button
                        type="button"
                        onClick={() => canProceed && setStep(step + 1)}
                        disabled={!canProceed}
                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--terracotta)] text-white font-space font-semibold text-sm transition-all hover:shadow-lg hover:scale-[1.02] disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        {t("next")}
                        <ArrowRight size={16} />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={sending || !canProceed}
                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--terracotta)] text-white font-space font-semibold text-sm transition-all hover:shadow-lg hover:scale-[1.02] disabled:opacity-50"
                      >
                        {sending ? t("sending") : t("submit")}
                        <Send size={16} />
                      </button>
                    )}
                  </div>
                </div>
              )}
            </GlassPanel>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
