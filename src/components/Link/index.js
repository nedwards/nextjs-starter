import NextLink from 'next/link'
import clsx from 'clsx'

export function Link({ href, children, button, className }) {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <a
        className={clsx(
          'link',
          {
            button: button,
            'button button-primary': button == 'primary',
            'button button-secondary': button == 'secondary',
            'button button-tertiary': button == 'tertiary',
          },
          className
        )}
      >
        {children}
      </a>
    </NextLink>
  )
}
