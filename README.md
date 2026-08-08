# Orbillo

Marketing website for **Orbillo** — a full-service design agency offering brand identity, UI/UX design, web development, and social media design for businesses worldwide.

Built with the Next.js App Router, styled with Tailwind CSS, and animated with Framer Motion, GSAP, and Lenis smooth scrolling.

🔗 **Live:** [orbillo.com](https://www.orbillo.com)

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router) + React 18
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com)
- **Animation:** [Framer Motion](https://www.framer.com/motion/), [GSAP](https://gsap.com), [Lenis](https://github.com/studio-freight/lenis) smooth scroll
- **UI:** Swiper, react-fast-marquee, lucide-react, react-icons
- **Fonts:** Bricolage Grotesque, Outfit, Playfair Display (via `next/font`)
- **Email:** [Resend](https://resend.com) for the contact form
- **Deployment:** [Vercel](https://vercel.com)

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env.local` file in the project root:

```bash
# Resend API key — powers the contact form emails
RESEND_API_KEY=your_resend_api_key
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/
│   ├── (basic)/              # Pages sharing the Header + Footer layout
│   │   ├── page.jsx          # Home
│   │   ├── about/            # About page + sections
│   │   ├── careers/          # Careers page + sections
│   │   ├── contact/          # Contact page + form
│   │   └── services/         # Branding, UI/UX, Web Development, Social Media
│   ├── api/
│   │   └── contact/          # Contact form handler (Resend)
│   ├── components/           # Shared components (Header, Footer, Hero, etc.)
│   ├── layout.js             # Root layout, metadata, analytics
│   ├── globals.css           # Global styles + font utilities
│   ├── sitemap.js            # Dynamic sitemap
│   └── robots.js             # robots.txt
├── assets/                   # Images, icons, marquee art
└── ...
```

## Pages

- **Home** — hero, services, work, testimonials, FAQ, and CTA
- **About** — story, philosophy, vision, team, and featured clients
- **Careers** — hero, principles, work culture, open positions, team, and FAQ
- **Services** — dedicated pages for Branding, UI/UX, Web Development, and Social Media
- **Contact** — inquiry form that emails the team via Resend

## Deployment

The site is deployed on Vercel. Every push to `main` triggers a production deployment. Configure the `RESEND_API_KEY` environment variable in your Vercel project settings.
