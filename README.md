````md
# Penugasan IFI

Website project yang dibuat sebagai bagian dari penugasan IFI menggunakan Next.js, React, TypeScript, dan Tailwind CSS.

## Tech Stack

- [Next.js](https://nextjs.org/) 16
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- ESLint

---

## Requirements

Sebelum menjalankan project, pastikan perangkat sudah memiliki:

- Node.js 20.x atau lebih baru
- npm
- Git

Untuk mengecek apakah Node.js dan npm sudah terinstall:

```bash
node -v
npm -v
```
````

Untuk mengecek Git:

```bash
git --version
```

---

## Installation

Ikuti langkah-langkah berikut untuk menjalankan project secara lokal.

### 1. Clone Repository

Clone repository menggunakan Git:

```bash
git clone https://github.com/candicelith/penugasan-ifi.git
```

Kemudian masuk ke folder project:

```bash
cd penugasan-ifi
```

### 2. Install Dependencies

Install seluruh dependencies yang dibutuhkan menggunakan npm:

```bash
npm install
```

Proses ini akan menginstall seluruh package yang terdapat pada `package.json`.

### 3. Run Development Server

Setelah dependencies selesai diinstall, jalankan development server:

```bash
npm run dev
```

Jika berhasil, terminal akan menampilkan alamat development server.

Buka browser dan akses:

```text
http://localhost:3000
```

Project sekarang sudah dapat digunakan secara lokal.

---

## Available Scripts

Project menyediakan beberapa command yang dapat digunakan melalui npm.

### Development

Menjalankan project dalam development mode:

```bash
npm run dev
```

Development server biasanya tersedia di:

```text
http://localhost:3000
```

Perubahan pada source code akan otomatis ditampilkan melalui hot reload.

### Build

Membuat production build:

```bash
npm run build
```

Command ini digunakan untuk memastikan project dapat dikompilasi dan dipersiapkan untuk production.

### Start

Menjalankan project menggunakan hasil production build:

```bash
npm run start
```

Sebelum menjalankan command ini, pastikan sudah menjalankan:

```bash
npm run build
```

Kemudian buka:

```text
http://localhost:3000
```

### Lint

Menjalankan ESLint untuk memeriksa masalah pada source code:

```bash
npm run lint
```

---

## Project Structure

Struktur utama project:

```text
penugasan-ifi/
│
├── public/
│   ├── images/
│   ├── logo.webp
│   └── ...
│
├── src/
│   └── app/
│       ├── about/
│       │   └── page.tsx
│       │
│       ├── community/
│       │   └── page.tsx
│       │
│       ├── contact/
│       │   └── page.tsx
│       │
│       ├── industries/
│       │   └── page.tsx
│       │
│       ├── services/
│       │   └── page.tsx
│       │
│       ├── components/
│       │   └── ...
│       │
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
│
├── .gitignore
├── next.config.ts
├── package-lock.json
├── package.json
├── tsconfig.json
└── README.md
```

### Folder `public`

Berisi asset statis yang digunakan oleh website, seperti:

- Logo
- Image
- Icon
- Asset visual lainnya

Asset di dalam folder `public` dapat dipanggil menggunakan path:

```tsx
<img src="/logo.webp" alt="Logo" />
```

### Folder `src/app`

Berisi halaman dan routing utama aplikasi menggunakan Next.js App Router.

Contoh:

```text
src/app/about/page.tsx
```

akan dapat diakses melalui:

```text
/about
```

### Folder `src/app/components`

Berisi reusable components yang digunakan di beberapa halaman, seperti:

- Navbar
- Footer
- Section components
- UI components

---

## Routing

Website menggunakan Next.js App Router.

| Page       | URL           |
| ---------- | ------------- |
| Home       | `/`           |
| About Us   | `/about`      |
| Services   | `/services`   |
| Industries | `/industries` |
| Community  | `/community`  |
| Contact    | `/contact`    |

---

## Environment Variables

Project ini tidak membutuhkan environment variables tambahan untuk menjalankan aplikasi secara lokal.

Jika environment variables diperlukan di kemudian hari, buat file:

```text
.env.local
```

Contoh:

```env
NEXT_PUBLIC_API_URL=your-api-url
```

> Jangan commit file `.env.local` ke repository.

---

## Development Workflow

Untuk mulai mengembangkan project:

### 1. Clone repository

```bash
git clone https://github.com/candicelith/penugasan-ifi.git
```

### 2. Masuk ke directory

```bash
cd penugasan-ifi
```

### 3. Install dependencies

```bash
npm install
```

### 4. Jalankan development server

```bash
npm run dev
```

### 5. Buka project

```text
http://localhost:3000
```

### 6. Setelah selesai melakukan perubahan

Periksa lint:

```bash
npm run lint
```

Kemudian pastikan production build berhasil:

```bash
npm run build
```

---

## Production

Untuk menjalankan project dalam production mode secara lokal:

```bash
npm run build
npm run start
```

Setelah server berjalan, buka:

```text
http://localhost:3000
```

---

## Deployment

Project ini dapat di-deploy menggunakan platform yang mendukung Next.js, seperti Vercel.

Secara umum, deployment dapat dilakukan dengan:

1. Push repository ke GitHub.
2. Import repository ke platform deployment.
3. Pastikan framework terdeteksi sebagai Next.js.
4. Install dependencies.
5. Jalankan production build.
6. Deploy project.

Untuk deployment secara lokal, gunakan:

```bash
npm run build
npm run start
```

---

## Troubleshooting

### Dependencies tidak terinstall

Jika mengalami masalah saat menginstall dependencies, coba hapus `node_modules` dan install ulang.

Linux/macOS:

```bash
rm -rf node_modules
npm install
```

Windows PowerShell:

```powershell
Remove-Item -Recurse -Force node_modules
npm install
```

### Build error karena cache Next.js

Hapus folder `.next` kemudian build ulang.

Windows PowerShell:

```powershell
Remove-Item -Recurse -Force .next
npm run build
```

Linux/macOS:

```bash
rm -rf .next
npm run build
```

### Port 3000 sudah digunakan

Jika port `3000` sedang digunakan, jalankan project menggunakan port lain:

```bash
npm run dev -- -p 3001
```

Kemudian buka:

```text
http://localhost:3001
```

---

## Author

**Irene Raharjo**

GitHub:
[https://github.com/candicelith](https://github.com/candicelith)

---

## License

This project was created for educational and assignment purposes.

```

:contentReference[oaicite:0]{index=0}
```
