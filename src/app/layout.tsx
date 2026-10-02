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
  title: "Gappey - Ultimate Voice Party & Social Hangout | Coming Soon on Google Play",
  description: "Experience the next-generation voice party chat rooms with up to 16 dynamic seats, breathtaking full-screen animated gifts, dual-level progression, VIP prestige clubs, and real-time social gaming. Coming soon to Google Play Store!",
  keywords: [
    "Gappey",
    "Voice Party App",
    "Voice Chat Rooms",
    "Social Audio App",
    "Google Play Store",
    "Live Party Rooms",
    "Karaoke Live",
    "VIP Prestige",
    "Virtual Gifting",
    "Social Gaming"
  ],
  authors: [{ name: "Gappey Team" }],
  openGraph: {
    title: "Gappey - Ultimate Voice Party Chat Rooms",
    description: "Join live voice rooms, send luxury animated gifts, rise through whale & star levels, and connect with millions. Coming soon on Google Play Store!",
    url: "https://gappey.app",
    siteName: "Gappey",
    images: [
      {
        url: "/mockup/d7cec7bb-fafd-4c06-bc7f-ef2bb58cac7a.png",
        width: 1200,
        height: 630,
        alt: "Gappey Voice Party Chat Room Mockup",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gappey - Voice Party Chat Room App",
    description: "Coming soon on Google Play Store! 16-seat live voice rooms, SVIP rides, animated gifts, and social gaming.",
    images: ["/mockup/d7cec7bb-fafd-4c06-bc7f-ef2bb58cac7a.png"],
  },
  icons: {
    icon: "/assets/logo.jpeg",
    shortcut: "/assets/logo.jpeg",
    apple: "/assets/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/assets/logo.jpeg" />
        <meta name="theme-color" content="#07070d" />
      </head>
      <body className={`${inter.variable} ${jakarta.variable} font-sans bg-[#06060c] text-zinc-100 antialiased selection:bg-purple-600 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
