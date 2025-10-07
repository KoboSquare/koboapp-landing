import Image from "next/image";
import React from "react";
import AboutheroBgImage from "@/assets/images/about-hero-bg-image.jpg";
import gradientBg from '@/assets/images/gradientBg.png'

export default function AboutHero() {
  return (
    <div className="h-[40vh] flex flex-col justify-center items-center relative max-w-6xl mx-auto">
      <Image src={AboutheroBgImage} alt='press' fill className="object-cover rounded-2xl" />

      <div className="z-10 text-white absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-2xl md:text-5xl font-semibold mb-4">About Us</h2>
      </div>

      <Image src={gradientBg} alt='gradient' fill className="object-cover rounded-2xl opacity-90 z-0" />

    </div>
  );
}
