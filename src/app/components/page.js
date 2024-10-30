// components
import {
  Container,
  Banner,
  Alert,
  Button,
  Accordion,
  Team,
  Features,
} from '@/components'

// icons
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from '@heroicons/react/20/solid'

// data
import { config } from '@/data'

export const metadata = {
  title: `About | ${config?.business.name}`,
  description: 'About us page',
}

const features4ColumnExample = [
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
  {
    name: 'Feature four',
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
            Components
          </h2>
        </div>
      </Banner>
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-3">Colours</h2>
        <h3 className="text-lg font-bold mb-3">Primary</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-6">
          <div>
            <div className="h-20 w-full bg-primary-50"></div>
            <p className="text-sm mt-2">50</p>
          </div>
          <div>
            <div className="h-20 w-full bg-primary-100"></div>
            <p className="text-sm mt-2">100</p>
          </div>
          <div>
            <div className="h-20 w-full bg-primary-200"></div>
            <p className="text-sm mt-2">200</p>
          </div>
          <div>
            <div className="h-20 w-full bg-primary-300"></div>
            <p className="text-sm mt-2">300</p>
          </div>
          <div>
            <div className="h-20 w-full bg-primary-400"></div>
            <p className="text-sm mt-2">400</p>
          </div>
          <div>
            <div className="h-20 w-full bg-primary-500"></div>
            <p className="text-sm mt-2">500</p>
          </div>
          <div>
            <div className="h-20 w-full bg-primary-600"></div>
            <p className="text-sm mt-2">600</p>
          </div>
          <div>
            <div className="h-20 w-full bg-primary-700"></div>
            <p className="text-sm mt-2">700</p>
          </div>
          <div>
            <div className="h-20 w-full bg-primary-800"></div>
            <p className="text-sm mt-2">800</p>
          </div>
          <div>
            <div className="h-20 w-full bg-primary-900"></div>
            <p className="text-sm mt-2">900</p>
          </div>
        </div>
      </div>
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8">Alerts</h2>
        <Alert className="mb-3">
          <h3 className="font-bold">Attention needed</h3>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
          </p>
        </Alert>
        <Alert variant="success" className="mb-3">
          <h3 className="font-bold">Attention needed</h3>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
          </p>
        </Alert>
        <Alert variant="warning" className="mb-3">
          <h3 className="font-bold">Attention needed</h3>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
          </p>
        </Alert>
        <Alert variant="error" className="mb-3">
          <h3 className="font-bold">Attention needed</h3>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
          </p>
        </Alert>
      </div>
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8">Buttons</h2>
        <div className="flex items-center gap-x-3">
          <Button>Default</Button>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
        </div>
      </div>
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8">Accordion</h2>
        <Accordion />
      </div>
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8">Features</h2>
        <h3 className="text-xl font-bold mb-8">3 Column Example</h3>
        <Features sm={3} className="mb-12" />
        <h3 className="text-xl font-bold mb-8">4 Column Example</h3>
        <Features md={2} lg={4} items={features4ColumnExample} />
      </div>
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8">Team</h2>
        <Team sm={2} lg={4} />
      </div>
    </Container>
  )
}
