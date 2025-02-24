import Image from 'next/image'
import { Container, Banner, Grid, Link, Box } from '@/components'
import { config } from '@/data'

export const metadata = {
  title: `About | ${config?.business.name}`,
  description: 'About us page',
}

const team = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    image: {
      url: 'https://placehold.co/600x400.png',
      height: 400,
      width: 600,
    },
    description:
      'urpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu.',
    link: {
      url: 'about/',
      text: 'Read more',
    },
  },
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    image: {
      url: 'https://placehold.co/600x400.png',
      height: 400,
      width: 600,
    },
    description:
      'urpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu.',
    link: {
      url: 'about/',
      text: 'Read more',
    },
  },
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    image: {
      url: 'https://placehold.co/600x400.png',
      height: 400,
      width: 600,
    },
    description:
      'urpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu.',
    link: {
      url: 'about/',
      text: 'Read more',
    },
  },
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    image: {
      url: 'https://placehold.co/600x400.png',
      height: 400,
      width: 600,
    },
    description:
      'urpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu.',
    link: {
      url: 'about/',
      text: 'Read more',
    },
  },
]

export default function Page() {
  return (
    <Container>
      <Banner className="bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
            About
          </h2>
          <p className="mb-8 text-lg leading-8 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>
      </Banner>
      <Box className="mb-20">
        <h3 className="mb-6">Our Team</h3>
        <Grid sm={2} lg={4}>
          {team.map((person) => (
            <div key={person.name}>
              <Image
                alt={`Image of ${person.name}`}
                src={person.image.url}
                className="aspect-[14/13] w-full object-cover"
                height={person.image.height || 400}
                width={person.image.width || 600}
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight">
                {person.name}
              </h3>
              {person.role && <p>{person.role}</p>}
              {person.description && (
                <p className="mt-4">{person.description}</p>
              )}
              {person.link && (
                <p className="mt-4">
                  <Link
                    href={person.link.url}
                    className="text-sm font-semibold leading-6"
                  >
                    {person.link.text}
                  </Link>
                </p>
              )}
            </div>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}
