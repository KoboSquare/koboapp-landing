import Image from "next/image";
import logo from "@/assets/logo.svg";
import Header from "@/components/shared/header";
import Hero from "@/components/home/hero";
import KoboConnect from "@/components/home/kobo-connect";
import Solution from "@/components/home/solution";
import InnovativeApproach from "@/components/home/innovative-approach";
import OurApps from "@/components/home/our-apps";
import Testimonials from "@/components/home/testimonials";
import VirtualCardBanner from "@/components/home/virtualcard-banner";
import Faq from "@/components/home/faq";
import GetStartedCta from "@/components/home/getstarted-cta";
import Footer from "@/components/shared/footer";

export default function Home() {
  return (
    <main>
      <Header
        textColor='#CCE5DF'
        logo={<Image src={logo} alt='Logo' priority width={100} height={100} />}
      />
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
    </main>
  );
}
