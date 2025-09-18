import Image from "next/image";
import React from "react";
import AboutheroBgImage from "@/assets/images/about-hero-bg-image.jpg";
import Phone from "@/assets/images/Phone.jpg";

export default function AboutHero() {
  return (
    <div className="container mx-auto py-4 sm:py-6 md:py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero banner with BG + gradient overlay */}
      <div className="relative overflow-hidden rounded-xl sm:rounded-2xl h-[240px] sm:h-[280px] md:h-[360px] lg:h-[420px] xl:h-[480px]">
        {/* Background Image */}
        <Image
          src={AboutheroBgImage}
          alt="People collaborating"
          className="object-cover"
          fill
          priority
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, #007F5FB2 0%, #00E5AB80 100%)",
          }}
        />
        {/* Title (centered both horizontally & vertically) */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[65px] font-semibold text-center">
            About Us
          </h1>
        </div>
      </div>

      {/* Below-hero content */}
      <div className="w-full max-w-7xl mx-auto mt-8 sm:mt-10 lg:mt-12 px-2 sm:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left stats with subtle separators */}
          <div className="order-2 lg:order-1 flex flex-col justify-center lg:justify-end lg:items-end">
            <div className="flex flex-row sm:flex-row lg:flex-col justify-center sm:justify-around lg:justify-end lg:space-y-6 space-x-6 sm:space-x-8 lg:space-x-0">
              {/* First Stat */}
              <div className="flex flex-col items-center lg:items-end">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold text-[#010101]">
                  20.5k
                </p>
                <p className="text-sm sm:text-base lg:text-lg font-normal text-[#5B6667] text-center lg:text-right">
                  Total Downloads
                </p>
              </div>

              {/* Mobile/Tablet horizontal divider, Desktop vertical divider */}
              <div
                aria-hidden="true"
                className="hidden lg:block h-px w-[120px] xl:w-[150px] my-4 bg-[#E6ECEC]"
              />
              <div
                aria-hidden="true"
                className="lg:hidden w-px h-12 sm:h-14 bg-[#E6ECEC] self-center"
              />

              {/* Second Stat */}
              <div className="flex flex-col items-center lg:items-end">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold text-[#010101]">
                  20.5k
                </p>
                <p className="text-sm sm:text-base lg:text-lg font-normal text-[#5B6667] text-center lg:text-right">
                  Total Downloads
                </p>
              </div>

              {/* Mobile/Tablet horizontal divider, Desktop vertical divider */}
              <div
                aria-hidden="true"
                className="hidden lg:block h-px w-[120px] xl:w-[150px] my-4 bg-[#E6ECEC]"
              />
              <div
                aria-hidden="true"
                className="lg:hidden w-px h-12 sm:h-14 bg-[#E6ECEC] self-center"
              />

              {/* Third Stat */}
              <div className="flex flex-col items-center lg:items-end">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold text-[#010101]">
                  20.5k
                </p>
                <p className="text-sm sm:text-base lg:text-lg font-normal text-[#5B6667] text-center lg:text-right">
                  Total Downloads
                </p>
              </div>
            </div>
          </div>

          {/* Center phone */}
          <div className="order-1 lg:order-2 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[400px] xl:max-w-[446px] mr-[-50px] md:mr-0">
              <Image
                src={Phone}
                alt="Kobo Connect mobile app"
                width={446}
                height={560}
                priority
                className="w-full h-auto"
                sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 380px, (max-width: 1280px) 400px, 446px"
              />
            </div>
          </div>

          {/* Right copy */}
          <div className="order-3 space-y-4 lg:space-y-6 lg:w-[491px]">
            <p className="text-lg sm:text-xl font-medium text-[#009A74]">
              What is Kobo Connect?
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] lg:leading-[44px] xl:leading-[48px] font-semibold text-[#010101] mt-2.5 mb-4 lg:mb-6">
              Africa's next-generation
              <br className="hidden sm:block" /> super app.
            </h2>
            <p className="text-[#363E3F] leading-6 sm:leading-7 lg:leading-8 text-base sm:text-lg font-normal">
              Kobo Connect is a next-generation digital platform designed to
              simplify everyday life across Africa. From a single app, users can
              chat, ride, shop, send, pay, book local services, and even access
              healthcare — all seamlessly connected in one ecosystem. We're
              building Africa's most inclusive and culturally relevant super
              app, crafted for everyday people, local businesses, and
              underserved communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
