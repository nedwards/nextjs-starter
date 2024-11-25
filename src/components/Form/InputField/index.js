import clsx from 'clsx'
import styles from '../styles.module.css'

export function InputField({
  name,
  label,
  type = 'text',
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
      <input
        id={name}
        type={type}
        aria-invalid={error ? 'true' : 'false'}
        {...register(name, validation)}
        className={clsx(styles.input, { [styles.error]: error })}
        {...props}
      />
      {error && <p className={styles['error-message']}>{error}</p>}
    </div>
  )
}
