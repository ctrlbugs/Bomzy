# TradePAT Landing Page - Next.js

A modern, high-performance landing page built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### ⚠️ IMPORTANT: Make sure you're in the `landing-page-nextjs` folder!

**The old HTML version has been removed** - this is the only landing page project.

```bash
# Navigate to the Next.js project folder
cd landing-page-nextjs

# Install dependencies
npm install

# Run development server
npm run dev
```

The server will start on **http://localhost:3002** and Next.js will display:
```
- Local:        http://localhost:3002
```

**Port Configuration:**
- **Default**: Port 3002 (avoids conflicts with user-dashboard on 3000 and admin on 3001)
- **Alternative**: Run `npm run dev:3000` to use port 3000 (may conflict with user-dashboard)

### 🎯 Quick Start Scripts

**Windows:**
- Double-click `start-server.bat` OR
- Right-click `start-server.ps1` → "Run with PowerShell"

**Manual:**
```bash
cd landing-page-nextjs
npm run dev
```

## 📁 Project Structure

```
landing-page-nextjs/
├── app/
│   ├── components/         # React components
│   │   ├── Navigation/     # Navbar, TopBanner
│   │   ├── Hero/           # Hero section
│   │   ├── Features/       # Features carousel
│   │   └── News/           # News carousel
│   ├── config/             # Configuration
│   │   └── constants.ts    # App constants
│   ├── lib/                 # Utilities
│   │   └── types.ts        # TypeScript types
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── public/
│   └── images/             # Static assets
└── package.json
```

## 🎯 Features

- ✅ **Next.js 15** with App Router
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS** for styling
- ✅ **Server Components** for performance
- ✅ **SEO Optimized** with metadata
- ✅ **Responsive Design** for all devices
- ✅ **Component-Based** architecture

## 📝 Migration Status

### ✅ Completed
- [x] Project setup
- [x] Layout with metadata
- [x] Global styles and CSS variables
- [x] Navigation components (TopBanner, Navbar)
- [x] Configuration system

### 🚧 In Progress
- [ ] Hero section with rotating titles
- [ ] Features carousel
- [ ] Market ticker
- [ ] News carousel
- [ ] Other sections (Stats, About, FAQ, Footer)

### 📋 TODO
- [ ] Language selector
- [ ] Animations and transitions
- [ ] Performance optimization
- [ ] Testing

## 🔧 Configuration

Update authentication URLs in `app/config/constants.ts`:

```typescript
export const LandingPageConfig = {
  authSignUpUrl: '/UserAuth.html',
  authSignInUrl: '/UserAuth.html',
  // ...
};
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Other Platforms
- **Netlify**: Connect GitHub repo or drag & drop
- **AWS Amplify**: Connect repo
- **Docker**: Build and deploy container

## 📚 Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Material Icons
- **Fonts**: Inter (Google Fonts)

## 🤝 Contributing

This is a proprietary project. For changes, contact the development team.

## 📄 License

Copyright © TradePAT. All rights reserved.
