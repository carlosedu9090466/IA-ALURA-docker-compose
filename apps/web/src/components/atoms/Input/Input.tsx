import React from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', hasError = false, ...props }, ref) => {
    const errorStyles = hasError ? 'border-red-500 focus:ring-red-500' : 'border-transparent focus:border-brand-green focus:ring-brand-green'

    return (
      <input
        ref={ref}
        className={`w-full bg-dark-input text-white placeholder-gray-400 rounded-lg px-4 py-3 border text-sm transition-all duration-200 outline-none focus:ring-1 ${errorStyles} ${className}`}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'
