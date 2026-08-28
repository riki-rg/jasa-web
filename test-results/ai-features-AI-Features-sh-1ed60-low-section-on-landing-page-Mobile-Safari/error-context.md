# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ai-features.spec.ts >> AI Features >> should display AI workflow section on landing page
- Location: e2e/ai-features.spec.ts:8:7

# Error details

```
Error: browserType.launch: 
╔══════════════════════════════════════════════════════╗
║ Host system is missing dependencies to run browsers. ║
║ Please install them with the following command:      ║
║                                                      ║
║     sudo pnpm exec playwright install-deps           ║
║                                                      ║
║ Alternatively, use apt:                              ║
║     sudo apt-get install libicu74\                   ║
║         libxml2\                                     ║
║         libflite1\                                   ║
║         libharfbuzz-icu0\                            ║
║         libmanette-0.2-0\                            ║
║         libenchant-2-2\                              ║
║         libhyphen0                                   ║
║                                                      ║
║ <3 Playwright Team                                   ║
╚══════════════════════════════════════════════════════╝
```