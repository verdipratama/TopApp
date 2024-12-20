"use client";

import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <section className="relative h-[500px] rounded-2xl overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1593642532744-d377ab507dc8?auto=format&fit=crop&q=80&w=2000')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      <div className="relative h-full flex items-center">
        <div className="container px-8 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white max-w-2xl">
            Discover amazing apps for Windows
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-xl">
            Find and download the best apps and games for your Windows device
          </p>
          <Button size="lg" className="text-lg">
            Explore Now
          </Button>
        </div>
      </div>
    </section>
  );
}