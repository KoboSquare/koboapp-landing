import React from "react";
import Hero from "./hero";
import Header from "../shared/header";
import Image from "next/image";
import heroBg from "@/assets/images/heroBg.png";
import KoboConnect from "./kobo-connect";
import Solution from "./solution";
import InnovativeApproach from "./innovative-approach";
import OurApps from "./our-apps";
import Testimonials from "./testimonials";
import Faq from "./faq";
import GetStartedCta from "./getstarted-cta";
import Footer from "../shared/footer";
import VirtualCardBanner from "./virtualcard-banner";

import logo from "@/assets/logo.svg";

function HomePage() {
  return (
    <main>
      <div className=''>
        <section className='h-[85dvh] relative'>
          <Image
            src={heroBg}
            priority
            alt='hero-bg'
            fill
            className='object-cover absolute inset-0 z-0'
          />
          <Header textColor='white' logo={<Image src={logo} alt='Logo' width={100} height={100} />} />
          <Hero />
        </section>
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
    </main>
  );
}

export default HomePage;
