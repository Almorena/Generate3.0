import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'What are Generate Suite`s data sources?',
      answer:
        'Generate uses the data from the Nextatlas engine in its responses. We use a variety of sources to gather information, including social media platforms such as Reddit, Instagram, Twitter, Tumblr, and YouTube. By analyzing the data gathered by Nextatlas’ 300k+ early adopters, we are able to identify trends, opinions, and other valuable information. Generate then provides this information in its response that is related to the query you’ve asked.',
    },
    {
      question: 'What languages does Generate Suite support?',
      answer:
        'Generate is trained to understand and answer in multiple language such as English, Chinese, Spanish, Italian, French and Russian. As it is a brand new service, we are constantly updating and improving Generate and more languages will continue to be added in time.',
    },
    {
      question: 'What is Nextatlas Generate Suite?',
      answer:
        'Generate Suite is Nextatlas innovative business strategy service, powered by their proven AI-driven trend forecasting engine. Since 2012, Nextatlas has led the market in digital marketing intelligence, predicting trends by analyzing data from over 300k early adopters on social media. Generate Suite integrates this data with generative AI, offering tools like an advanced chat feature that combines Nextatlas insights with LLMs, streamlining research and reporting. The suite also includes AI modules for specific workflows, such as consumer behavior analysis, innovation scouting, and business case matchmaking through the Casefinder tool, providing businesses with actionable insights and effective data visualization.',
    },
  ],
  [
    {
      question: 'How do I get started with Nextatlas Generate Suite? Is there a trial period?',
      answer:
        'You can subscribe to a 3-day free-trial of Generate now and try it for free. After the 3 days, you will be asked to continue using the service through a subscription that will be renewed on a monthly basis. We offer different subscription plans for single users, check our clear Plans offering. An Enterprise plan is available for larger businesses or companies with a multiple user offer and more queries allowed per month.',
    },
    {
      question: 'How can I ask questions in natural language using Generate Suite?',
      answer:
        'Generate leverages GPT-4s natural language generation capabilities so that it can understand your query immediately and converse with you as it suggests other avenues of research based on the response. It can also create high-quality, human-like content, such as blog articles, social media posts, and trend reports. These are tailored to the specific industries and topics that you ask for so you won’t receive irrelevant data.',
    },
    {
      question: 'In which industries and geographies can Generate Suite be used?',
      answer:
        'Generate bases its answers on worldwide data collected by Nextatlas’ technology and so can cover a very wide range of industries, such as: Advertising & Branding, Agriculture & Agribusiness, Architecture & Space, Art & Design, Automotive & Transport, Baby & Childcare, Beauty & Cosmetics, Craft, Education, Fashion & Accessories, Financial, Food & Beverage, Government & Public Sector, Health, Home & Interiors, Media & Entertainment, Nonprofit & Social Cause, Packaging & Graphics, Pets, Retail, Sports & Leisure, Technology, Travel.',
    },
  ],
  [
    {
      question: 'How often is the data updated in Generate Suite?',
      answer:
        'All the underlying data that Generate uses is real-time data and is continuously updated through the Nextatlas engine and our insights team.',
    },
    {
      question: 'What is the difference between ChatGPT and Generate Suite?',
      answer:
        'Generate leverages the power of LLMs combined with data from Nextatlas 300k+ early adopters on major social media platforms to provide comprehensive, data-backed responses tailored for trend forecasting and consumer insights. Unlike ChatGPT, which relies on a broad dataset and has a knowledge cut-off in September 2021, Generate is specifically designed to interpret human language for future market trends and consumer behavior, offering insights that ChatGPT cannot, particularly with its Casefinder feature. While ChatGPT generates responses based on its training, it may lack accuracy or up-to-date information, making Generate a more reliable tool for trend-based business strategies.',
    },
    {
      question: 'What are the terms of service?',
      answer:
        'You can find our terms of service here',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-semibold tracking-tight text-gray-800"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you are new to Generate or looking to improve your market research, this guide will help you learn more about our tool and its features.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
