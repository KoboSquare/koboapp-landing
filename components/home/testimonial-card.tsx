import { Avatar, Rating } from "@mantine/core";

interface Testimonial {
  name: string;
  rating: number;
  comment: string;
  title: string;
  image:
    | string
    | {
        asset: {
          _id: string;
          url: string;
          metadata: {
            dimensions: {
              width: number;
              height: number;
            };
          };
        };
        alt: string;
      };
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { name, rating, comment, title, image } = testimonial;

  // Handle both string URLs and Sanity image objects
  const imageUrl = typeof image === "string" ? image : image.asset.url;

  return (
    <div className='bg-[#FAFDFE] p-4 rounded-2xl relative'>
      <Avatar
        radius='xl'
        src={imageUrl}
        className='absolute top-[-30px] left-0 z-40'
        alt={typeof image === "string" ? "avatar" : image.alt}
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
