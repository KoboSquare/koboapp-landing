"use client";

import Header from "@/components/shared/header";
import React from "react";
import Image from "next/image";
import logo from "@/assets/Logo2.svg";
import Footer from "@/components/shared/footer";
import OurApps from "@/components/home/our-apps";
import helpBg from "@/assets/images/helpBg.png";
import mapImage from "@/assets/images/map.png";
import { Button } from "@mantine/core";
import { motion, type Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const pageVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.15, ease: EASE },
  },
};

const heroBgV: Variants = {
  hidden: { opacity: 0, scale: 1.03 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: EASE } },
};

const heroTextV: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
};

const mapV: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

const cardsWrapV: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const cardV: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE },
  },
};

const ContactOptions = [
  {
    title: "Chat to Support",
    content: "We’re here to help 24/7",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M18.3337 5.20829V9.45827C18.3337 10.5166 17.9837 11.4083 17.3587 12.025C16.742 12.65 15.8503 12.9999 14.792 12.9999V14.5083C14.792 15.0749 14.1587 15.4166 13.692 15.1L12.8837 14.5666C12.9587 14.3083 12.992 14.0249 12.992 13.7249V10.3333C12.992 8.63331 11.8587 7.49996 10.1587 7.49996H4.50032C4.38365 7.49996 4.27533 7.50831 4.16699 7.51664V5.20829C4.16699 3.08329 5.58366 1.66663 7.70866 1.66663H14.792C16.917 1.66663 18.3337 3.08329 18.3337 5.20829Z"
          stroke="#363E3F"
          strokeWidth="1.5"
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.992 10.3334V13.725C12.992 14.025 12.9587 14.3083 12.8837 14.5667C12.5753 15.7917 11.5587 16.5583 10.1587 16.5583H7.89199L5.37532 18.2333C5.00032 18.4917 4.50032 18.2167 4.50032 17.7667V16.5583C3.65032 16.5583 2.94199 16.275 2.45033 15.7833C1.95033 15.2833 1.66699 14.575 1.66699 13.725V10.3334C1.66699 8.75002 2.65033 7.65835 4.16699 7.51668C4.27533 7.50835 4.38365 7.5 4.50032 7.5H10.1587C11.8587 7.5 12.992 8.63335 12.992 10.3334Z"
          stroke="#363E3F"
          strokeWidth="1.5"
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    action: (
      <Button color="#009A74" variant="filled">
        Support@kobovault.com
      </Button>
    ),
  },
  {
    title: "Visit Us",
    content: "Visit our office head quatres or branches",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M10.0004 11.1917C11.4363 11.1917 12.6004 10.0276 12.6004 8.5917C12.6004 7.15576 11.4363 5.9917 10.0004 5.9917C8.56445 5.9917 7.40039 7.15576 7.40039 8.5917C7.40039 10.0276 8.56445 11.1917 10.0004 11.1917Z"
          stroke="#363E3F"
          strokeWidth="1.5"
        />
        <path
          d="M3.01675 7.07496C4.65842 -0.141705 15.3501 -0.133372 16.9834 7.08329C17.9417 11.3166 15.3084 14.9 13.0001 17.1166C11.3251 18.7333 8.67508 18.7333 6.99175 17.1166C4.69175 14.9 2.05842 11.3083 3.01675 7.07496Z"
          stroke="#363E3F"
          strokeWidth="1.5"
        />
      </svg>
    ),
    action: (
      <Button
        variant="outline"
        style={{ borderColor: "#DEE1E1", color: "#010101" }}
      >
        View on Google Maps
      </Button>
    ),
  },
  {
    title: "Call Us",
    content: "Mon - Fri from 8am to 5pm",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M18.3337 5.20829V9.45827C18.3337 10.5166 17.9837 11.4083 17.3587 12.025C16.742 12.65 15.8503 12.9999 14.792 12.9999V14.5083C14.792 15.0749 14.1587 15.4166 13.692 15.1L12.8837 14.5666C12.9587 14.3083 12.992 14.0249 12.992 13.7249V10.3333C12.992 8.63331 11.8587 7.49996 10.1587 7.49996H4.50032C4.38365 7.49996 4.27533 7.50831 4.16699 7.51664V5.20829C4.16699 3.08329 5.58366 1.66663 7.70866 1.66663H14.792C16.917 1.66663 18.3337 3.08329 18.3337 5.20829Z"
          stroke="#363E3F"
          strokeWidth="1.5"
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.992 10.3334V13.725C12.992 14.025 12.9587 14.3083 12.8837 14.5667C12.5753 15.7917 11.5587 16.5583 10.1587 16.5583H7.89199L5.37532 18.2333C5.00032 18.4917 4.50032 18.2167 4.50032 17.7667V16.5583C3.65032 16.5583 2.94199 16.275 2.45033 15.7833C1.95033 15.2833 1.66699 14.575 1.66699 13.725V10.3334C1.66699 8.75002 2.65033 7.65835 4.16699 7.51668C4.27533 7.50835 4.38365 7.5 4.50032 7.5H10.1587C11.8587 7.5 12.992 8.63335 12.992 10.3334Z"
          stroke="#363E3F"
          strokeWidth="1.5"
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    action: (
      <Button
        variant="outline"
        style={{ borderColor: "#DEE1E1", color: "#010101" }}
      >
        +234 803 722 3819
      </Button>
    ),
  },
];

