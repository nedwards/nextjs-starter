import clsx from 'clsx'
import styles from './styles.module.css'

export function Input({
  register,
  name,
  validation,
  type = 'text',
  error,
  className = '',
  ...props
}) {
  return (
    <input
      id={name}
      name={name}
      type={type}
      aria-invalid={error ? 'true' : 'false'}
      {...register(name, validation)}
      className={clsx(styles.input, { [styles.error]: error }, className)}
      {...props}
    />
  )
}
