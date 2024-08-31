import { Container } from '@/components/Container'
import { BackgroundAnimation } from '@/components/BackgroundAnimation'

export function CallToAction2() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-gray-100 py-20 sm:py-28"
    >
      <div className="absolute inset-0">
        <BackgroundAnimation />
      </div>
      
      <Container className="relative">
        <div className="mx-auto sm:text-center relative z-10">
          <h2 className="text-3xl font-bold tracking-tight text-grey-800 sm:text-4xl max-w-4xl mx-auto">
          Decoding Trends with Nextatlas' AI Approach
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto">
          Our pioneering approach utilizes artificial intelligence and machine learning algorithms to analyze social media data, online content, and plenty of different sources, uncovering emerging trends and consumer behaviors along with business cases, service and product applications. The power of the Nextatlas engine comes from 300k+ early adopters, giving you a comprehensive and data-backed answer directly from today's trend setters.
          </p>
        </div>
      </Container>
    </section>
  )
}
