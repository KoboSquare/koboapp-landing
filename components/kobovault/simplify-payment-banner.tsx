"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import OurAppImage from "@/assets/images/ourApp.png";
import appStoreSvg from "@/assets/appStore.svg";
import playStoreSvg from "@/assets/playStore.svg";

const EASE = [0.22, 1, 0.36, 1] as const;

const section: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

const imgPop: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "tween", duration: 0.6, ease: EASE },
  },
};

const copyUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.5, ease: EASE },
  },
};

export default function SimplifyPaymentBanner() {
  return (
    <section className="container mx-auto px-4 py-10 md:py-14">
      <motion.div
        variants={section}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="grid grid-cols-1 rounded-2xl bg-[#0A1B1B] md:grid-cols-3 pt-6"
      >
        {/* Left: App image */}
        <motion.div
          variants={imgPop}
          className="relative col-span-1 min-h-[300px]"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: EASE }}
            className="absolute inset-0"
          >
            <Image
              src={OurAppImage}
              alt="kobovault-app"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Right: Copy + badges */}
        <motion.div
          variants={copyUp}
          className="col-span-1 md:col-span-2 space-y-4 px-4 py-10"
        >
          <h2 className="text-2xl md:text-4xl font-semibold text-white">
            Simplify Every Payment, <br />
            From Everyday Bills to Global Shopping
          </h2>
          <p className="text-lg font-medium text-[#B5BBBB] max-w-xl">
            Kobo Vault gives you the power to handle all your transactions in
            one place, whether it’s sending cash to family, paying your utility
            bills, or shopping online securely.
          </p>

          <div className="flex gap-5 pt-4">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "tween", duration: 0.12, ease: EASE }}
            >
              <Link href="#">
                <Image
                  src={appStoreSvg}
                  alt="app-store"
                  width={150}
                  height={150}
                />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "tween", duration: 0.12, ease: EASE }}
            >
              <Link href="#">
                <Image
                  src={playStoreSvg}
                  alt="play-store"
                  width={150}
                  height={150}
                />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
