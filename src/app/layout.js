import { Geist, Geist_Mono, Urbanist, Poppins, Playfair_Display, Bricolage_Grotesque } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SmoothScroll from "./smoothScroll";
import FloatingButton from "./components/FloatingButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  fallback: ["sans-serif"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  fallback: ["sans-serif"],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600'],
  style: ['italic'],
  variable: '--font-playfair',
});

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
});

// ✅ Built-in Metadata API (App Router)
export const metadata = {
  metadataBase: new URL("https://www.orbillo.com"),
  title: "Orbillo | UI UX Design, Branding and Web Development Agency",
  description:
    "Orbillo is a full-service design agency offering branding, UI/UX design, web development and social media design for businesses worldwide.",
  keywords: [
    "design agency",
    "branding agency",
    "UI UX design",
    "web development",
    "social media design",
    "digital agency Bangladesh",
  ],
  openGraph: {
    title: "Orbillo | Your Reliable Design Partner",
    description:
      "Bold branding, stunning UI/UX, powerful web development and scroll-stopping social media design - all under one roof.",
    url: "https://www.orbillo.com/",
    siteName: "Orbillo",
    images: [
      {
        url: "/orbillo-og.webp",
        alt: "Orbillo | Your Reliable Design Partner",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://www.orbillo.com/",
  },
};

export default function RootLayout({ children }) {

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Orbillo',
    url: 'https://www.orbillo.com',
    logo: 'https://www.orbillo.com/logo.png',
    description: 'Orbillo is a full-service design agency offering branding, UI UX design, web development and social media design for businesses worldwide.',
    foundingDate: '2025',
    areaServed: 'Worldwide',
    serviceType: [
      'Brand Identity Design',
      'UI UX Design',
      'Web Development',
      'Social Media Design',
    ],
    sameAs: [
      'https://www.linkedin.com/company/teamorbillo',
      'https://www.behance.net/teamorbillo',
      'https://www.facebook.com/TeamOrbillo',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'English',
      url: 'https://wa.me/8801711252085',
    },
  }

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KLWKP8KYCM"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KLWKP8KYCM');
          `}
        </Script>

        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "v04gh1jw0k");
          `}
        </Script>

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${urbanist.variable} ${poppins.variable} ${playfair.variable} ${bricolage.variable} antialiased`}
      >
        {children}

        {/* Scripts & client-only components */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />

        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        <SmoothScroll />
        <FloatingButton />
      </body>
    </html>
  );
}
