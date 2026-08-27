import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code,
  Zap,
  Brain,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Star,
  Shield,
  Globe,
  Layers,
  Rocket,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Website Custom",
    description: "Pembuatan website dari nol sesuai kebutuhan bisnis Anda. Clean code, scalable, dan maintainable.",
    features: ["Next.js/React", "TypeScript", "Tailwind CSS", "Database Integration"],
    price: "Mulai 5 Juta",
  },
  {
    icon: Zap,
    title: "E-Commerce",
    description: "Toko online lengkap dengan keranjang belanja, payment gateway, dashboard admin, dan inventory management.",
    features: ["Cart & Checkout", "Midtrans/Stripe", "Admin Dashboard", "Order Management"],
    price: "Mulai 15 Juta",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Integrasikan AI ke website Anda: chatbot, content generator, recommendation engine, atau custom AI features.",
    features: ["Gemini/OpenAI API", "Streaming Response", "Rate Limiting", "Cost Optimization"],
    price: "Mulai 8 Juta",
  },
  {
    icon: Layers,
    title: "SaaS & Dashboard",
    description: "Aplikasi SaaS full-stack dengan auth, billing, multi-tenancy, dan admin panel.",
    features: ["Multi-tenant Auth", "Subscription Billing", "Role-based Access", "Analytics"],
    price: "Mulai 30 Juta",
  },
];

const techStack = [
  "Next.js 15",
  "React 19",
  "TypeScript",
  "Tailwind CSS",
  "Prisma ORM",
  "SQLite/PostgreSQL",
  "Better Auth",
  "Gemini AI",
  "Vercel",
  "GitHub Actions",
];

