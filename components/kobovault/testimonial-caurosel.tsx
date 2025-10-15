"use client";

import "@mantine/carousel/styles.css";
import React, { useState } from "react";
import { Carousel } from "@mantine/carousel";
import { motion, type Variants } from "framer-motion";
import TestimonialCard from "./testimonial-card";

const EASE = [0.22, 1, 0.36, 1] as const;

const slideVariants: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "tween", duration: 0.45, ease: EASE },
  },
};

function TestimonialCaurosel() {
  const [active, setActive] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
      rating: 4,
      title: "Product Designer",
      comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Nulla vehicula ac ex ac vehicula. Vestibulum finibus ante
sit amet cursus tempus.  Ipsum dolor sit amet,
consectetur adip`,
    },
    {
      id: 2,
      name: "Lucky Ekezie",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
      rating: 4,
      title: "Product Designer, Kobo Connect",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo a facilisis finibus scelerisque. In et venenatis leo, non luctus mau. Maecenas efficitur volutpat nibh, a aliquet elit.",
    },
    {
      id: 3,
      name: "Lucky Ekezie",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
      rating: 4,
      title: "Product Designer, Kobo Connect",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo a facilisis finibus scelerisque. In et venenatis leo, non luctus mau. Maecenas efficitur volutpat nibh, a aliquet elit.",
    },
  ];

  return (
    <Carousel
      height="100%"
      className="px-6 md:px-14"
      slideGap="lg"
      controlsOffset="sm"
      controlSize={26}
      onSlideChange={setActive}
      nextControlIcon={
        <svg
          width="30"
          height="30"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="25" cy="25" r="25" fill="#009A74" />
          <path
            d="M27.4297 18.9299L33.4997 24.9999L27.4297 31.0699"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5 25H33.33"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      }
      previousControlIcon={
        <svg
          width="30"
          height="30"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="25"
            cy="25"
            r="25"
            transform="matrix(-1 0 0 1 50 0)"
            fill="#F6F9F8"
          />
          <path
            d="M22.5703 18.9299L16.5003 24.9999L22.5703 31.0699"
            stroke="#363E3F"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M33.5 25H16.67"
            stroke="#363E3F"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      }
      emblaOptions={{ dragFree: false, align: "center" }}
    >
      {testimonials.map((t, i) => {
        const isActive = active === i;
        return (
          <Carousel.Slide key={t.id} className="py-4">
            <motion.div
              variants={slideVariants}
              initial="hidden"
              animate="show"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 240, damping: 20 }}
              className="h-full"
            >
              {/* Focus the active slide with scale/opacity */}
              <motion.div
                animate={{
                  scale: isActive ? 1 : 0.97,
                  opacity: isActive ? 1 : 0.9,
                }}
                transition={{ type: "tween", duration: 0.25, ease: EASE }}
                className="h-full"
              >
                <TestimonialCard testimonial={t} />
              </motion.div>
            </motion.div>
          </Carousel.Slide>
        );
      })}
    </Carousel>
  );
}

export default TestimonialCaurosel;
