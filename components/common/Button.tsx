import { ButtonProps } from '@/interfaces'
import clsx from 'clsx'

const sizeClasses = {
  small: 'px-3 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
}

const Button = ({ label, size, shape }: ButtonProps) => {
  return (
    <button
      className={clsx(
        'bg-blue-600 text-white font-medium hover:bg-blue-700',
        sizeClasses[size],
        shape
      )}
    >
      {label}
    </button>
  )
}

export default Button
