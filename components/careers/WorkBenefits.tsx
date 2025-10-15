"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import icon from "@/assets/images/icon.png";

const benefitsList = [
  {
    title: "Work From Anywhere",
    icon: icon,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Lorem ipsum",
    icon: icon,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Lorem ips",
    icon: icon,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Lorem ipsu",
    icon: icon,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Work From Anywher",
    icon: icon,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Lorem ipsm",
    icon: icon,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

// Typed easing (cubic-bezier)
const EASE = [0.22, 1, 0.36, 1] as const;

// Variants
const container: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.45, ease: EASE },
  },
};

function WorkBenefits() {
  return (
    <section className="max-w-6xl mx-auto">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8"
      >
        {benefitsList.map((itemData, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="flex items-start gap-4 bg-white p-3 rounded-xl"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "tween", duration: 0.25 }}
              className="flex-shrink-0"
            >
              <Image
                src={itemData.icon}
                alt={itemData.title}
                className="rounded-full"
                width={70}
                height={70}
              />
            </motion.div>
            <div>
              <h2 className="text-lg font-semibold text-[#010101]">
                {itemData.title}
              </h2>
              <p className="text-base text-[#363E3F]">{itemData.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default WorkBenefits;
