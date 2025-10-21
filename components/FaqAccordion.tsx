import { getFAQData } from "@/lib/sanity/queries/faq";
import CustomAccordion from "./ui/Accordion";

interface FAQItem {
  _id: string;
  question: string;
  answer: string;
  order: number;
  published: boolean;
}

async function FAQAccordion() {
  const faqs = await getFAQData();

  console.log(faqs, "faqs");

  // Filter out unpublished FAQs and sort by order
  // const publishedFAQs = faqs?.filter((faq) => faq.published)
  //   .sort((a, b) => a.order - b.order);

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

  // const faqItems = publishedFAQs.length > 0 ? publishedFAQs : fallbackFAQs;

  return <div>{/* <CustomAccordion items={faqItems} /> */}</div>;
}

export default FAQAccordion;
