import { useId } from 'react'

import { Container } from '@/components/Container'

const features = [
  {
    name: 'Data-Driven Discovery',
    description:
      'Generate Suite is not your typical LLM thanks to the Nextatlas engine. We analyze millions of social media posts in real-time, giving you relevant insights directly from the consumer. Our analysis includes three-year data analysis and a one-year forecast, as well as target audiences, social media sources, global spread, sentiment analysis, and top concepts.',
    icon: DeviceArrowIcon,
  },
  {
    name: 'Business cases that matter',
    description:
      'Casefinder is a constantly updated business case matchmaker that discovers real-life examples aligned with the subject of your search.',
    icon: DeviceCardsIcon,
  },
  {
    name: 'Moodboards & Verbatim',
    description:
      'DisGenerate offers curated and automatic moodboards to inspire your output and your research along with quotes and direct links to social media relevant posts.',
    icon: DeviceClockIcon,
  },
]

function DeviceArrowIcon(props) {
  return (
   <img src="https://generate.nextatlas.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fhg4a7nrg%2Fproduction%2F297dd67ccfb4b2476a9ec7935414d5084cc40218-1333x748.png&w=3840&q=75" alt="" />
  )
}

function DeviceCardsIcon(props) {
  let id = useId()

  return (
    <img src="https://generate.nextatlas.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fhg4a7nrg%2Fproduction%2F70a142b056b6924eee29d7c24c6765b360c15ef5-729x451.png&w=1920&q=75" alt="" />
  )
}

function DeviceClockIcon(props) {
  return (
    <img src="https://generate.nextatlas.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fhg4a7nrg%2Fproduction%2F2383e2a6653713311ae49dfe986c86a5f30c3c78-889x570.png&w=1920&q=75" alt="" />
  )
}

export function SecondaryFeatures2() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-1xl sm:text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-800">
          Build solid strategy on industry-trusted Nextatlas data analysis.
          </h2>
          <p className="mt-2 text-lg text-gray-600">
          Generate Suite provides you with foundational information from Nextatlas, a pioneer in using AI for market research. We combine the capabilities of big data analysis using AI and expert interpretation to uncover emerging trends and consumer insights. The Nextatlas engine at the core of Generate Suite is always on and always updated to accurately inform all your questions. All of Generate Suite’s AI assistants root their knowledge in industry-trusted Nextatlas data and have been developed to understand your request within minutes. Together, we help you see your business’ future.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature) => (
            <li
              key={feature.name}
              className="rounded-2xl border border-gray-200 p-8"
            >
              <feature.icon className="h-8 w-8" />
              <h3 className="mt-6 font-semibold text-gray-900">
                {feature.name}
              </h3>
              <p className="mt-2 text-gray-700">{feature.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
