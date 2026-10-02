"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoDemoSection from "@/components/VideoDemoSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import InteractiveGifts from "@/components/InteractiveGifts";
import DownloadSection from "@/components/DownloadSection";
import DeveloperPromo from "@/components/DeveloperPromo";
import Footer from "@/components/Footer";

export default function Home() {
  const handleScrollToDownload = () => {
    const el = document.getElementById("download");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToVideo = () => {
    const el = document.getElementById("promo-film");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-[#06060c] text-white selection:bg-pink-600 selection:text-white">
      {/* Fixed Navigation Bar */}
      <Navbar onOpenPreRegister={handleScrollToDownload} />

      {/* Hero Section with 3D Blended Mockup */}
      <HeroSection onOpenVideo={handleScrollToVideo} />

      {/* Official Launch Promo Film (Landscape Widescreen Player) */}
      <VideoDemoSection />

      {/* Core Features & Real App Screens (Dynamic 1-16 Seats, Star Levels, VIP, CP Intimacy, Moments) */}
      <FeaturesGrid />

      {/* Interactive Animated Gifts & SVGA Simulator */}
      <InteractiveGifts />

      {/* Google Play Pre-Registration & Direct APK Download */}
      <DownloadSection />

      {/* Developer & Software Solutions Banner */}
      <DeveloperPromo />

      {/* Footer */}
      <Footer />
    </main>
  );
}
