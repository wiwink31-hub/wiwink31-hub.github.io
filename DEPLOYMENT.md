# Deployment Guide untuk GitHub Pages

## Konfigurasi Vite

Vite sudah dikonfigurasi untuk GitHub Pages dengan pengaturan berikut:

- **Base Path**: `/` (root directory)
- **Port Development**: 5000
- **Output Directory**: `dist`
- **Assets Directory**: `assets`

## Cara Deploy ke GitHub Pages

### 1. Setup Repository GitHub

1. Push project ini ke GitHub repository
2. Buka repository di GitHub
3. Pergi ke **Settings** > **Pages**
4. Di bagian **Source**, pilih **GitHub Actions**

### 2. Deploy Otomatis

Workflow GitHub Actions sudah dikonfigurasi di `.github/workflows/deploy.yml` yang akan:

- Build otomatis setiap kali ada push ke branch `main`
- Deploy ke GitHub Pages
- Dapat dijalankan manual melalui "Actions" tab

### 3. Build Manual (Opsional)

Untuk build secara lokal:

```bash
npm run build
```

File build akan ada di folder `dist/`

### 4. Preview Build

Untuk preview build sebelum deploy:

```bash
npm run preview
```

## Struktur Project

```
/
├── dist/              # Build output (jangan di-commit)
├── public/            # Static assets
├── src/               # Source code
│   ├── components/    # React components
│   ├── pages/         # Page components
│   └── assets/        # Images dan media
├── .github/
│   └── workflows/
│       └── deploy.yml # GitHub Pages workflow
└── vite.config.ts     # Vite configuration
```

## Catatan Penting

- Base path sudah diset ke `/` untuk root directory deployment
- Server development berjalan di port 5000
- Build otomatis menggunakan GitHub Actions
- Semua route sudah dikonfigurasi untuk SPA (Single Page Application)
