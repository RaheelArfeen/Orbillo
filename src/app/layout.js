import { Geist, Geist_Mono, Urbanist, Poppins } from "next/font/google";
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

// ✅ Built-in Metadata API (App Router)
export const metadata = {
  title: "Orbillo - Your Digital Growth Partner",
  description:
    "We help businesses grow with strategy-driven design, development, and digital experiences.",
  metadataBase: new URL("https://orbillo.com"),
  openGraph: {
    title: "Orbillo - Your Digital Growth Partner",
    description:
      "We help businesses grow with strategy-driven design, development, and digital experiences.",
    url: "https://orbillo.com",
    siteName: "Orbillo",
    images: [
      {
        url: "https://orbillo.com/CoverImage.jpg",
        alt: "Orbillo – Your Digital Growth Partner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orbillo - Your Digital Growth Partner",
    description:
      "We help businesses grow with strategy-driven design, development, and digital experiences.",
    images: ["https://orbillo.com/CoverImage.jpg"],
  },
};

export default function RootLayout({ children }) {
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
        className={`${geistSans.variable} ${geistMono.variable} ${urbanist.variable} ${poppins.variable} antialiased`}
      >
        {children}

        {/* Scripts & client-only components */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />

        <SmoothScroll />
        <FloatingButton />
      </body>
    </html>
  );
}
