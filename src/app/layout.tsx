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
      </head>
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}