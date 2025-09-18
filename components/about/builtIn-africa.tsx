import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";
import React from "react";
import CultureImage from "@/assets/images/Video.png";

type Pill = { text: string; href?: string };

const PILL_ITEMS: Pill[] = [
  { text: "Offline-friendly (USSD + agent networks)" },
  { text: "Financially inclusive" },
  { text: "Designed with cultural relevance" },
  { text: "Locally integrated and scalable" },
];

export default function BuiltInAfrica() {
  return (
    <section className="relative">
      {/* Dark band */}
      <div className="bg-[#0A1B1B] text-white h-[690px] lg:h-[772px]">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-[90px] lg:pt-[107px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            {/* Left copy */}
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-4xl text-[#FFFFFF] lg:text-[40px] leading-tight font-semibold">
                Built In Africa
                <br /> For Africans.
              </h2>
              <p className="mt-4 text-sm sm:text-base lg:text-lg text-[#B5BBBB] leading-7">
                We’re building a digital ecosystem that’s inclusive and
                accessible, reaching underserved users with or without internet
                access. Kobo Connect is localized to reflect African lifestyles,
                languages, and transport systems, ensuring every user feels seen
                and understood.
              </p>
            </div>

            {/* Right pills */}
            <div className="flex flex-col divide-y divide-[#2A3E3C]">
              {PILL_ITEMS.map((item) => (
                <button
                  key={item.text}
                  type="button"
                  className="group flex items-center justify-between py-3 sm:py-4 text-left text-[#EAF2F1] transition px-1"
                >
                  <span className="text-sm sm:text-base lg:text-lg font-medium">
                    {item.text}
                  </span>
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0F2C29] group-hover:bg-[#0F3A34] cursor-pointer">
                    <IconArrowRight size={16} />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Overlapping video/image card */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-xl sm:rounded-2xl shadow-lg -mt-16 lg:-mt-32">
          <Image
            src={CultureImage}
            alt="People collaborating"
            className="h-[200px] sm:h-[260px] md:h-[320px] lg:h-[587px] w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
