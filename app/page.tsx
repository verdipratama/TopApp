"use client";

import { Suspense } from "react";
import { Search } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import FeaturedApps from "@/components/FeaturedApps";
import TopApps from "@/components/TopApps";
import EssentialApps from "@/components/EssentialApps";
import Header from "@/components/Header";
import Loading from "./loading";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Suspense fallback={<Loading />}>
        <div className="container mx-auto px-4 py-6 space-y-12">
          <HeroSection />
          <FeaturedApps />
          <TopApps />
          <EssentialApps />
        </div>
      </Suspense>
    </main>
  );
}