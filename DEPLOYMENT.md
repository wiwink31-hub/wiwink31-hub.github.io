# Deployment Guide untuk GitHub Pages

## URL Deployment
Website akan dapat diakses di: **https://wiwink31-hub.github.io/**

## Konfigurasi Vite

Vite sudah dikonfigurasi untuk GitHub Pages dengan pengaturan berikut:

- **Base Path**: `/` (root directory)
- **Port Development**: 5000
- **Output Directory**: `dist`
- **Assets Directory**: `assets`

## Fitur yang Sudah Dikonfigurasi

✅ **SPA Routing untuk GitHub Pages**
- File `public/404.html` untuk handle routing client-side
- Script redirect di `index.html` untuk navigation yang lancar
- `BrowserRouter` dengan `basename="/"` untuk root directory

✅ **GitHub Actions Workflow**
- Deploy otomatis setiap push ke branch `main`
- Build dan upload ke GitHub Pages
- Manual trigger tersedia

## Cara Deploy ke GitHub Pages

### 1. Setup Repository GitHub

**PENTING**: Untuk deploy di root (https://wiwink31-hub.github.io/), repository harus bernama:
```
wiwink31-hub.github.io
```

Langkah-langkah:
1. Buat repository baru dengan nama **wiwink31-hub.github.io**
2. Push project ini ke repository tersebut:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/wiwink31-hub/wiwink31-hub.github.io.git
   git push -u origin main
   ```

### 2. Aktifkan GitHub Pages

1. Buka repository di GitHub
2. Pergi ke **Settings** > **Pages**
3. Di bagian **Source**, pilih **GitHub Actions**
4. Workflow akan otomatis berjalan dan deploy website

### 3. Verifikasi Deployment

Setelah GitHub Actions selesai (cek tab "Actions"), website akan tersedia di:
```
https://wiwink31-hub.github.io/
```

## Build Manual (Opsional)

Untuk build secara lokal:

```bash
npm run build
```

File build akan ada di folder `dist/`

## Preview Build

Untuk preview build sebelum deploy:

```bash
npm run preview
```

## Struktur Project

```
/
├── dist/              # Build output (jangan di-commit)
├── public/            
│   ├── 404.html       # SPA redirect handler
│   └── ...            # Static assets
├── src/               
│   ├── components/    # React components
│   ├── pages/         # Page components  
│   └── assets/        # Images dan media
├── .github/
│   └── workflows/
│       └── deploy.yml # GitHub Pages workflow
├── index.html         # Main HTML dengan redirect script
└── vite.config.ts     # Vite config (base: "/")
```

## Routing

Semua routes sudah dikonfigurasi dan akan berfungsi dengan baik:
- `/` - Home
- `/shop` - Shop
- `/product/:id` - Product Detail
- `/cart` - Cart
- `/about` - About
- `/contact` - Contact
- `/sell` - Sell

## Troubleshooting

**404 Error saat refresh halaman?**
- Pastikan `public/404.html` sudah ter-deploy
- Pastikan script di `index.html` ada

**Website tidak muncul?**
- Cek tab "Actions" di GitHub untuk status deployment
- Pastikan repository bernama `wiwink31-hub.github.io`
- Pastikan GitHub Pages source sudah diset ke "GitHub Actions"

**Perubahan tidak muncul?**
- Clear browser cache (Ctrl+Shift+R atau Cmd+Shift+R)
- Tunggu beberapa menit untuk propagation
