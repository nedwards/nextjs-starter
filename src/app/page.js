// import Link from 'next/link'
import { Container, Banner, Link, Grid, Accordion, Box } from '@/components'
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from '@heroicons/react/20/solid'
import { config } from '@/data'

export const metadata = {
  title: `Home | ${config?.business.name}`,
  description: 'Home page',
}

const features = [
  {
    name: 'Feature one',
    description:
      'Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.',
    link: {
      href: 'services/',
      text: 'Learn more',
    },
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Feature two',
    description:
      'Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.',
    link: {
      href: 'services/',
      text: 'Learn more',
    },
    icon: LockClosedIcon,
  },
  {
    name: 'Feature three',
    description:
      'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.',
    link: {
      href: 'services/',
      text: 'Learn more',
    },
    icon: ArrowPathIcon,
  },
]

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
      <Grid sm={3} className="mb-24">
        {features.map((feature) => (
          <div key={feature.name} className="flex flex-col">
            <dt className="flex items-center gap-x-3 font-semibold">
              {feature.icon && (
                <feature.icon
                  aria-hidden="true"
                  className="h-5 w-5 flex-none"
                />
              )}
              {feature.name}
            </dt>
            <dd className="mt-4 flex flex-auto flex-col">
              <p className="flex-auto">{feature.description}</p>
              {feature.link && (
                <p className="mt-6">
                  <Link
                    href={feature.link.href}
                    className="text-sm font-semibold leading-6"
                  >
                    {feature.link.text}
                  </Link>
                </p>
              )}
            </dd>
          </div>
        ))}
      </Grid>
      <Box className="mb-20">
        <h3 className="mb-6">Frequently Asked Questions</h3>
        <Accordion />
      </Box>
    </Container>
  )
}
