import React from "react";
import AboutHero from "@/components/about/about-hero";
import BuiltInAfrica from "@/components/about/builtIn-africa";
import Footer from "@/components/shared/footer";
import CoreValues from "@/components/about/core-values";
import Header from "@/components/shared/header";
import logo from "@/assets/Logo2.svg";
import Image from "next/image";

function AboutPage() {
  return (
    <div>
      <div className='flex flex-col h-[80dvh] relative'>
        <Header textColor='black' logo={<Image src={logo} alt='Logo' width={100} height={100} />} />
        <AboutHero />
        <BuiltInAfrica />
        <CoreValues />
        <Footer />
      </div>
    </div>
  );
}

export default AboutPage;
