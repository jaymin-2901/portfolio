# Jaymin Chavda Portfolio

A premium, futuristic developer portfolio website featuring modern UI/UX, smooth animations, and interactive elements. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

![Portfolio Preview](https://via.placeholder.com/1200x630/0a0a0f/6366f1?text=Jaymin+Chavda+Portfolio)

## Features

### Core Features
- **Dark/Light Mode Toggle** - Smooth theme switching with persistence
- **Custom Cursor** - Interactive cursor that morphs on hover
- **Smooth Scrolling** - Native CSS smooth scrolling
- **Loading Animation** - Animated intro screen with progress
- **Responsive Design** - Mobile-first approach

### Sections
1. **Hero** - Animated intro with CTAs and social links
2. **About** - Personal story with stats and values
3. **Skills** - Animated progress bars and tech cloud
4. **Projects** - Filterable project cards with details
5. **Timeline** - Academic and professional journey
6. **Achievements** - Stats with animated counters
7. **Contact** - Working contact form with EmailJS

### Premium Features
- **AI Chatbot** - Interactive FAQ about Jaymin
- **Glassmorphism** - Modern glass effects
- **Gradient Animations** - Subtle animated backgrounds
- **Micro-interactions** - Hover effects everywhere
- **Particle Effects** - Animated background elements

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email**: EmailJS
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jayminchavda/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up EmailJS (for contact form):
   - Create account at [EmailJS](https://www.emailjs.com/)
   - Create an email service
   - Create an email template
   - Update `src/components/sections/Contact.tsx` with your keys

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Home page
│   ├── components/
│   │   ├── sections/         # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Timeline.tsx
│   │   │   ├── Achievements.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   └── widgets/          # Reusable widgets
│   │       ├── CustomCursor.tsx
│   │       ├── ThemeProvider.tsx
│   │       ├── ChatBot.tsx
│   │       ├── LoadingScreen.tsx
│   │       └── Navigation.tsx
│   └── lib/
│       ├── utils.ts         # Utility functions
│       └── constants.ts     # App constants/data
├── public/
├── SPEC.md                  # Design specification
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Customization

### Personal Information
Update `src/lib/constants.ts` with your details:
- Name, role, tagline
- Contact information
- Social links
- Skills and projects
- Timeline events

### Theme Colors
Modify CSS variables in `src/app/globals.css`:
```css
:root {
  --primary: #6366f1;
  --secondary: #8b5cf6;
  --accent: #06b6d4;
  /* ... */
}
```

### Contact Form Setup
1. Create EmailJS account
2. Create email service (Gmail, Outlook, etc.)
3. Create template:
```html
From: {{from_name}}
Email: {{from_email}}
Message: {{message}}
```
4. Update Contact.tsx with your keys:
```typescript
await emailjs.send(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  formData,
  "YOUR_PUBLIC_KEY"
);
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/jayminchavda/portfolio.git
git push -u origin main
```

### Manual Deploy

```bash
npm run build
npm start
```

## Performance

- Lighthouse Score: 95+ (target)
- First Contentful Paint: < 1s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## Browser Support

- Chrome 90+
- Firefox 90+
- Safari 14+
- Edge 90+

## License

MIT License - feel free to use for personal or commercial projects.

## Author

**Jaymin Chavda**
- GitHub: [@jayminchavda](https://github.com/jayminchavda)
- LinkedIn: [jayminchavda](https://linkedin.com/in/jayminchavda)
- Email: 202301226@dau.ac.in

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
