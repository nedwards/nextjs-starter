import styles from '../styles.module.css'

export function RadioGroup({
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
    <fieldset className={className}>
      <legend htmlFor={name} className={styles.label}>
        {label}
      </legend>
      {items.map((item, index) => {
        const id = `${name}-${index}`
        return (
          <div key={id} className={styles['radio-group']}>
            <div className={styles['radio-input-container']}>
              <input
                key={id}
                id={id}
                name={name}
                defaultChecked={defaultChecked === item.label}
                type="radio"
                className={styles['radio-input']}
              />
            </div>
            <div className="radio-label-container">
              <label htmlFor={id} className={styles['radio-label']}>
                {item.label}
                {item.description && (
                  <span className={styles['radio-label-description']}>
                    {item.description}
                  </span>
                )}
              </label>
            </div>
          </div>
        )
      })}
      {error && <p className={styles['error-message']}>{error}</p>}
    </fieldset>
  )
}
