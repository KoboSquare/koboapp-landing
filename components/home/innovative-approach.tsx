import React from "react";

function InnovativeApproach() {
  return (
    <div>
      <div className='container mx-auto py-10 md:py-20 px-4 max-w-6xl'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          <div>
            <h2 className='text-2xl md:text-4xl font-semibold leading-[1.25]'>
              Innovative Approach to <br />
              Financial Services
            </h2>

            <svg
              className='w-60 md:w-90 h-8 mt-4'
              viewBox='0 0 472 33'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M1 16.4556C74.1648 8.27411 250.539 -5.1436 370.717 6.6378C308.662 8.6709 167.578 17.0043 106.154 29.2545C104.947 29.4952 105.16 30.9771 106.386 30.8701C184.442 24.0618 355.134 14.8783 471 30.3637'
                stroke='#007F5F'
                strokeWidth='3'
              />
            </svg>
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              eget leo ac eros facilisis finibus scelerisque sit amet turpis. In
              et venenatis leo, non luctus mauris. Maecenas efficitur volutpat
              nibh, a aliquet elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InnovativeApproach;
