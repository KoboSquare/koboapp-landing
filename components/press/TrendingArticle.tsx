import React from 'react'
import image109 from '@/assets/images/image109.png'
import Image from 'next/image'
import { Badge, Button } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';

const articleList = [
    {
        author: 'Lucky Ekezie',
        date: '12 Aug 2025',
        image: image109,
        category: 'Finance',
        title: 'Fintech Made Simple: Understanding Digital Wallets',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus scelerisque sit amet turpis. In et venenatis leo, non luctus mauris. Maecenas efficitur volutpat nibh, a aliquet elit.',
    },
    {
        author: 'Esther Umoh',
        date: '13 Aug 2025',
        image: image109,
        category: 'Health',
        title: 'Kobo Wave: Bringing Healthcare Closer to You',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus scelerisque sit amet turpis. In et venenatis leo, non luctus mauris. Maecenas efficitur volutpat nibh, a aliquet elit.',
    },
    {
        author: 'Joseph Rukevwe',
        date: '14 Aug 2025',
        image: image109,
        category: 'Lifestyle',
        title: 'Supporting Local Businesses Through Kobo Market',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus scelerisque sit amet turpis. In et venenatis leo, non luctus mauris. Maecenas efficitur volutpat nibh, a aliquet elit.',
    },
]

interface Article {
    author: string;
    date: string;
    image: any;
    category: string;
    title: string;
    description: string;
}

function TrendingArticle() {
    return (
        <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-4 lg:gap-8'>
            <div className='mb-4 col-span-1 lg:col-span-2 space-y-2'>
                <h6 className='text-[#009A74] text-lg font-medium'>Trending</h6>
                <h3 className='text-[#010101] text-2xl lg:text-4xl font-semibold'>Trending articles you
                    need to check out</h3>
                <p className='text-[#363E3F] text-lg'>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Praesent eget leo ac eros.
                </p>
            </div>

            <div className='grid grid-cols-1 gap-4 md:gap-8 lg:col-span-4'>
                {articleList.map((article) => (
                    <TrendingArticleCard key={article.title} article={article} />
                ))}
            </div>
        </div>
    )
}


function TrendingArticleCard({ article }: { article: Article }) {
    return (
        <div className='grid grid-cols-5 gap-4 md:gap-6'>
            <div className=' relative col-span-2'>
                <Image src={article.image} alt='press' fill className="object-cover rounded-xl" />
            </div>

            <div className='space-y-3 col-span-3'>
                <div className='flex justify-between items-center'>
                    <Badge style={{
                        color: '#51427F',
                        backgroundColor: '#F6F4FF',
                    }}>{article.category}</Badge>
                    <p className='text-[#363E3F] text-base'>{article.date}</p>
                </div>
                <h4 className='text-[#010101] text-xl lg:text-2xl font-semibold'>{article.title}</h4>
                <p className='text-[#363E3F] text-base'>{article.description.slice(0, 100) + '...'}</p>
                <Button variant="subtle" style={{
                    paddingLeft: '5px',
                }} color="#007F5E" rightSection={<IconArrowRight />}>Read More</Button>

            </div>
        </div>
    )
}

export default TrendingArticle