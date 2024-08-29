import { Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: {
    template: '%s - Generate',
    default: 'Nextatlas Generate | The world`s first Generative Trend Forecasting Service',
  },
  description:
    'Nextatlas Generate uses advanced NLP and machine learning to analyze data and predict future consumer trends across various industries and markets.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={clsx('bg-gray-50 antialiased', inter.variable)}>
      <body>{children}</body>
    </html>
  )
}
