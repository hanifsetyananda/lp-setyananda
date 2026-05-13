# 📋 Setyananda — Issues List

> File ini berisi daftar issue yang bisa dikerjakan oleh junior developer atau AI Agent.
> Setiap issue bersifat **independen** dan bisa dikerjakan secara paralel kecuali disebutkan sebaliknya.
> Jika anda adalah AI Agent, selalu buat Task / Planning Terlebih dahulu, agar progress pengerjaan anda bisa dilihat oleh programmer
> **Domain sementara:** `*.pages.dev` (Cloudflare Pages)
> **Bahasa:** Bahasa Indonesia
> **Sosial Media:** Facebook — https://web.facebook.com/profile.php?id=61589536477399

### 🤖 AI Agent Workflow Instructions (Wajib Diikuti)
1. **Selalu kembali ke branch `main`** dan lakukan pull terbaru (`git checkout main && git pull origin main`).
2. **Buat branch baru** untuk mengerjakan issue tertentu (`git checkout -b feature/issue-X-...`).
3. **Kerjakan kodingan/perubahan** secara terisolasi pada branch tersebut.
4. **Verifikasi kode**: Sebelum membuat Pull Request baru, selalu jalankan `bun run dev` dan pastikan tidak terdapat error/kegagalan kompilasi. Jika ada, perbaiki terlebih dahulu bugnya sampai tuntas.
5. **Jalankan test suite**: Setelah kode terverifikasi, jalankan `bun run test` dan pastikan **semua test pass tanpa error**. Jika ada test yang gagal, perbaiki terlebih dahulu sebelum melanjutkan.
6. **Setelah selesai dan terverifikasi**, langsung lakukan commit, push ke branch baru tersebut, dan buatkan Pull Request secara otomatis.

---

## Issue #1: Ganti Title & Branding
**Priority:** 🔴 Critical  
**Estimated Effort:** 15 menit

### Context
File `index.html` masih menggunakan title `reactlatihan`. Ini yang muncul di tab browser dan di hasil Google Search.

### Files to Edit
- `index.html`
- `package.json` (ubah field `name`)

### Acceptance Criteria
- [x] `<title>` berubah menjadi `Setyananda — Jasa Pembuatan Website & Aplikasi Profesional`
- [x] `<html lang="id">` (ganti dari `en` ke `id` karena konten Bahasa Indonesia)
- [x] `package.json` field `name` berubah dari `reactlatihan` ke `setyananda`

---

## Issue #2: Tambahkan Meta Tags untuk SEO
**Priority:** 🔴 Critical  
**Estimated Effort:** 30 menit

### Context
Agar website bisa ditemukan di Google Search, perlu meta tags yang lengkap di `<head>`. Domain sementara menggunakan `.pages.dev` — nanti ganti URL jika sudah punya custom domain.

### Files to Edit
- `index.html`

### Acceptance Criteria
- [x] Tambahkan `<meta name="description" content="Setyananda — Jasa pembuatan website pribadi, company profile, dan aplikasi custom. Solusi digital profesional, modern, dan cepat untuk bisnis Anda.">`
- [x] Tambahkan `<meta name="keywords" content="jasa pembuatan website, company profile, aplikasi custom, setyananda, web developer indonesia">`
- [x] Tambahkan Open Graph tags:
  ```html
  <meta property="og:type" content="website">
  <meta property="og:title" content="Setyananda — Jasa Pembuatan Website & Aplikasi">
  <meta property="og:description" content="Solusi digital profesional untuk bisnis Anda. Website modern, cepat, dan SEO-friendly.">
  <meta property="og:image" content="/og-image.png">
  ```
- [x] Tambahkan Twitter Card meta tags
- [x] **Jangan hardcode `og:url` dan `canonical`** — karena domain belum final, bisa ditambahkan nanti

---

## Issue #3: Buat `robots.txt` dan `sitemap.xml`
**Priority:** 🔴 Critical  
**Estimated Effort:** 15 menit

### Context
Google bot memerlukan file ini untuk menemukan dan mengindex halaman website.

### Files to Create
- `public/robots.txt` — [NEW]
- `public/sitemap.xml` — [NEW]

### Acceptance Criteria
- [x] `robots.txt` berisi:
  ```
  User-agent: *
  Allow: /
  ```
  (Jangan tambahkan Sitemap URL dulu karena domain belum final)

