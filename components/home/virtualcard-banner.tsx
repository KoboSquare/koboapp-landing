import Image from "next/image";
import CardSvg from "@/assets/Card.svg";
import Card2Svg from "@/assets/Card2.svg";
import { Button } from "@mantine/core";
import { getVirtualCardBannerData } from "@/lib/sanity/queries/virtualCardBanner";

async function VirtualCardBanner() {
  const virtualCardData = await getVirtualCardBannerData();

  // Don't render if no data and section is disabled
  if (!virtualCardData || !virtualCardData.showSection) {
    return null;
  }

  return (
    <div className='py-4 md:py-12 px-4'>
      <div className='container px-4 relative mx-auto bg-[#0A1B1B] rounded-4xl grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
        <div className='col-span-1'>
          <Image
            className='absolute top-[-100px] z-10'
            src={Card2Svg}
            alt='card'
            width={320}
            height={240}
          />

          <svg
            className='absolute inset-[100px] z-10'
            width='277'
            height='278'
            viewBox='0 0 277 278'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <g filter='url(#filter0_f_2166_833)'>
              <circle
                cx='138.5'
                cy='138.939'
                r='88.5'
                fill='#0A1B1B'
                fillOpacity='0.5'
              />
            </g>
            <defs>
              <filter
                id='filter0_f_2166_833'
                x='0'
                y='0.439453'
                width='277'
                height='277'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'>
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feBlend
                  mode='normal'
                  in='SourceGraphic'
                  in2='BackgroundImageFix'
                  result='shape'
                />
                <feGaussianBlur
                  stdDeviation='25'
                  result='effect1_foregroundBlur_2166_833'
                />
              </filter>
            </defs>
          </svg>

          <svg
            className='absolute inset-0 z-10'
            width='383'
            height='384'
            viewBox='0 0 383 384'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <g filter='url(#filter0_f_2166_832)'>
              <circle
                cx='191.5'
                cy='191.939'
                r='141.5'
                fill='#0A1B1B'
                fillOpacity='0.3'
              />
            </g>
            <defs>
              <filter
                id='filter0_f_2166_832'
                x='0'
                y='0.439453'
                width='383'
                height='383'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'>
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feBlend
                  mode='normal'
                  in='SourceGraphic'
                  in2='BackgroundImageFix'
                  result='shape'
                />
                <feGaussianBlur
                  stdDeviation='25'
                  result='effect1_foregroundBlur_2166_832'
                />
              </filter>
            </defs>
          </svg>

          <Image
            className='z-20 absolute bottom-0'
            src={CardSvg}
            alt='card'
            width={480}
            height={411}
          />
        </div>

        <div className='p-4 md:p-8 md:py-12 space-y-4 col-span-1'>
          <h2 className='text-2xl md:text-4xl font-semibold leading-[1.25] text-white'>
            {virtualCardData.title}
          </h2>
          <p className='text-lg font-medium text-[#B5BBBB] pb-4'>
            {virtualCardData.description}
          </p>
          <Button
            variant='default'
            style={{
              backgroundColor: "#009A74",
              color: "white",
              borderColor: "#008E6A",
            }}
            component='a'
            href={virtualCardData.buttonLink || "#"}>
            {virtualCardData.buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default VirtualCardBanner;
