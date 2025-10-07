import { Button } from '@mantine/core'
import React from 'react'


interface ICurrentVacancy {
    title: string;
    location: string;
    description: string;
    date: string;
}

const currentVacanciesList: ICurrentVacancy[] = [
    {
        title: 'Product Designer',
        location: 'Lagos',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus scelerisque sit amet turpis. In et venenatis leo, non luctus mauris. Maecenas efficitur volutpat nibh, a aliquet elit.',
        date: '1 week ago'
    },
    {
        title: 'Full Stack Engineer',
        location: 'Lagos',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus scelerisque sit amet turpis. In et venenatis leo, non luctus mauris. Maecenas efficitur volutpat nibh, a aliquet elit.',
        date: '1 week ago'
    },
    {
        title: 'Office Assistant',
        location: 'Remote',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus scelerisque sit amet turpis. In et venenatis leo, non luctus mauris. Maecenas efficitur volutpat nibh, a aliquet elit.',
        date: '1 week ago'
    },
    {
        title: 'Frontend Engineer',
        location: 'Remote',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus scelerisque sit amet turpis. In et venenatis leo, non luctus mauris. Maecenas efficitur volutpat nibh, a aliquet elit.',
        date: '1 week ago'
    },
    {
        title: 'Business Administrator',
        location: 'On-site',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus scelerisque sit amet turpis. In et venenatis leo, non luctus mauris. Maecenas efficitur volutpat nibh, a aliquet elit.',
        date: '1 week ago'
    },
    {
        title: 'UI Designer',
        location: 'Remote',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus scelerisque sit amet turpis. In et venenatis leo, non luctus mauris. Maecenas efficitur volutpat nibh, a aliquet elit.',
        date: '1 week ago'
    },
    {
        title: 'Graphic Designer',
        location: 'Remote',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus scelerisque sit amet turpis. In et venenatis leo, non luctus mauris. Maecenas efficitur volutpat nibh, a aliquet elit.',
        date: '1 week ago'
    },
    {
        title: 'Social Media Manager',
        location: 'Remote',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus scelerisque sit amet turpis. In et venenatis leo, non luctus mauris. Maecenas efficitur volutpat nibh, a aliquet elit.',
        date: '2 week ago'
    },
]

function CurrentVacancies() {
    return (
        <div className=' bg-[#F9FCFC] py-6 md:py-16 lg:py-24'>
            <div className='max-w-6xl mx-auto'>
                <div className='mb-8'>
                    <h6 className='text-[#009A74]'>Openings</h6>
                    <h2 className='text-[#010101] text-2xl lg:text-3xl font-semibold'>Our current vacancies</h2>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
                    {currentVacanciesList.map((item) => (
                        <CurrentVacanciesItem key={item.title} item={item} />
                    ))}

                </div>
            </div>
        </div>
    )
}

function CurrentVacanciesItem({ item }: { item: ICurrentVacancy }) {
    return (
        <div className=' gap-4 bg-white shadow-sm rounded-2xl p-4 md:p-5'>
            <div className='mb-8'>
                <div className='flex items-center gap-2 mb-4'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0004 11.1917C11.4363 11.1917 12.6004 10.0276 12.6004 8.5917C12.6004 7.15576 11.4363 5.9917 10.0004 5.9917C8.56445 5.9917 7.40039 7.15576 7.40039 8.5917C7.40039 10.0276 8.56445 11.1917 10.0004 11.1917Z" stroke="#363E3F" strokeWidth="1.5" />
                        <path d="M3.01675 7.07508C4.65842 -0.141583 15.3501 -0.13325 16.9834 7.08342C17.9417 11.3167 15.3084 14.9001 13.0001 17.1168C11.3251 18.7334 8.67508 18.7334 6.99175 17.1168C4.69175 14.9001 2.05842 11.3084 3.01675 7.07508Z" stroke="#363E3F" strokeWidth="1.5" />
                    </svg>
                    <p className='text-[#363E3F] text-base'>{item.location}</p>

                </div>

                <h2 className='text-lg lg:text-xl font-semibold mb-2'>{item.title}</h2>
                <p className='text-base'>{item.description.slice(0, 20)} {item.description.length > 20 ? '...' : ''}</p>
            </div>
            <div className='relative row-span-2 flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.66699 1.66675V4.16675" stroke="#363E3F" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13.333 1.66675V4.16675" stroke="#363E3F" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2.91699 7.57495H17.0837" stroke="#363E3F" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17.5 7.08341V14.1667C17.5 16.6667 16.25 18.3334 13.3333 18.3334H6.66667C3.75 18.3334 2.5 16.6667 2.5 14.1667V7.08341C2.5 4.58341 3.75 2.91675 6.66667 2.91675H13.3333C16.25 2.91675 17.5 4.58341 17.5 7.08341Z" stroke="#363E3F" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13.0791 11.4167H13.0866" stroke="#363E3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13.0791 13.9167H13.0866" stroke="#363E3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.99607 11.4167H10.0036" stroke="#363E3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.99607 13.9167H10.0036" stroke="#363E3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6.91209 11.4167H6.91957" stroke="#363E3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6.91209 13.9167H6.91957" stroke="#363E3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h6>{item.date}</h6>

                </div>
                <Button variant='filled' color={'#009A74'}>Apply</Button>
            </div>
        </div>
    )
}

export default CurrentVacancies