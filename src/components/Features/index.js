import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from '@heroicons/react/20/solid'
import { Link, Grid } from '@/components'

const featuresDefault = [
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

export function Features({
  xs,
  sm,
  md,
  lg,
  className,
  items = featuresDefault,
}) {
  return (
    <Grid xs={xs} sm={sm} md={md} lg={lg} className={className}>
      {items.map((feature) => (
        <div key={feature.name} className="flex flex-col">
          <dt className="flex items-center gap-x-3 font-semibold">
            {feature.icon && (
              <feature.icon aria-hidden="true" className="h-5 w-5 flex-none" />
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
  )
}
