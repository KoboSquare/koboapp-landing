"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { motion, type Variants } from "framer-motion";
import image109 from "@/assets/images/image109.png";

interface InsiderTipAndTricks {
  items: {
    title: string;
    description: string;
    image: any;
    backgroundColor: string;
    textColor: string;
  }[];
}

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
    transition: { duration: 0.5, ease: EASE, type: "tween" },
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
    transition: { duration: 0.45, ease: EASE, type: "tween" },
  },
};

const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.02 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: EASE } },
};

function InsiderTipAndTricks() {
  const InsiderTipAndTricksList: InsiderTipAndTricks["items"] = [
    {
      title: "Lorem ipsum dolor si",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus scelerisque sit amet turpis",
      image: image109,
      backgroundColor: "#EBFFFB",
      textColor: "#010101",
    },
    {
      title: "Lorem ipsum dolor st",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus scelerisque sit amet turpis",
      image: image109,
      backgroundColor: "#0A1B1B",
      textColor: "#FFFFFF",
    },
    {
      title: "Lorem ipsum dolor t",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus scelerisque sit amet turpis",
      image: image109,
      backgroundColor: "#007F5E",
      textColor: "#FFFFFF",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl">
      <motion.div
        variants={section}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
      >
        {/* Header */}
        <motion.div variants={header} className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#010101]">
            Insider tips and tricks for maximum efficiency
          </h2>
          <p className="text-lg text-[#363E3F]">
            Discover valuable insights to optimize your business and maximize
            efficiency.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={grid}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8"
        >
          {InsiderTipAndTricksList.map((item) => (
            <InsiderTipAndTricksItem key={item.title} item={item} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function InsiderTipAndTricksItem({
  item,
}: {
  item: InsiderTipAndTricks["items"][number];
}) {
  return (
    <motion.article
      variants={card}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 240, damping: 20 }}
      className="grid grid-rows-5 gap-4 rounded-xl"
      style={{ backgroundColor: item.backgroundColor, color: item.textColor }}
    >
      <div className="row-span-3 space-y-2 p-4 lg:p-6">
        <h3 className="text-xl lg:text-2xl font-semibold">{item.title}</h3>
        <p className="text-base">
          {item.description.slice(0, 100)}{" "}
          {item.description.length > 100 ? "..." : ""}
        </p>

        <motion.div
          whileHover={{ x: 2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.12, ease: EASE, type: "tween" }}
        >
          {/* Mantine Button doesn't accept hex in `color` prop reliably; style it inline */}
          <Button
            variant="subtle"
            rightSection={<IconArrowRight size={18} />}
            styles={{ label: { color: item.textColor } }}
            style={{ color: item.textColor as string }}
          >
            Read More
          </Button>
        </motion.div>
      </div>

      {/* Image */}
      <motion.div variants={imageReveal} className="relative row-span-2">
        <Image
          src={item.image}
          alt="press"
          fill
          className="object-cover rounded-b-xl"
        />
      </motion.div>
    </motion.article>
  );
}

export default InsiderTipAndTricks;
