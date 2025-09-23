import React from 'react'
import Image from 'next/image'
import totalControlImage from '@/assets/images/totalControlImage.png'

function TotalControl() {
    return (
        <div className='container max-w-6xl mx-auto py-6 md:py-10 px-4 flex flex-col md:flex-row gap-8 md:gap-16 items-end'>
            <div className='relative'>
                <Image src={totalControlImage} alt='total-control' width={400} height={400} priority className='object-cover' />
            </div>



            <div className='space-y-8 py-6 md:py-8 pr-4'>
                <div className='space-y-4 pb-2'>
                    <h2 className='text-2xl md:text-4xl font-semibold'>Total Control Over Your Money</h2>
                    <p className='text-lg font-medium'>
                        Kobo Vault puts your entire financial world in one place — simple,
                        fast, and transparent.
                    </p>
                </div>


                <div className='flex gap-4 items-center'>
                    <div>
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="60" height="60" rx="10" fill="#EFFFFC" />
                            <path d="M20 28H40" stroke="#009A74" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M29.5483 38.4998H24.4383C20.8883 38.4998 19.9883 37.6198 19.9883 34.1098V25.8898C19.9883 22.7098 20.7283 21.6898 23.5183 21.5298C23.7983 21.5198 24.1083 21.5098 24.4383 21.5098H35.5483C39.0983 21.5098 39.9983 22.3898 39.9983 25.8998V30.3098" stroke="#009A74" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M24 34H28" stroke="#009A74" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M40 36C40 36.75 39.79 37.46 39.42 38.06C38.73 39.22 37.46 40 36 40C34.54 40 33.27 39.22 32.58 38.06C32.21 37.46 32 36.75 32 36C32 33.79 33.79 32 36 32C38.21 32 40 33.79 40 36Z" stroke="#009A74" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M34.4414 35.9995L35.4314 36.9895L37.5614 35.0195" stroke="#009A74" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                    </div>
                    <div>
                        <h3 className='font-semibold text-lg md:text-2xl'>Instant Transfers</h3>
                        <p className='text-sm md:text-base'>Send and receive money within seconds, whether locally
                            or across borders.</p>
                    </div>
                </div>


                <div className='flex gap-4 items-center'>
                    <div>
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="60" height="60" rx="10" fill="#FFEFE8" />
                            <path d="M35.2803 28.45L39.0002 24.73L35.2803 21.01" stroke="#FC8640" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 24.73H39" stroke="#FC8640" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M24.72 31.55L21 35.2701L24.72 38.9901" stroke="#FC8640" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M39 35.27H21" stroke="#FC8640" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>


                    </div>
                    <div>
                        <h3 className='font-semibold text-lg md:text-2xl'>Instant Transfers</h3>
                        <p className='text-sm md:text-base'>Send and receive money within seconds, whether locally
                            or across borders.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TotalControl