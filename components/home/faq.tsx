"use client";

import React, { useState } from "react";
import { Accordion } from "@mantine/core";
import { motion, type Variants } from "framer-motion";
import { IconChevronDown } from "@tabler/icons-react";

const faqList = [
  {
    question: "What is Kobo Connect?",
    answer:
      "Kobo Connect is a platform that allows you to connect your Kobo device to your computer.",
  },
  {
    question: "How does Kobo Connect work?",
    answer:
      "Kobo Connect helps you manage, sync, and transfer content between your Kobo device and computer seamlessly.",
  },
  {
    question: "What are the benefits of using Kobo Connect?",
    answer:
      "It simplifies device setup, provides instant access to your library, and ensures your reading progress stays synced across devices.",
  },
  {
    question: "How can I get started with Kobo Connect?",
    answer:
      "Simply sign up, install the app on your computer, and connect your Kobo device with a USB cable or Wi-Fi.",
  },
];

// easing function (typed)
const EASE = [0.22, 1, 0.36, 1] as const;

// motion variants
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.5, ease: EASE },
  },
};

const listVariants: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.35, ease: EASE },
  },
};

function Faq() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <section className="bg-[#FAFDFE]">
      <div className="container mx-auto max-w-6xl px-4 py-10 md:py-20">
        {/* Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <h2 className="mb-4 text-2xl font-semibold leading-[1.25] md:text-4xl text-[#010101]">
            Frequently Asked Questions
          </h2>
          <p className="text-base font-medium text-[#363E3F]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            eget leo ac eros facilisis finibus scelerisque sit amet turpis.
          </p>
        </motion.div>

        {/* Accordion list */}
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto grid max-w-3xl gap-4"
        >
          <Accordion
            value={value}
            onChange={setValue}
            radius="lg"
            variant="separated"
          >
            {faqList.map((item) => {
              const opened = value === item.question;

              return (
                <motion.div key={item.question} variants={itemVariants}>
                  <Accordion.Item
                    value={item.question}
                    className="overflow-hidden rounded-xl border border-[#E6ECEC]"
                  >
                    <Accordion.Control
                      chevron={
                        <motion.span
                          initial={false}
                          animate={{ rotate: opened ? 180 : 0 }}
                          transition={{
                            type: "tween",
                            duration: 0.2,
                            ease: EASE,
                          }}
                          style={{ display: "inline-flex" }}
                        >
                          <IconChevronDown size={18} color="#009A74" />
                        </motion.span>
                      }
                    >
                      {item.question}
                    </Accordion.Control>

                    <Accordion.Panel>
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: opened ? 1 : 0, y: opened ? 0 : 8 }}
                        transition={{
                          type: "tween",
                          duration: 0.25,
                          ease: EASE,
                        }}
                        className="text-[#5B6667]"
                      >
                        {item.answer}
                      </motion.div>
                    </Accordion.Panel>
                  </Accordion.Item>
                </motion.div>
              );
            })}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

export default Faq;
