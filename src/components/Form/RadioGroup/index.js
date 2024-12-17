import styles from './styles.module.css'

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
          <div key={id} className={styles['radio-container']}>
            <input
              defaultChecked={defaultChecked === item.label}
              id={id}
              name={name}
              type="radio"
              className={styles['radio-input']}
            />
            <label htmlFor={id} className={styles['radio-label']}>
              {item.label}
            </label>
          </div>
        )
      })}
      {error && <p className={styles['error-message']}>{error}</p>}
    </fieldset>
  )
}
