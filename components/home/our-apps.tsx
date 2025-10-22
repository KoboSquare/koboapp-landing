"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Button, Divider } from "@mantine/core";
import {
  motion,
  type Variants,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import OurAppImage from "@/assets/images/ourApp.png";

const EASE = [0.22, 1, 0.36, 1] as const;

const section: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.06 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.55, ease: EASE },
  },
};

const imagePop: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "tween", duration: 0.6, ease: EASE },
  },
};

// Animated number helper
function AnimatedNumber({ to }: { to: number }) {
  const mv = useMotionValue(0);
  const text = useTransform(mv, (v) => Math.round(v).toLocaleString());
  useEffect(() => {
    const controls = animate(mv, to, { duration: 1.2, ease: EASE });
    return controls.stop;
  }, [to, mv]);
  return <motion.span>{text}</motion.span>;
}

function OurApps() {
  return (
    <section className="bg-[#0A1B1B]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 pt-10 md:grid-cols-2 md:pt-24">
        {/* Copy column */}
        <motion.div
          variants={section}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="space-y-6 pb-5 md:space-y-8"
        >
          <motion.div variants={fadeUp} className="space-y-2">
            <h3 className="text-xl font-medium text-[#009A74]">Our Apps</h3>
            <h2 className="text-4xl font-semibold leading-[1.30] text-white">
              Check Out Our <br />
              Kobo Super App Suite
            </h2>
            <p className="text-lg font-medium text-[#B5BBBB]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              eget leo ac eros facilisis finibus scelerisque sit amet turpis.
            </p>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-4 text-white"
          >
            <div>
              <h2 className="text-2xl font-semibold md:text-4xl">
                <AnimatedNumber to={20500} />
              </h2>
              <p>Total Downloads</p>
            </div>

            <Divider orientation="vertical" className="border-white/15" />

            <div>
              <h2 className="text-2xl font-semibold md:text-4xl">
                <AnimatedNumber to={20500} />
              </h2>
              <p>Total Downloads</p>
            </div>

            <Divider orientation="vertical" className="border-white/15" />

            <div>
              <h2 className="text-2xl font-semibold md:text-4xl">
                <AnimatedNumber to={20500} />
              </h2>
              <p>Total Downloads</p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeUp}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "tween", duration: 0.12, ease: EASE }}
            >
              <Button
                variant="default"
                styles={{
                  root: {
                    backgroundColor: "#009A74",
                    color: "white",
                    borderColor: "#008E6A",
                  },
                }}
              >
                See Products
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Image column */}
        <motion.div
          variants={imagePop}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
          >
            <Image
              src={OurAppImage}
              alt="our-app"
              width={900}
              height={900}
              priority
              className="drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default OurApps;