- [x] `sitemap.xml` berisi entry untuk halaman utama:
  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>/</loc>
      <lastmod>2026-05-13</lastmod>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
    </url>
  </urlset>
  ```

> **Note:** Setelah deploy dan tahu URL `.pages.dev`, update `<loc>` dengan URL lengkap dan tambahkan `Sitemap:` di `robots.txt`.

---

## Issue #4: Tambahkan Structured Data (JSON-LD)
**Priority:** 🔴 Critical  
**Estimated Effort:** 30 menit

### Context
Structured data membantu Google memahami tipe bisnis dan bisa menampilkan rich snippet di hasil pencarian.

### Files to Edit
- `index.html` — tambahkan `<script type="application/ld+json">` di dalam `<head>`

### Acceptance Criteria
- [x] JSON-LD schema `Organization` ditambahkan
- [x] Berisi: name, description, contactPoint, sameAs (Facebook link)
- [x] Valid di [Google Rich Results Test](https://search.google.com/test/rich-results)

### Template
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Setyananda",
  "description": "Jasa pembuatan website pribadi, company profile, dan aplikasi custom",
  "sameAs": [
    "https://web.facebook.com/profile.php?id=61589536477399"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": "Indonesian"
  }
}
```
> **Note:** Tambahkan field `url` dan `logo` setelah deploy dan tahu URL final.

---

## Issue #5: Pasang Logo di Header & Favicon
**Priority:** 🔴 Critical  
**Estimated Effort:** 20 menit  
**Depends on:** File logo dari owner (harus sudah ada di `public/logo.svg` atau `public/logo.png`)

### Context
Header saat ini hanya menampilkan teks "Setyananda". Perlu ditambahkan logo image.

### Files to Edit
- `src/components/pages/landing-page/header.tsx` — tambahkan `<img>` logo di samping teks
- `public/favicon.svg` — ganti dengan logo perusahaan

### Acceptance Criteria
- [ ] ~~Logo tampil di header, ukuran ~32-40px height~~ (Dibatalkan oleh owner)
- [ ] ~~Logo responsive (tidak pecah di mobile)~~
- [x] Favicon di browser tab sesuai logo perusahaan
- [ ] ~~Alt text pada logo: "Setyananda Logo"~~

---

## Issue #6: Perkaya Footer
**Priority:** 🟡 High  
**Estimated Effort:** 1 jam

### Context
Footer saat ini hanya menampilkan "Copyright 2026 Setyananda". Untuk company profile profesional, footer harus lebih informatif.

### Files to Edit
- `src/components/pages/landing-page/footer.tsx`

