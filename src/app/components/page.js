// components
import {
  Container,
  Banner,
  Alert,
  Button,
  Accordion,
  Team,
  Features,
  Pricing,
  SignupForm,
  InputField,
  SelectField,
  TextareaField,
  RadioGroup,
  Checkbox,
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

const primaryColors = [
  { shade: 50, className: 'bg-primary-50' },
  { shade: 100, className: 'bg-primary-100' },
  { shade: 200, className: 'bg-primary-200' },
  { shade: 300, className: 'bg-primary-300' },
  { shade: 400, className: 'bg-primary-400' },
  { shade: 500, className: 'bg-primary-500' },
  { shade: 600, className: 'bg-primary-600' },
  { shade: 700, className: 'bg-primary-700' },
  { shade: 800, className: 'bg-primary-800' },
  { shade: 900, className: 'bg-primary-900' },
]

const secondaryColors = [
  { shade: 50, className: 'bg-secondary-50' },
  { shade: 100, className: 'bg-secondary-100' },
  { shade: 200, className: 'bg-secondary-200' },
  { shade: 300, className: 'bg-secondary-300' },
  { shade: 400, className: 'bg-secondary-400' },
  { shade: 500, className: 'bg-secondary-500' },
  { shade: 600, className: 'bg-secondary-600' },
  { shade: 700, className: 'bg-secondary-700' },
  { shade: 800, className: 'bg-secondary-800' },
  { shade: 900, className: 'bg-secondary-900' },
]

const tertiaryColors = [
  { shade: 50, className: 'bg-tertiary-50' },
  { shade: 100, className: 'bg-tertiary-100' },
  { shade: 200, className: 'bg-tertiary-200' },
  { shade: 300, className: 'bg-tertiary-300' },
  { shade: 400, className: 'bg-tertiary-400' },
  { shade: 500, className: 'bg-tertiary-500' },
  { shade: 600, className: 'bg-tertiary-600' },
  { shade: 700, className: 'bg-tertiary-700' },
  { shade: 800, className: 'bg-tertiary-800' },
  { shade: 900, className: 'bg-tertiary-900' },
]

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
        <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-5 xl:grid-cols-10 gap-6 mb-12">
          {primaryColors.map((color) => (
            <div key={color.shade}>
              <div className={`h-20 w-full ${color.className}`}></div>
              <p className="text-sm mt-2">{color.shade}</p>
            </div>
          ))}
        </div>
        <h3 className="text-lg font-bold mb-3">Secondary</h3>
        <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-5 xl:grid-cols-10 gap-6 mb-12">
          {secondaryColors.map((color) => (
            <div key={color.shade}>
              <div className={`h-20 w-full ${color.className}`}></div>
              <p className="text-sm mt-2">{color.shade}</p>
            </div>
          ))}
        </div>
        <h3 className="text-lg font-bold mb-3">Tertiary</h3>
        <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-5 xl:grid-cols-10 gap-6">
          {tertiaryColors.map((color) => (
            <div key={color.shade}>
              <div className={`h-20 w-full ${color.className}`}></div>
              <p className="text-sm mt-2">{color.shade}</p>
            </div>
          ))}
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
        <div className="flex items-center gap-x-3 mb-4">
          <Button>Default</Button>
        </div>
        <div className="flex items-center gap-x-3 mb-4">
          <Button variant="primarySolid">Primary Solid</Button>
          <Button variant="primaryOutline">Primary Outline</Button>
          <Button variant="primaryText">Primary Text</Button>
        </div>
        <div className="flex items-center gap-x-3 mb-4">
          <Button variant="secondarySolid">Secondary Solid</Button>
          <Button variant="secondaryOutline">Secondary Outline</Button>
          <Button variant="secondaryText">Secondary Text</Button>
        </div>
        <div className="flex items-center gap-x-3 mb-4">
          <Button variant="tertiarySolid">Tertiary Solid</Button>
          <Button variant="tertiaryOutline">Tertiary Outline</Button>
          <Button variant="tertiaryText">Tertiary Text</Button>
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
      <div className="mb-12">
        <Pricing />
      </div>
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8">Forms</h2>
        <InputField name="input" label="Input" className="w-64 mb-6" />
        <SelectField
          name="select"
          label="Select"
          className="w-64 mb-6"
          options={[
            {
              label: 'Please select',
              value: '',
            },
            {
              label: 'label 1',
              value: 'value 1',
            },
          ]}
        />
        <RadioGroup
          name="radio"
          label="Radio"
          className="mb-6"
          items={[
            {
              label: 'label 1',
              value: 'value 1',
            },
            {
              label: 'label 2',
              value: 'value 3',
            },
            {
              label: 'label 3',
              value: 'value 3',
            },
          ]}
        />
        <Checkbox
          name="checkbox"
          label="Checkbox"
          className="mb-6"
          items={[
            {
              label: 'label 1',
              value: 'value 1',
            },
            {
              label: 'label 2',
              value: 'value 3',
            },
            {
              label: 'label 3',
              value: 'value 3',
            },
          ]}
        />
        <TextareaField name="textarea" label="Textarea" className="w-64" />
      </div>
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Signup Form</h2>
        <SignupForm />
      </div>
    </Container>
  )
}
