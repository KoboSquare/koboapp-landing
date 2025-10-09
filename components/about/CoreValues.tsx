import Image from "next/image";
import React from "react";
import v1 from "@/assets/images/values-1.jpg";
import v2 from "@/assets/images/values-2.jpg";
import v3 from "@/assets/images/values-3.jpg";
import v4 from "@/assets/images/values-4.jpg";
import p1 from "@/assets/images/team-1.jpg";
import p2 from "@/assets/images/team-2.jpg";
import p3 from "@/assets/images/team-3.jpg";
import p4 from "@/assets/images/team-4.jpg";
import p5 from "@/assets/images/team-5.jpg";
import p6 from "@/assets/images/team-6.jpg";
import p7 from "@/assets/images/team-7.jpg";
import p8 from "@/assets/images/team-8.jpg";
import i1 from "@/assets/icons/icon-1.svg";
import i2 from "@/assets/icons/icon-2.svg";
import i3 from "@/assets/icons/icon-3.svg";
import i4 from "@/assets/icons/icon-4.svg";

type FallbackValue = {
  id: number;
  title: string;
  body: string;
  image: any;
  icon: any;
};

const VALUES: FallbackValue[] = [
  {
    id: 1,
    title: "Inclusion for Every African, | Everywhere",
    body: "We believe access to essential digital services should never be limited | by geography, infrastructure, or income. Kobo Connect is designed | for everyone from smartphone users in urban centers to underbanked | individuals in remote areas, thanks to tools like USSD, agent networks, | and culturally relevant design.",
    image: v1,
    icon: i1,
  },
  {
    id: 2,
    title: "Seamless Simplicity for | Everyday Life",
    body: "Life is complicated, your digital experience shouldn't be. Kobo unifies | fragmented services into one seamless platform, removing the need to | juggle multiple apps. From rides to payments, everything is just a tap | away.",
    image: v2,
    icon: i2,
  },
  {
    id: 3,
    title: "Built for Africa, | Rooted in Local Realities",
    body: "We're deeply rooted in African realities. Whether it's integrating local | transport like keke and okada, enabling cash-on-delivery, or translating | services into local languages, Kobo Connect meets people where they | are, and how they live.",
    image: v3,
    icon: i3,
  },
  {
    id: 4,
    title: "Empowering Users, Businesses, | and Communities",
    body: "Kobo Connect isn't just about access, it's about impact. We empower | users to shop, earn, move, communicate, and care for their health. | We enable small businesses and service providers to grow, and we drive | digital adoption through tools that work for everyone.",
    image: v4,
    icon: i4,
  },
];

const PEOPLE = [
  { img: p1, name: "Lucky Ekezie", role: "EngineeFounder, CEO" },
  { img: p2, name: "Lucky Ekezie", role: "EngineeFounder, CEO" },
  { img: p3, name: "Lucky Ekezie", role: "EngineeFounder, CEO" },
  { img: p4, name: "Lucky Ekezie", role: "EngineeFounder, CEO" },
  { img: p5, name: "Lucky Ekezie", role: "EngineeFounder, CEO" },
  { img: p6, name: "Lucky Ekezie", role: "EngineeFounder, CEO" },
  { img: p7, name: "Lucky Ekezie", role: "EngineeFounder, CEO" },
  { img: p8, name: "Lucky Ekezie", role: "EngineeFounder, CEO" },
];

