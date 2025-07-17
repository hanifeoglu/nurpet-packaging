# Nurpet Packaging Website

Modern, responsive website for Nurpet Packaging Inc. built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Performance**: Optimized for speed and SEO
- **Interactive**: Smooth animations and transitions
- **Multi-page**: Products, Design & RD, About Us, Media, and Sustainability pages

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel, Netlify, or custom server

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── products/          # Products page
│   ├── design-rd/         # Design & RD page
│   ├── about/             # About Us page
│   ├── media/             # Media page
│   └── sustainability/    # Sustainability page
├── components/            # Reusable components
│   ├── Banner.tsx        # Hero slider component
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Footer component
│   └── Logo.tsx          # Logo component
├── public/               # Static assets
│   └── images/          # Image files
└── styles/              # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/hanifeoglu/nurpet-packaging.git
cd nurpet-packaging
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Custom Server
```bash
# Use the provided deployment scripts
./deploy.sh
```

## 🎨 Customization

### Colors
The main brand colors are defined in `tailwind.config.js`:
- Primary: `#FF4B37` (Orange/Red)
- Secondary: `#2C2E35` (Dark Gray)

### Content
Update content in the respective page components:
- `app/page.tsx` - Homepage content
- `app/products/page.tsx` - Products page
- `app/about/page.tsx` - About Us page
- etc.

## 📄 License

This project is created for Nurpet Packaging Inc.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

For any questions or support, please contact the development team. 