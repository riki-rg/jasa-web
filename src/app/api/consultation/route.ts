import { prisma } from "@/lib/prisma";
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

    // TODO: Send notification email/WhatsApp
    // await sendNotification(consultation);

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