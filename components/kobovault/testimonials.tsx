import React from "react";
import TestimonialCaurosel from "./testimonial-caurosel";

function Testimonials() {
  return (
    <div>
      <div className='max-w-6xl mx-auto py-10 md:py-14 px-4 grid grid-cols-1 gap-6 md:gap-8'>
        <div className='space-y-4 flex flex-col items-center text-center'>
          <h2 className='text-2xl md:text-4xl font-semibold leading-[1.25]'>
            Don’t Take Our Word For It
          </h2>
          <p className='text-base font-medium max-w-md'>
            Hear from our satisfied users and learn how Kobo Vault has helped.
            Praesent eget leo ac eros facilisis finibus scelerisque.
          </p>
        </div>

        <div>
          <TestimonialCaurosel />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
