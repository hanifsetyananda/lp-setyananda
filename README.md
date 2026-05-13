# Setyananda - Landing Page & Web App

Proyek ini adalah repositori utama untuk website Setyananda, sebuah *landing page* dan aplikasi web modern yang dirancang untuk menawarkan solusi digital, pembuatan website, dan aplikasi kustom. Dibangun dengan fokus pada desain yang responsif, performa tinggi, dan aksesibilitas.

## 🚀 Teknologi Utama

Proyek ini menggunakan *stack* teknologi modern untuk memastikan pengembangan yang cepat dan produk akhir yang optimal:

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) & [shadcn/ui](https://ui.shadcn.com/)
- **Animasi**: [Framer Motion](https://www.framer.com/motion/)
- **Ikon**: [Lucide React](https://lucide.dev/) & [Tabler Icons](https://tabler.io/icons)
- **Integrasi**: [EmailJS](https://www.emailjs.com/) (untuk form kontak)
- **Pengujian**:
  - [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/react) (Unit Test)
  - [Playwright](https://playwright.dev/) (End-to-End Test)

## 📦 Panduan Instalasi

Pastikan Anda telah menginstal [Bun](https://bun.sh/) di sistem Anda, karena proyek ini menggunakan Bun sebagai *package manager* dan *runner* utama.

```bash
# 1. Clone repositori ini
git clone https://github.com/hanifsetyananda/lp-setyananda.git
cd lp-setyananda

# 2. Install semua dependensi
bun install

# 3. Konfigurasi Environment Variables
# Salin file .env.example menjadi .env dan isi dengan credential yang sesuai
cp .env.example .env

# 4. Jalankan development server
bun run dev
```

Website akan berjalan di `http://localhost:5173/` (port default Vite).

## 🧪 Panduan Pengujian (Testing)

Proyek ini mengimplementasikan pengujian ganda untuk menjamin stabilitas aplikasi.

### Unit Testing
Unit test digunakan untuk menguji fungsionalitas komponen React secara terisolasi (contoh: validasi form, render tombol).
```bash
# Menjalankan unit test sekali
bun run test:unit

# Menjalankan unit test dengan mode watch (untuk development)
bun run test
```

### End-to-End (E2E) Testing
E2E test menggunakan Playwright untuk menyimulasikan interaksi pengguna di berbagai perangkat (Desktop, Tablet iPad Mini, dan Phone Pixel 7). E2E test memverifikasi fitur navigasi, responsivitas desain, *dark mode*, dan fungsionalitas utama lainnya.

```bash
# Jalankan E2E test
bun run test:e2e

# Lihat laporan hasil E2E test dalam format HTML
npx playwright show-report
```

## 🏗️ Struktur Proyek

- `/src/components`: Komponen antarmuka pengguna (UI) yang dapat digunakan kembali.
  - `/pages/landing-page`: Komponen khusus untuk halaman utama (*Hero*, *Services*, *Contact*, *Header*, *Footer*).
  - `/ui`: Komponen dasar dari `shadcn/ui`.
- `/src/__tests__`: Kumpulan file *Unit Test* untuk menguji stabilitas kode.
- `/tests/e2e`: Kumpulan skenario pengujian Playwright.
- `/public`: Aset statis publik seperti gambar, ikon, dan dokumen meta (`robots.txt`, `sitemap.xml`).

## 📋 Pedoman Kontribusi (AI Agent Workflow)

Kami memiliki panduan ketat bagi kontributor maupun **AI Agent** yang bekerja pada repositori ini. Peraturan ini dicatat secara rinci di dalam file [`issues.md`](./issues.md).

Beberapa aturan dasar:
1. **DILARANG** melakukan `commit` atau `push` langsung ke branch `main`.
2. Selalu buat branch baru dengan format `feature/issue-[nomor]-[deskripsi]` (contoh: `feature/issue-6-rich-footer`).
3. Selalu jalankan *Sanity Check* (`bun run dev`) dan *Testing* (`bun run test` & `bun run test:e2e`) sebelum mengajukan Pull Request.
4. Lakukan modifikasi kode secara terisolasi berdasarkan arahan *Issue* yang ditugaskan.

## 📄 Lisensi

Copyright 2026 Setyananda. Hak Cipta Dilindungi.
Dibuat dengan cinta di Indonesia.
