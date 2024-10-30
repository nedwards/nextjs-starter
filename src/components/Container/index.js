import clsx from 'clsx'
import './styles.css'

export function Container({ className, children, ...props }) {
  return (
    <div className={clsx('container', className)} {...props}>{children}</div>
  )
}