import { useId } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';

import logoOmnicom from '@/images/logos/omnicom.webp';
import logoStellantis from '@/images/logos/stellantis.webp';
import logoMondelez from '@/images/logos/mondelez.webp';
import logoWeber from '@/images/logos/weber.webp';
import logoAccenture from '@/images/logos/accenture.webp';
import logoBain from '@/images/logos/bain.webp';
import logoBarilla from '@/images/logos/barilla.webp';
import placeHolder from '@/images/screenshots.png';
import screenImage from '@/images/screen2.webp';

export function Hero() {
  return (
    <div className="overflow-hidden py-20 sm:py-20 lg:pb-32 xl:pb-36">
      <Container>
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-20">
          {/* Colonna del Testo a Sinistra */}
          <div className="relative z-10 mx-auto max-w-2xl lg:max-w-none lg:pt-6 xl:max-w-xl">
            <h1 className="text-3xl font-bold tracking-tight text-gray-800">
              Generate Suite: AI-Powered Insights and Strategy
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Generate Suite, your dynamic market research assistant. Revolutionize your business with our cutting-edge AI, offering profound insights into market trends and consumer behavior.
            </p>
            <div className="mt-8 flex flex-wrap">
              <Button href="/#pricing">Start for Free</Button>
            </div>
          </div>

          {/* Colonna delle Immagini a Destra */}
          <div className="relative mt-10 sm:mt-20 lg:mt-0 flex items-center justify-center">
            <div className="-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:h-auto lg:px-0 lg:pt-10 xl:pt-0 flex flex-col items-center justify-center">
              <Image 
                src={placeHolder} 
                alt="Placeholder for Screenshots" 
                width={500} 
                height={500} 
                objectFit="contain" 
                className="rounded-lg shadow-lg mb-4" 
              />
              <Image 
                src={screenImage} 
                alt="AI-Powered Market Insights Screenshot" 
                width={500} 
                height={500} 
                objectFit="contain" 
                className="rounded-lg shadow-lg" 
              />
            </div>
          </div>
        </div>

        {/* Sezione dei Loghi Sotto */}
        <div className="mt-20">
          <p className="text-center text-sm font-semibold text-gray-900">
            Trusted by Teams at
          </p>
          <ul
            role="list"
            className="mt-8 flex justify-center items-center flex-wrap gap-x-6 gap-y-4"
          >
            {[
              ['Accenture', logoAccenture],
              ['Barilla', logoBarilla],
              ['Mondelez', logoMondelez],
              ['Omnicom', logoOmnicom],
              ['Stellantis', logoStellantis],
              ['Weber', logoWeber],
              ['Bain', logoBain],
            ].map(([name, logo]) => (
              <li key={name} className="flex-shrink-0">
                <Image src={logo} alt={`${name} logo`} className="w-24 lg:w-32" unoptimized />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}
