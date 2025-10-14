import React from "react";
import Image from "next/image";

interface Benefit {
  title: string;
  description: string;
  icon: {
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

interface BenefitsSection {
  title?: string;
  subtitle?: string;
  benefits: Benefit[];
}

interface CareersPageData {
  benefitsSection: BenefitsSection;
}

interface WorkBenefitsProps {
  careersPageData: CareersPageData;
}

function WorkBenefits({ careersPageData }: WorkBenefitsProps) {
  const { benefitsSection } = careersPageData;

  // Use Sanity data if available, otherwise fallback
  const benefitsList =
    benefitsSection.benefits && benefitsSection.benefits.length > 0
      ? benefitsSection.benefits.map((benefit) => ({
          title: benefit.title,
          description: benefit.description,
          icon: benefit.icon.asset.url,
        }))
      : [];
  return (
    <div className='max-w-6xl mx-auto'>
      {benefitsSection.title && (
        <div className='mb-8'>
          <h6 className='text-[#009A74]'>Benefits</h6>
          <h2 className='text-[#010101] text-2xl lg:text-3xl font-semibold'>
            {benefitsSection.title}
          </h2>
          {benefitsSection.subtitle && (
            <p className='text-[#363E3F] mt-2'>{benefitsSection.subtitle}</p>
          )}
        </div>
      )}

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8'>
        {benefitsList.map((item, index) => (
          <div key={item.title || index} className='flex items-start gap-4'>
            <Image
              src={typeof item.icon === "string" ? item.icon : item.icon}
              alt='icon'
              className='rounded-full'
              width={70}
              height={70}
            />
            <div>
              <h2 className='text-lg font-semibold'>{item.title}</h2>
              <p className='text-base text-[#363E3F]'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkBenefits;