function ValueCard({
  value,
  reverse = false,
}: {
  value: Value | FallbackValue;
  reverse?: boolean;
}) {
  function formatWithLineBreaks(text: string) {
    return text.split("|").map((part, idx) => (
      <React.Fragment key={idx}>
        {part.trim()}
        <br className='hidden lg:block' />
      </React.Fragment>
    ));
  }

  // Define spacing based on value ID and reverse state
  const getSpacingClass = () => {
    const id = "id" in value ? value.id : 0;
    if (id === 1) return reverse ? "md:mr-[79px]" : "md:ml-[79px]";
    if (id === 3) return reverse ? "md:mr-[79px]" : "md:ml-[79px]";
    return "";
  };

  return (
    <div className='flex flex-col lg:flex-row items-center gap-4 lg:gap-x-8'>
      {/* Image */}
      <div
        className={`w-full md:w-auto md:flex-shrink-0 ${
          reverse ? "lg:order-2" : "lg:order-1"
        } mb-6 md:mb-0`}>
        <div className='relative rounded-xl overflow-hidden w-full md:w-[480px]'>
          {/* green accent frame */}
          <div className='absolute -inset-3 rounded-2xl border-[6px] border-[#009A74] -z-10 hidden sm:block' />
          <Image
            src={
              "image" in value &&
              typeof value.image === "object" &&
              "asset" in value.image
                ? value.image.asset.url
                : typeof value.image === "string"
                  ? value.image
                  : ""
            }
            alt={
              "image" in value &&
              typeof value.image === "object" &&
              "alt" in value.image
                ? value.image.alt
                : value.title
            }
            className='rounded-xl object-cover w-full h-auto'
            width={480}
            height={320}
            sizes='(max-width: 768px) 100vw, 480px'
            priority={false}
          />
        </div>
      </div>

      {/* Text */}
      <div
        className={`w-4/5 lg:w-full m-auto flex-1 ${
          reverse ? "lg:order-1" : "lg:order-2"
        } ${getSpacingClass()}`}>
        <div className='w-full flex lg:block justify-center items-center mt-10 lg:mt-0'>
          <Image
            src={
              typeof value.icon === "object" && "asset" in value.icon
                ? value.icon.asset.url
                : value.icon
            }
            alt={
              typeof value.icon === "object" && "alt" in value.icon
                ? value.icon.alt
                : value.title
            }
            className='rounded-xl object-cover mb-3'
            width={55}
            height={55}
            priority={false}
          />
        </div>
        <h3 className='text-xl md:text-[35px] md:leading-[40px] font-semibold text-[#010101] mb-2'>
          {formatWithLineBreaks(value.title)}
        </h3>
        <p className='text-[#363E3F] leading-7 text-sm md:text-base font-normal'>
          {formatWithLineBreaks(
            "body" in value ? value.body : value.description
          )}
        </p>
      </div>
    </div>
  );
}

interface Value {
  title: string;
  description: string;
  image: {
    asset: {
      _id: string;
      url: string;
      metadata: {
        dimensions: {
          width: number;
          height: number;
        };
      };
    };
    alt: string;
  };
  icon: {
    asset: {
      _id: string;
      url: string;
      metadata: {
        dimensions: {
          width: number;
          height: number;
        };
      };
    };
    alt: string;
  };
}

interface ValuesSection {
  title: string;
  subtitle: string;
  values: Value[];
}

interface TeamMember {
  name: string;
  role: string;
  image: {
    asset: {
      _id: string;
      url: string;
      metadata: {
        dimensions: {
          width: number;
          height: number;
        };
      };
    };
    alt: string;
  };
  bio?: string;
  linkedin?: string;
  twitter?: string;
}

interface TeamSection {
  title: string;
  subtitle: string;
  showSection: boolean;
  teamMembers: TeamMember[];
}

export interface AboutPageData {
  valuesSection: ValuesSection;
  teamSection: TeamSection;
}

interface CoreValuesProps {
  aboutPageData: AboutPageData;
}

export default function CoreValues({ aboutPageData }: CoreValuesProps) {
  const { valuesSection } = aboutPageData;
  return (
    <section className='mx-auto px-4 py-10 md:py-16 lg:py-16 max-w-6xl'>
      {/* Section header */}
      <div className='text-center max-w-2xl mx-auto mb-8 md:mb-16'>
        <h2 className='text-2xl md:text-[40px] md:leading-[44px] font-semibold text-[#010101]'>
          {valuesSection.title || "Our Core Values"}
        </h2>
        <p className='mt-3 text-sm md:text-lg font-medium text-[#363E3F]'>
          {valuesSection.subtitle ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilibus finib."}
        </p>
      </div>

      {/* Values list */}
      <div className='space-y-10 md:space-y-20 lg:space-y-24'>
        {(valuesSection.values && valuesSection.values.length > 0
          ? valuesSection.values
          : VALUES
        ).map((val, i) => (
          <ValueCard key={val.title} value={val} reverse={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
