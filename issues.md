# 📋 Setyananda — Issues List

> File ini berisi daftar issue yang bisa dikerjakan oleh junior developer atau AI Agent.
> Setiap issue bersifat **independen** dan bisa dikerjakan secara paralel kecuali disebutkan sebaliknya.
> **Domain sementara:** `*.pages.dev` (Cloudflare Pages)
> **Bahasa:** Bahasa Indonesia
> **Sosial Media:** Facebook — https://web.facebook.com/profile.php?id=61589536477399

> [!CAUTION]
> **ATURAN KRITIS REPOSITORI**: Dilarang keras melakukan *commit* atau *push* kode secara langsung ke branch `main`. Branch `main` **tidak boleh** menerima kodingan atau modifikasi apa pun tanpa melalui Pull Request / Merge Request yang secara eksplisit telah disetujui oleh **Owner**.

### 🤖 AI Agent Workflow Instructions (Wajib Diikuti)
1. **Perencanaan Wajib**: Jika Anda adalah AI Agent, selalu buat Task / Planning terlebih dahulu di awal, agar progres pengerjaan Anda bisa dilihat dan dipantau oleh programmer.
2. **Selalu kembali ke branch `main`** dan lakukan pull terbaru (`git checkout main && git pull origin main`).
3. **Buat branch baru** untuk mengerjakan issue tertentu (`git checkout -b feature/issue-X-...`).
4. **Kerjakan kodingan/perubahan** secara terisolasi pada branch tersebut.
5. **Verifikasi dan Testing Mandiri**: Sebelum membuat Pull Request baru, Anda **wajib** menjalankan seluruh *test case* dan pengujian lokal via `bun run test` / `bun run dev` / `bun run build`. Pastikan **tidak ada satupun error**. Jika terdapat kegagalan atau bug, perbaiki terlebih dahulu sampai tuntas dan 100% lulus uji.
6. **Setelah selesai dan lulus verifikasi**, langsung lakukan commit, push ke branch baru tersebut, dan buatkan Pull Request secara otomatis.

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
**Priority:** 🟡 High (⚠️ **DITUNDA / ABANDONED SEMENTARA**)  
**Estimated Effort:** 1 jam

> **Catatan Pengerjaan Sebelumnya**: Pengerjaan komponen footer dan perbaikan awal telah dilakukan pada branch `feature/issue-6-rich-footer`. Jika Anda ditugaskan untuk melanjutkan atau menyelesaikan Issue #6 di masa depan, **jangan mulai dari awal**. Silakan lakukan *checkout* dan lanjutkan dari branch `feature/issue-6-rich-footer`.

### Context
Footer saat ini hanya menampilkan "Copyright 2026 Setyananda". Untuk company profile profesional, footer harus lebih informatif.

### Files to Edit
- `src/components/pages/landing-page/footer.tsx`

