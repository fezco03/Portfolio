# 🚀 Joshua Lopez - Portfolio Website

A modern, dynamic, and fully responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## ✨ Features

### 🎨 Design & Animations
- **Dark/Light Theme** - Toggle between themes with persistent storage
- **Smooth Animations** - Framer Motion powered animations throughout
- **Particle Background** - Interactive particle system
- **Custom Cursor** - Animated cursor (desktop only)
- **3D Effects** - Card hover tilts and rotations
- **Scroll Animations** - Elements animate as you scroll
- **Loading Screen** - Animated logo on initial load

### 📱 Sections
1. **Hero** - Typing animation, gradient blobs, social links
2. **About Me** - Image carousel, stats grid, bio
3. **Services** - 6 service cards with features
4. **Skills** - Animated progress bars across 4 categories
5. **Stats Counter** - Animated statistics banner
6. **Projects** - 5 project cards with live links
7. **Testimonials** - Client testimonials carousel
8. **Experience** - Timeline with achievements
9. **Blog** - Latest articles preview
10. **Contact** - Working contact form (mailto integration)

### 🛠️ Technologies
- **React 19** - Latest React features
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Advanced animations
- **React Icons** - Icon library
- **TypeScript Particles** - Particle effects
- **EmailJS** - Contact form integration
- **Intersection Observer** - Scroll detection

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd Portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open your browser
```
http://localhost:3000
```

### Build for Production

```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── lopez.png
│   └── assssw.jpg
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Blog.jsx
│   │   ├── Contact.jsx
│   │   ├── Cursor.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ParticlesBackground.jsx
│   │   ├── Projects.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── Services.jsx
│   │   ├── Skills.jsx
│   │   ├── Stats.jsx
│   │   ├── Testimonials.jsx
│   │   └── ThemeToggle.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.cjs
└── package.json
```

## 🎯 Features Breakdown

### Hero Section
- Auto-typing job titles
- Animated gradient background blobs
- Social media links
- Smooth scroll indicator

### About Section
- Automatic image carousel (4-second intervals)
- Manual control via indicators
- Animated stats cards
- Hover effects

### Services Section
- 6 service offerings
- Feature lists
- Icon animations
- Call-to-action button

### Skills Section
- 4 categories of skills
- Animated progress bars
- Hover lift effects
- No percentage display (visual only)

### Projects Section
- 5 featured projects
- Live link for Blvck Entertainment
- 3D hover effects
- Gradient overlays

### Contact Form
- **Working email integration**
- Opens default email client
- Pre-filled recipient (joshualopez0990@gmail.com)
- Success/error feedback
- Form validation

## 🔧 Customization

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: { ... },
  secondary: { ... },
  accent: { ... }
}
```

### Update Contact Email
In `src/components/Contact.jsx`:
```javascript
to_email: 'your-email@gmail.com'
```

### Add More Projects
In `src/components/Projects.jsx`:
```javascript
const projects = [
  {
    title: 'Your Project',
    description: '...',
    link: 'https://your-link.com',
    // ...
  }
]
```

## 📧 Contact Form Setup

The form currently uses `mailto:` for simplicity. To enable direct email sending:

1. Sign up at [EmailJS](https://www.emailjs.com)
2. Get your Service ID, Template ID, and Public Key
3. Update in `src/components/Contact.jsx`

## 🌐 Deployment

### Netlify
```bash
npm run build
# Drag and drop 'dist' folder to Netlify
```

### Vercel
```bash
npm run build
vercel --prod
```

### GitHub Pages
```bash
npm run build
# Push 'dist' folder to gh-pages branch
```

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Joshua Lopez**
- Email: joshualopez0990@gmail.com
- Facebook: [lopez.fezco03](https://www.facebook.com/lopez.fezco03/)
- Portfolio: [Your Live URL]

## 🎓 Education

- **Cum Laude Graduate** - STI College
- **President Lister** - Multiple Terms
- **Best AR Capstone Project** - Altora: AR Solar System

---

Made with ❤️ by Joshua Lopez
