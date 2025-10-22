"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import AboutheroBgImage from "@/assets/images/about-hero-bg-image.jpg";
import gradientBg from "@/assets/images/gradientBg.png";

export default function AboutHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex h-[40vh] max-w-6xl flex-col items-center justify-center mx-auto"
    >
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 rounded-2xl overflow-hidden"
      >
        <Image
          src={AboutheroBgImage}
          alt="press"
          fill
          className="object-cover rounded-2xl"
          priority
        />
      </motion.div>

      {/* Gradient overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute inset-0 z-0 rounded-2xl"
      >
        <Image
          src={gradientBg}
          alt="gradient"
          fill
          className="object-cover rounded-2xl opacity-90"
        />
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="z-10 text-center text-white"
      >
        <h2 className="mb-4 text-2xl font-semibold md:text-5xl">About Us</h2>
      </motion.div>
    </motion.div>
  );
}
