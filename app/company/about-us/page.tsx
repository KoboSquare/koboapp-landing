import React from "react";
import AboutHero from "@/components/about/about-hero";
import BuiltInAfrica from "@/components/about/builtIn-africa";
import Footer from "@/components/shared/footer";
import CoreValues from "@/components/about/core-values";
import Header from "@/components/shared/header";
import logo from "@/assets/Logo2.svg";
import Image from "next/image";
import WhatIsKoboConnect from "@/components/about/WhatIsKoboConnect";

function AboutPage() {
  return (
    <main>
      <Header textColor='black' backgroundColor='white' logo={<Image src={logo} alt='Logo' width={100} height={100} />} />
      <div className="mb-16 relative space-y-4 md:space-y-12 lg:space-y-24">
        <AboutHero />
        <WhatIsKoboConnect />
        <BuiltInAfrica />
        <CoreValues />
      </div>
      <Footer />
    </main>
  );
}

export default AboutPage;
