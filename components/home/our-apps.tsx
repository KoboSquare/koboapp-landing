import React from "react";
import OurAppImage from "@/assets/images/ourApp.png";
import Image from "next/image";
import { Button, Divider } from "@mantine/core";

function OurApps() {
  return (
    <div className='bg-[#0A1B1B] '>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto pt-10 md:pt-24 lg:pt-28 px-4'>
        <div className='space-y-6 md:space-y-8 pb-6 lg:pb-16'>
          <div className='space-y-2'>
            <h3 className='text-[#009A74] font-medium text-xl'>Our Apps</h3>
            <h2 className='font-semibold text-white text-4xl leading-[1.30]'>
              Check Out Our <br />
              Kobo Super App Suite
            </h2>
            <p className='text-lg font-medium text-[#B5BBBB]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              eget leo ac eros facilisis finibus scelerisque sit amet turpis.
            </p>
          </div>

          <div className='flex gap-6 lg:gap-8 text-white items-center pb-4 lg:pb-6'>
            <div>
              <h2 className='font-semibold text-2xl md:text-4xl'>20.5k</h2>
              <p>Total Downloads</p>
            </div>
            <Divider orientation='vertical' />
            <div>
              <h2 className='font-semibold text-2xl md:text-4xl'>20.5k</h2>
              <p>Total Downloads</p>
            </div>

            <Divider orientation='vertical' />
            <div>
              <h2 className='font-semibold text-2xl md:text-4xl'>20.5k</h2>
              <p>Total Downloads</p>
            </div>
          </div>

          <Button
            size='md'
            variant='default'
            style={{
              backgroundColor: "#009A74",
              color: "white",
              borderColor: "#008E6A",
              borderRadius: 12,
            }}>
            See Products
          </Button>
        </div>

        <div className='relative min-h-96'>
          <Image src={OurAppImage} alt='kobo-app' fill />
        </div>
      </div>
    </div>
  );
}

export default OurApps;
