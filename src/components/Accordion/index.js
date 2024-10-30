import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const itemsDefault = [
  {
    label: 'Question 1?',
    text: 'Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.',
  },
  {
    label: 'Question 2?',
    text: 'Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.',
  },
  {
    label: 'Question 3?',
    text: 'Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.',
  },
]

export function Accordion({ items = itemsDefault }) {
  return (
    <dl className="space-y-4 divide-y divide-gray-900/10">
      {items.map((item) => (
        <Disclosure key={item.label} as="div" className="pt-4">
          <dt>
            <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
              <span className="text-base font-semibold leading-7">
                {item.label}
              </span>
              <span className="ml-6 flex h-7 items-center">
                <ChevronDownIcon className="w-5 group-data-[open]:rotate-180" />
              </span>
            </DisclosureButton>
          </dt>
          <DisclosurePanel as="dd">
            <p className="text-base leading-7 text-gray-600 mt-1">
              {item.text}
            </p>
          </DisclosurePanel>
        </Disclosure>
      ))}
    </dl>
  )
}
