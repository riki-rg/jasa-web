"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiPostgresql,
  SiVercel,
  SiNodedotjs,
  SiMongodb,
  SiRedis,
  SiKubernetes,
  SiGraphql,
  SiNestjs,
  SiPython,
  SiRust,
  SiGooglecloud,
  SiSupabase,
  SiStripe,
  SiJest,
  SiTestinglibrary,
  SiPrettier,
  SiGithub,
  SiGitlab,
} from "react-icons/si";

const techStack = [
  { name: "Next.js 15", icon: SiNextdotjs, color: "#000000" },
  { name: "React 19", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Prisma ORM", icon: SiPrisma, color: "#2D3748" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Vercel", icon: SiVercel, color: "#000000" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Rust", icon: SiRust, color: "#000000" },
  { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "Stripe", icon: SiStripe, color: "#635BFF" },
  { name: "Jest", icon: SiJest, color: "#C21325" },
  { name: "Testing Library", icon: SiTestinglibrary, color: "#E33332" },
  { name: "Prettier", icon: SiPrettier, color: "#F7B93E" },
  { name: "GitHub", icon: SiGithub, color: "#181717" },
  { name: "GitLab", icon: SiGitlab, color: "#FC6D26" },
];

export function TechStackMarquee() {
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const top = topRef.current;
    const bottom = bottomRef.current;
    if (!top || !bottom) return;

    const ctx = gsap.context(() => {
      const duration = 30;

      gsap.to(top, {
        x: -top.scrollWidth / 2,
        duration,
        ease: "none",
        repeat: -1,
      });

      gsap.to(bottom, {
        x: bottom.scrollWidth / 2,
        duration,
        ease: "none",
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  const renderItems = (reverse = false) => {
    const items = reverse ? [...techStack].reverse() : techStack;
    return items.map((tech, index) => (
      <div
        key={`${tech.name}-${index}`}
        className="flex items-center gap-3 px-6 py-4 min-w-[200px] bg-background/50 border border-border/50 rounded-xl transition-all hover:bg-background/80 hover:border-primary/30"
        style={{ width: "200px", flexShrink: 0 }}
      >
        <span
          className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary"
          style={{ color: tech.color }}
        >
          <tech.icon size={24} />
        </span>
        <span className="font-medium text-foreground whitespace-nowrap text-sm">
          {tech.name}
        </span>
      </div>
    ));
  };

  return (
    <section id="tech-stack" className="relative py-20 overflow-hidden bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-accent-muted">
            Tech Stack
          </p>
          <h2 className="text-4xl font-black tracking-[-0.06em] text-foreground sm:text-6xl">
            Modern stack, tanpa over-engineering.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Tools yang kami pilih karena reliable, scalable, dan developer experience-nya unggul.
            Bukan sekadar hype.
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background pointer-events-none" />
          
          <div className="flex items-center gap-4 overflow-hidden">
            <div ref={topRef} className="flex animate-marquee-left" aria-hidden="true">
              {renderItems(false)}
              {renderItems(false)}
            </div>
          </div>

          <div className="flex items-center gap-4 overflow-hidden mt-8">
            <div ref={bottomRef} className="flex animate-marquee-right" aria-hidden="true">
              {renderItems(true)}
              {renderItems(true)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}