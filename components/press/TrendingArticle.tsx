"use client";

import React from "react";
import Image from "next/image";
import { Badge, Button } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { motion, type Variants } from "framer-motion";
import image109 from "@/assets/images/image109.png";

const articleList = [
  {
    author: "Lucky Ekezie",
    date: "12 Aug 2025",
    image: image109,
    category: "Finance",
    title: "Fintech Made Simple: Understanding Digital Wallets",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus scelerisque sit amet turpis. In et venenatis leo, non luctus mauris. Maecenas efficitur volutpat nibh, a aliquet elit.",
  },
  {
    author: "Esther Umoh",
    date: "13 Aug 2025",
    image: image109,
    category: "Health",
    title: "Kobo Wave: Bringing Healthcare Closer to You",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus scelerisque sit amet turpis. In et venenatis leo, non luctus mauris. Maecenas efficitur volutpat nibh, a aliquet elit.",
  },
  {
    author: "Joseph Rukevwe",
    date: "14 Aug 2025",
    image: image109,
    category: "Lifestyle",
    title: "Supporting Local Businesses Through Kobo Market",
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
    transition: { type: "tween", duration: 0.5, ease: EASE },
  },
};

const list: Variants = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const row: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "tween", duration: 0.45, ease: EASE },
  },
};

const thumbReveal: Variants = {
  hidden: { opacity: 0, scale: 1.02 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "tween", duration: 0.5, ease: EASE },
  },
};

function TrendingArticle() {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 gap-4 lg:grid-cols-6 lg:gap-8">
      {/* Header */}
      <motion.div
        variants={section}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="col-span-1 space-y-2 lg:col-span-2"
      >
        <motion.div variants={header}>
          <h6 className="text-lg font-medium text-[#009A74]">Trending</h6>
          <h3 className="text-2xl font-semibold text-[#010101] lg:text-4xl">
            Trending articles you need to check out
          </h3>
          <p className="text-lg text-[#363E3F]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            eget leo ac eros.
          </p>
        </motion.div>
      </motion.div>

      {/* List */}
      <motion.div
        variants={list}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="col-span-1 grid grid-cols-1 gap-4 md:gap-8 lg:col-span-4"
      >
        {articleList.map((article) => (
          <TrendingArticleCard key={article.title} article={article} />
        ))}
      </motion.div>
    </section>
  );
}

function TrendingArticleCard({ article }: { article: Article }) {
  return (
    <motion.article
      variants={row}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 240, damping: 20 }}
      className="grid grid-cols-5 gap-4 md:gap-6"
    >
      {/* Thumbnail */}
      <motion.div
        variants={thumbReveal}
        className="relative col-span-5 min-h-[180px] md:col-span-2"
      >
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="rounded-xl object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="col-span-5 space-y-3 md:col-span-3">
        <div className="flex items-center justify-between">
          <Badge
            styles={{ root: { backgroundColor: "#F6F4FF", color: "#51427F" } }}
          >
            {article.category}
          </Badge>
          <p className="text-base text-[#363E3F]">{article.date}</p>
        </div>

        <h4 className="text-xl font-semibold text-[#010101] lg:text-2xl">
          {article.title}
        </h4>

        <p className="text-base text-[#363E3F]">
          {article.description.slice(0, 100)}
          {article.description.length > 100 ? "..." : ""}
        </p>

        <motion.div
          whileHover={{ x: 2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "tween", duration: 0.12, ease: EASE }}
        >
          <Button
            variant="subtle"
            rightSection={<IconArrowRight size={18} />}
            styles={{ label: { color: "#007F5E" } }}
            style={{ paddingLeft: 5 }}
          >
            Read More
          </Button>
        </motion.div>
      </div>
    </motion.article>
  );
}

export default TrendingArticle;
