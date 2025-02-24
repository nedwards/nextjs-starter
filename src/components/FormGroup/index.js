import React, { cloneElement } from 'react'
import clsx from 'clsx'

import styles from './styles.module.css'

export function FormGroup({
  name,
  label,
  legend,
  register,
  errors,
  validation,
  children,
  className = '',
}) {
  const error = errors?.[name]?.message

  const FormGroupWrapper = legend ? 'fieldset' : 'div'
  const FormGroupLabel = legend ? 'legend' : 'label'

  return (
    <FormGroupWrapper className={clsx(styles['form-group'], className)}>
      {(label || legend) && (
        <FormGroupLabel
          htmlFor={label ? name : undefined}
          className={styles.label}
        >
          {label || legend}
        </FormGroupLabel>
      )}

      {children &&
        cloneElement(children, { register, name, validation, error })}

      {error && (
        <p className={styles['error-message']} id={`${name}-error`}>
          {error}
        </p>
      )}
    </FormGroupWrapper>
  )
}
