import Header from '@/components/kobovault/header'
import Hero from '@/components/kobovault/hero'
import TotalControl from '@/components/kobovault/total-control'
import Security from '@/components/kobovault/security'
import BuiltForEveryday from '@/components/kobovault/built-for-everyday'
import Testimonials from '@/components/kobovault/testimonials'
import MoreBenefits from '@/components/kobovault/more-benefits'
import Footer from '@/components/shared/footer'
import SimplifyPaymentBanner from '@/components/kobovault/simplify-payment-banner'

function page() {
  return (
    <main>
      <Header />
      <Hero />
      <TotalControl />
      <Security />
      <BuiltForEveryday />
      <Testimonials />
      <MoreBenefits />
      <SimplifyPaymentBanner />
      <Footer />
    </main>
  )
}

export default page