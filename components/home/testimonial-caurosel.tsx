"use client";

import "@mantine/carousel/styles.css";
import React, { useState } from "react";
import { Carousel } from "@mantine/carousel";
import { motion, type Variants } from "framer-motion";
import TestimonialCard from "./testimonial-card";

const EASE = [0.22, 1, 0.36, 1] as const;

const slideVariants: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
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
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo a facilisis finibus scelerisque. In et venenatis leo, non luctus mau. Maecenas efficitur volutpat nibh, a aliquet elit.",
    },
    {
      id: 2,
      name: "Lucky Ekezie",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
      rating: 4,
      title: "CEO, Kobo Connect",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo a facilisis finibus scelerisque. In et venenatis leo, non luctus mau. Maecenas efficitur volutpat nibh, a aliquet elit.",
    },
    {
      id: 3,
      name: "Lucky Ekezie",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
      rating: 4,
      title: "CEO, Kobo Connect",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo a facilisis finibus scelerisque. In et venenatis leo, non luctus mau. Maecenas efficitur volutpat nibh, a aliquet elit.",
    },
  ];

  return (
    <Carousel
      height="100%"
      slideSize="70%"
      slideGap="lg"
      controlsOffset="sm"
      controlSize={26}
      onSlideChange={setActive}
      withControls
      withIndicators
      styles={{
        indicator: { background: "#009A74" },
      }}
      emblaOptions={{ dragFree: false, align: "start", loop: false }}
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
              style={{
                // de-emphasize non-active slides slightly
                transformOrigin: "center",
                filter: isActive ? "none" : "grayscale(0)",
              }}
            >
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
