import React from "react";
import OurAppImage from "@/assets/images/ourApp.png";
import Image from "next/image";
import { Button, Divider } from "@mantine/core";

function OurApps() {
  return (
    <div className='bg-[#0A1B1B]'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto pt-10 md:pt-24 px-4'>
        <div className='space-y-6 md:space-y-8 pb-5'>
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

          <div className='flex gap-4 text-white items-center'>
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
            variant='default'
            style={{
              backgroundColor: "#009A74",
              color: "white",
              borderColor: "#008E6A",
            }}>
            See Products
          </Button>
        </div>

        <div className='relative'>
          <Image src={OurAppImage} alt='our-app' width={900} height={900} />
        </div>
      </div>
    </div>
  );
}

export default OurApps;
