import { Avatar, Rating } from "@mantine/core";
import Image from "next/image";

interface Testimonial {
  name: string;
  rating: number;
  comment: string;
  title: string;
  image: string;
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { name, rating, comment, title, image } = testimonial;

  return (
    <div className="grid grid-cols-4 gap-4 md:gap-6">
      <div className="col-span-1 min-h-[200px] relative">
        <Image
          src={image}
          alt='avatar'
          fill
          className='rounded-2xl object-cover'
        />
      </div>

      <div className='bg-[#0A1B1B] text-white p-4 md:p-8 rounded-2xl relative col-span-3 flex flex-col justify-center'>
        <div className='space-y-4'>
          <div>
            <em className='text-base font-medium'>&quot;{comment}&quot;</em>
          </div>

          <div className='flex items-center justify-between'>
            <div>
              <h6 className='text-base font-medium'>{name}</h6>
              <p className='text-sm font-medium'>{title}</p>
            </div>
            <div>
              <Rating defaultValue={rating} readOnly />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
