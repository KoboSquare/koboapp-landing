import { Button } from "@mantine/core";
import TestimonialCaurosel from "./testimonial-caurosel";
import { getTestimonialsData } from "@/lib/sanity/queries/testimonials";

async function Testimonials() {
  const testimonialsData = await getTestimonialsData();

  // Don't render if no data and section is disabled
  if (!testimonialsData || !testimonialsData.showSection) {
    return null;
  }

  return (
    <div>
      <div className='container mx-auto py-10 md:py-20 px-4 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20'>
        <div className='space-y-4 md:col-span-1'>
          <h2 className='text-2xl md:text-4xl font-semibold leading-[1.25]'>
            {testimonialsData.title}
          </h2>
          <p className='text-base font-medium max-w-md'>
            {testimonialsData.description}
          </p>

          <div className='mt-6'>
            <Button
              variant='default'
              style={{
                backgroundColor: "#009A74",
                color: "white",
                borderColor: "#008E6A",
              }}
              component='a'
              href={testimonialsData.buttonLink || "#"}>
              {testimonialsData.buttonText}
            </Button>
          </div>
        </div>

        <div className='md:col-span-1'>
          <TestimonialCaurosel testimonials={testimonialsData.testimonials} />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