### Data yang tersedia
- Facebook: `https://web.facebook.com/profile.php?id=61589536477399`
- Nav links: Beranda (#home), Layanan (#service), Kontak (#contact)

### Acceptance Criteria
- [x] Layout footer multi-kolom (desktop), stack vertikal (mobile):
  - Kolom 1: Logo/nama + deskripsi singkat (1-2 kalimat)
  - Kolom 2: Quick Links — Beranda, Layanan, Kontak
  - Kolom 3: Sosial Media — icon Facebook yang link ke page di atas
- [x] Copyright text tetap ada di paling bawah
- [x] Facebook icon gunakan dari `lucide-react` (`Facebook` icon)
- [x] Animasi `whileInView` konsisten dengan section lain

---

## Issue #7: Konfigurasi Cloudflare Pages Deployment
**Priority:** 🔴 Critical  
**Estimated Effort:** 30 menit

### Context
Website perlu di-deploy ke Cloudflare Pages. Perlu file konfigurasi tambahan.

### Files to Create
- `public/_redirects` — [NEW]
- `public/_headers` — [NEW]

### Acceptance Criteria
- [ ] `public/_redirects` berisi:
  ```
  /* /index.html 200
  ```
  (Penting untuk SPA agar semua route di-handle oleh React)

- [ ] `public/_headers` berisi:
  ```
  /*
    X-Frame-Options: DENY
    X-Content-Type-Options: nosniff
    Referrer-Policy: strict-origin-when-cross-origin
    Permissions-Policy: camera=(), microphone=(), geolocation=()

  /assets/*
    Cache-Control: public, max-age=31536000, immutable
  ```

- [ ] `npm run build` berhasil tanpa error
- [ ] Folder `dist/` berisi output yang siap deploy
- [ ] Verifikasi build berhasil dengan `npm run preview`

### Deployment Steps
1. Push code ke GitHub repository
2. Cloudflare dashboard → Pages → Create a project
3. Connect ke GitHub repo
4. Build command: `npm run build`
5. Build output directory: `dist`
6. Deploy → dapatkan URL `*.pages.dev`
7. Setelah deploy, update URL di `sitemap.xml`, `robots.txt`, dan meta tags

---

## Issue #8: Pindahkan API Keys ke Environment Variables
**Priority:** 🟡 High  
**Estimated Effort:** 20 menit

### Context
File `contact.tsx` menyimpan EmailJS credentials secara hardcoded (line 15-17). Ini security risk jika repo public.

### Files to Edit
- `src/components/pages/landing-page/contact.tsx`

### Files to Create
- `.env` — [NEW] (JANGAN commit ke git!)
- `.env.example` — [NEW] (template untuk developer lain)

### Acceptance Criteria
- [x] Buat `.env` file:
  ```
  VITE_EMAILJS_SERVICE_ID=service_0v2te2p
  VITE_EMAILJS_TEMPLATE_ID=template_uukoaef
  VITE_EMAILJS_PUBLIC_KEY=mpQHcfNRhjz9Qu1vW
  ```
- [x] Di `contact.tsx`, ganti hardcoded values:
  ```tsx
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  ```
- [x] `.env` ditambahkan ke `.gitignore`
- [x] `.env.example` dibuat sebagai template (tanpa value asli)
- [ ] Di Cloudflare Pages, set environment variables yang sama

---

## Issue #9: Buat OG Image untuk Social Sharing
**Priority:** 🟡 Medium  
**Estimated Effort:** 30 menit

### Context
Ketika link website dibagikan di WhatsApp, Facebook, atau platform lain, harus ada gambar preview yang menarik.

### Files to Create
- `public/og-image.png` — [NEW], ukuran 1200x630px

### Acceptance Criteria
- [ ] Gambar berisi: logo/nama Setyananda, tagline singkat, background yang menarik
- [ ] Ukuran file < 300KB
- [ ] Dimensi 1200 x 630 px (standar Open Graph)
- [ ] Terlihat baik saat dibagikan di WhatsApp dan Facebook

---

## Issue #10: Optimasi Gambar & Performance
**Priority:** 🟢 Low  
**Estimated Effort:** 1 jam

### Context
Gambar produk menggunakan URL external Unsplash. Sebaiknya lokal.

### Files to Edit
- `src/components/pages/landing-page/product.tsx` — ganti URL gambar
- `src/components/pages/landing-page/hero.tsx` — tambahkan lazy loading
- Semua file yang menggunakan `<img>`

### Acceptance Criteria
- [ ] Semua gambar menggunakan file lokal (bukan URL external)
- [ ] Gambar dikompress (target < 100KB per gambar)
- [ ] Semua `<img>` punya `alt` text deskriptif
- [ ] Gambar non-critical menggunakan `loading="lazy"`
- [ ] Lighthouse Performance score > 90

---

## Issue #11: Code Cleanup
**Priority:** 🟢 Low  
**Estimated Effort:** 15 menit

### Files to Edit
- `src/App.tsx` — hapus `import { useState } from 'react'` (unused)
- `src/App.tsx` — hapus `import Header` (unused, sudah di-import di landing-page)

### Acceptance Criteria
- [x] Tidak ada unused imports
- [x] `npm run lint` tidak ada error
- [x] `npm run build` berhasil tanpa warning

---

## Issue #12: Tambahkan Analytics
**Priority:** 🟢 Low  
**Estimated Effort:** 20 menit

### Context
Perlu tracking pengunjung untuk memahami traffic website.

### Recommended: Cloudflare Web Analytics
- Gratis, privacy-friendly, no cookie banner needed
- Aktifkan dari Cloudflare dashboard setelah deploy
- Otomatis inject script

### Acceptance Criteria
- [ ] Analytics tool terpasang dan aktif
- [ ] Data pengunjung bisa dilihat di dashboard

---

## Issue #13: Application Testing (Vitest + Playwright)
**Priority:** 🔴 Critical  
**Estimated Effort:** 3-4 jam  
**Depends on:** Semua issue sebelumnya yang sudah selesai (#1-#8, #11)

### Context
Website belum memiliki automated test. Sebelum deploy ke production, diperlukan test suite yang memastikan semua fitur berjalan dengan benar. Gunakan **Vitest** untuk unit/component test dan **Playwright** untuk end-to-end (E2E) test.

### Setup yang Diperlukan

#### 1. Install Dependencies
```bash
# Unit testing
bun add -D vitest jsdom @testing-library/react @testing-library/user-event @testing-library/jest-dom

# E2E testing
bun add -D @playwright/test
npx playwright install
```

#### 2. File Konfigurasi yang Harus Dibuat

##### [NEW] `vitest.config.ts`
```ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    exclude: ['**/node_modules/**', '**/tests/e2e/**'],
  },
  resolve: {
    alias: {
      '#components': '/src/components',
      '#lib': '/src/lib',
      '#hooks': '/src/hooks',
    },
  },
})
```

##### [NEW] `src/test/setup.ts`
```ts
import '@testing-library/jest-dom'
```

##### [NEW] `playwright.config.ts`
```ts
import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'bun run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    // Desktop
    {
      name: 'Desktop Chrome',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1280, height: 720 } },
    },
    // Tablet
    {
      name: 'Tablet',
      use: { viewport: { width: 768, height: 1024 }, deviceScaleFactor: 2 },
    },
    // iPhone 17 / 17 Pro (402x874, WebKit)
    {
      name: 'iPhone 17',
      use: { viewport: { width: 402, height: 874 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true, defaultBrowserType: 'webkit' },
    },
    // iPhone 17 Pro Max (440x956, WebKit)
    {
      name: 'iPhone 17 Pro Max',
      use: { viewport: { width: 440, height: 956 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true, defaultBrowserType: 'webkit' },
    },
    // Samsung Galaxy S25 (360x780, Chromium)
    {
      name: 'Galaxy S25',
      use: { viewport: { width: 360, height: 780 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true },
    },
    // Samsung Galaxy S25 Ultra (412x891, Chromium)
    {
      name: 'Galaxy S25 Ultra',
      use: { viewport: { width: 412, height: 891 }, deviceScaleFactor: 3.5, isMobile: true, hasTouch: true },
    },
  ],
})
```

##### [MODIFY] `package.json` — Tambahkan scripts:
```json
"scripts": {
  "test": "vitest run && playwright test",
  "test:unit": "vitest run",
  "test:e2e": "playwright test",
  "test:e2e:ui": "playwright test --ui"
}
```

---

### Test Cases — Unit Tests (Vitest)

#### [NEW] `src/__tests__/build-check.test.ts`
Test bahwa project bisa di-build tanpa error:
- [ ] `bun run build` exit code 0 (gunakan `execSync`)

#### [NEW] `src/__tests__/contact-form.test.tsx`
Test form kontak **tanpa mengirim email sungguhan** (mock `emailjs`):

> ⚠️ **PENTING**: EmailJS memiliki limit 200 pengiriman/bulan. **JANGAN** pernah mengirim email sungguhan di test.
> Gunakan `vi.mock('@emailjs/browser')` untuk mock seluruh module.

- [ ] Form render semua field yang diperlukan (name, email, phone, content)
- [ ] Input field bisa diketik dan value berubah
- [ ] Submit dengan field wajib kosong → status berubah ke `error`
- [ ] Submit dengan field valid → `emailjs.send()` dipanggil (mock)
- [ ] Mock `emailjs.send()` resolve → status berubah ke `success`, form reset
- [ ] Mock `emailjs.send()` reject → status berubah ke `error`

Contoh mock pattern:
```tsx
import { vi } from 'vitest'
import emailjs from '@emailjs/browser'

vi.mock('@emailjs/browser', () => ({
  default: {
    send: vi.fn().mockResolvedValue({ status: 200, text: 'OK' }),
  },
}))
```

---

### Test Cases — E2E Tests (Playwright)

Semua E2E test harus dijalankan di **setiap viewport/device** yang dikonfigurasi di `playwright.config.ts`.

#### [NEW] `tests/e2e/responsive.spec.ts`
Verifikasi responsivitas di semua device target:
- [ ] Halaman load tanpa JavaScript error di console
- [ ] Navbar terlihat dan tidak overflow horizontal
- [ ] Hero section (`#home`) terlihat
- [ ] Services section (`#service`) terlihat
- [ ] Contact section (`#contact`) terlihat
- [ ] Footer terlihat
- [ ] Tidak ada horizontal scrollbar yang tidak diinginkan (page width = viewport width)

#### [NEW] `tests/e2e/navigation.spec.ts`
Verifikasi navigasi anchor link:
- [ ] Klik link navbar `Beranda` → halaman scroll ke section `#home`
- [ ] Klik link navbar `Layanan` → halaman scroll ke section `#service`
- [ ] Klik link navbar `Kontak` → halaman scroll ke section `#contact`
- [ ] Klik link footer `Beranda` → halaman scroll ke section `#home`
- [ ] Klik link footer `Layanan` → halaman scroll ke section `#service`
- [ ] Klik link footer `Kontak` → halaman scroll ke section `#contact`

#### [NEW] `tests/e2e/facebook-link.spec.ts`
Verifikasi link Facebook:
- [ ] Link Facebook di footer memiliki `href` = `https://web.facebook.com/profile.php?id=61589536477399`
- [ ] Link memiliki attribute `target="_blank"`
- [ ] Link memiliki attribute `rel="noopener noreferrer"`

#### [NEW] `tests/e2e/dark-mode.spec.ts`
Verifikasi toggle dark/light mode:
- [ ] Button toggle dark/light mode ada dan bisa diklik
- [ ] Klik toggle → class `dark` ditambahkan pada `<html>` element
- [ ] Klik toggle lagi → class `dark` dihapus dari `<html>` element
- [ ] Background warna berubah setelah toggle
- [ ] Toggle bisa diklik berulang kali tanpa error

#### [NEW] `tests/e2e/contact-form.spec.ts`
Verifikasi form kontak (E2E, tanpa kirim email):
- [ ] Semua field input (name, email, phone, content) bisa diisi
- [ ] Button submit ada dan bisa diklik
- [ ] Submit dengan field kosong → tidak crash / tidak ada uncaught error

#### [NEW] `tests/e2e/seo-verification.spec.ts`
Verifikasi hasil pengerjaan Issue #1 - #4 (SEO):
- [ ] `<title>` mengandung teks "Setyananda"
- [ ] `<html>` memiliki attribute `lang="id"`
- [ ] `<meta name="description">` ada dan tidak kosong
- [ ] `<meta property="og:title">` ada
- [ ] `<meta property="og:description">` ada
- [ ] `<meta property="og:type">` ada
- [ ] `<meta name="twitter:card">` ada
- [ ] `<script type="application/ld+json">` ada dan berisi JSON valid dengan `@type: Organization`
- [ ] `<link rel="icon">` (favicon) ada

---

### Acceptance Criteria (Keseluruhan Issue #13)
- [ ] Semua dependencies testing terinstall (`vitest`, `@playwright/test`, `@testing-library/react`, dll)
- [ ] `bun run test:unit` — semua unit test pass
- [ ] `bun run test:e2e` — semua E2E test pass di semua device viewport
- [ ] `bun run test` — menjalankan unit + E2E, semua pass
- [ ] Tidak ada email EmailJS yang terkirim selama testing (cek dashboard)
- [ ] File `.gitignore` sudah mengabaikan `test-results/`, `playwright-report/`, `.playwright/`

---

## Urutan Pengerjaan yang Disarankan

```
✅  Issue #1  — Ganti Title & Branding         (SELESAI)
✅  Issue #5  — Pasang Logo                     (SELESAI)
✅  Issue #8  — Environment Variables           (SELESAI)
✅  Issue #11 — Code Cleanup                    (SELESAI)
✅  Issue #2  — Meta Tags SEO                   (SELESAI)
✅  Issue #3  — robots.txt & sitemap.xml        (SELESAI)
✅  Issue #4  — Structured Data JSON-LD         (SELESAI)
✅  Issue #6  — Perkaya Footer + Facebook       (SELESAI)

>>> PRIORITAS SEKARANG >>>
1.  Issue #13 — Application Testing             (3-4 jam)
2.  Issue #9  — OG Image                        (30 min)
3.  Issue #10 — Optimasi Gambar                 (1 jam)
4.  Issue #7  — Deploy ke Cloudflare Pages      (30 min)
5.  Issue #12 — Analytics                       (20 min)
```

---

## Issue yang Di-skip (Bisa dikerjakan nanti)

| Issue | Alasan |
|---|---|
| Section "Tentang Kami" | Owner: belum penting |
| Section Testimonial | Belum ada client — sedang ditawarkan ke teman |
| Section FAQ | Belum ada pelanggan |
| Custom Domain | Pakai `.pages.dev` dulu |
