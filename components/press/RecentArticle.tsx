import React from 'react'
import image109 from '@/assets/images/image109.png'
import Image from 'next/image'
import { Button } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';

const articleList = [
    {
        author: 'Lucky Ekezie',
        date: '12 Aug 2025',
        image: image109,
        title: 'TKobo Stories: Innovation for Everyday Africa',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus scelerisque sit amet turpis. In et venenatis leo, non luctus mauris. Maecenas efficitur volutpat nibh, a aliquet elit.',
    },
    {
        author: 'Esther Umoh',
        date: '13 Aug 2025',
        image: image109,
        title: 'From Wallets to Wellness: Explore the Kobo World...',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus scelerisque sit amet turpis. In et venenatis leo, non luctus mauris. Maecenas efficitur volutpat nibh, a aliquet elit.',
    },
    {
        author: 'Joseph Rukevwe',
        date: '14 Aug 2025',
        image: image109,
        title: 'Supporting Local Businesses Through Kobo Market...',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus scelerisque sit amet turpis. In et venenatis leo, non luctus mauris. Maecenas efficitur volutpat nibh, a aliquet elit.',
    },
]

interface Article {
    author: string;
    date: string;
    image: any;
    title: string;
    description: string;
}

function RecentArticle() {
    return (
        <div className='max-w-6xl mx-auto'>
            <div className='mb-4'>
                <h3 className='text-[#010101] text-2xl lg:text-3xl font-semibold'>Our recent articles</h3>
                <p className='text-[#363E3F] text-lg'>Stay informed with our latest insights</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8'>
                {articleList.map((article) => (
                    <RecentArticleCard key={article.title} article={article} />
                ))}
            </div>
        </div>
    )
}


function RecentArticleCard({ article }: { article: Article }) {
    return (
        <div className='grid grid-rows-5 gap-4'>
            <div className='row-span-2 relative'>
                <Image src={article.image} alt='press' fill className="object-cover rounded-xl" />
            </div>

            <div className='row-span-3 space-y-2'>
                <div className='flex justify-between items-center'>
                    <p className='font-medium text-[#009A74] text-base'>{article.author}</p>
                    <p className='text-[#363E3F] text-base'>{article.date}</p>
                </div>
                <h4 className='text-[#010101] text-xl lg:text-2xl font-semibold'>{article.title}</h4>
                <p className='text-[#363E3F] text-base'>{article.description}</p>
                <Button variant="subtle" style={{
                    paddingLeft: '0px',
                }} color="#007F5E" rightSection={<IconArrowRight />}>Read More</Button>

            </div>
        </div>
    )
}

export default RecentArticle