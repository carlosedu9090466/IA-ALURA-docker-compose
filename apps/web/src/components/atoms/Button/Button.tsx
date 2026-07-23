import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  fullWidth?: boolean
  icon?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  fullWidth = true,
  icon,
  className = '',
  type = 'button',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-lg px-6 py-3 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-green disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'

  const variantStyles = {
    primary: 'bg-brand-green text-black hover:bg-brand-green-hover active:bg-brand-green-active',
    secondary: 'bg-dark-input text-white hover:bg-gray-700',
    outline: 'border border-gray-600 text-white hover:bg-white/10',
    ghost: 'bg-transparent text-brand-green hover:underline',
  }

  const widthStyle = fullWidth ? 'w-full' : ''

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {icon && <span className="ml-2 flex items-center">{icon}</span>}
    </button>
  )
}
