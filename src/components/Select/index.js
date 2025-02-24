import clsx from 'clsx'
import styles from './styles.module.css'

export function Select({
  name,
  register,
  error,
  validation,
  className = '',
  options = [],
  ...props
}) {
  return (
    <select
      id={name}
      name={name}
      aria-invalid={error ? 'true' : 'false'}
      {...register?.(name, validation)}
      className={clsx(styles.select, { [styles.error]: error }, className)}
      {...props}
    >
      {options.map((option) => (
        <option key={option.label} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
