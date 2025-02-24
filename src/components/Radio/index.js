import clsx from 'clsx'
import styles from './styles.module.css'

export function Radio({
  name,
  items = [],
  register,
  error,
  validation,
  defaultChecked = '',
  className = '',
  ...props
}) {
  return (
    <div className={styles['radio-group']}>
      {items.map((item, index) => {
        const id = `${name}-${index}`
        return (
          <div key={id} className={styles['radio-container']}>
            <input
              defaultChecked={defaultChecked === item.label}
              id={id}
              type="radio"
              name={name}
              value={item.value}
              {...register(name, validation)}
              className={clsx(
                styles['radio-input'],
                { [styles.error]: error },
                className
              )}
              {...props}
            />
            <label htmlFor={id} className={styles['radio-label']}>
              {item.label}
            </label>
          </div>
        )
      })}
    </div>
  )
}
