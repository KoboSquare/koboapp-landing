"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import MapSvg from "@/assets/Map.svg";
import transactionCard from "@/assets/images/transactionCard.png";

const EASE = [0.22, 1, 0.36, 1] as const;

const section: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

const mapWrap: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "tween", duration: 0.55, ease: EASE },
  },
};

const copyBlock: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.5, ease: EASE },
  },
};

const featureItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.4, ease: EASE },
  },
};

function BuiltForEveryday() {
  return (
    <section className="container mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-6 md:flex-row md:gap-20 md:py-10">
      {/* Left: Map + floating transaction card */}
      <motion.div
        variants={section}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="relative"
      >
        <motion.div variants={mapWrap}>
          <Image
            src={MapSvg}
            alt="map-svg"
            width={600}
            height={600}
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Floating/bobbing mini card */}
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ type: "tween", duration: 0.45, ease: EASE, delay: 0.1 }}
          animate={{ y: [0, -6, 0] }}
          //   transitionEnd={{}}
          className="absolute bottom-3 right-0"
          style={{ willChange: "transform" }}
        >
          <Image
            src={transactionCard}
            alt="transaction-card"
            width={140}
            height={140}
            className="object-contain"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Right: Copy + features */}
      <motion.div
        variants={section}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="space-y-8 py-4 pr-4 md:py-6"
      >
        <motion.div variants={copyBlock} className="space-y-4 pb-2">
          <h2 className="text-2xl font-semibold text-[#010101] md:text-4xl">
            Built for Everyday Life in Africa
          </h2>
          <p className="text-lg font-medium text-[#363E3F]">
            Whether you’re paying bills, running a business, or sending money to
            family, Kobo Vault works seamlessly for real people and real needs.
          </p>
        </motion.div>

        {/* Feature 1 */}
        <motion.div variants={featureItem} className="flex items-center gap-4">
          <div>
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <rect width="60" height="60" rx="10" fill="#F9F2E4" />
              <path
                d="M22.9102 29.8401C27.2102 26.5201 32.8002 26.5201 37.1002 29.8401"
                stroke="#DAC576"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 26.3601C26.06 21.6801 33.94 21.6801 40 26.3601"
                stroke="#DAC576"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M24.79 33.4902C27.94 31.0502 32.05 31.0502 35.2 33.4902"
                stroke="#DAC576"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M27.4004 37.1501C28.9804 35.9301 31.0304 35.9301 32.6104 37.1501"
                stroke="#DAC576"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#010101] md:text-2xl">
              Offline Access
            </h3>
            <p className="text-sm text-[#363E3F] md:text-base">
              Use USSD and agent networks even without internet or a smartphone.
            </p>
          </div>
        </motion.div>

        {/* Feature 2 */}
        <motion.div variants={featureItem} className="flex items-center gap-4">
          <div>
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <rect width="60" height="60" rx="10" fill="#ECF9FF" />
              <path
                d="M36.0001 25.16C35.9401 25.15 35.8701 25.15 35.8101 25.16C34.4301 25.11 33.3301 23.98 33.3301 22.58C33.3301 21.15 34.4801 20 35.9101 20C37.3401 20 38.4901 21.16 38.4901 22.58C38.4801 23.98 37.3801 25.11 36.0001 25.16Z"
                stroke="#39A5FF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M34.9704 32.4399C36.3404 32.6699 37.8504 32.4299 38.9104 31.7199C40.3204 30.7799 40.3204 29.2399 38.9104 28.2999C37.8404 27.5899 36.3104 27.3499 34.9404 27.5899"
                stroke="#39A5FF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M23.9705 25.16C24.0305 25.15 24.1005 25.15 24.1605 25.16C25.5405 25.11 26.6405 23.98 26.6405 22.58C26.6405 21.15 25.4905 20 24.0605 20C22.6305 20 21.4805 21.16 21.4805 22.58C21.4905 23.98 22.5905 25.11 23.9705 25.16Z"
                stroke="#39A5FF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M25.0004 32.4399C23.6304 32.6699 22.1204 32.4299 21.0604 31.7199C19.6504 30.7799 19.6504 29.2399 21.0604 28.2999C22.1304 27.5899 23.6604 27.3499 25.0304 27.5899"
                stroke="#39A5FF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M30.0001 32.63C29.9401 32.62 29.8701 32.62 29.8101 32.63C28.4301 32.58 27.3301 31.45 27.3301 30.05C27.3301 28.62 28.4801 27.47 29.9101 27.47C31.3401 27.47 32.4901 28.63 32.4901 30.05C32.4801 31.45 31.3801 32.59 30.0001 32.63Z"
                stroke="#39A5FF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M27.0897 35.7799C25.6797 36.7199 25.6797 38.2599 27.0897 39.1999C28.6897 40.2699 31.3097 40.2699 32.9097 39.1999C34.3197 38.2599 34.3197 36.7199 32.9097 35.7799C31.3197 34.7199 28.6897 34.7199 27.0897 35.7799Z"
                stroke="#39A5FF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#010101] md:text-2xl">
              Inclusive Finance
            </h3>
            <p className="text-sm text-[#363E3F] md:text-base">
              Designed for both banked and unbanked users, ensuring no one is
              left behind.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default BuiltForEveryday;
