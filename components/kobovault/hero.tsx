"use client";
import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import heroImg from "@/assets/images/koboVaultApp.png";
import appStoreSvg from "@/assets/appStore.svg";
import playStoreSvg from "@/assets/playStore.svg";
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
      {/* Background with soft zoom/fade */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
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
        className="container relative z-10 mx-auto grid grid-cols-1 px-4 py-4 md:grid-cols-3 md:py-6"
      >
        {/* Left copy */}
        <div className="col-span-2 max-w-2xl py-10 text-white">
          <motion.h1
            variants={fadeUp}
            className="text-2xl font-bold leading-[1.25] md:text-5xl"
          >
            Banking Without Walls <br />
            Security Without <br />
            Compromise
          </motion.h1>

          <motion.p variants={fadeUp} className="my-6 text-sm md:text-base">
            We built Kobo Vault to bring financial freedom closer to everyone.
            With advanced money transfer options, automated payments, and smart
            virtual cards, you can transact safely and confidently.
          </motion.p>

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
                alt="play-store"
                width={150}
                height={150}
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Right mock image */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          className="col-span-1 grid min-h-[500px] place-items-center"
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
