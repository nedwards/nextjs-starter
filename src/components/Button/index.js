import clsx from 'clsx'

import './styles.css'

export function Button({ className, variant, children, ...props }) {
  return (
    <button
      className={clsx(
        'button',
        {
          'button-primary': variant == 'primary',
          'button-secondary': variant == 'secondary',
          'button-tertiary': variant == 'tertiary',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
