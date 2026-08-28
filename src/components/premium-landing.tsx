"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Brain,
  CheckCircle,
  Code,
  Globe,
  Layers,
  MessageSquare,
  Rocket,
  Shield,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PortfolioSection } from "@/components/portfolio";
import { TestimonialsSection } from "@/components/testimonials";
import { FAQSection } from "@/components/faq";
import { TrustStrip } from "@/components/trust-strip";
import { AboutSection } from "@/components/about";
import { TechStackMarquee } from "@/components/tech-stack-marquee";
import { ThemeToggle } from "@/components/theme-toggle";

const services = [
  {
    icon: Code,
    title: "Website Custom",
    description:
      "Website bisnis yang terasa premium, cepat, dan gampang dikembangkan setelah launch.",
    features: ["Next.js/React", "TypeScript", "Tailwind CSS", "Database Integration"],
    price: "Mulai 5 Juta",
  },
  {
    icon: Zap,
    title: "E-Commerce",
    description:
      "Toko online dengan checkout rapi, dashboard admin, katalog, dan alur order yang jelas.",
    features: ["Cart & Checkout", "Midtrans/Stripe", "Admin Dashboard", "Order Management"],
    price: "Mulai 15 Juta",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description:
      "Chatbot, estimator, generator konten, atau fitur AI custom tanpa expose API key di browser.",
    features: ["Gemini/OpenAI API", "Streaming Response", "Rate Limiting", "Cost Optimization"],
    price: "Mulai 8 Juta",
  },
  {
    icon: Layers,
    title: "SaaS & Dashboard",
    description:
      "Aplikasi bisnis full-stack dengan auth, billing, role, analytics, dan admin workflow.",
    features: ["Multi-tenant Auth", "Subscription Billing", "Role-based Access", "Analytics"],
    price: "Mulai 30 Juta",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Konsultasi Gratis",
    description: "Ide, budget, scope, dan risiko teknis dibedah sebelum quote.",
    deliverables: ["Scope document", "Rough timeline", "Budget range", "Risk assessment"],
  },
  {
    number: "02",
    title: "Proposal & Kontrak",
    description: "Scope jelas, milestone jelas, biaya jelas. Tidak ada tebak-tebakan.",
    deliverables: ["Detailed proposal", "Fixed price contract", "Milestone schedule", "SLA definition"],
  },
  {
    number: "03",
    title: "Development",
    description: "Build bertahap dengan demo rutin, test otomatis, dan code review.",
    deliverables: ["Weekly demo", "Code reviews", "CI/CD pipeline", "Test reports", "Staging deploy"],
  },
  {
    number: "04",
    title: "Deploy & Handover",
    description: "Production deploy, dokumentasi, training admin, dan support 1 bulan.",
    deliverables: ["Production deploy", "Admin training (2 jam)", "Full documentation", "Source code handover", "1 bulan support gratis"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export function PremiumLanding() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -360]);
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 260]);
  const orbScale = useTransform(scrollYProgress, [0, 0.55, 1], [1, 1.22, 0.92]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(107,91,255,0.36),transparent_34%),radial-gradient(circle_at_82%_22%,rgba(255,177,92,0.22),transparent_32%),radial-gradient(circle_at_45%_78%,rgba(42,211,255,0.18),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_80px)] opacity-20" />
        <div className="noise-overlay absolute inset-0" />
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-1/2 top-24 z-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl"
        style={{ y: orbY, scale: orbScale }}
      />

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-2xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="group flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/15 bg-white/10 shadow-[0_0_40px_rgba(107,91,255,0.22)] transition-transform group-hover:rotate-6">
              <Code className="h-5 w-5 text-amber-200" />
            </span>
            <span className="text-sm font-semibold tracking-[0.28em] text-white/90 uppercase">
              Jasa Web Coding
            </span>
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            {[
              ["Layanan", "#services"],
              ["Proses", "#process"],
              ["Teknologi", "#tech"],
              ["Portfolio", "#portfolio"],
              ["Testimoni", "#testimonials"],
              ["FAQ", "#faq"],
              ["Tentang", "#about"],
              ["Kontak", "#contact"],
            ].map(([label, href]) => (
              <Link key={label} href={href} className="text-sm text-foreground/60 transition-colors hover:text-foreground">
                {label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link href="/consultation">
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Konsultasi Gratis
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        <section className="relative flex min-h-screen items-center px-4 pt-24 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.12 }}>
              <motion.p
                variants={fadeUp}
                className="mb-6 text-xs font-semibold uppercase tracking-[0.38em] text-amber-200/80"
              >
                Independent web studio for serious ideas
              </motion.p>
              <motion.h1
                variants={fadeUp}
                className="max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.08em] sm:text-7xl lg:text-8xl"
              >
                Website mahal,
                <span className="block bg-gradient-to-r from-primary via-primary/70 to-accent bg-clip-text text-transparent">
                  bukan template polos.
                </span>
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl"
              >
                Bangun landing page, dashboard, e-commerce, atau sistem AI yang terlihat premium,
                cepat, dan siap dikembangkan. Konsultasi langsung dengan developer, bukan sales deck kosong.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="/consultation">
                  <Button size="lg" className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto">
                    <MessageSquare className="h-5 w-5" />
                    Mulai Konsultasi
                  </Button>
                </Link>
                <Link href="#services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-border bg-background text-foreground hover:bg-muted sm:w-auto"
                  >
                    Lihat Paket
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40, rotateX: 8 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative mx-auto w-full max-w-xl lg:mx-0"
            >
              <div className="absolute -inset-8 rounded-[3rem] bg-indigo-500/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.08] p-4 shadow-2xl shadow-indigo-950/60 backdrop-blur-2xl">
                <div className="rounded-[1.5rem] border border-white/10 bg-[#0d1022]/95 p-5">
                  <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-400" />
                      <span className="h-3 w-3 rounded-full bg-amber-300" />
                      <span className="h-3 w-3 rounded-full bg-emerald-400" />
                    </div>
                    <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                      live preview
                    </span>
                  </div>
                  <div className="space-y-4">
                    {[
                      ["Design direction", "Luxury dark studio, scroll-driven, high contrast"],
                      ["Build stack", "Next.js + Prisma + Better Auth + Gemini API"],
                      ["Launch path", "CI, test suite, Vercel deploy, PostgreSQL migration"],
                    ].map(([title, desc], index) => (
                      <motion.div
                        key={title}
                        className="rounded-2xl border border-white/10 bg-white/[0.05] p-4"
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <p className="text-xs uppercase tracking-[0.24em] text-amber-200/70">{title}</p>
                        <p className="mt-2 text-sm text-white/76">{desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <TrustStrip />

        <RevealSection id="services" eyebrow="Services" title="Pilih hasil, bukan jargon.">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ delay: index * 0.08 }}
              >
                <Card className="group h-full border-border/10 bg-background/80 text-foreground shadow-xl shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-amber-200/40 hover:bg-background">
                  <CardHeader>
                    <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground transition-transform group-hover:rotate-6">
                      <service.icon className="h-6 w-6" />
                    </div>
<CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
<CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="mb-6 space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-emerald-300" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between border-t border-border pt-4">
<span className="font-semibold text-primary-foreground">{service.price}</span>
<Link href="/consultation" className="text-sm font-medium text-primary hover:text-primary/80">
                        Detail <ArrowRight className="ml-1 inline h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </RevealSection>

        <PortfolioSection />

        <TestimonialsSection />

        <TrustStrip />

        <RevealSection id="process" eyebrow="Process" title="Scroll pelan. Project juga begitu.">
          <div className="grid gap-6 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative min-h-[320px] overflow-hidden rounded-[2rem] border border-border/10 bg-background/80 p-6 backdrop-blur-xl"
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ delay: index * 0.12 }}
              >
<span className="text-7xl font-black tracking-[-0.08em] text-foreground/10">{step.number}</span>
<h3 className="mt-10 text-2xl font-bold text-foreground">{step.title}</h3>
<p className="mt-4 text-sm leading-6 text-muted-foreground">{step.description}</p>
<div className="mt-6 pt-6 border-t border-border">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/70">Deliverables</p>
                  <ul className="space-y-2">
                    {step.deliverables.map((deliverable) => (
                      <li key={deliverable} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-emerald-300" />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </RevealSection>

        <PortfolioSection />

        <TestimonialsSection />

        <TrustStrip />

        <TechStackMarquee />

        <AboutSection />

        <FAQSection />

        <section className="relative px-4 py-28 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-120px" }}
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-amber-200/70">
                AI workflow
              </p>
<h2 className="text-4xl font-black tracking-[-0.06em] text-foreground sm:text-6xl">
                AI dipakai buat bantu jualan, bukan buat gimmick.
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Estimator, chatbot, content assistant, dan admin automation bisa ditanam di server.
                Key aman, biaya terkendali, alur bisnis tetap kamu pegang.
              </p>
            </motion.div>
            <Card className="border-border/10 bg-background/80 text-foreground backdrop-blur-2xl">
              <CardHeader>
<CardTitle className="text-foreground">Demo AI Estimator</CardTitle>
<CardDescription className="text-muted-foreground">Coba estimasi project Anda dengan AI</CardDescription>
              </CardHeader>
              <CardContent>
                <AIEstimatorDemo />
              </CardContent>
            </Card>
          </div>
        </section>

        <FAQSection />

        <section id="contact" className="px-4 py-28 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-border/10 bg-gradient-to-br from-primary/10 to-accent/5 p-8 text-center shadow-2xl shadow-primary/20 backdrop-blur-2xl sm:p-16"
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
          >
<h2 className="text-4xl font-black tracking-[-0.06em] text-foreground sm:text-6xl">
              Ada ide? Bawa ke meja.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Konsultasi 30 menit. Kita potong scope yang tidak perlu, pilih stack masuk akal,
              lalu bikin rencana launch yang realistis.
            </p>
            <Link href="/consultation" className="mt-10 inline-block">
              <Button size="xl" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                <MessageSquare className="h-6 w-6" />
                Konsultasi Sekarang
              </Button>
            </Link>
          </motion.div>
        </section>

        <FAQSection />
      </main>

      <footer className="relative z-10 border-t border-border/10 bg-background/70 py-12 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-4 text-muted-foreground sm:px-6 md:flex-row lg:px-8">
          <div>
            <div className="mb-3 flex items-center gap-3 text-foreground">
              <Code className="h-5 w-5 text-amber-200" />
              <span className="font-semibold">Jasa Web Coding</span>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted-foreground">
              Web studio kecil untuk website custom, e-commerce, SaaS, dashboard, dan AI integration.
            </p>
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>Email: hello@jasawebcoding.com</p>
            <p>WhatsApp: +62 8xx-xxxx-xxxx</p>
            <p>GitHub: github.com/riki-rg</p>
          </div>
        </div>
      </footer>
    </div>
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
          <h2 className="text-4xl font-black tracking-[-0.06em] text-white sm:text-6xl">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function AIEstimatorDemo() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium text-white/80">Jenis Project</label>
        <select className="w-full rounded-xl border border-white/10 bg-black/30 px-3 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-amber-200/50">
          <option value="landing">Landing Page</option>
          <option value="ecommerce">E-Commerce</option>
          <option value="saas">SaaS Application</option>
          <option value="dashboard">Dashboard Admin</option>
        </select>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-white/80">Fitur Utama</label>
        <input
          type="text"
          placeholder="user auth, payment, dashboard, notifikasi"
          className="w-full rounded-xl border border-white/10 bg-black/30 px-3 py-3 text-sm text-white outline-none placeholder:text-white/32 focus:ring-2 focus:ring-amber-200/50"
        />
      </div>
      <Button className="w-full bg-white text-[#080914] hover:bg-amber-100" variant="outline">
        Estimasi dengan AI
        <Sparkles className="ml-2 h-4 w-4" />
      </Button>
      <p className="text-center text-xs text-white/42">
        Demo simulasi. Konsultasi asli tetap lebih akurat.
      </p>
    </div>
  );
}