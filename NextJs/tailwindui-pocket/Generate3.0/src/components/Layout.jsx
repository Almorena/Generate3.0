import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="flex-auto pt-16">{children}</main>
      <Footer />
    </>
  )
}
