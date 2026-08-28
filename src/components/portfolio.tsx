"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, ShoppingCart, BarChart, Layers, CheckCircle, Code } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    title: "E-Commerce Fashion B2C",
    category: "E-Commerce",
    description: "Platform fashion Indonesia dengan 500+ SKU, integrasi Midtrans, J&T, dashboard admin real-time.",
    metrics: [
      { label: "Konversi", value: "+42%", desc: "vs old platform" },
      { label: "Load Time", value: "1.2s", desc: "LCP" },
      { label: "Revenue", value: "Rp 2.1M/bulan", desc: "GMV" },
    ],
    stack: ["Next.js 15", "Prisma", "PostgreSQL", "Midtrans", "Tailwind"],
    featured: true,
  },
  {
    title: "SaaS HR Management",
    category: "SaaS",
    description: "Aplikasi multi-tenant untuk manajemen karyawan, payroll, cuti, performa. 15 perusahaan aktif.",
    metrics: [
      { label: "Tenants", value: "15", desc: "Perusahaan" },
      { label: "Users", value: "2.3K+", desc: "Aktif bulanan" },
      { label: "Uptime", value: "99.97%", desc: "SLA" },
    ],
    stack: ["Next.js", "Better Auth", "Stripe", "Prisma", "Vercel"],
    featured: false,
  },
  {
    title: "Dashboard Analytics Internal",
    category: "Dashboard",
    description: "Dashboard real-time untuk tim marketing & sales. Integrasi GA4, Meta Ads, CRM. Auto-report harian.",
    metrics: [
      { label: "Time Saved", value: "15 jam/minggu", desc: "Manual reporting" },
      { label: "Data Sources", value: "8", desc: "Integrations" },
      { label: "Adoption", value: "94%", desc: "Tim internal" },
    ],
    stack: ["Next.js", "Recharts", "GA4 API", "Meta API", "Tailwind"],
    featured: false,
  },
  {
    title: "AI Content Generator",
    category: "AI Integration",
    description: "Tools generate blog, product desc, SEO meta untuk tim content. Rate limiting, cost tracking, approval workflow.",
    metrics: [
      { label: "Content/Month", value: "200+", desc: "Auto-generated" },
      { label: "Cost Reduction", value: "78%", desc: "vs manual" },
      { label: "Quality Score", value: "4.6/5", desc: "Internal review" },
    ],
    stack: ["Next.js", "Gemini API", "Vercel AI SDK", "Prisma", "Upstash"],
    featured: false,
  },
];

const categoryIcons = {
  "E-Commerce": ShoppingCart,
  "SaaS": Layers,
  "Dashboard": BarChart,
  "AI Integration": Globe,
};

export function PortfolioSection() {
  return (
    <RevealSection id="portfolio" eyebrow="Work" title="Proyek yang sudah kami bangun.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {caseStudies.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ delay: index * 0.08 }}
          >
            <Card className={`group h-full border-border/20 bg-background/70 text-foreground shadow-xl shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-amber-200/40 hover:bg-background ${project.featured ? "border-amber-200/30 ring-1 ring-amber-200/20" : ""}`}>
              {project.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 text-xs font-semibold bg-amber-200 text-[#15110a] rounded-full">
                  Featured
                </div>
              )}
              <CardHeader>
                <div className="mb-4 flex items-center gap-2">
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-amber-200/70">
                    {project.category}
                  </span>
                  <CategoryIcon category={project.category} />
                </div>
                <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="mb-6 space-y-2">
                  {project.metrics.map((metric) => (
                    <li key={metric.label} className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{metric.label}</span>
                      <span className="font-semibold text-amber-100">{metric.value}</span>
                    </li>
                  ))}
                </ul>
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 rounded border border-border/20 bg-background/60 text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between border-t border-border/20 pt-4">
                  <Link href="/consultation" className="text-sm font-medium text-amber-200 hover:text-foreground">
                    Detail <ArrowRight className="ml-1 inline h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ delay: 0.4 }}
        className="mt-10 text-center"
      >
        <Button variant="outline" className="w-full sm:w-auto border-border/30 bg-background/5 text-foreground hover:bg-background/10" asChild>
          <Link href="/portfolio">
            Lihat Semua Proyek
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </motion.div>
    </RevealSection>
  );
}

function CategoryIcon({ category }: { category: string }) {
  const Icon = categoryIcons[category as keyof typeof categoryIcons] || Code;
  return <Icon className="h-4 w-4 text-amber-200/70" />;
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