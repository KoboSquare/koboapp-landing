import Image from 'next/image'
import React from 'react'
import heroBg from '@/assets/images/heroBg.png'
import Header from '@/components/kobovault/header'
import Hero from '@/components/kobovault/hero'
import TotalControl from '@/components/kobovault/total-control'
import Security from '@/components/kobovault/security'
import BuiltForEveryday from '@/components/kobovault/built-for-everyday'
import Footer from '@/components/shared/footer'

function page() {
  return (
    <main>
      <section className="h-[85dvh] relative">
        <Image
          src={heroBg}
          priority
          alt='hero-bg'
          fill
          className='object-cover absolute inset-0 z-0'
        />
        <Header />
        <Hero />
      </section>
      <TotalControl />
      <Security />
      <BuiltForEveryday />
      <Footer />
    </main>
  )
}

export default page