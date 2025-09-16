"use client";
import { Accordion } from "@mantine/core";

function Faq() {
  const faq = [
    {
      question: "What is Kobo Connect?",
      answer:
        "Kobo Connect is a platform that allows you to connect your Kobo device to your computer.",
    },
    {
      question: "How does Kobo Connect work?",
      answer:
        "Kobo Connect is a platform that allows you to connect your Kobo device to your computer.",
    },
    {
      question: "What are the benefits of using Kobo Connect?",
      answer:
        "Kobo Connect is a platform that allows you to connect your Kobo device to your computer.",
    },
    {
      question: "How can I get started with Kobo Connect?",
      answer:
        "Kobo Connect is a platform that allows you to connect your Kobo device to your computer.",
    },
  ];

  return (
    <div className='bg-[#FAFDFE]'>
      <div className='container mx-auto py-10 md:py-20 px-4 max-w-6xl'>
        <div className='text-center mb-10 max-w-2xl mx-auto'>
          <h2 className='text-2xl md:text-4xl font-semibold leading-[1.25] mb-4'>
            Frequently Asked Questions
          </h2>
          <p className='text-base font-medium'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            eget leo ac eros facilisis finibus scelerisque sit amet turpis.
          </p>
        </div>
        <div className='grid gap-4 max-w-3xl mx-auto'>
          <Accordion>
            {faq.map((item) => (
              <Accordion.Item key={item.question} value={item.question}>
                <Accordion.Control>{item.question}</Accordion.Control>
                <Accordion.Panel>{item.answer}</Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Faq;
