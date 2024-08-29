import Link from 'next/link'
import { Logo } from '@/components/Logo'

import { Container } from '@/components/Container'
import { NavLinks } from '@/components/NavLinks'

export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:items-center lg:py-16">
          <div>
          <Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
            <nav className="mt-11 flex gap-8">
              <NavLinks />
            </nav>
          </div>
          <div className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
            <div className="ml-8 lg:w-64">
            <p className="mt-6 text-sm text-gray-500 md:mt-0">
            &copy; Copyright {new Date().getFullYear()}. All rights reserved. VAT number and registration number at the Registro delle Imprese di Cagliari: 03428550929 paid share capital € 167.740,00
          </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
