import { Button } from "@mantine/core";
import React from "react";
import TestimonialCaurosel from "./testimonial-caurosel";

function Testimonials() {
  return (
    <div>
      <div className='container mx-auto py-10 md:py-20 px-4 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20'>
        <div className='space-y-4 md:col-span-1'>
          <h2 className='text-2xl md:text-4xl font-semibold leading-[1.25]'>
            Don’t Take Our <br />
            Word For It
          </h2>
          <p className='text-base font-medium max-w-md'>
            Hear from our satisfied clients and learn how Kobo Connect has
            helped. Praesent eget leo ac eros facilisis finibus scelerisque sit
            amet turpis.
          </p>

          <div className='mt-6'>
            <Button
              variant='default'
              style={{
                backgroundColor: "#009A74",
                color: "white",
                borderColor: "#008E6A",
              }}>
              Get Started
            </Button>
          </div>
        </div>

        <div className='md:col-span-1'>
          <TestimonialCaurosel />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
