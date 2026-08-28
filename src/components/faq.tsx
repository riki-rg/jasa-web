"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronRight, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqs = [
  {
    q: "Berapa lama waktu development project website?",
    a: "Tergantung scope. Landing page: 2-3 minggu. E-commerce: 6-10 minggu. SaaS/Dashboard: 3-6 bulan. Kami kasih timeline detail di proposal setelah konsultasi. Yang pasti: kami gak janji tanggal tidak realistis.",
  },
  {
    q: "Berapa biayanya? Apakah bisa cicil?",
    a: "Landing page mulai Rp 5 Juta, E-commerce mulai Rp 15 Juta, SaaS mulai Rp 30 Juta. Harga final tergantung fitur & kompleksitas. Cicil tersedia: 50% awal, 30% milestone tengah, 20% launch. No hidden cost — semua tertulis di kontrak.",
  },
  {
    q: "Apakah saya bisa request revision selama development?",
    a: "Bisa. Setiap milestone (design, frontend, backend, integration) ada review & revisi masuk akal (scope yang sudah disepakati). Revision di luar scope di-quote terpisah. Kami pakai Figma untuk design review biar cepat & visual.",
  },
  {
    q: "Stack teknologi apa yang dipakai? Bisa request stack tertentu?",
    a: "Default: Next.js 15, React 19, TypeScript strict, Tailwind CSS, Prisma ORM, PostgreSQL, Better Auth, Vercel deploy. Bisa request stack lain (Nuxt, Laravel, Go) tapi timeline & biaya bisa beda. Kami rekomendasikan stack modern untuk performa & maintainability.",
  },
  {
    q: "Bagaimana dengan SEO & Core Web Vitals?",
    a: "Semua project default: Server-side rendering (Next.js), semantic HTML, meta tags, Open Graph, JSON-LD schema, sitemap.xml, robots.txt. Target Core Web Vitals: LCP < 2.5s, INP < 200ms, CLS < 0.1. Kami test pakai Lighthouse & Vercel Analytics sebelum launch.",
  },
  {
    q: "Apa yang dibutuhkan dari saya sebelum project mulai?",
    a: "Minimal: logo (SVG/PNG), brand guideline (warna, font), copy/text konten, referensi design/kompetitor, akses domain/hosting (kalau sudah punya). Kalau belum punya copy/desain, kami bantu arahin atau connect ke copywriter/designer partner.",
  },
  {
    q: "Bagaimana proses maintenance & support setelah launch?",
    a: "Gratis 1 bulan: bug fix, minor tweak, pertanyaan teknis. Setelah itu: optional retainer bulanan (mulai Rp 1.5 Juta/bulan) untuk update dependency, security patch, monitoring, backup, prioritas support. Atau pay-per-ticket. Dokumentasi lengkap (README, API docs, deployment guide) selalu diserahkan.",
  },
  {
    q: "Apakah kami akan dapat akses source code & deploy?",
    a: "Ya, 100% milik Anda. Repo GitHub private dibuat atas nama Anda/organisasi Anda. Kami setup CI/CD ke Vercel/Netlify/Railway atas akun Anda. Kami hanya maintain akses kolaborator selama project. Setelah handover, akses penuh di tangan Anda.",
  },
  {
    q: "Bisa bantu setup AI integration (chatbot, estimator, content generator)?",
    a: "Bisa. Kami pakai Gemini API (Google) atau OpenAI via Vercel AI SDK. Key disimpan di server (env), bukan expose di browser. Fitur: rate limiting, cost tracking, streaming response, fallback error handling. Estimator biaya AI terpisah dari fee development.",
  },
  {
    q: "Bagaimana kalau project butuh scale ke enterprise (multi-tenant, SSO, compliance)?",
    a: "Stack kami ready: Better Auth support multi-tenant & SSO (SAML/OIDC), Prisma multi-schema, Vercel Enterprise support. Untuk compliance (ISO 27001, SOC2, GDPR) butuh setup terpisah & audit — bisa dibahas di konsultasi. Biaya & timeline beda signifikan dengan project standar.",
  },
  {
    q: "Bagaimana cara memulai konsultasi?",
    a: "Klik tombol \"Konsultasi Gratis\" atau isi form di halaman /consultation. Kami balas via WhatsApp/Email dalam 1x24 jam. Call 30 menit: bahas ide, scope, budget, timeline. Kalau cocok, kami kirim proposal formal dalam 1-2 hari kerja. No pressure, no spam.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev: number | null) => (prev === index ? null : index));
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <RevealSection id="faq" eyebrow="FAQ" title="Pertanyaan yang sering ditanyakan.">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                index={index}
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() => toggle(index)}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ delay: 0.4 }}
            className="mt-10 text-center"
          >
            <p className="text-muted-foreground mb-4">
              Masih ada pertanyaan lain?
            </p>
            <Button variant="outline" className="w-full sm:w-auto border-border/30 bg-background/5 text-foreground hover:bg-background/10" asChild>
              <Link href="/consultation">
                Tanya Langsung via Konsultasi
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </RevealSection>
    </>
  );
}

function FAQItem({
  index,
  faq,
  isOpen,
  onToggle,
}: {
  index: number;
  faq: { q: string; a: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ delay: index * 0.06 }}
    >
      <Card className="group bg-background/70 border-border/20 text-foreground overflow-hidden transition-all duration-300 hover:border-amber-200/40">
        <Button
          onClick={onToggle}
          variant="ghost"
          className="w-full px-6 py-5 text-left font-medium text-lg text-foreground hover:bg-muted/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200/50"
          aria-expanded={isOpen}
        >
          <div className="flex items-center justify-between gap-4">
            <span className="text-left pr-10">{faq.q}</span>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-amber-200/70 flex-shrink-0"
            >
              <ChevronDown className="h-6 w-6" />
            </motion.div>
          </div>
        </Button>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <CardContent className="pb-6 px-6 text-foreground/70 leading-8">
            {faq.a}
          </CardContent>
        </motion.div>
      </Card>
    </motion.div>
  );
}

function RevealSection({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-14 max-w-3xl"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-amber-200/70">
            {eyebrow}
          </p>
          <h2 className="text-4xl font-black tracking-[-0.06em] text-foreground sm:text-6xl">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}