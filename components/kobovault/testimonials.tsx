"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import TestimonialCaurosel from "./testimonial-caurosel";

const EASE = [0.22, 1, 0.36, 1] as const;

const section: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const header: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.5, ease: EASE },
  },
};

const block: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "tween", duration: 0.55, ease: EASE },
  },
};

function Testimonials() {
  return (
    <section>
      <motion.div
        variants={section}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="container mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-10 md:py-14"
      >
        {/* Header */}
        <motion.div
          variants={header}
          className="flex flex-col items-center text-center space-y-4"
        >
          <h2 className="text-2xl md:text-4xl font-semibold leading-[1.25]">
            Don’t Take Our Word For It
          </h2>
          <p className="text-base font-medium max-w-md text-[#363E3F]">
            Hear from our satisfied users and learn how Kobo Vault has helped.
            Praesent eget leo ac eros facilisis finibus scelerisque.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div variants={block}>
          <TestimonialCaurosel />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Testimonials;
