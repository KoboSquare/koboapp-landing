"use client";

import React, { useState } from "react";
import { Accordion } from "@mantine/core";
import { motion, type Variants } from "framer-motion";
import { IconChevronDown } from "@tabler/icons-react";

const helpItems = [
  {
    title: "What is Kobo Connect?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus sceleri.",
  },
  {
    title: "How do I get started?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus sceleri.",
  },
  {
    title: "What is CRS?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus sceleri.",
  },
  {
    title: "Do I need to have a Kobo Connect account to use Kobo Connect?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus sceleri.",
  },
];

// typed easing
const EASE = [0.22, 1, 0.36, 1] as const;

// parent + item variants for staggered mount
const listVariants: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.25, ease: EASE },
  },
};

function CustomAccordion() {
  const [value, setValue] = useState<string | null>(helpItems[0].title);

  return (
    <motion.div
      variants={listVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Accordion
        value={value}
        onChange={setValue}
        radius="lg"
        variant="separated"
        className="bg-white"
      >
        {helpItems.map((item) => {
          const opened = value === item.title;

          return (
            <motion.div key={item.title} variants={itemVariants}>
              <Accordion.Item
                value={item.title}
                className="rounded-xl overflow-hidden"
              >
                <Accordion.Control
                  className="text-left"
                  // custom right section with animated chevron
                  chevron={
                    <motion.span
                      initial={false}
                      animate={{ rotate: opened ? 180 : 0 }}
                      transition={{ type: "tween", duration: 0.18, ease: EASE }}
                      style={{ display: "inline-flex" }}
                    >
                      <IconChevronDown size={18} color="#009A74" />
                    </motion.span>
                  }
                >
                  {item.title}
                </Accordion.Control>

                {/* Animate the content inside the panel; Mantine handles height */}
                <Accordion.Panel>
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: opened ? 1 : 0, y: opened ? 0 : 8 }}
                    transition={{ type: "tween", duration: 0.2, ease: EASE }}
                  >
                    {item.content}
                  </motion.div>
                </Accordion.Panel>
              </Accordion.Item>
            </motion.div>
          );
        })}
      </Accordion>
    </motion.div>
  );
}

export default CustomAccordion;
