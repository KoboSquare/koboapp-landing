"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { motion, type Variants } from "framer-motion";
import image109 from "@/assets/images/image109.png";

const articleList = [
  {
    author: "Lucky Ekezie",
    date: "12 Aug 2025",
    image: image109,
    title: "TKobo Stories: Innovation for Everyday Africa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus scelerisque sit amet turpis. In et venenatis leo, non luctus mauris. Maecenas efficitur volutpat nibh, a aliquet elit.",
  },
  {
    author: "Esther Umoh",
    date: "13 Aug 2025",
    image: image109,
    title: "From Wallets to Wellness: Explore the Kobo World...",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus scelerisque sit amet turpis. In et venenatis leo, non luctus mauris. Maecenas efficitur volutpat nibh, a aliquet elit.",
  },
  {
    author: "Joseph Rukevwe",
    date: "14 Aug 2025",
    image: image109,
    title: "Supporting Local Businesses Through Kobo Market...",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus scelerisque sit amet turpis. In et venenatis leo, non luctus mauris. Maecenas efficitur volutpat nibh, a aliquet elit.",
  },
] as const;

type Article = (typeof articleList)[number];

const EASE = [0.22, 1, 0.36, 1] as const;

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
    transition: { duration: 0.5, ease: EASE, type: "tween" },
  },
};

const grid: Variants = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: EASE, type: "tween" },
  },
};

const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.02 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: EASE } },
};

function RecentArticle() {
  return (
    <section className="mx-auto max-w-6xl">
      <motion.div
        variants={section}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
      >
        {/* Header */}
        <motion.div variants={header} className="mb-4">
          <h3 className="text-2xl lg:text-3xl font-semibold text-[#010101]">
            Our recent articles
          </h3>
          <p className="text-lg text-[#363E3F]">
            Stay informed with our latest insights
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={grid}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-8"
        >
          {articleList.map((article) => (
            <RecentArticleCard key={article.title} article={article} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function RecentArticleCard({ article }: { article: Article }) {
  return (
    <motion.article
      variants={card}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 240, damping: 20 }}
      className="grid grid-rows-5 gap-4"
    >
      {/* Image */}
      <motion.div variants={imageReveal} className="relative row-span-2">
        <Image
          src={article.image}
          alt="press"
          fill
          className="object-cover rounded-xl"
        />
      </motion.div>

      {/* Content */}
      <div className="row-span-3 space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-base font-medium text-[#009A74]">
            {article.author}
          </p>
          <p className="text-base text-[#363E3F]">{article.date}</p>
        </div>
        <h4 className="text-xl lg:text-2xl font-semibold text-[#010101]">
          {article.title}
        </h4>
        <p className="text-base text-[#363E3F]">{article.description}</p>

        <motion.div
          whileHover={{ x: 2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.12, ease: EASE, type: "tween" }}
        >
          <Button
            variant="subtle"
            rightSection={<IconArrowRight size={18} />}
            styles={{ label: { color: "#007F5E" } }}
            style={{ paddingLeft: 0 }}
          >
            Read More
          </Button>
        </motion.div>
      </div>
    </motion.article>
  );
}

export default RecentArticle;
