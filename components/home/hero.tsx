"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import heroImg from "@/assets/images/hero.png";
import appStoreSvg from "@/assets/appStore.svg";
import playStoreSvg from "@/assets/playStore.svg";
import TypewriterText from "../shared/typewriter-text";
import heroBg from "@/assets/images/heroBg.png";

const EASE = [0.22, 1, 0.36, 1] as const;

const wrap: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.5, ease: EASE },
  },
};

export default function Hero() {
  return (
    <section className="relative h-[75dvh] overflow-hidden">
      {/* BG with soft zoom/fade */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.05, ease: EASE }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={heroBg}
          priority
          alt="hero-bg"
          fill
          className="absolute inset-0 object-cover"
        />
      </motion.div>

      <motion.div
        variants={wrap}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-4 md:grid-cols-3 md:py-6"
      >
        {/* Left copy */}
        <div className="col-span-2 max-w-2xl py-10 text-white">
          <motion.h1
            variants={fadeUp}
            className="text-2xl font-bold leading-[1.25] md:text-5xl"
          >
            Experience{" "}
            <span className="text-[#007F5F]">
              <TypewriterText
                words={["Banking", "Shopping", "Sending Money"]}
              />
            </span>
            <br /> Like Never Before with <br />
          </motion.h1>

          <motion.h1
            variants={fadeUp}
            className="relative text-2xl font-bold leading-[1.25] md:text-5xl"
          >
            <span className="relative inline-block">
              Kobo App
              {/* animated underline */}
              <svg
                className="absolute left-2 bottom-0 w-20 md:w-40"
                height="60"
                viewBox="0 0 278 82"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M225.325 16.0525C206.359 9.83672 146.22 2.40419 57.3937 22.4006C-31.4322 42.397 6.15813 64.8532 36.0565 73.5818C68.4575 79.7976 151.594 86.5953 221.769 67.2337C252.195 60.6212 302.297 41.1275 259.307 16.0525C249.429 10.7624 214.736 0.578977 154.992 2.16599"
                  stroke="#007F5F"
                  strokeWidth="4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1, ease: EASE, delay: 0.15 }}
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="my-6 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            vehicula ac ex ac vehicula. Vestibulum finibus ante sit amet cursus
            tempus.
          </motion.p>

          {/* store badges */}
          <motion.div variants={fadeUp} className="flex gap-5 pt-4">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "tween", duration: 0.12, ease: EASE }}
            >
              <Image
                src={appStoreSvg}
                priority
                alt="app-store"
                width={150}
                height={150}
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "tween", duration: 0.12, ease: EASE }}
            >
              <Image
                src={playStoreSvg}
                priority
                alt="play-store"
                width={150}
                height={150}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Right mock */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="col-span-1 min-h-[500px] grid place-items-center"
        >
          <Image
            src={heroImg}
            alt="hero-img"
            width={500}
            height={500}
            priority
            className="drop-shadow-xl"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
