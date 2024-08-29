import { CallToAction } from '@/components/CallToAction'
import { CallToAction2 } from '@/components/CallToAction2'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { SecondaryFeatures2 } from '@/components/SecondaryFeatures2'

export default function Home() {
  return (
    <>
      <Hero />
      <CallToAction />
      <SecondaryFeatures />
      <PrimaryFeatures />
      <Reviews />
      <SecondaryFeatures2 />
      <CallToAction2 />
      <Pricing />
      <Faqs />
    </>
  )
}