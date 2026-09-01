"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, MessageSquare, Sparkles, Loader2, CheckCircle } from "lucide-react";

const projectTypes = [
  { value: "LANDING_PAGE", label: "Landing Page", desc: "Halaman tunggal untuk marketing/produk" },
  { value: "ECOMMERCE", label: "E-Commerce", desc: "Toko online dengan keranjang & pembayaran" },
  { value: "SAAS", label: "SaaS Application", desc: "Aplikasi multi-tenant dengan subscription" },
  { value: "PORTFOLIO", label: "Portfolio Personal", desc: "Showcase karya & skill profesional" },
  { value: "DASHBOARD", label: "Dashboard Admin", desc: "Panel admin dengan chart & manajemen data" },
  { value: "BLOG", label: "Blog/CMS", desc: "Sistem manajemen konten & blog" },
  { value: "CUSTOM", label: "Custom Lainnya", desc: "Kebutuhan khusus di luar kategori di atas" },
];

const budgetRanges = [
  { value: "UNDER_5M", label: "< 5 Juta", desc: "Project sederhana / MVP" },
  { value: "RANGE_5M_15M", label: "5 - 15 Juta", desc: "Project menengah" },
  { value: "RANGE_15M_30M", label: "15 - 30 Juta", desc: "Project kompleks" },
  { value: "RANGE_30M_50M", label: "30 - 50 Juta", desc: "Project enterprise" },
  { value: "ABOVE_50M", label: "> 50 Juta", desc: "Project skala besar / long-term" },
];

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [aiEstimate, setAiEstimate] = useState<unknown | null>(null);
  const [isEstimating, setIsEstimating] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", projectType: "", budget: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAIEstimate = async () => {
    if (!formData.projectType || !formData.message) return;
    setIsEstimating(true);
    try {
      const response = await fetch("/api/ai/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projectType: formData.projectType,
          features: formData.message.split(",").map((f) => f.trim()),
          budget: formData.budget,
        }),
      });
      const data = await response.json();
      setAiEstimate(data.estimate);
    } catch {
      setAiEstimate("Gagal mendapatkan estimasi AI. Silakan coba lagi.");
    } finally {
      setIsEstimating(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Info Panel */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-2 mb-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Konsultasi Gratis</CardTitle>
                </div>
                <CardDescription>
                  Isi form di samping, kami akan balas via WhatsApp/Email dalam 1x24 jam.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-green-50 border border-green-200">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium text-green-800">Gratis & Tanpa Komitmen</p>
                    <p className="text-sm text-green-700">Konsultasi 30 menit, estimasi biaya, saran teknis</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-blue-50 border border-blue-200">
                  <Sparkles className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-blue-800">Estimasi AI Instan</p>
                    <p className="text-sm text-blue-700">Dapatkan estimasi biaya & timeline otomatis</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>📱 Balasan via WhatsApp/Email</p>
                  <p>📋 Proposal detail dalam 1-2 hari</p>
                  <p>🤝 Kontrak transparan, milestone jelas</p>
                  <p>🚀 Mulai development minggu depan</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Form Panel */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Form Konsultasi Project</CardTitle>
                <CardDescription>
                  Isi detail project Anda. Semakin detail, semakin akurat estimasinya.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nama Lengkap *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Nama Anda"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="email@domain.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">WhatsApp/Telepon</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="+62 8xx-xxxx-xxxx"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Perkiraan *</Label>
                      <Select value={formData.budget} onValueChange={(value: string) => setFormData({ ...formData, budget: value })} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih range budget" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((b) => (
                            <SelectItem key={b.value} value={b.value}>
                              <div className="flex flex-col">
                                <span className="font-medium">{b.label}</span>
                                <span className="text-xs text-muted-foreground">{b.desc}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectType">Jenis Project *</Label>
                    <Select value={formData.projectType} onValueChange={(value: string) => setFormData({ ...formData, projectType: value })} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih jenis project" />
                      </SelectTrigger>
                      <SelectContent>
                        {projectTypes.map((p) => (
                          <SelectItem key={p.value} value={p.value}>
                            <div className="flex flex-col">
                              <span className="font-medium">{p.label}</span>
                              <span className="text-xs text-muted-foreground">{p.desc}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Deskripsi Project & Fitur *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Jelaskan project Anda: fitur utama, target user, referensi design, deadline, dll. Contoh: 'Butuh e-commerce fashion dengan fitur: user login, keranjang, pembayaran midtrans, dashboard admin produk & pesan, wishlist, review produk. Target launch 2 bulan.'"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* AI Estimate Button */}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleAIEstimate}
                    disabled={isEstimating || !formData.projectType || !formData.message}
                    className="w-full sm:w-auto"
                  >
                    {isEstimating ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        AI Menganalisis...
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-4 w-4" />
                        Dapatkan Estimasi AI
                      </>
                    )}
                  </Button>

                  {aiEstimate !== null && (
                    <div className="p-4 rounded-lg bg-muted/50 border border-primary/20">
                      <h4 className="font-medium mb-2 flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-primary" />
                        Estimasi AI
                      </h4>
                      {typeof aiEstimate === 'object' ? (
                        <pre className="text-sm whitespace-pre-wrap overflow-auto max-h-64 bg-background/60 p-3 rounded-lg border border-border/20">{JSON.stringify(aiEstimate, null, 2)}</pre>
                      ) : (
                        <p className="text-sm whitespace-pre-wrap">{String(aiEstimate)}</p>
                      )}
                      <p className="text-xs text-muted-foreground mt-2">Estimasi otomatis via Gemini. Konsultasi human tetap lebih akurat.</p>
                    </div>
                  )}

                  <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto" size="lg">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <MessageSquare className="h-5 w-5" />
                        Kirim Konsultasi
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </>
                    )}
                  </Button>

                  {submitStatus === "success" && (
                    <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-800">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        <span className="font-medium">Terima kasih! Form berhasil dikirim.</span>
                      </div>
                      <p className="text-sm mt-1">Kami akan menghubungi Anda via WhatsApp/Email dalam 1x24 jam.</p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-800">
                      Terjadi kesalahan. Silakan coba lagi atau hubungi langsung via WhatsApp.
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}