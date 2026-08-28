# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth.spec.ts >> Auth Page >> should show validation errors for empty login
- Location: e2e/auth.spec.ts:18:7

# Error details

```
Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e3]:
    - generic [ref=e4]:
      - heading "Masuk" [level=3] [ref=e5]
      - paragraph [ref=e6]: Masuk ke akun Anda untuk melanjutkan
    - generic [ref=e7]:
      - generic [ref=e8]:
        - generic [ref=e9]:
          - text: Email
          - textbox "Email" [active] [ref=e10]:
            - /placeholder: email@domain.com
        - generic [ref=e11]:
          - text: Password
          - textbox "Password" [ref=e12]:
            - /placeholder: ••••••••
        - button "Masuk" [ref=e13]
      - generic [ref=e14]: Atau lanjutkan dengan
      - generic [ref=e19]:
        - button "Google" [ref=e20]
        - button "GitHub" [ref=e21]
      - paragraph [ref=e22]:
        - text: Belum punya akun?
        - button "Daftar" [ref=e23]
  - generic [ref=e28] [cursor=pointer]:
    - button "Open Next.js Dev Tools" [ref=e29]
    - generic [ref=e34]:
      - button "Open issues overlay" [ref=e35]:
        - generic [ref=e36]:
          - generic [ref=e37]: "0"
          - generic [ref=e38]: "1"
        - generic [ref=e39]: Issue
      - button "Collapse issues badge" [ref=e40]
  - alert [ref=e43]
```