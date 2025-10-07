import React from 'react'
import ImageMansory from './ImageMansory'

function HeadStart() {
    return (
        <div className='max-w-6xl mx-auto px-4 space-y-4 md:space-y-12 lg:space-y-16'>
            <div className='flex flex-col gap-2 max-w-sm'>
                <h6 className='text-[#009A74] text-lg md:text-xl'>Head Start</h6>
                <h2 className='text-[#010101] text-2xl md:text-3xl lg:text-4xl font-semibold'>Build your career with Kobo Connect</h2>
            </div>
            <ImageMansory />

            <div className='max-w-5xl'>
                <p className='text-[#363E3F] text-base md:text-lg'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus scelerisque
                    sit amet turpis. In et venenatis leo, non luctus mauris. Maecenas efficitur volutpat nibh, a aliquet elit.Praesent eget leo ac eros facilisis finibus scelerisque turpis.
                </p>
            </div>

        </div>
    )
}

export default HeadStart