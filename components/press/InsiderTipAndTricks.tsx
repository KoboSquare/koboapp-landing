import React from 'react'
import image109 from '@/assets/images/image109.png'
import Image from 'next/image';
import { Button } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';

interface InsiderTipAndTricks {
    items: {
        title: string;
        description: string;
        image: any;
        backgroundColor: string;
        textColor: string;
    }[];
}

function InsiderTipAndTricks() {
    const InsiderTipAndTricksList = [
        {
            title: 'Lorem ipsum dolor si',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus scelerisque sit amet turpis',
            image: image109,
            backgroundColor: '#EBFFFB',
            textColor: '#010101'
        },
        {
            title: 'Lorem ipsum dolor st',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus scelerisque sit amet turpis',
            image: image109,
            backgroundColor: '#0A1B1B',
            textColor: '#FFFFFF'
        },
        {
            title: 'Lorem ipsum dolor t',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus scelerisque sit amet turpis',
            image: image109,
            backgroundColor: '#007F5E',
            textColor: '#FFFFFF'
        },
    ]
    return (
        <div className='max-w-6xl mx-auto'>
            <div className='mb-8'>
                <h2 className='text-[#010101] text-2xl lg:text-3xl font-semibold'>Insider tips and tricks for maximum efficiency</h2>
                <p className='text-[#363E3F] text-lg'>Discover valuable insights to optimize your business and maximize efficiency.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
                {InsiderTipAndTricksList.map((item) => (
                    <InsiderTipAndTricksItem key={item.title} item={item} />
                ))}
            </div>
        </div>
    )
}

function InsiderTipAndTricksItem({ item }: { item: InsiderTipAndTricks['items'][number] }) {
    return (
        <div className='grid grid-rows-5 gap-4' style={{
            backgroundColor: item.backgroundColor,
            color: item.textColor,
            borderRadius: 12
        }}>
            <div className='p-4 lg:p-6 row-span-3 space-y-2'>
                <h2 className='text-xl lg:text-2xl font-semibold'>{item.title}</h2>
                <p className='text-base'>{item.description.slice(0, 100)} {item.description.length > 100 ? '...' : ''}</p>
                <Button variant="subtle" color={item.textColor} rightSection={<IconArrowRight />}>Read More</Button>
            </div>
            <div className='relative row-span-2'>
                <Image src={item.image} alt='press' fill className="object-cover" />
            </div>
        </div>
    )
}

export default InsiderTipAndTricks