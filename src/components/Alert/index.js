import clsx from 'clsx'
import {
  ExclamationTriangleIcon,
  XCircleIcon,
  CheckCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/20/solid'

import './styles.css'

export function Alert({ children, variant = 'info', className }) {
  const alertClassName = clsx(
    'alert',
    {
      'alert-warning': variant == 'warning',
      'alert-error': variant == 'error',
      'alert-info': variant == 'info',
      'alert-success': variant == 'success',
    },
    className
  )

  const icon = {
    warning: ExclamationTriangleIcon,
    error: XCircleIcon,
    info: InformationCircleIcon,
    success: CheckCircleIcon,
  }

  const AlertIcon = icon[variant] || icon['info']

  return (
    <div className={alertClassName}>
      <div className="flex">
        <div className="flex-shrink-0">
          <AlertIcon aria-hidden="true" className="alert-icon" />
        </div>
        <div className="ml-3">{children}</div>
      </div>
    </div>
  )
}
