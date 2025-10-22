"use client";
import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

import v1 from "@/assets/images/values-1.jpg";
import v2 from "@/assets/images/values-2.jpg";
import v3 from "@/assets/images/values-3.jpg";
import v4 from "@/assets/images/values-4.jpg";
import p1 from "@/assets/images/team-1.jpg";
import p2 from "@/assets/images/team-2.jpg";
import p3 from "@/assets/images/team-3.jpg";
import p4 from "@/assets/images/team-4.jpg";
import p5 from "@/assets/images/team-5.jpg";
import p6 from "@/assets/images/team-6.jpg";
import p7 from "@/assets/images/team-7.jpg";
import p8 from "@/assets/images/team-8.jpg";
import i1 from "@/assets/icons/icon-1.svg";
import i2 from "@/assets/icons/icon-2.svg";
import i3 from "@/assets/icons/icon-3.svg";
import i4 from "@/assets/icons/icon-4.svg";

type Value = {
  id: number;
  title: string;
  body: string;
  image: any;
  icon: any;
};

const VALUES: Value[] = [
  {
    id: 1,
    title: "Inclusion for Every African, | Everywhere",
    body: "We believe access to essential digital services should never be limited | by geography, infrastructure, or income. Kobo Connect is designed | for everyone from smartphone users in urban centers to underbanked | individuals in remote areas, thanks to tools like USSD, agent networks, | and culturally relevant design.",
    image: v1,
    icon: i1,
  },
  {
    id: 2,
    title: "Seamless Simplicity for | Everyday Life",
    body: "Life is complicated, your digital experience shouldn't be. Kobo unifies | fragmented services into one seamless platform, removing the need to | juggle multiple apps. From rides to payments, everything is just a tap | away.",
    image: v2,
    icon: i2,
  },
  {
    id: 3,
    title: "Built for Africa, | Rooted in Local Realities",
    body: "We're deeply rooted in African realities. Whether it's integrating local | transport like keke and okada, enabling cash-on-delivery, or translating | services into local languages, Kobo Connect meets people where they | are, and how they live.",
    image: v3,
    icon: i3,
  },
  {
    id: 4,
    title: "Empowering Users, Businesses, | and Communities",
    body: "Kobo Connect isn't just about access, it's about impact. We empower | users to shop, earn, move, communicate, and care for their health. | We enable small businesses and service providers to grow, and we drive | digital adoption through tools that work for everyone.",
    image: v4,
    icon: i4,
  },
];

const PEOPLE = [
  { img: p1, name: "Lucky Ekezie", role: "EngineeFounder, CEO" },
  { img: p2, name: "Lucky Ekezie", role: "EngineeFounder, CEO" },
  { img: p3, name: "Lucky Ekezie", role: "EngineeFounder, CEO" },
  { img: p4, name: "Lucky Ekezie", role: "EngineeFounder, CEO" },
  { img: p5, name: "Lucky Ekezie", role: "EngineeFounder, CEO" },
  { img: p6, name: "Lucky Ekezie", role: "EngineeFounder, CEO" },
  { img: p7, name: "Lucky Ekezie", role: "EngineeFounder, CEO" },
  { img: p8, name: "Lucky Ekezie", role: "EngineeFounder, CEO" },
];

// Typed easing (cubic-bezier)
const EASE = [0.22, 1, 0.36, 1] as const;

// Variants
const headerContainer: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.6, ease: EASE },
  },
};

const valuesContainer: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.05 },
  },
};

const valueRow = (reverse = false): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, when: "beforeChildren" },
  },
});

const imgReveal = (reverse = false): Variants => ({
  hidden: { opacity: 0, x: reverse ? 24 : -24, scale: 0.98 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "tween", duration: 0.6, ease: EASE },
  },
});

const textReveal = (reverse = false): Variants => ({
  hidden: { opacity: 0, x: reverse ? -18 : 18 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "tween", duration: 0.55, ease: EASE },
  },
});

const teamContainer: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const teamCard: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.45, ease: EASE },
  },
};

