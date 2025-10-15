"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@mantine/core";
import { motion, type Variants } from "framer-motion";
import CardSvg from "@/assets/Card.svg";
import Card2Svg from "@/assets/Card2.svg";

const EASE = [0.22, 1, 0.36, 1] as const;

const section: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.06 },
  },
};

const leftStack: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const topCard: Variants = {
  hidden: { opacity: 0, y: -20, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "tween", duration: 0.55, ease: EASE },
  },
};

const bottomCard: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "tween", duration: 0.6, ease: EASE, delay: 0.05 },
  },
};

const copyBlock: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.5, ease: EASE },
  },
};

function VirtualCardBanner() {
  return (
    <section className="py-4 px-4 md:py-12">
      <motion.div
        variants={section}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="container relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-4 rounded-[2rem] bg-[#0A1B1B] px-4 md:grid-cols-2"
      >
        {/* Left: layered cards + glows */}
        <motion.div
          variants={leftStack}
          className="relative col-span-1 min-h-[320px] md:min-h-[420px]"
        >
          {/* top small card */}
          <motion.div
            variants={topCard}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: EASE }}
            className="absolute -top-24 left-0 z-20"
          >
            <Image src={Card2Svg} alt="card-top" width={320} height={240} />
          </motion.div>

          {/* inner glow (small) */}
          <motion.svg
            className="absolute z-10"
            style={{ top: 100, left: 0 }}
            width="277"
            height="278"
            viewBox="0 0 277 278"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={{ opacity: [0.6, 0.9, 0.6], scale: [1, 1.03, 1] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: EASE }}
          >
            <g filter="url(#filter0_f_2166_833)">
              <circle
                cx="138.5"
                cy="138.939"
                r="88.5"
                fill="#0A1B1B"
                fillOpacity="0.5"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_2166_833"
                x="0"
                y="0.439453"
                width="277"
                height="277"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="25"
                  result="effect1_foregroundBlur_2166_833"
                />
              </filter>
            </defs>
          </motion.svg>

          {/* outer glow (large) */}
          <motion.svg
            className="absolute inset-0 z-10"
            width="383"
            height="384"
            viewBox="0 0 383 384"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.02, 1] }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: EASE,
              delay: 0.2,
            }}
          >
            <g filter="url(#filter0_f_2166_832)">
              <circle
                cx="191.5"
                cy="191.939"
                r="141.5"
                fill="#0A1B1B"
                fillOpacity="0.3"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_2166_832"
                x="0"
                y="0.439453"
                width="383"
                height="383"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="25"
                  result="effect1_foregroundBlur_2166_832"
                />
              </filter>
            </defs>
          </motion.svg>

          {/* bottom big card */}
          <motion.div
            variants={bottomCard}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: EASE }}
            className="absolute bottom-0 left-0 z-20"
          >
            <Image src={CardSvg} alt="card-bottom" width={480} height={411} />
          </motion.div>
        </motion.div>

        {/* Right: copy + CTA */}
        <motion.div
          variants={copyBlock}
          className="col-span-1 space-y-4 p-4 md:p-8 md:py-12"
        >
          <h2 className="text-2xl font-semibold leading-[1.25] text-white md:text-4xl">
            Shop, Subscribe, and Pay <br />
            Without a Physical Card
          </h2>
          <p className="pb-4 text-lg font-medium text-[#B5BBBB]">
            Create secure virtual cards instantly for online shopping,
            subscriptions, and international payments, all from your Kobo Vault.
          </p>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "tween", duration: 0.12, ease: EASE }}
          >
            <Button
              variant="default"
              styles={{
                root: {
                  backgroundColor: "#009A74",
                  color: "white",
                  borderColor: "#008E6A",
                },
              }}
            >
              Get Started
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default VirtualCardBanner;
