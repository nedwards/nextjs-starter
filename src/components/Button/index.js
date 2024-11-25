import clsx from 'clsx'

import './styles.css'

export function Button({ className, variant, children, ...props }) {
  return (
    <button
      className={clsx(
        'button',
        {
          'button-primary-solid': variant == 'primarySolid',
          'button-primary-outline': variant == 'primaryOutline',
          'button-primary-text': variant == 'primaryText',
          'button-secondary-solid': variant == 'secondarySolid',
          'button-secondary-outline': variant == 'secondaryOutline',
          'button-secondary-text': variant == 'secondaryText',
          'button-tertiary-solid': variant == 'tertiarySolid',
          'button-tertiary-outline': variant == 'tertiaryOutline',
          'button-tertiary-text': variant == 'tertiaryText',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
