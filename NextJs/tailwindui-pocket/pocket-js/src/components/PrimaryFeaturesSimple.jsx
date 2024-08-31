'use client'

import { Fragment, useEffect, useRef, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'

import { AppScreen } from '@/components/AppScreen'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'

const features = [
  {
    name: 'Freelancer',
    description:
      'By analysing vast datasets of consumer conversations alongside Nextatlas`s best-in-class consumer sentiment tools, Generate Suite gives Insights Strategists a nuanced understanding of consumer motivations, informing the development of targeted and impactful marketing strategies.',
    icon: DeviceUserIcon,
  },
  {
    name: 'Brand Strategist',
    description:
      'By analysing vast datasets of consumer conversations alongside Nextatlas`s best-in-class consumer sentiment tools, Generate Suite gives Insights Strategists a nuanced understanding of consumer motivations, informing the development of targeted and impactful marketing strategies.',
    icon: DeviceNotificationIcon,
  },
  {
    name: 'Trend Researcher',
    description:
      'By analysing vast datasets of consumer conversations alongside Nextatlas`s best-in-class consumer sentiment tools, Generate Suite gives Insights Strategists a nuanced understanding of consumer motivations, informing the development of targeted and impactful marketing strategies.',
    icon: DeviceTouchIcon,
  },
  {
    name: 'Innovation Consultant',
    description:
      'By analysing vast datasets of consumer conversations alongside Nextatlas`s best-in-class consumer sentiment tools, Generate Suite gives Insights Strategists a nuanced understanding of consumer motivations, informing the development of targeted and impactful marketing strategies.',
    icon: DeviceUserIcon,  // Replace with the appropriate icon if needed
  },
  {
    name: 'Insights Strategist',
    description:
      'By analysing vast datasets of consumer conversations alongside Nextatlas`s best-in-class consumer sentiment tools, Generate Suite gives Insights Strategists a nuanced understanding of consumer motivations, informing the development of targeted and impactful marketing strategies.',
    icon: DeviceNotificationIcon,  // Replace with the appropriate icon if needed
  },
]

function DeviceUserIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 23a3 3 0 100-6 3 3 0 000 6zm-1 2a4 4 0 00-4 4v1a2 2 0 002 2h6a2 2 0 002-2v-1a4 4 0 00-4-4h-2z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v24a4.002 4.002 0 01-3.01 3.877c-.535.136-.99-.325-.99-.877s.474-.98.959-1.244A2 2 0 0025 28V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 001.041 1.756C8.525 30.02 9 30.448 9 31s-.455 1.013-.99.877A4.002 4.002 0 015 28V4z"
        fill="#A3A3A3"
      />
    </svg>
  )
}

function DeviceNotificationIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#A3A3A3"
      />
      <path
        d="M9 8a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H11a2 2 0 01-2-2V8z"
        fill="#737373"
      />
    </svg>
  )
}

function DeviceTouchIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <defs>
        <linearGradient
          id="touch-gradient"
          x1={14}
          y1={14.5}
          x2={7}
          y2={17}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#737373" />
          <stop offset={1} stopColor="#D4D4D4" stopOpacity={0} />
        </linearGradient>
      </defs>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v13h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 001 1.756C8.525 30.02 9 30.448 9 31s-.455 1.013-.99.877A4.002 4.002 0 015 28V4z"
        fill="#A3A3A3"
      />
      <path
        d="M7 22c0-4.694 3.5-8 8-8"
        stroke="url(#touch-gradient)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 20l.217-5.513a1.431 1.431 0 00-2.85-.226L17.5 21.5l-1.51-1.51a2.107 2.107 0 00-2.98 0 .024.024 0 00-.005.024l3.083 9.25A4 4 0 0019.883 32H25a4 4 0 004-4v-5a3 3 0 00-3-3h-5z"
        fill="#A3A3A3"
      />
    </svg>
  )
}

