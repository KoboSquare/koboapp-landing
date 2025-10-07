import React from 'react'
import icon from '@/assets/images/icon.png'
import Image from 'next/image'

const benefitsList = [
    {
        title: 'Work From Anywhere',
        icon: icon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        title: 'Lorem ipsum',
        icon: icon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        title: 'Lorem ips',
        icon: icon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        title: 'Lorem ipsu',
        icon: icon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        title: 'Work From Anywher',
        icon: icon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        title: 'Lorem ipsm',
        icon: icon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
]

function WorkBenefits() {
    return (
        <div className='max-w-6xl mx-auto'>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8'>
                {benefitsList.map((item) => (
                    <div key={item.title} className='flex items-start gap-4'>
                        <Image src={item.icon} alt='icon' className='rounded-full' width={70} height={70} />
                        <div>
                            <h2 className='text-lg font-semibold'>{item.title}</h2>
                            <p className='text-base text-[#363E3F]'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WorkBenefits