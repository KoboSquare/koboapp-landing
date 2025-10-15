"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import kobovaultServices from "@/assets/images/koboVault-Services.png";
import locationIcon from "@/assets/locationIcon.svg";
import smsIcon from "@/assets/smsIcon.svg";
import callIcon from "@/assets/callIcon.svg";

const contactInfo = [
  {
    title: "Address",
    value: "123 Main Street, Lagos, Nigeria",
    icon: locationIcon,
  },
  { title: "Email", value: "contact@koboconnect.com", icon: smsIcon },
  { title: "Phone", value: "+234 123 456 789", icon: callIcon },
];

// Typed easing (cubic-bezier)
const EASE = [0.22, 1, 0.36, 1] as const;

// Variants
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

const imgPop: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "tween", duration: 0.55, ease: EASE },
  },
};

const copyPara: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.45, ease: EASE },
  },
};

const contactGrid: Variants = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const contactCard: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.35, ease: EASE },
  },
};

export default function KoboConnect() {
  return (
    <section className="bg-transparent">
      <div className="container mx-auto max-w-6xl px-4 py-10 md:py-20">
        <motion.div
          variants={section}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Heading */}
          <motion.div variants={header} className="mb-4">
            <h2 className="mb-2 text-xl font-medium text-[#009A74]">
              What is Kobo Connect?
            </h2>
            <h1 className="text-2xl font-bold leading-[1.25] text-[#010101]">
              Africa’s next-generation super app <br />
              All in one integrated digital platform
            </h1>
          </motion.div>

          {/* Content grid */}
          <div className="grid grid-cols-1 items-center gap-8 py-8 md:grid-cols-5">
            {/* Image */}
            <motion.div variants={imgPop} className="relative md:col-span-2">
              <Image
                src={kobovaultServices}
                alt="kobovault-services"
                width={400}
                height={400}
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Copy + contact cards */}
            <div className="md:col-span-3 flex flex-col items-center gap-6">
              <div className="flex flex-col gap-4 text-[#363E3F]">
                <motion.p variants={copyPara}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent eget leo ac eros facilisis finibus scelerisque sit
                  amet turpis. In et venenatis leo, non luctus mauris. Maecenas
                  efficitur volutpat nibh, a aliquet elit
                </motion.p>
                <motion.p variants={copyPara}>
                  Aliquam ac tincidunt arcu. Donec dictum odio felis, ac tempor
                  sapien aliquet non. Donec volutpat blandit posuere. Mauris
                  nulla enim, placerat non pretium vitae, blandit quis felis.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent eget leo ac eros facilisis finibus scelerisque sit
                  amet turpis. In et venenatis leo, non luctus mauris. Maecenas
                  efficitur volutpat nibh.
                </motion.p>
              </div>

              <motion.div
                variants={contactGrid}
                className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3"
              >
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={contactCard}
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="rounded-lg bg-[#FAFDFE] p-4"
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={24}
                      height={24}
                      className="mb-4"
                    />
                    <p className="text-base font-[400] text-[#010101]">
                      {item.value}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
