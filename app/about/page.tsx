import React from "react";
import Header from "@/components/about/header";
import AboutHero from "@/components/about/about-hero";
import BuiltInAfrica from "@/components/about/builtIn-africa";
import Footer from "@/components/home/footer";
import CoreValues from "@/components/about/core-values";

function AboutPage() {
  return (
    <div>
      <div className="flex flex-col h-[80dvh] relative">
        <Header />
        <AboutHero />
        <BuiltInAfrica />
        <CoreValues />
        <Footer />
      </div>
    </div>
  );
}

export default AboutPage;
