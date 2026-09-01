import { prisma } from "@/lib/prisma";
import { getClientIp, rateLimit } from "@/lib/rate-limit";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const consultationSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  email: z.string().email("Email tidak valid"),
  phone: z.string().optional(),
  projectType: z.enum([
    "LANDING_PAGE",
    "ECOMMERCE",
    "SAAS",
    "PORTFOLIO",
    "DASHBOARD",
    "BLOG",
    "CUSTOM",
  ]),
  budget: z.enum([
    "UNDER_5M",
    "RANGE_5M_15M",
    "RANGE_15M_30M",
    "RANGE_30M_50M",
    "ABOVE_50M",
  ]),
  message: z.string().min(20, "Deskripsi minimal 20 karakter"),
});

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);
    const rl = rateLimit(`consultation:${ip}`, 5, 60 * 60 * 1000);
    if (!rl.ok) {
      return NextResponse.json(
        { error: "Terlalu banyak permintaan. Coba lagi dalam 1 jam." },
        { status: 429, headers: { "Retry-After": String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } }
      );
    }
    const body = await req.json();
    const validated = consultationSchema.parse(body);

    const consultation = await prisma.consultation.create({
      data: {
        name: validated.name,
        email: validated.email,
        phone: validated.phone,
        projectType: validated.projectType,
        budget: validated.budget,
        message: validated.message,
        status: "PENDING",
      },
    });

    // Notification hook: log + optional Resend/WhatsApp integration
    const notifPayload = `[Consultation] ${validated.name} <${validated.email}> - ${validated.projectType} / ${validated.budget}`;
    console.log(notifPayload, consultation.id);
    // If RESEND_API_KEY is set, you can enable email here:
    // await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" }, body: JSON.stringify({ from: "noreply@jasawebcoding.com", to: "hello@jasawebcoding.com", subject: notifPayload, html: `<pre>${JSON.stringify(validated, null, 2)}</pre>` }) });

    return NextResponse.json({ success: true, id: consultation.id });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validasi gagal", details: error.flatten().fieldErrors },
        { status: 400 }
      );
    }
    console.error("Consultation API Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const consultations = await prisma.consultation.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
    });
    return NextResponse.json(consultations);
  } catch (error) {
    console.error("Get Consultations Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}