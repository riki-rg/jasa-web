import { getClientIp, rateLimit } from "@/lib/rate-limit";
import { generateProjectEstimate } from "@/lib/ai/gemini";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const estimateSchema = z.object({
  projectType: z.string(),
  features: z.array(z.string()),
  budget: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);
    const rl = rateLimit(`ai-estimate:${ip}`, 10, 60 * 60 * 1000);
    if (!rl.ok) {
      return NextResponse.json(
        { error: "Rate limit AI estimator tercapai. Coba lagi nanti." },
        { status: 429, headers: { "Retry-After": String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } }
      );
    }
    const body = await req.json();
    const validated = estimateSchema.parse(body);

    const estimate = await generateProjectEstimate(
      validated.projectType,
      validated.features,
      ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Prisma ORM"]
    );

    // Parse the stream response (supports both ReadableStream and AsyncIterable)
    let fullText = "";
    if (estimate instanceof ReadableStream) {
      const reader = estimate.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        fullText += value;
      }
    } else {
      for await (const chunk of estimate as AsyncIterable<string>) {
        fullText += chunk;
      }
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