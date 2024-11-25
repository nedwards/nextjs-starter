import clsx from 'clsx'
import styles from '../styles.module.css'

export function TextareaField({
  name,
  label,
  rows = '4',
  register,
  errors,
  validation,
  className,
  ...props
}) {
  const error = errors[name]?.message

  return (
    <div className={className}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <textarea
        id={name}
        rows={rows}
        aria-invalid={error ? 'true' : 'false'}
        {...register(name, validation)}
        className={clsx(styles.input, { [styles.error]: error })}
        {...props}
      />
      {error && <p className={styles['error-message']}>{error}</p>}
    </div>
  )
}
