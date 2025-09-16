"use client";
import "@mantine/carousel/styles.css";
import { Carousel } from "@mantine/carousel";
import TestimonialCard from "./testimonial-card";

function TestimonialCaurosel() {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
      rating: 4,
      title: "Product Designer",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo a facilisis finibus scelerisque. In et venenatis leo, non luctus mau. Maecenas efficitur volutpat nibh, a aliquet elit.",
    },
    {
      id: 2,
      name: "Lucky Ekezie",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
      rating: 4,
      title: "CEO, Kobo Connect",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo a facilisis finibus scelerisque. In et venenatis leo, non luctus mau. Maecenas efficitur volutpat nibh, a aliquet elit.",
    },
    {
      id: 3,
      name: "Lucky Ekezie",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
      rating: 4,
      title: "CEO, Kobo Connect",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo a facilisis finibus scelerisque. In et venenatis leo, non luctus mau. Maecenas efficitur volutpat nibh, a aliquet elit.",
    },
  ];

  return (
    <Carousel
      height='100%'
      slideSize='70%'
      slideGap='lg'
      controlsOffset='sm'
      controlSize={26}
      emblaOptions={{
        dragFree: false,
        align: "start",
      }}>
      {testimonials.map((testimonial) => (
        <Carousel.Slide key={testimonial.id} className='py-4'>
          <TestimonialCard testimonial={testimonial} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}

export default TestimonialCaurosel;
