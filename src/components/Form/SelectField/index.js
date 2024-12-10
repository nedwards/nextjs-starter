import clsx from 'clsx'
import styles from '../styles.module.css'

export function SelectField({
  name,
  label,
  register,
  errors,
  validation,
  className = '',
  options = [],
  ...props
}) {
  const error = errors?.[name]?.message || null

  return (
    <div className={className}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <select
        id={name}
        name="location"
        aria-invalid={error ? 'true' : 'false'}
        {...register?.(name, validation)}
        className={clsx(styles.select, { [styles.error]: error })}
        {...props}
      >
        {options.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className={styles['error-message']}>{error}</p>}
    </div>
  )
}
