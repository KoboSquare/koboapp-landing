"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const section: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
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

const grid: Variants = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "tween", duration: 0.45, ease: EASE },
  },
};

function Solution() {
  const solutions = [
    {
      title: "No More App-Hopping",
      description:
        "To combat fragmented service access, eliminating the hassle of juggling numerous apps",
    },
    {
      title: "Reimagining Access to Money",
      description:
        "To provide accessible financial tools including mobile wallets and peer to peer transfer all built to function with or without traditional banking infrastructure.",
    },
    {
      title: "One Digital Flow",
      description:
        "To bridge the gap caused by inconsistent digital ecosystems and ensure smooth running between users, local businesses, and service providers.",
    },
  ];

  return (
    <section className="container mx-auto max-w-6xl px-4 py-6 md:py-12">
      {/* Header */}
      <motion.div
        variants={header}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="mx-auto mb-10 max-w-2xl text-center"
      >
        <h2 className="mb-2 text-4xl font-semibold text-[#010101]">
          Here is our Solution
        </h2>
        <p className="text-base font-medium text-[#363E3F]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
          leo ac eros facilisis finibus scelerisque sit amet turpis.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={grid}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-x-8 lg:gap-x-16"
      >
        {solutions.map((solution) => (
          <motion.article
            key={solution.title}
            variants={card}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="space-y-4 rounded-lg bg-[#FAFDFE] p-4"
          >
            {/* Icon with line-draw animation */}
            <svg
              className="mb-4"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M14.875 28.1916V5.80825C14.875 3.68325 13.9683 2.83325 11.7158 2.83325H5.9925C3.73999 2.83325 2.83333 3.68325 2.83333 5.80825V28.1916C2.83333 30.3166 3.73999 31.1666 5.9925 31.1666H11.7158C13.9683 31.1666 14.875 30.3166 14.875 28.1916Z"
                stroke="#009A74"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0.6 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, ease: EASE }}
              />
              <motion.path
                d="M31.1667 15.4416V5.80825C31.1667 3.68325 30.26 2.83325 28.0075 2.83325H22.2842C20.0317 2.83325 19.125 3.68325 19.125 5.80825V15.4416C19.125 17.5666 20.0317 18.4166 22.2842 18.4166H28.0075C30.26 18.4166 31.1667 17.5666 31.1667 15.4416Z"
                stroke="#009A74"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0.6 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
              />
              <motion.path
                d="M31.1667 28.1917V25.6417C31.1667 23.5167 30.26 22.6667 28.0075 22.6667H22.2842C20.0317 22.6667 19.125 23.5167 19.125 25.6417V28.1917C19.125 30.3167 20.0317 31.1667 22.2842 31.1667H28.0075C30.26 31.1667 31.1667 30.3167 31.1667 28.1917Z"
                stroke="#009A74"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0.6 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
              />
            </svg>

            <h3 className="text-xl font-semibold text-[#010101]">
              {solution.title}
            </h3>
            <p className="text-base font-[400] text-[#363E3F]">
              {solution.description}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

export default Solution;
