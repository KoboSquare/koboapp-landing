"use client";
import { Accordion } from "@mantine/core";

interface FAQItem {
  _id: string;
  question: string;
  answer: string;
  order: number;
  published: boolean;
}

interface CustomAccordionProps {
  faqs: FAQItem[];
}

function CustomAccordion({ faqs }: CustomAccordionProps) {
  // Filter out unpublished FAQs and sort by order
  const publishedFAQs = faqs
    .filter((faq) => faq.published)
    .sort((a, b) => a.order - b.order);

  // Fallback data if no FAQs are provided
  const fallbackFAQs = [
    {
      _id: "1",
      question: "What is Kobo Connect?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus sceleri.",
      order: 0,
      published: true,
    },
    {
      _id: "2",
      question: "How do I get started?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus sceleri.",
      order: 1,
      published: true,
    },
    {
      _id: "3",
      question: "What is CRS?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus sceleri.",
      order: 2,
      published: true,
    },
    {
      _id: "4",
      question: "Do I need to have a Kobo Connect account to use Kobo Connect?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus sceleri.",
      order: 3,
      published: true,
    },
  ];

  const faqItems = publishedFAQs.length > 0 ? publishedFAQs : fallbackFAQs;

  return (
    <div>
      <Accordion>
        {faqItems.map((item) => (
          <Accordion.Item key={item._id} value={item._id}>
            <Accordion.Control className='text-left'>
              {item.question}
            </Accordion.Control>
            <Accordion.Panel className='text-[#363E3F]'>
              <p className='mb-2'>{item.answer}</p>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default CustomAccordion;
