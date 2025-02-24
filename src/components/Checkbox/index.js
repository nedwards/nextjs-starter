import clsx from 'clsx'
import styles from './styles.module.css'

export function Checkbox({
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
    <>
      {items.map((item, index) => {
        const id = `${name}-${index}`
        return (
          <div key={id} className={styles['checkbox-container']}>
            <div className={styles['checkbox-wrapper']}>
              <div className={styles['checkbox-group']}>
                <input
                  defaultChecked={defaultChecked === item.label}
                  id={id}
                  type="checkbox"
                  name={name}
                  value={item.value}
                  {...register(name, validation)}
                  className={clsx(
                    styles['checkbox-input'],
                    { [styles.error]: error },
                    className
                  )}
                  {...props}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className={styles['checkbox-icon']}
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>
            </div>
            <div className={styles['checkbox-text']}>
              <label htmlFor={id} className={styles['checkbox-label']}>
                {item.label}
              </label>
              {item.description && (
                <p
                  id={`${id}-description`}
                  className={styles['checkbox-description']}
                >
                  {item.description}
                </p>
              )}
            </div>
          </div>
        )
      })}
    </>
  )
}
