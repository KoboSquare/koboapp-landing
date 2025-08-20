import React from 'react'
import Hero from './hero'
import Header from './header'
import Image from 'next/image'
import heroBg from '@/assets/images/heroBg.png'

function HomePage() {
  return (
    <div>

      <div className="flex flex-col h-[80dvh] relative">
        <Image src={heroBg} priority alt="hero-bg" fill className="object-cover z-0" />
        <div className='absolute top-0 left-0 right-0 bottom-0 z-10'>
          <Header />
          <Hero />
        </div>
      </div>
    </div>
  )
}

export default HomePage