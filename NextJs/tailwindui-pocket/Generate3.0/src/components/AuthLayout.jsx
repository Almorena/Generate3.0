import Link from 'next/link'
import { Logo } from '@/components/Logo'

export function AuthLayout({ title, subtitle, children }) {
  return (
    <main className="flex min-h-full flex-col items-center justify-center overflow-hidden pt-16 sm:py-28">
      <div className="flex w-full max-w-2xl flex-col items-center px-4 sm:px-6">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
        <div className="relative mt-12 sm:mt-16 text-center">
          <h1 className="text-2xl font-medium tracking-tight text-gray-900">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-lg text-gray-600">{subtitle}</p>
          )}
        </div>
        <div className="mt-10 w-full bg-white px-4 py-10 shadow-2xl shadow-gray-900/10 sm:rounded-5xl sm:p-24">
          {children}
        </div>
      </div>
    </main>
  )
}
