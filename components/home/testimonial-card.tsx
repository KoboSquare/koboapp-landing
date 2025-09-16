import { Avatar, Rating } from "@mantine/core";

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
    <div className='bg-[#FAFDFE] p-4 rounded-2xl relative'>
      <Avatar
        radius='xl'
        src={image}
        className='absolute top-[-30px] left-0 z-40'
        alt='avatar'
      />
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
  );
}

export default TestimonialCard;
