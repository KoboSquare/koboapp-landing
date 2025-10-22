"use client";

import Header from "@/components/shared/header";
import Image from "next/image";
import React from "react";
import logo from "@/assets/Logo2.svg";
import pressImage from "@/assets/images/ourPress.png";
import image109 from "@/assets/images/image109.png";
import gradientBg from "@/assets/images/gradientBg.png";
import { Badge, Button, Divider } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import RecentArticle from "@/components/press/RecentArticle";
import TrendingArticle from "@/components/press/TrendingArticle";
import InsiderTipAndTricks from "@/components/press/InsiderTipAndTricks";
import SubscribeArticleBanner from "@/components/press/SubscribeArticleBanner";
import { motion, type Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const pageV: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.15, ease: EASE },
  },
};

const heroWrapV: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const heroBgV: Variants = {
  hidden: { opacity: 0, scale: 1.03 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: EASE } },
};

const heroGradientV: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 0.9,
    transition: { duration: 0.6, ease: EASE, delay: 0.15 },
  },
};

const heroTextV: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

const floatSvgProps = {
  animate: { y: [0, -6, 0] },
  transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" as const },
};

const sectionUpV: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

const featureImageV: Variants = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: EASE } },
};

const featureTextV: Variants = {
  hidden: { opacity: 0, x: 16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: EASE } },
};

export default function Page() {
  return (
    <div>
      <Header
        textColor="black"
        backgroundColor="white"
        logo={<Image src={logo} alt="Logo" width={100} height={100} />}
      />

      <motion.div
        variants={pageV}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="mb-16 space-y-4 px-4 md:space-y-12 lg:space-y-24"
      >
        {/* Hero */}
        <motion.div
          variants={heroWrapV}
          className="relative mx-auto flex h-[40vh] max-w-6xl items-center justify-center"
        >
          <motion.div variants={heroBgV} className="absolute inset-0 z-0">
            <Image
              src={pressImage}
              alt="press"
              fill
              className="object-cover rounded-2xl"
            />
          </motion.div>

          {/* Floaty blobs */}
          <motion.div
            className="absolute left-10 top-10 z-10 md:left-20 lg:left-40"
            {...floatSvgProps}
          >
            <svg
              width="52"
              height="40"
              viewBox="0 0 52 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.9998 0.999981C47.5998 6.59998 54.5 29 49.4998 37C43.9997 41.4999 40.5 38 36.5 34.5C33.3 31.7 25.4999 32 21.9998 32.5C14.3332 34.6667 -0.600164 35 0.999836 19C2.59984 2.99998 16 -0.312454 21.9998 0.999981Z"
                fill="#C5A140"
              />
            </svg>
          </motion.div>

          <motion.div
            className="absolute right-10 top-10 z-10 md:right-20 lg:right-40"
            {...floatSvgProps}
            transition={{ ...floatSvgProps.transition, delay: 0.6 }}
          >
            <svg
              width="69"
              height="63"
              viewBox="0 0 69 63"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M43.5 46.5C53.9 60.1 64.5 62.8333 68.5 62.5C57.7 57.7 50.3333 48.5 48 44.5C51.6 41.3 52.1667 34.5 52 31.5L40.5 24C41.3 31.2 39.5 36.3333 38.5 38C20.5 42 12 14.6667 10 0.5H0C7.2 44.9 32 49.6667 43.5 46.5Z"
                fill="#DDB953"
              />
            </svg>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={heroTextV}
            className="z-10 -translate-x-1/2 -translate-y-1/2 text-center text-white absolute top-1/2 left-1/2"
          >
            <h2 className="mb-4 text-2xl font-semibold md:text-5xl">Press</h2>
            <p className="text-lg text-[#EBFFFF]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              eget leo ac eros facilisis finibus sceleri.
            </p>
          </motion.div>

          {/* Gradient overlay */}
          <motion.div variants={heroGradientV} className="absolute inset-0 z-0">
            <Image
              src={gradientBg}
              alt="gradient"
              fill
              className="object-cover rounded-2xl"
            />
          </motion.div>
        </motion.div>

        {/* Featured story */}
        <motion.div variants={sectionUpV} className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2 md:gap-6">
            <motion.div variants={featureImageV}>
              <Image
                src={image109}
                alt="press"
                width={500}
                height={500}
                className="rounded-2xl object-cover"
              />
            </motion.div>

            <motion.div variants={featureTextV} className="space-y-4">
              <Badge color="#ECF8F4" size="lg">
                <div className="flex items-center gap-2">
                  <Badge variant="filled" color="#007F5E">
                    News!
                  </Badge>
                  <p className="text-[#363E3F]">8 mins read</p>
                </div>
              </Badge>
              <h4 className="text-2xl font-semibold">
                The Future of Africa’s Digital Lifestyle
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent eget leo ac eros facilisis finibus scelerisque sit amet
                turpis. In et venenatis leo, non luctus mauris. Maecenas
                efficitur volutpat nibh, a aliquet elit.
              </p>
              <Button
                variant="subtle"
                color="#007F5E"
                rightSection={<IconArrowRight />}
              >
                Read More
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Recent articles */}
        <motion.div variants={sectionUpV} className="mx-auto max-w-6xl">
          <RecentArticle />
        </motion.div>

        <motion.div variants={sectionUpV} className="mx-auto max-w-6xl">
          <Divider />
        </motion.div>

        {/* Trending */}
        <motion.div variants={sectionUpV}>
          <TrendingArticle />
        </motion.div>

        {/* Tips & Tricks */}
        <motion.div variants={sectionUpV}>
          <InsiderTipAndTricks />
        </motion.div>

        {/* Subscribe banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: EASE },
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <SubscribeArticleBanner />
        </motion.div>
      </motion.div>
    </div>
  );
}
