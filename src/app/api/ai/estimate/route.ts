import { NextRequest, NextResponse } from "next/server";
import { generateProjectEstimate } from "@/lib/ai/gemini";
import { z } from "zod";

const estimateSchema = z.object({
  projectType: z.string(),
  features: z.array(z.string()),
  budget: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validated = estimateSchema.parse(body);

    const estimate = await generateProjectEstimate(
      validated.projectType,
      validated.features,
      ["Next.js", "TypeScript", "Tailwind", "Prisma"]
    );

    // Parse the stream response
    let fullText = "";
    for await (const chunk of estimate) {
      fullText += chunk;
    }

    // Try to parse JSON from the response
    let parsedEstimate;
    try {
      // Extract JSON from the response
      const jsonMatch = fullText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        parsedEstimate = JSON.parse(jsonMatch[0]);
      } else {
        parsedEstimate = { raw: fullText };
      }
    } catch {
      parsedEstimate = { raw: fullText };
    }

    return NextResponse.json({ estimate: parsedEstimate });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validasi gagal", details: error.flatten().fieldErrors },
        { status: 400 }
      );
    }
    console.error("AI Estimate Error:", error);
    return NextResponse.json(
      { estimate: { error: "Gagal mendapatkan estimasi AI", raw: "Silakan coba lagi atau konsultasi langsung" } },
      { status: 500 }
    );
  }
}