### Data yang tersedia
- Facebook: `https://web.facebook.com/profile.php?id=61589536477399`
- Nav links: Beranda (#home), Layanan (#service), Kontak (#contact)

### Acceptance Criteria
- [ ] Layout footer multi-kolom (desktop), stack vertikal (mobile):
  - Kolom 1: Logo/nama + deskripsi singkat (1-2 kalimat)
  - Kolom 2: Quick Links — Beranda, Layanan, Kontak
  - Kolom 3: Sosial Media — icon Facebook yang link ke page di atas
- [ ] Copyright text tetap ada di paling bawah
- [ ] Facebook icon gunakan dari `lucide-react` (`Facebook` icon)
- [ ] Animasi `whileInView` konsisten dengan section lain

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
- [ ] Tidak ada unused imports
- [ ] `npm run lint` tidak ada error
- [ ] `npm run build` berhasil tanpa warning

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

## Issue #13: Application Testing & Unit Testing (Vitest + Playwright)
**Priority:** 🔴 Critical (⚡ **PRIORITAS UTAMA TERBARU**)  
**Estimated Effort:** 2-3 jam

### Context
Website Setyananda membutuhkan lapisan pengujian otomatis (*automated testing*) dan verifikasi aplikasi yang kokoh sebelum *deployment* ke *production*. Pengujian harus mencakup kestabilan saat *build*, responsivitas desain pada berbagai ukuran layar, fungsionalitas formulir kontak, keakuratan tautan navigasi, integrasi tautan sosial, dan transisi tema mode gelap/terang.

### Strategi Pengujian EmailJS (Wajib Diikuti)
> ⚠️ **PENTING**: Akun EmailJS memiliki batas maksimal pengiriman gratis **200 email per bulan**. JANGAN menghabiskan kuota ini untuk keperluan *automated testing*.
> - **Solusi**: Lakukan **Mock** pada fungsi `emailjs.send()` di dalam unit test menggunakan library seperti `vi.mock()` dari Vitest, sehingga pengujian dapat memverifikasi logika pengiriman, penanganan status sukses/gagal, dan *reset* formulir tanpa melakukan panggilan jaringan riil ke server EmailJS.

### Acceptance Criteria & Test Cases
- [x] **Pass 1: Kestabilan Run & Build**
  - Website tidak mengalami *error* atau *crash* saat dijalankan via perintah `bun run dev` maupun `bun run build`.
- [x] **Pass 2: Responsivitas Desain (Viewport Testing)**
  - Desain antarmuka terbukti tetap responsif, rapi, dan tidak mengalami *overflow* saat diuji pada *viewport* spesifik:
    - **Tablet iPad Mini, Phone Pixel 7, dan Desktop Standard**
- [x] **Pass 3: Formulir Kontak EmailJS**
  - Validasi *input* berfungsi dengan baik, tombol kirim dapat diinteraksi, dan penanganan status berhasil diuji secara terisolasi via *mocking* tanpa mengurangi kuota bulanan EmailJS.
- [x] **Pass 4: Navigasi Tautan Internal**
  - Tombol dan tautan di *navbar* maupun *footer* yang mengarah ke target *anchor* (`#home`, `#service`, `#contact`) terverifikasi tepat sasaran dan lancar tanpa kegagalan *scroll*.
- [x] **Pass 5: Integrasi Tombol Facebook**
  - Tombol Facebook mengarah ke atribut `href` yang akurat (`https://web.facebook.com/profile.php?id=61589536477399`) dan berhasil dibuka.
- [x] **Pass 6: Pergantian Mode Gelap & Terang**
  - Tombol *switch* *dark mode* dan *light mode* berfungsi normal memodifikasi kelas pada dokumen HTML dan merender warna latar yang tepat.
- [x] **Pass 7: Verifikasi Isu-Isu Terdahulu**
  - Tersedia *test case* untuk memvalidasi keberhasilan pengerjaan isu sebelumnya, seperti keakuratan `<title>`, atribut `lang="id"`, keberadaan *meta tag* SEO, kelengkapan Open Graph, validitas data terstruktur JSON-LD, serta tautan *favicon*.

---

## Urutan Pengerjaan yang Disarankan

```
>>> PRIORITAS UTAMA SAAT INI >>>
- Saat ini tidak ada isu prioritas utama. Silakan lanjutkan ke isu tertunda.

>>> ISU SELESAI / TERVERIFIKASI >>>
-   Issue #13 — Application Testing & Unit Testing (SELESAI)
-   Issue #1  — Ganti Title & Branding         (SELESAI)
-   Issue #5  — Pasang Logo                     (SELESAI)
-   Issue #8  — Environment Variables           (SELESAI)
-   Issue #11 — Code Cleanup                    (SELESAI)
-   Issue #2  — Meta Tags SEO                   (SELESAI)
-   Issue #3  — robots.txt & sitemap.xml        (SELESAI)
-   Issue #4  — Structured Data JSON-LD         (SELESAI)

>>> ISU TERTUNDA / SELANJUTNYA >>>
1.  Issue #6  — Perkaya Footer + Facebook       (DITUNDA - Lanjutkan dari branch feature/issue-6-rich-footer)
2.  Issue #9  — OG Image                        (30 min)
3.  Issue #10 — Optimasi Gambar                 (1 jam)
4.  Issue #7  — Deploy ke Cloudflare Pages      (30 min)
5.  Issue #12 — Analytics                       (20 min)
```

**Estimasi total: ~5-6 jam kerja**

---

## Issue yang Di-skip (Bisa dikerjakan nanti)

| Issue | Alasan |
|---|---|
| Section "Tentang Kami" | Owner: belum penting |
| Section Testimonial | Belum ada client — sedang ditawarkan ke teman |
| Section FAQ | Belum ada pelanggan |
| Custom Domain | Pakai `.pages.dev` dulu |
