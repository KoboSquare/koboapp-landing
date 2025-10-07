import React from 'react'

import Image from 'next/image'
import evelopeImage from '@/assets/images/envelope.png'
import { Button, Input } from '@mantine/core'

function SubscribeArticleBanner() {
    return (
        <div className='max-w-6xl mx-auto bg-[#007F5E] rounded-2xl'>


            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
                <div className='col-span-1'>
                    <Image src={evelopeImage} alt='press' width={500} height={500} className="object-cover" />
                </div>

                <div className='col-span-1 flex flex-col justify-center pr-4 max-w-md'>
                    <div className='mb-6 space-y-2'>
                        <h2 className='text-white text-2xl lg:text-3xl font-semibold'>Read more articles like this</h2>
                        <p className='text-[#CCE5DF] text-lg'>Lorem ipsum dolor sit amet, consectetur adip elit.
                            Praesent eget leo ac eros facilisis finibus.</p>
                    </div>

                    <div className='flex items-center gap-2 w-full'>
                        <Input variant='unstyled' className='placeholder:text-[#ABCCC4]' style={{
                            borderBottom: '1px solid #FFFFFF4D',
                            width: '70%',
                            color: '#FFFFFF',


                        }} placeholder='Enter your email' />
                        <div className='w-[30%]'>
                            <Button variant='filled' color="#009A74" fullWidth >Subscribe</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubscribeArticleBanner