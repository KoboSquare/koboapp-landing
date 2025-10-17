import React from "react";
import Image from "next/image";
import kobovaultServices from "@/assets/images/koboVault-Services.png";
import locationIcon from "@/assets/locationIcon.svg";
import smsIcon from "@/assets/smsIcon.svg";
import callIcon from "@/assets/callIcon.svg";

const contactInfo = [
  {
    title: "Address",
    value: "123 Main Street, Lagos, Nigeria",
    icon: locationIcon,
  },
  {
    title: "Email",
    value: "contact@koboconnect.com",
    icon: smsIcon,
  },
  {
    title: "Phone",
    value: "+234 123 456 789",
    icon: callIcon,
  },
];

export default function KoboConnect() {
  return (
    <div>
      <div className=' mx-auto py-10 md:py-20 px-4 max-w-6xl'>
        <div>
          <h2 className='text-[#009A74] font-medium text-xl mb-2'>
            What is Kobo Connect?
          </h2>
          <h1 className='text-2xl lg:text-3xl font-semibold leading-[1.25]'>
            Africa’s next-generation super app <br />
            All in one integrated digital platform
          </h1>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-5 gap-8 py-8'>
          <div className='md:col-span-2 relative'>
            <Image
              src={kobovaultServices}
              alt='kobovault-services'
              width={400}
              height={400}
              className='object-contain'
            />
          </div>

          <div className='md:col-span-3 flex flex-col gap-6 items-center'>
            <div className='flex flex-col gap-4'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent eget leo ac eros facilisis finibus scelerisque sit amet
                turpis. In et venenatis leo, non luctus mauris. Maecenas
                efficitur volutpat nibh, a aliquet elit
              </p>

              <p>
                Aliquam ac tincidunt arcu. Donec dictum odio felis, ac tempor
                sapien aliquet non. Donec volutpat blandit posuere. Mauris nulla
                enim, placerat non pretium vitae, blandit quis felis. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
                leo ac eros facilisis finibus scelerisque sit amet turpis. In et
                venenatis leo, non luctus mauris. Maecenas efficitur volutpat
                nibh.
              </p>
            </div>

            <div className='grid grid-cols-3 gap-4 mt-6'>
              {contactInfo.map((item, index) => (
                <div key={index} className='bg-[#FAFDFE] p-4 rounded-lg w-full'>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={24}
                    height={24}
                    className='mb-4'
                  />
                  <div className=''>
                    <p className='text-base font-[400] break-words whitespace-normal max-w-full'>
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