export default function Page() {
  return (
    <main>
      <Header
        textColor="black"
        backgroundColor="white"
        logo={<Image src={logo} alt="Logo" width={100} height={100} />}
      />

      <motion.div
        variants={pageVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-16"
      >
        {/* Hero */}
        <div className="relative flex h-[40vh] flex-col items-center justify-center px-4">
          <motion.div
            variants={heroBgV}
            className="absolute left-0 top-0 z-0 h-full w-full"
          >
            <Image
              src={helpBg}
              priority
              alt="Help"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            variants={heroTextV}
            className="z-10 mx-auto max-w-4xl space-y-2 text-center"
          >
            <h6 className="text-lg font-semibold text-[#007F5E]">Contact Us</h6>
            <h1 className="text-3xl font-semibold text-[#010101] lg:text-6xl">
              Get in touch with our team
            </h1>
            <p className="mx-auto max-w-xl text-lg text-[#363E3F]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              eget leo ac eros facilisis finibus sceleri.
            </p>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div variants={mapV}>
          <Image
            src={mapImage}
            priority
            alt="kobo-map"
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Contact options */}
        <motion.div
          variants={cardsWrapV}
          className="mx-auto mt-4 mb-16 grid max-w-6xl grid-cols-1 gap-4 px-4 md:grid-cols-3"
        >
          {ContactOptions.map((option) => (
            <motion.div
              key={option.title}
              variants={cardV}
              whileHover={{
                y: -4,
                boxShadow:
                  "0px 12px 24px rgba(0,0,0,0.06), 0px 2px 8px rgba(0,0,0,0.04)",
                transition: { type: "spring", stiffness: 320, damping: 22 },
              }}
              className="mb-4 flex flex-col items-start gap-4 rounded-lg border border-[#DEE1E1] p-4 lg:p-5"
            >
              <div className="rounded-lg border border-[#DEE1E1] p-2">
                {option.icon}
              </div>
              <div className="flex flex-col">
                <h2 className="text-base font-semibold text-[#010101]">
                  {option.title}
                </h2>
                <p className="text-base text-[#363E3F]">{option.content}</p>
              </div>
              {option.action}
            </motion.div>
          ))}
        </motion.div>

        {/* Apps block (subtle rise-in) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: EASE },
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <OurApps />
        </motion.div>
      </motion.div>

      <Footer />
    </main>
  );
}
