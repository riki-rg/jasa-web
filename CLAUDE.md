# Jasa Web Coding - Project Context

## Project Overview
Website jasa pembuatan website & konsultasi dengan integrasi AI (Gemini). Full-stack Next.js 15 + TypeScript + Prisma + Better Auth.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 + shadcn/ui (Radix UI)
- **Database**: SQLite (dev) → PostgreSQL (prod)
- **ORM**: Prisma 6
- **Auth**: Better Auth (email/password + OAuth Google/GitHub)
- **AI**: @ai-sdk/google (Gemini 1.5 Pro)
- **Testing**: Vitest + React Testing Library
- **Lint/Format**: Biome
- **Git Hooks**: Husky + lint-staged + commitlint
- **CI/CD**: GitHub Actions → Vercel

## Commands
```bash
# Development
pnpm dev              # Start dev server (port 3000)
pnpm build            # Production build
pnpm start            # Start production server

# Database
pnpm db:push          # Push schema to database
pnpm db:studio        # Open Prisma Studio
pnpm db:generate      # Generate Prisma Client
pnpm db:migrate       # Run migrations

# Quality Gates
pnpm lint             # Biome check --apply
pnpm lint:check       # Biome check (no fix)
pnpm format           # Biome format --write
pnpm format:check     # Biome format check
pnpm typecheck        # tsc --noEmit
pnpm test             # Vitest run

# Git
git add . && git commit -m "type: message"  # Uses commitlint
```

## Project Structure
```
src/
├── app/
│   ├── api/
│   │   ├── auth/[...all]/route.ts    # Better Auth endpoints
│   │   ├── ai/chat/route.ts          # AI chat streaming
│   │   ├── ai/estimate/route.ts      # AI project estimation
│   │   └── consultation/route.ts     # Consultation CRUD
│   ├── auth/login/page.tsx           # Login/Register page
│   ├── consultation/page.tsx         # Consultation form
│   ├── dashboard/page.tsx            # User dashboard
│   ├── layout.tsx                    # Root layout + providers
│   ├── page.tsx                      # Landing page
│   └── providers.tsx                 # Session provider
├── components/
│   └── ui/                           # shadcn/ui components
├── lib/
│   ├── auth/
│   │   ├── auth.ts                   # Better Auth config (server)
│   │   └── client.ts                 # Better Auth client
│   ├── ai/
│   │   └── gemini.ts                 # AI functions
│   ├── prisma.ts                     # Prisma singleton
│   └── utils.ts                      # cn() utility
└── prisma/
    └── schema.prisma                 # Database schema
```

## Database Models
- **User** - Better Auth user with role (USER/ADMIN)
- **Account** - OAuth accounts
- **Session** - Auth sessions
- **VerificationToken** - Email verification
- **Consultation** - Client consultation requests
- **Message** - AI chat messages
- **Portfolio** - Developer portfolio projects
- **Service** - Service offerings

## Environment Variables (.env)
```env
DATABASE_URL="file:./dev.db"
BETTER_AUTH_SECRET="your-secret"
BETTER_AUTH_URL="http://localhost:3000"
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""
GOOGLE_GENERATIVE_AI_API_KEY=""
RESEND_API_KEY=""
SENTRY_DSN=""
NEXT_PUBLIC_POSTHOG_KEY=""
```

## Key Features
1. **Landing Page** - Hero, services, process, tech stack, AI features demo, CTA
2. **Consultation Form** - Multi-step form with AI estimation
3. **AI Integration** - Gemini for project estimation, chatbot, content generation
4. **Auth** - Email/password + OAuth, protected routes
5. **Dashboard** - Stats, recent consultations, quick actions

## Deployment
- **Platform**: Vercel (auto-deploy from main branch)
- **Database**: PostgreSQL (Neon/Supabase/Railway)
- **Env**: Set all production env vars in Vercel dashboard

## Development Notes
- Use `pnpm` for all package management
- TypeScript strict mode enabled
- Biome for linting/formatting (no ESLint/Prettier)
- Husky pre-commit runs biome check
- Commit messages follow Conventional Commits
- Run quality gates before committing: `pnpm lint && pnpm typecheck && pnpm test`