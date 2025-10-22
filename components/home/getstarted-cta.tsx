"use client";

import React, { useEffect } from "react";
import { Button, Rating } from "@mantine/core";
import {
  motion,
  type Variants,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

// typed cubic-bezier easing
const EASE = [0.22, 1, 0.36, 1] as const;

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      ease: EASE,
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.4, ease: EASE },
  },
};

// Small helper to animate numbers
function AnimatedNumber({ to }: { to: number }) {
  const mv = useMotionValue(0);
  const text = useTransform(mv, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    const controls = animate(mv, to, { duration: 1.2, ease: EASE });
    return controls.stop;
  }, [to, mv]);

  return <motion.span>{text}</motion.span>;
}

function GetStartedCta() {
  return (
    <section>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="container mx-auto flex max-w-6xl flex-col items-center justify-center px-4 py-10 text-center md:py-20"
      >
        {/* Heading */}
        <motion.h2
          variants={itemVariants}
          className="text-2xl font-semibold leading-[1.25] md:text-4xl"
        >
          Looking for a better way to ride, pay, <br />
          Shop, and thrive?
        </motion.h2>

        {/* Reviews row */}
        <motion.div
          variants={itemVariants}
          className="mt-3 flex items-center justify-center"
        >
          <div className="flex items-center gap-2 text-lg font-medium">
            <AnimatedNumber to={53000} />
            <span>+ </span>
            <motion.span
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 18,
                delay: 0.2,
              }}
            >
              <Rating value={5} readOnly />
            </motion.span>
            <span>reviews on Google Play and App Store</span>
          </div>
        </motion.div>

        {/* CTA button */}
        <motion.div variants={itemVariants} className="mt-4">
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

        {/* Footnote with animated icon */}
        <motion.div
          variants={itemVariants}
          className="mt-4 flex items-center justify-center gap-2"
        >
          <motion.svg
            width="19"
            height="15"
            viewBox="0 0 19 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: EASE }}
          >
            <path
              d="M18 15C18.5523 15 19 14.5523 19 14C19 13.4477 18.5523 13 18 13V14V15ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM18 14V13H10V14V15H18V14ZM8 12H9V1H8H7V12H8ZM10 14V13C9.44772 13 9 12.5523 9 12H8H7C7 13.6569 8.34315 15 10 15V14Z"
              fill="#007F5F"
            />
          </motion.svg>

          <p className="text-lg font-medium">
            Lorem ipsum dolor sit amet, consectetur elit.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default GetStartedCta;
