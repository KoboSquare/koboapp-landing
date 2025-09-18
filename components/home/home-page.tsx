import React from "react";
import Hero from "./hero";
import Header from "./header";
import Image from "next/image";
import heroBg from "@/assets/images/heroBg.png";
import KoboConnect from "./kobo-connect";
import Solution from "./solution";
import InnovativeApproach from "./innovative-approach";
import OurApps from "./our-apps";
import Testimonials from "./testimonials";
import Faq from "./faq";
import GetStartedCta from "./getstarted-cta";
import Footer from "./footer";
import VirtualCardBanner from "./virtualcard-banner";

function HomePage() {
  return (
    <div>
      <div className="flex flex-col h-[80dvh] relative">
        <Image
          src={heroBg}
          priority
          alt="hero-bg"
          fill
          className="object-cover z-0"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 z-10">
          <Header />
          <Hero />
          <KoboConnect />
          <Solution />
          <InnovativeApproach />
          <OurApps />
          <Testimonials />
          <VirtualCardBanner />
          <Faq />
          <GetStartedCta />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
