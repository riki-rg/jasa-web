"use client";

import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, MessageSquare, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "Riki bukan cuma coding, dia beneran mikir bisnis kita. Dari scoping sampe launch, dia yang ngarahin supaya gak over-engineer. Hasilnya: launch tepat waktu, budget sesuai, dan performa website keren banget.",
    author: "Budi Santoso",
    role: "Founder, FashionID",
    company: "FashionID",
    avatar: "BS",
    project: "E-Commerce Fashion",
    metrics: { conversion: "+42%", revenue: "Rp 2.1M/bulan" },
    stars: 5,
  },
  {
    quote: "Paling worth it di project ini: komunikasi. Tiap minggu ada demo, progress jelas, blocker dibahas sebelum jadi masalah. Gak ada surprise di akhir. Dokumentasi lengkap, training admin 2 jam, support 1 bulan gratis — nilainya lebih dari fee yang dibayar.",
    author: "Siti Rahayu",
    role: "COO, HRTech Indonesia",
    company: "HRTech",
    avatar: "SR",
    project: "SaaS HR Management",
    metrics: { users: "2.3K+", uptime: "99.97%" },
    stars: 5,
  },
  {
    quote: "AI estimator-nya beneran membantu. Client tinggal isi fitur, dapet estimasi biaya & timeline real-time. Kita cuma review & adjust. Speed up sales cycle drastis. Plus Riki bantu setup rate limiting & cost tracking biar gak kebobrokan budget AI.",
    author: "Ahmad Wijaya",
    role: "CTO, Digital Agency Jakarta",
    company: "Digital Agency",
    avatar: "AW",
    project: "AI Content Generator",
    metrics: { costSave: "78%", speed: "3x faster" },
    stars: 5,
  },
  {
    quote: "Dashboard analytics internal yang Riki bikin jadi game-changer buat tim marketing kita. Dulu manual export CSV tiap hari, sekarang auto-refresh real-time dari GA4 + Meta Ads + CRM. Tim jadi fokus analisis, bukan copy-paste data.",
    author: "Dewi Lestari",
    role: "Marketing Lead, Startup Fintech",
    company: "Fintech Startup",
    avatar: "DL",
    project: "Dashboard Analytics",
    metrics: { timeSave: "15 jam/minggu", adoption: "94%" },
    stars: 5,
  },
  {
    quote: "Yang bedain Riki: dia nolak fitur yang gak perlu. Banyak dev cuma execute, tapi Riki challenge scope biar gak bikin technical debt. Hasilnya codebase clean, test coverage 80%+, deploy ke Vercel lancar. Support 1 bulan gratis — responsif banget pas ada bug minor.",
    author: "Andi Pratama",
    role: "Founder, SaaS Edukasi",
    company: "EduTech",
    avatar: "AP",
    project: "SaaS Edukasi Platform",
    metrics: { testCoverage: "80%+", bugs: "< 5 post-launch" },
    stars: 5,
  },
  {
    quote: "Project migration dari WordPress ke Next.js. SEO gak drop, malah naik. Core Web Vitals hijau semua. Riki handle redirect mapping, schema markup, image optimization. Communication jelas, timeline realistis. Highly recommended untuk yang butuh modern stack tanpa drama.",
    author: "Lisa Permata",
    role: "Owner, Creative Studio",
    company: "Creative Studio",
    avatar: "LP",
    project: "Migration WP → Next.js",
    metrics: { seo: "Traffic +23%", cwv: "All Green" },
    stars: 5,
  },
];

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const next = useCallback(() => setIndex((i: number) => (i + 1) % testimonials.length), []);
  const prev = useCallback(() => setIndex((i: number) => (i - 1 + testimonials.length) % testimonials.length), []);

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = e.changedTouches[0].clientX - touchStart;
    if (Math.abs(diff) > 50) diff > 0 ? prev() : next();
    setTouchStart(null);
  };

  const current = testimonials[index];

  return (
    <RevealSection id="testimonials" eyebrow="Proof" title="Kata klien yang sudah kerja sama.">
      <div
        className="relative max-w-5xl mx-auto"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          <Card className="bg-background/70 border-border/20 text-foreground shadow-xl shadow-black/20 backdrop-blur-xl p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-6 right-6 flex gap-1">
              {Array.from({ length: current.stars }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>

            <div className="mb-8 relative">
              <MessageSquare className="absolute -top-4 -left-4 h-12 w-12 text-accent/20" />
              <p className="text-lg sm:text-xl leading-8 text-foreground/85 relative z-10">
                "{current.quote}"
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-accent-muted flex items-center justify-center text-accent font-semibold text-lg">
                {current.avatar}
              </div>
              <div>
                <p className="font-semibold text-foreground">{current.author}</p>
                <p className="text-sm text-muted-foreground">{current.role} • {current.company}</p>
                <p className="text-xs text-accent-muted mt-1">Project: {current.project}</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border/20 flex flex-wrap items-center justify-between gap-4">
              <div className="flex gap-6 text-sm">
                {Object.entries(current.metrics).map(([key, value]) => (
                  <div key={key} className="flex items-center gap-1.5">
                    <CheckCircle className="h-4 w-4 text-emerald-300" />
                    <span className="font-semibold text-accent-foreground">{value}</span>
                    <span className="text-muted-foreground">{key}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={prev}
                  className="p-2 rounded-full hover:bg-background/10 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <div className="flex gap-1.5 mt-1">
                  {testimonials.map((_, i) => (
                    <motion.div
                      key={i}
                      className={`h-2 w-2 rounded-full transition-colors ${i === index ? "bg-accent w-6" : "bg-background/20"}`}
                      animate={{ width: i === index ? 24 : 8 }}
                      transition={{ duration: 0.3 }}
                    />
                  ))}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={next}
                  className="p-2 rounded-full hover:bg-background/10 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ delay: 0.4 }}
        className="mt-10 text-center"
      >
        <Button variant="outline" className="w-full sm:w-auto border-border/30 bg-background/5 text-foreground hover:bg-background/10" asChild>
          <a href="/testimonials">
            Baca Semua Testimoni
            <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </motion.div>
    </RevealSection>
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
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-accent-muted">
            {eyebrow}
          </p>
          <h2 className="text-4xl font-black tracking-[-0.06em] text-foreground sm:text-6xl">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}