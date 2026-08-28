"use client";

import { motion } from "framer-motion";
import { Shield, Award, CheckCircle, Globe, Zap, Star } from "lucide-react";

const stats = [
  { value: "50+", label: "Project Selesai", icon: CheckCircle },
  { value: "5★", label: "Rating Klien", icon: Star },
  { value: "< 2.5s", label: "Avg LCP", icon: Zap },
  { value: "99.9%", label: "Uptime Target", icon: Globe },
];

const badges = [
  { label: "TypeScript Strict", desc: "Type-safe codebase" },
  { label: "Test Coverage > 80%", desc: "Vitest + Playwright" },
  { label: "CI/CD Pipeline", desc: "GitHub Actions" },
  { label: "Vercel Deploy Ready", desc: "Zero-config deploy" },
  { label: "PostgreSQL Ready", desc: "Production database" },
  { label: "Security Headers", desc: "CSP, HSTS, X-Frame" },
];

export function TrustStrip() {
  return (
    <RevealSection id="trust" eyebrow="Trust" title="Standar yang kami pegang.">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ delay: index * 0.08 }}
              className="text-center p-6 rounded-2xl border border-border/20 bg-background/60 transition-all hover:border-amber-200/40 hover:bg-background/80"
            >
              <div className="mb-3 flex items-center justify-center gap-2 text-amber-200">
                <stat.icon className="h-6 w-6" />
              </div>
              <p className="text-3xl sm:text-4xl font-black tracking-[-0.04em] text-foreground">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {badges.map((badge, index) => (
            <motion.span
              key={badge.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="px-4 py-2 rounded-full border border-border/20 bg-background/60 text-sm font-medium text-foreground/70 backdrop-blur-xl hover:border-amber-200/40 hover:bg-background transition-colors"
            >
              {badge.label}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-8 rounded-2xl border border-border/20 bg-gradient-to-r from-white/[0.1] to-transparent text-center"
        >
          <p className="text-muted-foreground mb-2 text-sm uppercase tracking-[0.2em]">
            Security & Compliance
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <span className="flex items-center gap-1.5 text-foreground/70">
              <Shield className="h-4 w-4 text-emerald-300" />
              CSP & Security Headers
            </span>
            <span className="flex items-center gap-1.5 text-foreground/70">
              <Award className="h-4 w-4 text-amber-300" />
              TypeScript Strict Mode
            </span>
            <span className="flex items-center gap-1.5 text-foreground/70">
              <Zap className="h-4 w-4 text-blue-300" />
              Rate Limiting & Auth
            </span>
            <span className="flex items-center gap-1.5 text-foreground/70">
              <Globe className="h-4 w-4 text-purple-300" />
              GDPR-Ready Data Handling
            </span>
          </div>
        </motion.div>
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