"use client";

import Header from "@/components/shared/header";
import Accordion from "@/components/help/accordion";
import Spotlight from "@/components/help/spotlight";

import logo from "@/assets/Logo2.svg";
import helpBg from "@/assets/images/helpBg.png";
import Image from "next/image";
import Footer from "@/components/shared/footer";

import { motion, type Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const pageVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.15, ease: EASE },
  },
};

const heroImg: Variants = {
  hidden: { scale: 1.03, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: EASE } },
};

const heroText: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
};

const contentBlock: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
};

export default function Page() {
  return (
    <main>
      <Header
        textColor="black"
        backgroundColor="white"
        logo={<Image src={logo} alt="Logo" width={100} height={100} />}
      />

      <motion.div
        variants={pageVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Hero */}
        <div className="relative flex h-[40vh] flex-col items-center justify-center px-4">
          <motion.div
            variants={heroImg}
            className="absolute left-0 top-0 z-0 h-full w-full"
          >
            <Image
              src={helpBg}
              alt="Help"
              fill
              priority
              className="object-cover"
            />
          </motion.div>

          <motion.div
            variants={heroText}
            className="z-10 mx-auto max-w-3xl text-center space-y-2"
          >
            <h6 className="text-lg font-semibold text-[#007F5E]">Help</h6>
            <h1 className="text-3xl font-semibold text-[#010101] lg:text-6xl">
              What answers should we help you with?
            </h1>
            <p className="mx-auto max-w-xl text-[#363E3F] lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              eget leo ac eros facilisis finibus sceleri.
            </p>
          </motion.div>
        </div>

        {/* Spotlight + Accordion */}
        <motion.div
          variants={contentBlock}
          className="mx-auto mt-4 mb-16 max-w-2xl px-4"
        >
          <Spotlight />
          <Accordion />
        </motion.div>
      </motion.div>

      <Footer />
    </main>
  );
}
