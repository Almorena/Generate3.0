'use client'

import { Fragment, useEffect, useRef, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'

import { AppScreen } from '@/components/AppScreen'
import { Container } from '@/components/Container'
import { BackgroundAnimation } from './BackgroundAnimation' // Importa BackgroundAnimation

const features = [
  {
    name: 'Freelancer',
    description:
      'By analysing vast datasets of consumer conversations alongside Nextatlas`s best-in-class consumer sentiment tools, Generate Suite gives Insights Strategists a nuanced understanding of consumer motivations, informing the development of targeted and impactful marketing strategies.',
  },
  {
    name: 'Brand Strategist',
    description:
      'By analysing vast datasets of consumer conversations alongside Nextatlas`s best-in-class consumer sentiment tools, Generate Suite gives Insights Strategists a nuanced understanding of consumer motivations, informing the development of targeted and impactful marketing strategies.',
  },
  {
    name: 'Trend Researcher',
    description:
      'By analysing vast datasets of consumer conversations alongside Nextatlas`s best-in-class consumer sentiment tools, Generate Suite gives Insights Strategists a nuanced understanding of consumer motivations, informing the development of targeted and impactful marketing strategies.',
  },
  {
    name: 'Innovation Consultant',
    description:
      'By analysing vast datasets of consumer conversations alongside Nextatlas`s best-in-class consumer sentiment tools, Generate Suite gives Insights Strategists a nuanced understanding of consumer motivations, informing the development of targeted and impactful marketing strategies.',
  },
  {
    name: 'Insights Strategist',
    description:
      'By analysing vast datasets of consumer conversations alongside Nextatlas`s best-in-class consumer sentiment tools, Generate Suite gives Insights Strategists a nuanced understanding of consumer motivations, informing the development of targeted and impactful marketing strategies.',
  },
]

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
       className="max-w-lg mx-auto rounded-xl bg-white p-6 shadow-lg flex flex-col justify-center"
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
            className={clsx(
              "relative rounded-2xl transition-colors w-40",  // Larghezza fissa per i tab
              featureIndex === selectedIndex
                ? 'bg-gray-800 text-white'
                : 'bg-white text-gray-800 hover:bg-gray-200'
            )}
          >
            {featureIndex === selectedIndex && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0"
                style={{ borderRadius: 16 }}
              />
            )}
            <div className="relative z-10 p-4 flex flex-col items-center">
              <Tab
                className={({ selected }) =>
                  clsx(
                    'text-center ui-not-focus-visible:outline-none', // Common classes
                    selected
                      ? 'text-white' // Style per tab selezionato
                      : 'text-gray-800' // Style per tab non selezionato
                  )
                }
              >
                <h3 className="text-lg font-semibold text-center">
                  {feature.name}
                </h3>
              </Tab>
            </div>
          </div>
        ))}
      </TabList>
      <div className="w-full mt-4">
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
            <div className="relative transform overflow-hidden rounded-2xl bg-gray-100 px-5 py-6">
              <div className="relative mx-auto w-full">
                <FeatureScreen feature={feature} />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gray-800/95 p-6 backdrop-blur sm:p-10">
                <h3 className="mt-6 text-sm font-semibold text-white sm:text-lg">
                  {feature.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex justify-center gap-3">
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
      aria-label="Supporting Professionals in Future-Ready Strategies."
      className="relative bg-gray-100 py-10 sm:py-32 overflow-hidden" // Aggiunta la classe overflow-hidden e relative
    >
      <BackgroundAnimation /> {/* Aggiunto il BackgroundAnimation qui */}
      <Container className="relative z-10"> {/* Applicato z-10 per mantenere il contenuto sopra l'animazione */}
        <div className="mx-auto max-w-2xl lg:mx-auto lg:max-w-3xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-800">
            Supporting Professionals in Future-Ready Strategies.
          </h2>
        </div>
      </Container>

      <div className="relative z-10 mt-8 md:hidden">
        <FeaturesMobile />
      </div>
      <Container className="relative z-10 hidden md:mt-20 md:block">
        <FeaturesDesktop />
      </Container>
    </section>
  )
}