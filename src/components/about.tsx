"use client";

import { motion } from "framer-motion";
import { Code, Zap, Brain, Shield, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const values = [
  {
    icon: Code,
    title: "Code Quality > Speed",
    desc: "Clean architecture, TypeScript strict, test coverage >80%. Technical debt dibayar di awal, bukan nanti.",
  },
  {
    icon: Zap,
    title: "No Over-Engineering",
    desc: "Stack modern tapi pragmatis. Gak pakai Kubernetes buat landing page. Tool yang tepat untuk job yang tepat.",
  },
  {
    icon: Brain,
    title: "AI as Tool, Not Gimmick",
    desc: "AI dipakai buat ngejar efisiensi (estimator, chatbot, content), bukan buat marketing buzzword.",
  },
  {
    icon: Shield,
    title: "Security by Default",
    desc: "CSP headers, rate limiting, secure auth, encrypted secrets. Security bukan afterthought.",
  },
  {
    icon: MessageSquare,
    title: "Komunikasi Transparan",
    desc: "Weekly demo, progress jelas, blocker dibahas sebelum jadi masalah. No surprise di launch day.",
  },
];

export function AboutSection() {
  return (
    <RevealSection id="about" eyebrow="About" title="Siapa di balik Jasa Web Coding.">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-amber-200/70">
              Independent Web Studio
            </p>
            <h2 className="text-4xl font-black tracking-[-0.06em] text-foreground sm:text-6xl mb-6">
              Satu developer.<br />
              <span className="bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent">
                Fokus pada hasil, bukan jam kerja.
              </span>
            </h2>
            <p className="text-lg leading-8 text-muted-foreground mb-8 max-w-xl">
              Saya Riki — full-stack developer yang udah 5+ tahun bangun produk digital dari nol sampai scale.
              Dari landing page UMKM sampai SaaS multi-tenant untuk enterprise.
            </p>
            <p className="text-lg leading-8 text-muted-foreground mb-8 max-w-xl">
              Bedanya dengan agency besar: gak ada account manager, gak ada sales deck kosong, gak ada middleman.
              Langsung kerja sama developer yang nulis kodenya. Budget efisien, decision cepat, kualitas tetap premium.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/consultation">
                <Button size="lg" className="w-full gap-2 bg-amber-200 text-[#15110a] hover:bg-amber-100 sm:w-auto">
                  <MessageSquare className="h-5 w-5" />
                  Mulai Konsultasi
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="w-full border-border/30 bg-background/5 text-foreground hover:bg-background/10 sm:w-auto">
                  Lihat Portfolio
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-8 rounded-[3rem] bg-amber-200/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-border/20 bg-background/80 p-4 shadow-2xl shadow-amber-950/40 backdrop-blur-2xl">
                <div className="rounded-[1.5rem] border border-border/20 bg-[#0d1022]/95 p-6">
                  <div className="mb-6 flex items-center justify-between border-b border-border/20 pb-4">
                    <div className="flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-400" />
                      <span className="h-3 w-3 rounded-full bg-amber-300" />
                      <span className="h-3 w-3 rounded-full bg-emerald-400" />
                    </div>
                    <span className="rounded-full bg-amber-200/10 px-3 py-1 text-xs text-amber-200">
                      about.json
                    </span>
                  </div>
                  <div className="space-y-4">
                    {values.map((value, index) => (
                      <motion.div
                        key={value.title}
                        className="rounded-2xl border border-border/20 bg-background/50 p-4"
                        animate={{ x: [0, -8, 0] }}
                        transition={{ duration: 3 + index, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <div className="mb-3 flex items-center gap-3">
                          <div className="p-2 rounded-xl bg-amber-200/20 text-amber-200">
                            <value.icon className="h-5 w-5" />
                          </div>
                          <h4 className="font-semibold text-foreground">{value.title}</h4>
                        </div>
                        <p className="text-sm text-foreground/60 pl-9">{value.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
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