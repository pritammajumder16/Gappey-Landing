"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoDemoSection from "@/components/VideoDemoSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import ScreenshotsShowcase from "@/components/ScreenshotsShowcase";
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
    const el = document.getElementById("live-demo");
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

      {/* Real In-App Screen Recording Video Section */}
      <VideoDemoSection />

      {/* Core Features & Highlights */}
      <FeaturesGrid />

      {/* Interactive In-App Screenshots Gallery & Zoom Modal */}
      <ScreenshotsShowcase />

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