const processSteps = [
  {
    number: "01",
    title: "Konsultasi Gratis",
    description: "Diskusikan ide, kebutuhan, dan budget. Kami berikan saran teknis dan estimasi awal.",
  },
  {
    number: "02",
    title: "Proposal & Kontrak",
    description: "Detail scope of work, timeline, milestone, dan biaya. Transparan tanpa biaya tersembunyi.",
  },
  {
    number: "03",
    title: "Development",
    description: "Koding dengan best practices. Update progress mingguan. Code review & testing otomatis.",
  },
  {
    number: "04",
    title: "Deploy & Handover",
    description: "Deploy ke production, training admin, dokumentasi lengkap, dan support 1 bulan gratis.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Code className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Jasa Web Coding</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Layanan</Link>
              <Link href="#process" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Proses</Link>
              <Link href="#tech" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Teknologi</Link>
              <Link href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Kontak</Link>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/auth/login" className="hidden sm:block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Login</Link>
              <Link href="/consultation">
                <Button size="sm">Konsultasi Gratis</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <Sparkles className="h-4 w-4" />
              <span>Integrasi AI (Gemini) • Deploy Otomatis • Code Review AI</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Website Profesional
              <br />
              <span className="text-primary">Dibangun dengan AI</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Jasa pembuatan website custom, e-commerce, SaaS, dan integrasi AI.
              Konsultasi langsung dengan developer senior. Proses transparan, kode bersih, deploy ke Vercel.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link href="/consultation">
                <Button size="lg" className="gap-2 w-full sm:w-auto">
                  <MessageSquare className="h-5 w-5" />
                  Konsultasi Gratis
                </Button>
              </Link>
              <Link href="#services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Lihat Layanan
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Clean Code & TypeScript Strict</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>CI/CD + Auto Deploy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>1 Bulan Support Gratis</span>
              </div>
            </div>
          </div>

          {/* Floating Cards */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Zap className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-lg">Development Cepat</h3>
                </div>
                <p className="text-sm text-muted-foreground">Next.js 15 + Turbopack untuk development & build super cepat</p>
              </CardContent>
            </Card>
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Shield className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-lg">Type-Safe & Secure</h3>
                </div>
                <p className="text-sm text-muted-foreground">TypeScript strict mode, Prisma type-safe, Better Auth security</p>
              </CardContent>
            </Card>
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Brain className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-lg">AI-Powered Features</h3>
                </div>
                <p className="text-sm text-muted-foreground">Estimasi otomatis, chatbot, content generation dengan Gemini AI</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Layanan Kami</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Solusi web development end-to-end untuk kebutuhan bisnis modern
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-primary/10 text-primary inline-block mb-4">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="font-semibold text-lg">{service.price}</span>
                    <Link href="/consultation" className="text-sm font-medium text-primary hover:underline">
                      Detail
                      <ArrowRight className="h-4 w-4 ml-1 inline" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Proses Kami</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transparan, terstruktur, dan komunikatif di setiap tahap
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent hidden lg:block" />
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div key={step.number} className="relative flex gap-8 lg:pl-20">
                  <div className="absolute left-4 top-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg z-10 border-4 bg-background">
                    {step.number}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="py-20 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Teknologi yang Kami Gunakan</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modern stack untuk performa, DX, dan maintainability terbaik
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {techStack.map((tech) => (
              <div
                key={tech}
                className="p-4 rounded-lg bg-background border border-border hover:border-primary/50 hover:shadow-md transition-all text-center"
              >
                <span className="font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Fitur AI Terintegrasi
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Setiap project yang kami bangun sudah siap integrasi AI. Dari estimasi biaya otomatis hingga chatbot customer service.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Sparkles, title: "Estimasi Otomatis", desc: "AI menganalisis kebutuhan & memberikan estimasi biaya & timeline real-time" },
                  { icon: MessageSquare, title: "AI Chatbot", desc: "Customer support 24/7 dengan knowledge base custom bisnis Anda" },
                  { icon: Rocket, title: "Content Generator", desc: "Generate konten blog, product description, SEO meta otomatis" },
                  { icon: Globe, title: "Code Assistant", desc: "AI code review, bug detection, dan optimasi performa otomatis" },
                ].map((feature) => (
                  <div key={feature.title} className="flex gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>Demo AI Estimator</CardTitle>
                  <CardDescription>Coba estimasi project Anda dengan AI</CardDescription>
                </CardHeader>
                <CardContent>
                  <AIEstimatorDemo />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 lg:py-32 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Siap Memulai Project Anda?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Konsultasi gratis 30 menit. Tanpa komitmen. Dapatkan estimasi & saran teknis dari developer senior.
          </p>
          <Link href="/consultation">
            <Button size="xl" variant="secondary" className="w-full sm:w-auto gap-2">
              <MessageSquare className="h-6 w-6" />
              Konsultasi Sekarang
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Code className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">Jasa Web Coding</span>
              </div>
              <p className="text-muted-foreground max-w-sm">
                Jasa pembuatan website profesional dengan teknologi modern.
                Konsultasi langsung dengan developer. Integrasi AI untuk efisiensi maksimal.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#services" className="hover:text-foreground transition-colors">Website Custom</Link></li>
                <li><Link href="#services" className="hover:text-foreground transition-colors">E-Commerce</Link></li>
                <li><Link href="#services" className="hover:text-foreground transition-colors">AI Integration</Link></li>
                <li><Link href="#services" className="hover:text-foreground transition-colors">SaaS & Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Email: hello@jasawebcoding.com</li>
                <li>WhatsApp: +62 8xx-xxxx-xxxx</li>
                <li>GitHub: github.com/riki-rg</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Jasa Web Coding. Dibangun dengan Next.js & ❤️
            </p>
            <div className="flex items-center gap-6">
              <a href="https://github.com/riki-rg" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Globe className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Star className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function AIEstimatorDemo() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Jenis Project</label>
        <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <option value="landing">Landing Page</option>
          <option value="ecommerce">E-Commerce</option>
          <option value="saas">SaaS Application</option>
          <option value="dashboard">Dashboard Admin</option>
        </select>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Fitur Utama (pisahkan dengan koma)</label>
        <input
          type="text"
          placeholder="Contoh: user auth, payment, dashboard, notifikasi"
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Tech Stack Preferensi</label>
        <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <option value="nextjs">Next.js + TypeScript + Tailwind</option>
          <option value="nuxt">Nuxt + Vue + Tailwind</option>
          <option value="laravel">Laravel + Vue/React</option>
        </select>
      </div>
      <Button className="w-full" variant="outline">
        Estimasi dengan AI
        <Sparkles className="h-4 w-4 ml-2" />
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        Demo hanya simulasi. Konsultasi asli akan lebih detail & akurat.
      </p>
    </div>
  );
}