function ValueCard({
  value,
  reverse = false,
}: {
  value: Value;
  reverse?: boolean;
}) {
  function formatWithLineBreaks(text: string) {
    return text.split("|").map((part, idx) => (
      <React.Fragment key={idx}>
        {part.trim()}
        <br className="hidden lg:block" />
      </React.Fragment>
    ));
  }

  // spacing based on id and reverse
  const getSpacingClass = () => {
    if (value.id === 1) return reverse ? "md:mr-[79px]" : "md:ml-[79px]";
    if (value.id === 3) return reverse ? "md:mr-[79px]" : "md:ml-[79px]";
    return "";
  };

  return (
    <motion.div
      variants={valueRow(reverse)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="flex flex-col items-center lg:flex-row"
    >
      {/* Image */}
      <motion.div
        variants={imgReveal(reverse)}
        className={`w-full md:w-auto md:flex-shrink-0 ${
          reverse ? "lg:order-2" : "lg:order-1"
        } mb-6 md:mb-0`}
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
      >
        <div className="relative overflow-hidden rounded-xl w-full md:w-[480px]">
          {/* green accent frame */}
          <div className="absolute -inset-3 -z-10 hidden rounded-2xl border-[6px] border-[#009A74] sm:block" />
          <Image
            src={value.image}
            alt={value.title}
            className="h-auto w-full rounded-xl object-cover"
            width={480}
            height={320}
            sizes="(max-width: 768px) 100vw, 480px"
            priority={false}
          />
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        variants={textReveal(reverse)}
        className={`w-4/5 lg:w-full m-auto flex-1 ${
          reverse ? "lg:order-1" : "lg:order-2"
        } ${getSpacingClass()}`}
      >
        <div className="flex w-full items-center justify-center lg:block mt-10 lg:mt-0">
          <Image
            src={value.icon}
            alt={value.title}
            className="mb-3 rounded-xl"
            width={55}
            height={55}
            priority={false}
          />
        </div>
        <h3 className="mb-2 text-xl font-semibold text-[#010101] md:text-[35px] md:leading-[40px]">
          {formatWithLineBreaks(value.title)}
        </h3>
        <p className="text-sm font-normal leading-7 text-[#363E3F] md:text-base">
          {formatWithLineBreaks(value.body)}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function CoreValues() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 md:py-16 lg:py-16">
      {/* Section header */}
      <motion.div
        variants={headerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="mx-auto mb-8 max-w-2xl text-center md:mb-16"
      >
        <h2 className="text-2xl font-semibold text-[#010101] md:text-[40px] md:leading-[44px]">
          Our Core Values
        </h2>
        <p className="mt-3 text-sm font-medium text-[#363E3F] md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Praesent eget leo ac eros facilibus finib.
        </p>
      </motion.div>

      {/* Values list */}
      <motion.div
        variants={valuesContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-10 md:space-y-20 lg:space-y-24"
      >
        {VALUES.map((val, i) => (
          <ValueCard key={val.title} value={val} reverse={i % 2 === 1} />
        ))}
      </motion.div>

      {/* Team grid */}
      <div className="mt-16 md:mt-20 lg:mt-24">
        <h3 className="text-lg font-medium text-[#009A74] md:text-xl">
          Meet the Team
        </h3>
        <p className="mt-1 text-2xl font-semibold text-[#010101] md:text-3xl lg:text-[40px]">
          The People Behind <br /> Kobo Connect
        </p>

        <motion.div
          variants={teamContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 grid grid-cols-1 gap-4 sm:gap-6 md:mt-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8"
        >
          {PEOPLE.map((p, index) => (
            <motion.div
              key={index}
              variants={teamCard}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl"
            >
              {/* Image */}
              <Image
                src={p.img}
                alt={p.name}
                className="object-center transition-transform duration-500 group-hover:scale-105 lg:h-[360px] lg:w-[300px]"
              />

              {/* Main bar (always visible) + HALO */}
              <div className="absolute inset-x-4 bottom-0 z-20 mb-4 sm:inset-x-5 sm:mb-5 lg:inset-x-6">
                <div className="relative flex flex-col items-center rounded-xl bg-[#007F5E] px-4 py-3 text-white transition-transform duration-300 group-hover:-translate-y-0.5 after:absolute after:-inset-2 after:-z-10 after:rounded-2xl after:bg-[#007F5E]/35 after:opacity-0 after:transition-opacity after:duration-300 group-hover:after:opacity-100">
                  <p className="text-sm font-semibold leading-tight md:text-lg">
                    {p.name}
                  </p>
                  <p className="text-xs font-normal opacity-90 md:text-sm">
                    {p.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
