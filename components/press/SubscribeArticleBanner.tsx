"use client";

import React from "react";
import Image from "next/image";
import { Button, Input } from "@mantine/core";
import { motion, type Variants } from "framer-motion";
import evelopeImage from "@/assets/images/envelope.png";

const EASE = [0.22, 1, 0.36, 1] as const;

const section: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

const imgPop: Variants = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
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

export default function SubscribeArticleBanner() {
  return (
    <section className="mx-auto max-w-6xl rounded-2xl bg-[#007F5E]">
      <motion.div
        variants={section}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6"
      >
        {/* Left: image */}
        <motion.div variants={imgPop} className="relative col-span-1">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: EASE }}
            className="p-4 md:p-6"
          >
            <Image
              src={evelopeImage}
              alt="envelope"
              width={500}
              height={500}
              className="h-auto w-full object-contain"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Right: copy + form */}
        <motion.div
          variants={copyUp}
          className="col-span-1 flex flex-col justify-center px-4 pb-8 pt-2 md:px-0 md:pr-4"
        >
          <div className="mb-6 space-y-2 max-w-md">
            <h2 className="text-2xl font-semibold text-white lg:text-3xl">
              Read more articles like this
            </h2>
            <p className="text-lg text-[#CCE5DF]">
              Lorem ipsum dolor sit amet, consectetur adip elit. Praesent eget
              leo ac eros facilisis finibus.
            </p>
          </div>

          <div className="flex w-full max-w-md items-center gap-2">
            <motion.div
              className="flex-1"
              whileFocus={{ scale: 1.005 }}
              transition={{ type: "tween", duration: 0.12, ease: EASE }}
            >
              <Input
                variant="unstyled"
                className="placeholder:text-[#ABCCC4]"
                style={{
                  borderBottom: "1px solid #FFFFFF4D",
                  color: "#FFFFFF",
                }}
                placeholder="Enter your email"
              />
            </motion.div>

            <motion.div
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "tween", duration: 0.12, ease: EASE }}
              className="w-[40%] sm:w-[35%]"
            >
              <Button variant="filled" color="#009A74" fullWidth>
                Subscribe
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