const slideAnimation = {
  initial: {
    opacity: 0,
    x: '100%',  // Inizia fuori dalla vista sulla destra
  },
  enter: {
    opacity: 1,
    x: '0%',  // Entra in vista, centrata
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
  exit: {
    opacity: 0,
    x: '-100%',  // Esce dalla vista sulla sinistra
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
}

function FeatureScreen({ feature }) {
  return (
    <AppScreen className="w-full">
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={slideAnimation}
        className="max-w-lg mx-auto rounded-lg bg-white p-6 shadow-lg flex flex-col justify-center"  // Restringere la larghezza della card e centrarla
        >
        <AppScreen.Body>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-left">
            {feature.name}
          </h3>
          <p className="text-lg text-gray-700 text-left">
            {feature.description}
          </p>
        </AppScreen.Body>
      </motion.div>

    </AppScreen>
  )
}

function FeaturesDesktop() {
  let [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <TabGroup
      className="flex flex-col items-center gap-8 lg:gap-16 xl:gap-24"
      selectedIndex={selectedIndex}
      onChange={setSelectedIndex}
    >
      <TabList className="flex justify-center space-x-6">
        {features.map((feature, featureIndex) => (
          <div
            key={feature.name}
            className="relative rounded-2xl transition-colors hover:bg-gray-800/30"
          >
            {featureIndex === selectedIndex && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-gray-800"
                initial={{ borderRadius: 16 }}
              />
            )}
            <div className="relative z-10 p-4">
              <feature.icon className="h-8 w-8" />
              <h3 className="mt-4 text-lg font-semibold text-white">
                <Tab className="text-center ui-not-focus-visible:outline-none">
                  <span className="absolute inset-0 rounded-2xl" />
                  {feature.name}
                </Tab>
              </h3>
            </div>
          </div>
        ))}
      </TabList>
      <div className="w-full mt-8">
        <TabPanels as={Fragment}>
          <AnimatePresence initial={false} mode="wait">
            {features.map((feature, featureIndex) =>
              selectedIndex === featureIndex ? (
                <TabPanel
                  static
                  key={feature.name}
                  className="flex justify-center"
                >
                  <FeatureScreen feature={feature} />
                </TabPanel>
              ) : null,
            )}
          </AnimatePresence>
        </TabPanels>
      </div>
    </TabGroup>
  )
}

function FeaturesMobile() {
  let [activeIndex, setActiveIndex] = useState(0)
  let slideContainerRef = useRef(null)
  let slideRefs = useRef([])

  useEffect(() => {
    let observer = new window.IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting && entry.target instanceof HTMLDivElement) {
            setActiveIndex(slideRefs.current.indexOf(entry.target))
            break
          }
        }
      },
      {
        root: slideContainerRef.current,
        threshold: 0.6,
      },
    )

    for (let slide of slideRefs.current) {
      if (slide) {
        observer.observe(slide)
      }
    }

    return () => {
      observer.disconnect()
    }
  }, [slideContainerRef, slideRefs])

  return (
    <>
      <div
        ref={slideContainerRef}
        className="-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden"
      >
        {features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            ref={(ref) => ref && (slideRefs.current[featureIndex] = ref)}
            className="w-full flex-none snap-center px-4 sm:px-6"
          >
            <div className="relative transform overflow-hidden rounded-2xl bg-gray-800 px-5 py-6">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <CircleBackground
                  color="#13B5C8"
                  className={featureIndex % 2 === 1 ? 'rotate-180' : undefined}
                />
              </div>
              <div className="relative mx-auto w-full">
                <FeatureScreen feature={feature} />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gray-800/95 p-6 backdrop-blur sm:p-10">
                <feature.icon className="h-8 w-8" />
                <h3 className="mt-6 text-sm font-semibold text-white sm:text-lg">
                  {feature.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-3">
        {features.map((_, featureIndex) => (
          <button
            type="button"
            key={featureIndex}
            className={clsx(
              'relative h-0.5 w-4 rounded-full',
              featureIndex === activeIndex ? 'bg-gray-300' : 'bg-gray-500',
            )}
            aria-label={`Go to slide ${featureIndex + 1}`}
            onClick={() => {
              slideRefs.current[featureIndex].scrollIntoView({
                block: 'nearest',
                inline: 'nearest',
              })
            }}
          >
            <span className="absolute -inset-x-1.5 -inset-y-3" />
          </button>
        ))}
      </div>
    </>
  )
}

export function PrimaryFeaturesSimple() {
  return (
    <section
      id="features"
      aria-label="Features for investing all your money"
      className="bg-gray-900 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-auto lg:max-w-3xl text-center">  {/* Centra il titolo e il sottotitolo */}
          <h2 className="text-3xl font-medium tracking-tight text-white">
            Supporting Professionals in Future-Ready Strategies.
          </h2>
        </div>
      </Container>


      <div className="mt-16 md:hidden">
        <FeaturesMobile />
      </div>
      <Container className="hidden md:mt-20 md:block">
        <FeaturesDesktop />
      </Container>
    </section>
  )
}