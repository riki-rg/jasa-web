import { google } from "@ai-sdk/google";
import { streamText } from "ai";

export const geminiModel = google("gemini-1.5-pro");

const hasGeminiKey = !!process.env.GOOGLE_GENERATIVE_AI_API_KEY;

function mockStream(text: string): ReadableStream<string> {
  const encoder = new TextEncoder();
  // Split into chunks to mimic streaming
  const chunks = text.split(/(\s+)/);
  return new ReadableStream<string>({
    async start(controller) {
      for (const c of chunks) {
        controller.enqueue(c);
        await new Promise((r) => setTimeout(r, 8));
      }
      controller.close();
    },
  });
}

export async function generateWithGemini(prompt: string, systemPrompt?: string) {
  if (!hasGeminiKey) {
    return mockStream(
      JSON.stringify(
        {
          estimatedHours: 120,
          priceRange: { min: 12, max: 18 },
          timeline: "4-6 minggu",
          complexity: "medium",
          breakdown: [
            { phase: "Discovery & Design", hours: 20 },
            { phase: "Development", hours: 70 },
            { phase: "Testing & Deploy", hours: 30 },
          ],
          note: "Mock estimate (GOOGLE_GENERATIVE_AI_API_KEY belum di-set). Hubungi konsultasi untuk estimasi akurat.",
        },
        null,
        2
      )
    );
  }
  try {
    const result = await streamText({
      model: geminiModel,
      system: systemPrompt || "You are a helpful assistant for a web development agency.",
      prompt,
      temperature: 0.7,
    });

    return result.textStream;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to generate AI response");
  }
}

export async function generatePortfolioSuggestions(techStack: string[], projectType: string) {
  const prompt = `
    Suggest 3 portfolio project ideas for a web developer with these skills: ${techStack.join(", ")}.
    The project type should be: ${projectType}.
    Return JSON with: title, description, features, difficulty (easy/medium/hard).
  `;

  return generateWithGemini(prompt, "You are a senior web developer mentor. Return only valid JSON.");
}

export async function generateProjectEstimate(
  projectType: string,
  features: string[],
  techStack: string[]
) {
  const prompt = `
    Estimate a web development project:
    - Type: ${projectType}
    - Features: ${features.join(", ")}
    - Tech Stack: ${techStack.join(", ")}
    
    Return JSON with:
    - estimatedHours: number
    - priceRange: { min: number, max: number } (in IDR millions)
    - timeline: string (e.g., "2-4 weeks")
    - complexity: "low" | "medium" | "high"
    - breakdown: array of { phase: string, hours: number }
  `;

  return generateWithGemini(prompt, "You are an experienced project manager for web development. Return only valid JSON.");
}

export async function generateConsultationResponse(
  userMessage: string,
  context: {
    name: string;
    projectType: string;
    budget: string;
  }
) {
  const prompt = `
    User ${context.name} wants to consult about a ${context.projectType} project with budget ${context.budget}.
    Their message: "${userMessage}"
    
    Respond as a friendly, professional web development consultant.
    Ask clarifying questions if needed.
    Keep response concise but helpful.
  `;

  return generateWithGemini(prompt, "You are a web development consultant for a freelance agency.");
}