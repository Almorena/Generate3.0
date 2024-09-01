import { CallToAction } from '@/components/CallToAction'
import { CallToAction2 } from '@/components/CallToAction2'
import { ChatSection } from '@/components/ChatSection'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeaturesSimple } from '@/components/PrimaryFeaturesSimple'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { SecondaryFeatures2 } from '@/components/SecondaryFeatures2'

export default function Home() {
  return (
    <>
      <Hero />
      <CallToAction />
      <ChatSection />
      <SecondaryFeatures />
      <PrimaryFeaturesSimple />
      <Reviews />
      <SecondaryFeatures2 />
      <CallToAction2 />
      <Pricing />
      <Faqs />
    </>
  )
}