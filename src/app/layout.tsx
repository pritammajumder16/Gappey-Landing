import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { FAQS } from "@/constants/faqs";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gappey.in"),
  title: "Gappey — Live Voice Party Rooms, Audio Chat & Creator Community",
  description:
    "Download the Gappey Android APK: India's trending voice chat app. Join 1–16 seat live audio rooms, send luxury animated broadcast gifts, play social table games, or earn creator rewards as a live room host.",
  keywords: [
    "Gappey",
    "Gappey App",
    "Gappey India",
    "Gappey APK Download",
    "voice chat rooms",
    "voice party app",
    "live audio party",
    "group voice chat app",
    "voice room host",
    "host earning app",
    "creator monetization app",
    "audio talent rewards",
    "live streaming host",
    "virtual gifting app",
    "animated broadcast gifts",
    "16 seat voice room",
    "social audio party",
    "CP intimacy bonding",
    "VIP prestige",
    "Blue Star gifter level",
    "Pink Star broadcaster level",
    "play ludo in voice room",
    "carrom audio party",
    "Indian voice party app",
    "talk to strangers voice",
    "make friends online voice chat",
  ],
  authors: [{ name: "Gappey Team" }],
  alternates: {
    canonical: "https://gappey.in",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Gappey — Live Voice Party Rooms, Audio Chat & Creator Community",
    description:
      "Join live voice party rooms, send full-screen animated gifts, level up with Blue & Pink stars, play table games, and earn creator rewards on Gappey.",
    url: "https://gappey.in",
    siteName: "Gappey",
    images: [
      {
        url: "/mockup/d7cec7bb-fafd-4c06-bc7f-ef2bb58cac7a.png",
        width: 1200,
        height: 630,
        alt: "Gappey Voice Party Chat Room Mockup",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gappey — Live Voice Party Rooms, Audio Chat & Creator Community",
    description:
      "1–16 seat live voice rooms, animated broadcast gifts, host creator rewards, and social games on Gappey.",
    images: ["/mockup/d7cec7bb-fafd-4c06-bc7f-ef2bb58cac7a.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://gappey.in/#organization",
      name: "Gappey",
      url: "https://gappey.in",
      logo: {
        "@type": "ImageObject",
        url: "https://gappey.in/icon-192.png",
        width: 192,
        height: 192,
      },
      email: "gappeyindia@gmail.com",
      sameAs: [
        "https://instagram.com/gappey.india",
        "https://www.youtube.com/@GappeyIndia",
        "https://www.facebook.com/profile.php?id=61594831059345",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://gappey.in/#website",
      name: "Gappey",
      url: "https://gappey.in",
      alternateName: "Gappey App",
      publisher: {
        "@id": "https://gappey.in/#organization",
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "MobileApplication",
      "@id": "https://gappey.in/#app",
      name: "Gappey",
      operatingSystem: "Android",
      applicationCategory: "SocialNetworkingApplication",
      downloadUrl: "https://gappey.in/download-android",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
      },
      publisher: {
        "@id": "https://gappey.in/#organization",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://gappey.in/#faq",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="theme-color" content="#06060c" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jakarta.variable} font-sans bg-[#06060c] text-zinc-100 antialiased selection:bg-pink-600 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
