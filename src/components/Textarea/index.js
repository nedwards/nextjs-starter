import clsx from 'clsx'
import styles from './styles.module.css'

export function Textarea({
  name,
  rows = '4',
  register,
  error,
  validation,
  className = '',
  ...props
}) {
  return (
    <textarea
      id={name}
      rows={rows}
      aria-invalid={error ? 'true' : 'false'}
      {...register?.(name, validation)}
      className={clsx(styles.textarea, { [styles.error]: error }, className)}
      {...props}
    />
  )
}
