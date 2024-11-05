import clsx from 'clsx'
import './styles.css'

export function Label({ htmlFor, className, children, ...props }) {
  return (
    <label htmlFor={htmlFor} className={clsx('label', className)} {...props}>
      {children}
    </label>
  )
}

export function Input({
  type = 'text',
  id,
  name = id,
  error,
  className,
  ...props
}) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      aria-invalid={error ? 'true' : 'false'}
      className={clsx('input', { error: error }, className)}
      {...props}
    />
  )
}

export function Textarea({
  type = 'text',
  id,
  name = id,
  error,
  rows = '4',
  className,
  ...props
}) {
  return (
    <textarea
      id={id}
      name={name}
      aria-invalid={error ? 'true' : 'false'}
      className={clsx('textarea', { error: error }, className)}
      rows={rows}
      {...props}
    />
  )
}

export function Select({
  id,
  name = id,
  error,
  className,
  options = [],
  ...props
}) {
  return (
    <select
      id={id}
      name={name}
      className={clsx('select', { error: error }, className)}
      {...props}
    >
      {options.map((option, index) => {
        const key = `select-option-${id}-${index}`
        return (
          <option key={key} id={key} value={option.value}>
            {option.label}
          </option>
        )
      })}
    </select>
  )
}
