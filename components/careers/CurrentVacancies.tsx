"use client";

import React from "react";
import { Button } from "@mantine/core";
import { motion, type Variants } from "framer-motion";

interface ICurrentVacancy {
  title: string;
  location: string;
  description: string;
  date: string;
}

const currentVacanciesList: ICurrentVacancy[] = [
  {
    title: "Product Designer",
    location: "Lagos",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus scelerisque sit amet turpis. In et venenatis leo, non luctus mauris. Maecenas efficitur volutpat nibh, a aliquet elit.",
    date: "1 week ago",
  },
  {
    title: "Full Stack Engineer",
    location: "Lagos",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus scelerisque sit amet turpis. In et venenatis leo, non luctus mauris. Maecenas efficitur volutpat nibh, a aliquet elit.",
    date: "1 week ago",
  },
  {
    title: "Office Assistant",
    location: "Remote",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus scelerisque sit amet turpis. In et venenatis leo, non luctus mauris. Maecenas efficitur volutpat nibh, a aliquet elit.",
    date: "1 week ago",
  },
  {
    title: "Frontend Engineer",
    location: "Remote",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus scelerisque sit amet turpis. In et venenatis leo, non luctus mauris. Maecenas efficitur volutpat nibh, a aliquet elit.",
    date: "1 week ago",
  },
  {
    title: "Business Administrator",
    location: "On-site",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus scelerisque sit amet turpis. In et venenatis leo, non luctus mauris. Maecenas efficitur volutpat nibh, a aliquet elit.",
    date: "1 week ago",
  },
  {
    title: "UI Designer",
    location: "Remote",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus scelerisque sit amet turpis. In et venenatis leo, non luctus mauris. Maecenas efficitur volutpat nibh, a aliquet elit.",
    date: "1 week ago",
  },
  {
    title: "Graphic Designer",
    location: "Remote",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus scelerisque sit amet turpis. In et venenatis leo, non luctus mauris. Maecenas efficitur volutpat nibh, a aliquet elit.",
    date: "1 week ago",
  },
  {
    title: "Social Media Manager",
    location: "Remote",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus scelerisque sit amet turpis. In et venenatis leo, non luctus mauris. Maecenas efficitur volutpat nibh, a aliquet elit.",
    date: "2 week ago",
  },
];

// Typed easing (cubic-bezier)
const EASE = [0.22, 1, 0.36, 1] as const;

// Variants
const sectionVariants: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "tween", duration: 0.45, ease: EASE },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.5, ease: EASE },
  },
};

function CurrentVacanciesItem({ item }: { item: ICurrentVacancy }) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="gap-4 rounded-2xl bg-white p-4 shadow-sm md:p-5"
    >
      <div className="mb-8">
        <div className="mb-4 flex items-center gap-2">
          {/* location pin */}
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
              d="M3.01675 7.07508C4.65842 -0.141583 15.3501 -0.13325 16.9834 7.08342C17.9417 11.3167 15.3084 14.9001 13.0001 17.1168C11.3251 18.7334 8.67508 18.7334 6.99175 17.1168C4.69175 14.9001 2.05842 11.3084 3.01675 7.07508Z"
              stroke="#363E3F"
              strokeWidth="1.5"
            />
          </svg>
          <p className="text-base text-[#363E3F]">{item.location}</p>
        </div>

        <h2 className="mb-2 text-lg font-semibold lg:text-xl">{item.title}</h2>
        <p className="text-base">
          {item.description.slice(0, 120)}
          {item.description.length > 120 ? "..." : ""}
        </p>
      </div>

      <div className="relative row-span-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* calendar */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M6.66699 1.66675V4.16675"
              stroke="#363E3F"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.333 1.66675V4.16675"
              stroke="#363E3F"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.91699 7.57495H17.0837"
              stroke="#363E3F"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.5 7.08341V14.1667C17.5 16.6667 16.25 18.3334 13.3333 18.3334H6.66667C3.75 18.3334 2.5 16.6667 2.5 14.1667V7.08341C2.5 4.58341 3.75 2.91675 6.66667 2.91675H13.3333C16.25 2.91675 17.5 4.58341 17.5 7.08341Z"
              stroke="#363E3F"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.0791 11.4167H13.0866"
              stroke="#363E3F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.0791 13.9167H13.0866"
              stroke="#363E3F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.99607 11.4167H10.0036"
              stroke="#363E3F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.99607 13.9167H10.0036"
              stroke="#363E3F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.91209 11.4167H6.91957"
              stroke="#363E3F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.91209 13.9167H6.91957"
              stroke="#363E3F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h6>{item.date}</h6>
        </div>

        {/* Button micro-interactions */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "tween", duration: 0.15, ease: EASE }}
        >
          {/* Mantine's `color` prop expects a theme color; keep your hex via styles to be safe */}
          <Button
            variant="filled"
            styles={{ root: { backgroundColor: "#009A74" } }}
          >
            Apply
          </Button>
        </motion.div>
      </div>
    </motion.article>
  );
}

function CurrentVacancies() {
  return (
    <div className="bg-[#F9FCFC] py-6 md:py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mb-8"
        >
          <h6 className="text-[#009A74]">Openings</h6>
          <h2 className="text-2xl font-semibold text-[#010101] lg:text-3xl">
            Our current vacancies
          </h2>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6"
        >
          {currentVacanciesList.map((item) => (
            <CurrentVacanciesItem key={item.title} item={item} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default CurrentVacancies;
