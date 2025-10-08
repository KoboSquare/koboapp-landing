import React from "react";
import Image from "next/image";
import { Button, Input } from "@mantine/core";
import { urlFor } from "@/lib/sanity/image";

interface SubscribeSectionConfig {
  title: string;
  subtitle: string;
  image?: {
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
  buttonText: string;
  placeholderText: string;
  showSection: boolean;
}

interface SubscribeArticleBannerProps {
  pressPageData: any;
}

function SubscribeArticleBanner({
  pressPageData,
}: SubscribeArticleBannerProps) {
  // config for the section from sanity or render default fallback
  const config: SubscribeSectionConfig = pressPageData?.subscribeSection || {
    title: "Read more articles like this",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adip elit. Praesent eget leo ac eros facilisis finibus.",
    buttonText: "Subscribe",
    placeholderText: "Enter your email",
    showSection: true,
    image: null,
  };

  // if the section is not shown, return null
  if (!config.showSection) {
    return null;
  }

  return (
    <div className='max-w-6xl mx-auto bg-[#007F5E] rounded-2xl'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
        {config.image && (
          <div className='col-span-1'>
            <Image
              src={urlFor(config.image.asset).url()}
              alt={config.image.alt}
              width={500}
              height={500}
              className='object-cover'
            />
          </div>
        )}

        <div className='col-span-1 flex flex-col justify-center pr-4 max-w-md'>
          <div className='mb-6 space-y-2'>
            <h2 className='text-white text-2xl lg:text-3xl font-semibold'>
              {config.title}
            </h2>
            <p className='text-[#CCE5DF] text-lg'>{config.subtitle}</p>
          </div>

          <div className='flex items-center gap-2 w-full'>
            <Input
              variant='unstyled'
              className='placeholder:text-[#ABCCC4]'
              style={{
                borderBottom: "1px solid #FFFFFF4D",
                width: "70%",
                color: "#FFFFFF",
              }}
              placeholder={config.placeholderText}
            />
            <div className='w-[30%]'>
              <Button variant='filled' color='#009A74' fullWidth>
                {config.buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscribeArticleBanner;
