import clsx from 'clsx'

export function Banner({ className, children, ...props }) {
  return (
    <div className={clsx('banner', className)} {...props}>
      {children}
    </div>
  )
}