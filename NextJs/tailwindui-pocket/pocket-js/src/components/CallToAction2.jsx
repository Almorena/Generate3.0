import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'

export function CallToAction2() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl max-w-4xl mx-auto">
          Decoding Trends with Nextatlas' AI Approach
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-4xl mx-auto">
          Our pioneering approach utilizes artificial intelligence and machine learning algorithms to analyze social media data, online content, and plenty of different sources, uncovering emerging trends and consumer behaviors along with business cases, service and product applications. The power of the Nextatlas engine comes from 300k+ early adopters, giving you a comprehensive and data-backed answer directly from today's trend setters.
          </p>
        </div>
      </Container>
    </section>
  )
}
