"use client";
import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

type MasonryImage = {
  src: string;
  alt?: string;
  className?: string;
};

type Props = {
  images?: MasonryImage[];
  rounded?: string; // tailwind rounding, e.g. "rounded-2xl"
};

// Default demo content (7 images). Replace with your assets.
const DEFAULT_IMAGES: MasonryImage[] = [
  {
    src: "https://o7y30yptvf.ufs.sh/f/5dyupQ86ApvTubS49pGvyT0VEWRgDkPbcFCw8SIUqYtjendG",
    alt: "img-1",
  },
  {
    src: "https://o7y30yptvf.ufs.sh/f/5dyupQ86ApvTubS49pGvyT0VEWRgDkPbcFCw8SIUqYtjendG",
    alt: "img-2",
  },
  {
    src: "https://o7y30yptvf.ufs.sh/f/5dyupQ86ApvTubS49pGvyT0VEWRgDkPbcFCw8SIUqYtjendG",
    alt: "img-3",
  },
  {
    src: "https://o7y30yptvf.ufs.sh/f/5dyupQ86ApvTubS49pGvyT0VEWRgDkPbcFCw8SIUqYtjendG",
    alt: "img-4",
  },
  {
    src: "https://o7y30yptvf.ufs.sh/f/5dyupQ86ApvTubS49pGvyT0VEWRgDkPbcFCw8SIUqYtjendG",
    alt: "img-5",
  },
  {
    src: "https://o7y30yptvf.ufs.sh/f/5dyupQ86ApvTubS49pGvyT0VEWRgDkPbcFCw8SIUqYtjendG",
    alt: "img-6",
  },
  {
    src: "https://o7y30yptvf.ufs.sh/f/5dyupQ86ApvTubS49pGvyT0VEWRgDkPbcFCw8SIUqYtjendG",
    alt: "img-7",
  },
];

// 4 columns on md+; indices of images per column (top→bottom)
const DEFAULT_COLUMN_MAP: number[][] = [[0], [1, 2], [3, 4], [5, 6]];

// Easing (typed cubic-bezier)
const EASE = [0.22, 1, 0.36, 1] as const;

// Variants
const gridVariants: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const columnVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.45, ease: EASE },
  },
};

const tileVariants: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "tween", duration: 0.45, ease: EASE },
  },
};

function ImageMansory({
  images = DEFAULT_IMAGES,
  rounded = "rounded-xl",
}: Props) {
  const items = images.slice(0, 7);
  const columnMap = DEFAULT_COLUMN_MAP;

  return (
    <motion.div
      variants={gridVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="grid grid-cols-2 gap-6 md:grid-cols-4"
    >
      {columnMap.map((col, colIdx) => (
        <motion.div
          key={colIdx}
          variants={columnVariants}
          className={`grid gap-6 ${colIdx === 2 ? "mt-6 md:mt-12" : ""}`}
        >
          {col.map((imgIdx) => {
            const item = items[imgIdx];
            if (!item) return null;

            // Center single image in first column on md+
            const offsetClass = colIdx === 0 ? "md:self-center" : "";

            return (
              <motion.div
                key={imgIdx}
                variants={tileVariants}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className={`relative aspect-square w-full overflow-hidden ${rounded} ${offsetClass}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt || ""}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className={`object-cover ${rounded} ${item.className ?? ""}`}
                />
              </motion.div>
            );
          })}
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ImageMansory;
