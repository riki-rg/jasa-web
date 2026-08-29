import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#080914" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://jasawebcoding.com"),
  title: {
    default: "Jasa Web Coding - Jasa Pembuatan Website & Konsultasi",
    template: "%s | Jasa Web Coding",
  },
  description: "Jasa pembuatan website profesional dengan teknologi modern (Next.js, React, TypeScript). Konsultasi langsung dengan developer senior. Integrasi AI (Gemini) untuk estimasi proyek otomatis. Portfolio: E-commerce, SaaS, Dashboard, AI Integration.",
  keywords: [
    "jasa website",
    "jasa pembuatan website",
    "web development",
    "freelance web developer",
    "konsultasi web",
    "website custom",
    "e-commerce development",
    "saas development",
    "ai integration",
    "next.js developer",
    "react developer",
    "typescript developer",
  ],
  authors: [{ name: "Riki", url: "https://github.com/riki-rg" }],
  creator: "Riki",
  publisher: "Jasa Web Coding",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://jasawebcoding.com",
    siteName: "Jasa Web Coding",
    title: "Jasa Web Coding - Website Profesional Dibangun dengan AI",
    description: "Jasa pembuatan website custom, e-commerce, SaaS, dashboard, dan AI integration. Konsultasi langsung dengan developer senior. Teknologi modern: Next.js 15, React 19, TypeScript, Tailwind CSS, Prisma, Better Auth, Gemini AI.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jasa Web Coding - Website Profesional Dibangun dengan AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Web Coding - Website Profesional Dibangun dengan AI",
    description: "Jasa pembuatan website custom, e-commerce, SaaS, dashboard, dan AI integration. Konsultasi langsung dengan developer senior.",
    images: ["/og-image.png"],
    creator: "@riki_rg",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "google-site-verification-code",
  },
  category: "technology",
  classification: "Business Website",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const fontClass = `${geistSans.variable} ${geistMono.variable} h-full antialiased`;
  return (
    <html lang="id" className={fontClass} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Jasa Web Coding",
              url: "https://jasawebcoding.com",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://jasawebcoding.com/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
              publisher: {
                "@type": "Organization",
                name: "Jasa Web Coding",
                logo: {
                  "@type": "ImageObject",
                  url: "https://jasawebcoding.com/logo.png",
                },
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Jasa Web Coding",
              url: "https://jasawebcoding.com",
              logo: "https://jasawebcoding.com/logo.png",
              sameAs: [
                "https://github.com/riki-rg",
                "https://twitter.com/riki_rg",
                "https://linkedin.com/in/riki-rg",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+62-8xx-xxxx-xxxx",
                contactType: "customer service",
                availableLanguage: ["Indonesian", "English"],
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Jasa Pembuatan Website",
              provider: {
                "@type": "Organization",
                name: "Jasa Web Coding",
              },
              areaServed: "ID",
              serviceType: "Web Development",
              offers: [
                {
                  "@type": "Offer",
                  name: "Website Custom",
                  price: "5000000",
                  priceCurrency: "IDR",
                  availability: "https://schema.org/InStock",
                },
                {
                  "@type": "Offer",
                  name: "E-Commerce",
                  price: "15000000",
                  priceCurrency: "IDR",
                  availability: "https://schema.org/InStock",
                },
                {
                  "@type": "Offer",
                  name: "AI Integration",
                  price: "8000000",
                  priceCurrency: "IDR",
                  availability: "https://schema.org/InStock",
                },
                {
                  "@type": "Offer",
                  name: "SaaS & Dashboard",
                  price: "30000000",
                  priceCurrency: "IDR",
                  availability: "https://schema.org/InStock",
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Berapa lama waktu development project website?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Tergantung scope. Landing page: 2-3 minggu. E-commerce: 6-10 minggu. SaaS/Dashboard: 3-6 bulan. Kami kasih timeline detail di proposal setelah konsultasi. Yang pasti: kami gak janji tanggal tidak realistis.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Berapa biayanya? Apakah bisa cicil?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Landing page mulai Rp 5 Juta, E-commerce mulai Rp 15 Juta, SaaS mulai Rp 30 Juta. Harga final tergantung fitur & kompleksitas. Cicil tersedia: 50% awal, 30% milestone tengah, 20% launch. No hidden cost — semua tertulis di kontrak.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Apakah saya bisa request revision selama development?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Bisa. Setiap milestone (design, frontend, backend, integration) ada review & revisi masuk akal (scope yang sudah disepakati). Revision di luar scope di-quote terpisah. Kami pakai Figma untuk design review biar cepat & visual.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Stack teknologi apa yang dipakai? Bisa request stack tertentu?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Default: Next.js 15, React 19, TypeScript strict, Tailwind CSS, Prisma ORM, PostgreSQL, Better Auth, Vercel deploy. Bisa request stack lain (Nuxt, Laravel, Go) tapi timeline & biaya bisa beda. Kami rekomendasikan stack modern untuk performa & maintainability.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Bagaimana dengan SEO & Core Web Vitals?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Semua project default: Server-side rendering (Next.js), semantic HTML, meta tags, Open Graph, JSON-LD schema, sitemap.xml, robots.txt. Target Core Web Vitals: LCP < 2.5s, INP < 200ms, CLS < 0.1. Kami test pakai Lighthouse & Vercel Analytics sebelum launch.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Apa yang dibutuhkan dari saya sebelum project mulai?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Minimal: logo (SVG/PNG), brand guideline (warna, font), copy/text konten, referensi design/kompetitor, akses domain/hosting (kalau sudah punya). Kalau belum punya copy/desain, kami bantu arahin atau connect ke copywriter/designer partner.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Bagaimana proses maintenance & support setelah launch?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Gratis 1 bulan: bug fix, minor tweak, pertanyaan teknis. Setelah itu: optional retainer bulanan (mulai Rp 1.5 Juta/bulan) untuk update dependency, security patch, monitoring, backup, prioritas support. Atau pay-per-ticket. Dokumentasi lengkap (README, API docs, deployment guide) selalu diserahkan.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Apakah kami akan dapat akses source code & deploy?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ya, 100% milik Anda. Repo GitHub private dibuat atas nama Anda/organisasi Anda. Kami setup CI/CD ke Vercel/Netlify/Railway atas akun Anda. Kami hanya maintain akses kolaborator selama project. Setelah handover, akses penuh di tangan Anda.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Bisa bantu setup AI integration (chatbot, estimator, content generator)?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Bisa. Kami pakai Gemini API (Google) atau OpenAI via Vercel AI SDK. Key disimpan di server (env), bukan expose di browser. Fitur: rate limiting, cost tracking, streaming response, fallback error handling. Estimator biaya AI terpisah dari fee development.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Bagaimana kalau project butuh scale ke enterprise (multi-tenant, SSO, compliance)?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Stack kami ready: Better Auth support multi-tenant & SSO (SAML/OIDC), Prisma multi-schema, Vercel Enterprise support. Untuk compliance (ISO 27001, SOC2, GDPR) butuh setup terpisah & audit — bisa dibahas di konsultasi. Biaya & timeline beda signifikan dengan project standar.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Bagaimana cara memulai konsultasi?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Klik tombol \"Konsultasi Gratis\" atau isi form di halaman /consultation. Kami balas via WhatsApp/Email dalam 1x24 jam. Call 30 menit: bahas ide, scope, budget, timeline. Kalau cocok, kami kirim proposal formal dalam 1-2 hari kerja. No pressure, no spam.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}