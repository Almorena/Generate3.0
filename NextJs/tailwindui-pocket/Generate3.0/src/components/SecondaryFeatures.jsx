import { Container } from '@/components/Container'

const features = [
  {
    name: 'Generate Chat',
    description:
      'Speak with our strategist to get advanced insights into market dynamics and consumer trends to shape your strategic decisions.',
    gradient: 'from-blue-400 to-purple-600',
  },
  {
    name: 'Persona Generator Agent',
    description:
      'Quickly develop varied personas based on our consumer data and test them in every scenario you can think of, an out of the box living segmentation',
    gradient: 'from-green-400 to-blue-600',
  },
  {
    name: 'Ingredient Discovery Agent',
    description:
      'Discover the next big thing in food and innovate your product development or market strategy.',
    gradient: 'from-teal-400 to-cyan-600', // Updated to cool tones
  },
  {
    name: 'Innovation Tracker',
    description:
      'Track tech advancements, startups and industry innovations and receive recommendations for a competitive edge.',
    gradient: 'from-purple-400 to-pink-600',
  },
  {
    name: 'Sentiment Pulse Agent',
    description:
      'Get real-time insights on the undercurrents shaping public opinion and emotional trends and see how your audience really feels.',
    gradient: 'from-yellow-400 to-red-600',
  },
  {
    name: 'Subculture Agent',
    description:
      'Get real-time insights on the undercurrents shaping public opinion and emotional trends and see how your audience really feels.',
    gradient: 'from-indigo-400 to-blue-600',
  },
]

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-800">
            Smart Assistants, Super Results.
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Experience the future of efficiency with our GenAI Agents, engineered to turbocharge your workflows with precision and speed.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature) => (
            <li
              key={feature.name}
              className={`rounded-2xl border border-gray-200 p-8 ${
                feature.name === 'Generate Chat' ? 'bg-gray-100' : ''
              }`}
            >
              <div className="flex items-center">
                <div
                  className={`h-10 w-10 rounded-full bg-gradient-to-br ${feature.gradient}`}
                ></div>
                <h3 className="ml-4 text-lg font-semibold text-gray-900">
                  {feature.name}
                </h3>
              </div>
              <p className="mt-4 text-gray-700">{feature.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
