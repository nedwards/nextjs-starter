import Image from 'next/image'
import { Grid, Link } from '@/components'

const peopleDefaults = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    image: {
      url: 'https://placehold.co/600x400.png',
      height: 400,
      width: 600,
    },
    description:
      'urpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.',
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
      'urpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.',
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
      'urpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.',
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
      'urpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.',
    link: {
      url: 'about/',
      text: 'Read more',
    },
  },
]

export function Team({ xs, sm, md, lg, className, people = peopleDefaults }) {
  return (
    <Grid xs={xs} sm={sm} md={md} lg={lg} className={className}>
      {people.map((person) => (
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
          {person.description && <p className="mt-4">{person.description}</p>}
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
  )
}
