// import Link from 'next/link'
import { Container, Banner, Link } from '@/components'
import { config } from '@/data'

export const metadata = {
  title: `Home | ${config?.business.name}`,
  description: 'Home page',
}

export default function Page() {
  return (
    <Container>
      <Banner className="bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
            Home
          </h2>
          <p className="mb-8 text-lg leading-8 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <Link href="/contact" button>
            Contact Us
          </Link>
        </div>
      </Banner>
    </Container>
  )
}
