# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: landing-page.spec.ts >> Landing Page >> should have navigation links (desktop)
- Location: e2e/landing-page.spec.ts:17:7

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