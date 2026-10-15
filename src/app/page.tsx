"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import FAQSection from "@/components/FAQSection";
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

  return (
    <main className="min-h-screen bg-[#06060c] text-white selection:bg-pink-600 selection:text-white">
      {/* Navigation Bar */}
      <Navbar onScrollToDownload={handleScrollToDownload} />

      {/* Hero Section */}
      <HeroSection onScrollToDownload={handleScrollToDownload} />

      {/* Core Features Grid (Built from real FRS & SRS v1.0 features) */}
      <FeaturesGrid />

      {/* Interactive FAQ Section (SEO & Rich Snippets) */}
      <FAQSection />

      {/* Direct Android APK Download Section */}
      <DownloadSection />

      {/* Developer & Community Banner */}
      <DeveloperPromo />

      {/* Footer */}
      <Footer />
    </main>
  );
}
