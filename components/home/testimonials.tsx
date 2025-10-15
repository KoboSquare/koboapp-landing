"use client";

import React from "react";
import { Button } from "@mantine/core";
import { motion, type Variants } from "framer-motion";
import TestimonialCaurosel from "./testimonial-caurosel";

const EASE = [0.22, 1, 0.36, 1] as const;

const section: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
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

const popIn: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
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
        className="container mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 md:grid-cols-2 md:gap-20 md:py-20"
      >
        {/* Left: copy */}
        <motion.div variants={fadeUp} className="space-y-4 md:col-span-1">
          <h2 className="text-2xl font-semibold leading-[1.25] md:text-4xl">
            Don’t Take Our <br />
            Word For It
          </h2>
          <p className="max-w-md text-base font-medium text-[#363E3F]">
            Hear from our satisfied clients and learn how Kobo Connect has
            helped. Praesent eget leo ac eros facilisis finibus scelerisque sit
            amet turpis.
          </p>

          <div className="mt-6">
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
          </div>
        </motion.div>

        {/* Right: carousel */}
        <motion.div variants={popIn} className="md:col-span-1">
          <TestimonialCaurosel />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Testimonials;
