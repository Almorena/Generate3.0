import { Container } from '@/components/Container'
import { BackgroundAnimation } from '@/components/BackgroundAnimation'

export function CallToAction() {
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
          <h2 className="text-3xl font-medium tracking-tight text-grey-800 sm:text-4xl max-w-4xl mx-auto">
            The AI business strategist to instantly see future markets and understand consumer behavior
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto">
            The Generate Suite offers you a full array of specialized assistants to jumpstart your team's work and provide detailed workflow planning: scouting innovation in any sector, planning multiple scenarios in one sitting, discovering the next trending ingredient or advise on brand strategy. It's like conversing with an extremely market research-savvy peer.
          </p>
        </div>
      </Container>
    </section>
  )
}
