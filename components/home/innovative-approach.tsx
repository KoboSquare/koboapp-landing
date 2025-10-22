"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const section: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.5, ease: EASE },
  },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "tween", duration: 0.55, ease: EASE },
  },
};

function InnovativeApproach() {
  return (
    <section className="bg-transparent">
      <div className="container mx-auto px-4 py-10 md:py-20 max-w-6xl">
        <motion.div
          variants={section}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="grid grid-cols-1 md:grid-cols-2 items-center gap-8"
        >
          {/* Left: Heading + underline draw */}
          <div>
            <motion.h2
              variants={fadeUp}
              className="text-2xl md:text-4xl font-semibold leading-[1.25] text-[#010101]"
            >
              Innovative Approach to <br />
              Financial Services
            </motion.h2>

            <svg
              className="w-60 md:w-90 h-8 mt-4"
              viewBox="0 0 472 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M1 16.4556C74.1648 8.27411 250.539 -5.1436 370.717 6.6378C308.662 8.6709 167.578 17.0043 106.154 29.2545C104.947 29.4952 105.16 30.9771 106.386 30.8701C184.442 24.0618 355.134 14.8783 471 30.3637"
                stroke="#007F5F"
                strokeWidth="3"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
              />
            </svg>
          </div>

          {/* Right: Copy */}
          <motion.div
            variants={slideInRight}
            className="text-[#363E3F] text-base md:text-lg"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              eget leo ac eros facilisis finibus scelerisque sit amet turpis. In
              et venenatis leo, non luctus mauris. Maecenas efficitur volutpat
              nibh, a aliquet elit.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default InnovativeApproach;
