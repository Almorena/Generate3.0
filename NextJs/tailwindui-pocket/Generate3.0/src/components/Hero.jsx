import { useId } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

import logoOmnicom from '@/images/logos/omnicom.webp'
import logoStellantis from '@/images/logos/stellantis.webp'
import logoMondelez from '@/images/logos/mondelez.webp'
import logoWeber from '@/images/logos/weber.webp'
import logoAccenture from '@/images/logos/accenture.webp'
import logoBain from '@/images/logos/bain.webp'
import logoBarilla from '@/images/logos/barilla.webp'

import placeHolder from '../images/place-holder.png'

export function Hero() {
  return (
    <div className="overflow-hidden py-20 sm:py-20 lg:pb-32 xl:pb-36">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-800">
              Transform Your Market Research with Generate Suite: AI-Powered Insights and Strategy
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Unlock the potential of Generate Suite, your dynamic market research assistant. Revolutionize your business with Generate's cutting-edge AI, offering profound insights into market trends and consumer behavior. Expedite exploration, strategy development, insights delivery, and go-to-market plans with Generate Suite.
            </p>
            <div className="mt-8 flex flex-wrap">
              <Button href="/#pricing">
                Start for Free
              </Button>
            </div>
          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            {/* Rimosso BackgroundIllustration */}
            <div className="-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32 flex items-center justify-center">
              <div className="w-auto p-20 transform translate-x-[30px] translate-y-[-60px]">
                <Image src={placeHolder} alt="Placeholder Image" layout="responsive" />
              </div>
            </div>

          </div>
          <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
            <p className="text-center text-sm font-semibold text-gray-900 lg:text-left">
              Trusted by Teams at
            </p>
            <ul
              role="list"
              className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-10 gap-y-8 lg:mx-0 lg:justify-start"
            >
              {[
                ['Accenture', logoAccenture],
                ['Barilla', logoBarilla],
                ['Mondelez', logoMondelez, 'hidden xl:block'],
                ['Omnicom', logoOmnicom],
                ['Stellantis', logoStellantis],
                ['Weber', logoWeber],
                ['Bain', logoBain],
              ].map(([name, logo, className]) => (
                <li key={name} className={clsx('flex-shrink place-center', className)}>
                  <Image src={logo} alt={name} className="w-32 aspect-ratio" unoptimized />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}
