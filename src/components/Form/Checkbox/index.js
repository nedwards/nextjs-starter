import styles from './styles.module.css'

export function Checkbox({
  name,
  label,
  items = [],
  register,
  errors,
  defaultChecked = '',
  validation,
  className = '',
}) {
  const error = errors?.[name]?.message

  return (
    <fieldset className={`${styles.checkbox} ${className}`}>
      <legend htmlFor={name} className={styles.label}>
        {label}
      </legend>
      {items.map((item, index) => {
        const id = `${name}-${index}`
        return (
          <div key={id} className={styles['checkbox-container']}>
            <div className={styles['checkbox-wrapper']}>
              <div className={styles['checkbox-group']}>
                <input
                  defaultChecked={defaultChecked === item.label}
                  id={id}
                  name={name}
                  type="checkbox"
                  aria-describedby={`${id}-description`}
                  className={styles['checkbox-input']}
                />
                <svg viewBox="0 0 14 14" className={styles['checkbox-icon']}>
                  <path
                    d="M3 8L6 11L11 3.5"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={styles['checkbox-icon-checked']}
                  />
                  <path
                    d="M3 7H11"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={styles['checkbox-icon-indeterminate']}
                  />
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
      {error && <p className={styles['error-message']}>{error}</p>}
    </fieldset>
  )
}
