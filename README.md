# 🪐 Astro Oracles - Platform Astrologi Modern

<div align="center">

![Astro Oracles Banner](https://img.shields.io/badge/Astro_Oracles-Unlock_Your_Cosmic_Destiny-purple?style=for-the-badge&logo=stars&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript&logoColor=white)

**✨ Portal kosmik untuk eksplorasi astrologi personal ✨**

[📋 Fitur](#-fitur) • [🚀 Demo](#-demo) • [💻 Instalasi](#-instalasi) • [📁 Struktur Proyek](#-struktur-proyek) • [🎨 Desain](#-desain) • [🤝 Kontribusi](#-kontribusi)

</div>

## 🌟 Tentang Proyek

Astro Oracles adalah platform web modern yang menghadirkan pengalaman astrologi interaktif dan personal. Dibangun dengan teknologi terkini, aplikasi ini menawarkan berbagai fitur astrologi dengan antarmuka yang immersive dan emosional.

> "Temukan takdir Anda di dunia astrologi dengan panduan yang personal dan akurat."

![Astro Oracles Preview](https://via.placeholder.com/800x400/0a0a1a/a855f7?text=Astro+Oracles+Preview)

## ✨ Fitur

### 🔐 **Authentication & User Management**
- **Login** - Sistem login dengan validasi dan keamanan
- **Sign Up** - Pendaftaran multi-step dengan pilihan zodiak
- **Forgot Password** - Reset password dengan email verification
- **Success Page** - Konfirmasi pendaftaran dengan animasi spektakuler

### 💫 **Compatibility Checker**
- **Analisis Zodiak** - Cek kecocokan dua individu berdasarkan zodiak
- **Hasil Personal** - Persentase kecocokan dengan penjelasan mendalam
- **Visual Interaktif** - Animasi kosmik dan efek visual menarik
- **Langkah Praktis** - Saran dan rekomendasi berdasarkan hasil

### 🌌 **Halaman Utama**
- **Dashboard Kosmik** - Portal utama dengan navigasi lengkap
- **Zodiac Carousel** - Display 12 zodiak dengan animasi
- **Features Grid** - Akses cepat ke semua fitur
- **Real-time Stats** - Statistik pengguna dan waktu kosmik

### 🎨 **Desain & UX**
- **Tema Kosmik** - Warna ungu, biru, dan efek nebula
- **Animasi Halus** - Transisi dan micro-interactions
- **Responsive Design** - Optimal di semua device
- **Aksesibilitas** - Kontras warna dan navigasi keyboard-friendly

## 🚀 Demo

### Live Demo
🌐 [https://astro-oracles.vercel.app](https://astro-oracles.vercel.app) *(coming soon)*

### Screenshots

| Halaman Login | Compatibility Checker | Halaman Utama |
|--------------|----------------------|---------------|
| ![Login](https://via.placeholder.com/300x200/0a0a1a/a855f7?text=Login+Page) | ![Compatibility](https://via.placeholder.com/300x200/1a0a2a/d8b4fe?text=Compatibility) | ![Home](https://via.placeholder.com/300x200/0a1a2a/8b5cf6?text=Home+Page) |

| Sign Up | Forgot Password | Success Page |
|---------|-----------------|--------------|
| ![Sign Up](https://via.placeholder.com/300x200/0a0a1a/a855f7?text=Sign+Up) | ![Forgot](https://via.placeholder.com/300x200/1a0a2a/d8b4fe?text=Forgot+Pass) | ![Success](https://via.placeholder.com/300x200/0a1a2a/8b5cf6?text=Success) |

## 💻 Teknologi

### **Frontend Stack**
- **Next.js 14** - React framework dengan App Router
- **TypeScript** - Type safety dan maintainability
- **CSS Modules** - Styling modular dan scoped
- **React Hooks** - State management modern

### **Development Tools**
- **ESLint** - Code linting dan quality
- **Prettier** - Code formatting
- **Git** - Version control

### **Deployment**
- **Vercel** - Platform deployment terbaik untuk Next.js
- **Environment Variables** - Konfigurasi aman

## 📦 Instalasi

### Prasyarat
- Node.js 18+ dan npm/yarn
- Git

### Langkah Instalasi

1. **Clone Repository**
   ```bash
   git clone https://github.com/yourusername/astro-oracles.git
   cd astro-oracles
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # atau
   yarn install
   ```

3. **Environment Setup**
   ```bash
   # Salin file .env.example ke .env.local
   cp .env.example .env.local
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   # atau
   yarn dev
   ```

5. **Buka di Browser**
   ```
   http://localhost:3000
   ```

### Build untuk Production
```bash
npm run build
npm start
```

## 📁 Struktur Proyek

```
astro-oracles/
├── src/
│   ├── app/
│   │   ├── page.tsx                    # Halaman utama
│   │   ├── layout.tsx                  # Root layout
│   │   ├── globals.css                 # Global styles
│   │   ├── login/                      # Halaman login
│   │   │   ├── page.tsx
│   │   │   └── login.module.css
│   │   ├── signup/                     # Halaman registrasi
│   │   │   ├── page.tsx
│   │   │   ├── success/
│   │   │   │   ├── page.tsx
│   │   │   │   └── Success.module.css
│   │   │   └── SignUp.module.css
│   │   ├── forgot-password/            # Reset password
│   │   │   ├── page.tsx
│   │   │   └── ForgotPassword.module.css
│   │   └── compatibility/              # Compatibility checker
│   │       ├── page.tsx
│   │       └── Compatibility.module.css
│   └── components/                     # Shared components
├── public/                             # Static assets
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## 🎨 Desain & Theme

### Palet Warna
```css
/* Cosmic Color Palette */
--cosmic-purple: #8B5CF6;
--cosmic-pink: #A855F7;
--cosmic-lavender: #D8B4FE;
--cosmic-dark: #0A0A1A;
--cosmic-darker: #1A0A2A;
--cosmic-blue: #0A1A2A;
```

### Tipografi
- **Headings**: Georgia, serif
- **Body**: System UI, sans-serif
- **Sizes**: Rem-based scaling

### Animasi
- **Background Effects**: Nebula float, stars twinkle
- **UI Transitions**: Fade, slide, scale
- **Interactive**: Hover states, button effects

## 🚀 Deployment

### Deploy ke Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/astro-oracles)

1. Push code ke GitHub
2. Import project ke Vercel
3. Konfigurasi environment variables
4. Deploy!

### Environment Variables
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
# Tambahkan API keys jika diperlukan
```

## 🤝 Kontribusi

Kontribusi sangat diterima! Berikut cara berkontribusi:

1. **Fork** repository
2. **Buat branch** untuk fitur baru
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit** perubahan
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push** ke branch
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Buat Pull Request**

### Pedoman Kontribusi
- Ikuti code style yang ada
- Tambahkan tests untuk fitur baru
- Update dokumentasi jika diperlukan
- Gunakan commit messages yang deskriptif

## 📄 Lisensi

Proyek ini dilisensikan di bawah **MIT License** - lihat file [LICENSE](LICENSE) untuk detail.

## 👥 Tim & Kontributor

- **Project Lead**: [Nama Anda](https://github.com/yourusername)
- **UI/UX Design**: [Nama Designer](https://github.com/designer)
- **Frontend Development**: [Nama Developer](https://github.com/developer)

## 🌟 Support

Jika Anda menemukan proyek ini berguna, berikan bintang ⭐ di GitHub!

## 📞 Kontak

**Nama Proyek**: Astro Oracles  
**Email**: support@astrooracles.com  
**Issues**: [GitHub Issues](https://github.com/yourusername/astro-oracles/issues)  
**Discussions**: [GitHub Discussions](https://github.com/yourusername/astro-oracles/discussions)

---

<div align="center">

**✨ May the stars guide your journey ✨**

Dibuat dengan ❤️ oleh komunitas astrologi digital

[⬆ Kembali ke atas](#-astro-oracles---platform-astrologi-modern)

</div>

## 🎯 Roadmap

### Phase 1 - Foundation ✅
- [x] Authentication system
- [x] Core UI components
- [x] Basic astrological features
- [x] Responsive design

### Phase 2 - Enhancement 🚧
- [ ] User profiles & dashboards
- [ ] Advanced astrological calculations
- [ ] Social features (share results)
- [ ] Mobile app (React Native)

### Phase 3 - Expansion 📅
- [ ] AI-powered predictions
- [ ] Community forums
- [ ] Premium features
- [ ] API for developers

## 🔧 Troubleshooting

### Common Issues

1. **Module not found errors**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **TypeScript errors**
   ```bash
   npm run type-check
   ```

3. **Build errors**
   ```bash
   npm run clean
   npm run build
   ```

### Performance Tips
- Gunakan `npm run build -- --analyze` untuk bundle analysis
- Optimasi images dengan next/image
- Implementasi lazy loading untuk komponen besar

## 📚 Dokumentasi Tambahan

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)

---

**Catatan**: Proyek ini untuk tujuan edukasi dan hiburan. Hasil astrologi tidak dimaksudkan sebagai saran profesional.
