import Link from 'next/link'

// components
import { Container, Banner } from '@/components'

export default function NotFound() {
  return (
    <Container>
      <Banner className="bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
            Page not found
          </h2>
          <p className="mb-6">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <Link href="/">Go to the homepage</Link>
        </div>
      </Banner>
    </Container>
  )
}
