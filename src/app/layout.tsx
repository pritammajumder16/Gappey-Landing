import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

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
  title: "Gappey — Voice Party Rooms, Live Chat & Games",
  description:
    "Gappey is India's premier voice party app with 1–16 seat audio rooms, animated broadcast gifts, Blue & Pink star levels, CP bonding, and mini-games.",
  keywords: [
    "Gappey",
    "Gappey App",
    "Gappey India",
    "Voice Party Rooms",
    "Voice Chat Rooms",
    "Social Audio App",
    "Live Party Rooms",
    "Star Levels",
    "CP Intimacy",
    "Virtual Gifting",
    "Social Mini Games",
  ],
  authors: [{ name: "Gappey Team" }],
  alternates: {
    canonical: "https://gappey.in",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Gappey — Voice Party Rooms, Live Chat & Games",
    description:
      "Join live voice rooms, send full-screen animated gifts, level up with Blue & Pink stars, and hang out with friends on Gappey.",
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
    title: "Gappey — Voice Party Rooms, Live Chat & Games",
    description:
      "1–16 seat live voice rooms, animated gifts, Blue & Pink star levels, and entertainment mini-games on Gappey.",
    images: ["/mockup/d7cec7bb-fafd-4c06-bc7f-ef2bb58cac7a.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.png"],
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
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
