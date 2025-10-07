import Image from "next/image";
import heroImg from "@/assets/images/hero.png";
import appStoreSvg from "@/assets/appStore.svg";
import playStoreSvg from "@/assets/playStore.svg";
import TypewriterText from "../shared/typewriter-text";
import heroBg from "@/assets/images/heroBg.png";

export default function Hero() {
  return (
    <div className="relative h-[75dvh]">
      <Image
        src={heroBg}
        priority
        alt='hero-bg'
        fill
        className='object-cover absolute inset-0 z-0'
      />
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-4 md:py-6 px-4 relative z-10'>
        <div className='col-span-2 max-w-2xl  py-10 text-white'>
          <div>
            <h1 className='text-2xl md:text-5xl font-bold leading-[1.25]'>
              Experience {""}
              <span className='text-[#007F5F]'>
                <TypewriterText
                  words={["Banking", "Shopping", "Sending Money"]}
                />
              </span>
              <br /> Like Never Before with <br />
            </h1>

            <h1 className='relative text-2xl md:text-5xl font-bold leading-[1.25]'>
              <span className='relative'>
                Kobo App
                <svg
                  className='absolute left-2 bottom-0 w-20 md:w-40'
                  height='60'
                  viewBox='0 0 278 82'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M225.325 16.0525C206.359 9.83672 146.22 2.40419 57.3937 22.4006C-31.4322 42.397 6.15813 64.8532 36.0565 73.5818C68.4575 79.7976 151.594 86.5953 221.769 67.2337C252.195 60.6212 302.297 41.1275 259.307 16.0525C249.429 10.7624 214.736 0.578977 154.992 2.16599'
                    stroke='#007F5F'
                    strokeWidth='4'
                  />
                </svg>
              </span>
            </h1>

            <p className='my-6 text-sm md:text-base'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              vehicula ac ex ac vehicula. Vestibulum finibus ante sit amet
              cursus tempus.
            </p>
          </div>

          <div className='flex gap-5 pt-4'>
            <Image src={appStoreSvg} priority alt='app-store' width={150} height={150} />
            <Image
              src={playStoreSvg}
              alt='play-store'
              width={150}
              height={150}
              priority

            />
          </div>
        </div>
        <div className='col-span-1 min-h-[500px]'>
          <Image src={heroImg} alt='hero-img' width={500} height={500} priority />
        </div>
      </div>
    </div>

  );
}
