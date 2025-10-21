import FAQAccordion from "../FaqAccordion";

interface FAQData {
  _id: string;
  title: string;
  description: string;
  faqItems: Array<{
    question: string;
    answer: string;
  }>;
  showSection: boolean;
}

function Faq({ faqData }: { faqData: FAQData }) {
  // Don't render if no data and section is disabled
  if (!faqData || !faqData.showSection) {
    return null;
  }

  return (
    <div className='bg-[#FAFDFE]'>
      <div className='container mx-auto py-10 md:py-20 px-4 max-w-6xl'>
        <div className='text-center mb-10 max-w-2xl mx-auto'>
          <h2 className='text-2xl md:text-4xl font-semibold leading-[1.25] mb-4'>
            {faqData.title}
          </h2>
          <p className='text-base font-medium'>{faqData.description}</p>
        </div>
        <div className='grid gap-4 max-w-3xl mx-auto bg-red-500 relative'>
          <FAQAccordion />

          <svg
            className='absolute right-0'
            width='425'
            height='417'
            viewBox='0 0 425 417'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <rect
              width='436'
              height='417'
              rx='20'
              fill='url(#paint0_linear_2166_887)'
            />
            <defs>
              <linearGradient
                id='paint0_linear_2166_887'
                x1='0'
                y1='209'
                x2='377'
                y2='209'
                gradientUnits='userSpaceOnUse'>
                <stop stop-color='#FAFCFE' stop-opacity='0' />
                <stop offset='1' stop-color='#FAFCFE' />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Faq;
