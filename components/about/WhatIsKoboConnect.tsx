import React from 'react'
import Phone from '@/assets/images/Phone.png'
import Image from 'next/image'


function WhatIsKoboConnect() {
    return (
        <div>
            <div className="max-w-6xl mx-auto mt-8 sm:mt-10 lg:mt-12 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4 items-center">
                    {/* Left stats with subtle separators */}
                    <div className="order-2 lg:order-1 flex flex-col justify-center  lg:items-center">
                        <div className="flex flex-row sm:flex-row lg:flex-col justify-center sm:justify-around lg:justify-end lg:space-y-6 space-x-6 sm:space-x-8 lg:space-x-0">
                            {/* First Stat */}
                            <div className="flex flex-col items-center lg:items-end">
                                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold text-[#010101]">
                                    20.5k
                                </p>
                                <p className="text-sm sm:text-base lg:text-lg font-normal text-[#5B6667] text-center lg:text-right">
                                    Total Downloads
                                </p>
                            </div>

                            {/* Mobile/Tablet horizontal divider, Desktop vertical divider */}
                            <div
                                aria-hidden="true"
                                className="hidden lg:block h-px w-[120px] xl:w-[150px] my-4 bg-[#E6ECEC]"
                            />
                            <div
                                aria-hidden="true"
                                className="lg:hidden w-px h-12 sm:h-14 bg-[#E6ECEC] self-center"
                            />

                            {/* Second Stat */}
                            <div className="flex flex-col items-center lg:items-end">
                                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold text-[#010101]">
                                    20.5k
                                </p>
                                <p className="text-sm sm:text-base lg:text-lg font-normal text-[#5B6667] text-center lg:text-right">
                                    Total Downloads
                                </p>
                            </div>

                            {/* Mobile/Tablet horizontal divider, Desktop vertical divider */}
                            <div
                                aria-hidden="true"
                                className="hidden lg:block h-px w-[120px] xl:w-[150px] my-4 bg-[#E6ECEC]"
                            />
                            <div
                                aria-hidden="true"
                                className="lg:hidden w-px h-12 sm:h-14 bg-[#E6ECEC] self-center"
                            />

                            {/* Third Stat */}
                            <div className="flex flex-col items-center lg:items-end">
                                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold text-[#010101]">
                                    20.5k
                                </p>
                                <p className="text-sm sm:text-base lg:text-lg font-normal text-[#5B6667] text-center lg:text-right">
                                    Total Downloads
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Center phone */}
                    <div className="order-1 lg:order-2 flex flex-col items-center justify-center">
                        <div className="relative">
                            <Image
                                src={Phone}
                                alt="Kobo Connect mobile app"
                                width={420}
                                height={420}
                                priority
                                sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 380px, (max-width: 1280px) 400px, 620px"
                            />
                        </div>
                    </div>

                    {/* Right copy */}
                    <div className="order-3 space-y-4 lg:space-y-6">
                        <p className="text-lg sm:text-xl font-medium text-[#009A74]">
                            What is Kobo Connect?
                        </p>
                        <h2 className="text-2xl sm:text-3xl font-semibold text-[#010101] mt-2.5 mb-4 lg:mb-6">
                            Africa&apos;s next-generation
                            <br className="hidden sm:block" /> super app.
                        </h2>
                        <p className="text-[#363E3F] leading-6 sm:leading-7 lg:leading-8 text-base sm:text-lg font-normal">
                            Kobo Connect is a next-generation digital platform designed to
                            simplify everyday life across Africa. From a single app, users can
                            chat, ride, shop, send, pay, book local services, and even access
                            healthcare — all seamlessly connected in one ecosystem. We&apos;re
                            building Africa&apos;s most inclusive and culturally relevant
                            super app, crafted for everyday people, local businesses, and
                            underserved communities.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WhatIsKoboConnect