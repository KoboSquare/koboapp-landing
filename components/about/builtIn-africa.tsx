"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";
import React from "react";
import CultureImage from "@/assets/images/Video.png";

type Pill = { text: string; href?: string };

const PILL_ITEMS: Pill[] = [
  { text: "Offline-friendly (USSD + agent networks)" },
  { text: "Financially inclusive" },
  { text: "Designed with cultural relevance" },
  { text: "Locally integrated and scalable" },
];

// Use a cubic-bezier array for typed easing
const EASE = [0.22, 1, 0.36, 1] as const;

// Variants
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.5, ease: EASE },
  },
};

const pill: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.35, ease: EASE },
  },
};

export default function BuiltInAfrica() {
  return (
    <section className="relative">
      {/* Dark band */}
      <div className="bg-[#0A1B1B] text-white h-[690px] lg:h-[772px]">
        <div className="mx-auto max-w-6xl px-4 pt-[90px] lg:pt-[107px]">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-16">
            {/* Left copy */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="max-w-xl"
            >
              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl text-white lg:text-[40px] leading-tight font-semibold"
              >
                Built In Africa
                <br /> For Africans.
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-4 text-sm sm:text-base lg:text-lg text-[#B5BBBB] leading-7"
              >
                We’re building a digital ecosystem that’s inclusive and
                accessible, reaching underserved users with or without internet
                access. Kobo Connect is localized to reflect African lifestyles,
                languages, and transport systems, ensuring every user feels seen
                and understood.
              </motion.p>
            </motion.div>

            {/* Right pills */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col divide-y divide-[#2A3E3C]"
            >
              {PILL_ITEMS.map((item) => (
                <motion.button
                  key={item.text}
                  variants={pill}
                  type="button"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center justify-between py-3 sm:py-4 text-left text-[#EAF2F1] transition px-1"
                >
                  <span className="text-sm sm:text-base lg:text-lg font-medium">
                    {item.text}
                  </span>
                  <motion.span
                    aria-hidden
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0F2C29] group-hover:bg-[#0F3A34]"
                    whileHover={{ rotate: 15 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  >
                    <IconArrowRight size={16} />
                  </motion.span>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Overlapping video/image card */}
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ type: "tween", duration: 0.6, ease: EASE }}
          className="overflow-hidden rounded-xl sm:rounded-2xl shadow-lg -mt-16 lg:-mt-32"
        >
          <Image
            src={CultureImage}
            alt="People collaborating"
            className="h-[200px] w-full object-cover sm:h-[260px] md:h-[320px] lg:h-[587px]"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
