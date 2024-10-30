import clsx from 'clsx'
import { config } from '@/data'

export function SocialMedia({ className }) {
  return (
    config?.socialMedia.length && (
      <div className={clsx('flex space-x-4', className)}>
        {config?.socialMedia.map(
          (item) =>
            item.href && (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden="true" className="h-6 w-6" />
              </a>
            )
        )}
      </div>
    )
  )
}
