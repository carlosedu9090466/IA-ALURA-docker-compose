import React from 'react'

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className = '', checked, onChange, id, ...props }, ref) => {
    return (
      <label className="inline-flex items-center cursor-pointer select-none group">
        <div className="relative flex items-center justify-center">
          <input
            type="checkbox"
            id={id}
            ref={ref}
            checked={checked}
            onChange={onChange}
            className="sr-only peer"
            {...props}
          />
          <div className="w-4 h-4 rounded border border-gray-400 peer-checked:bg-brand-green peer-checked:border-brand-green peer-focus:ring-2 peer-focus:ring-brand-green/50 flex items-center justify-center transition-colors bg-transparent">
            <svg
              className="w-3 h-3 text-black opacity-0 peer-checked:opacity-100 transition-opacity font-bold"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="3.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        {label && <span className="ml-2 text-xs text-gray-300 group-hover:text-white transition-colors">{label}</span>}
      </label>
    )
  }
)

Checkbox.displayName = 'Checkbox'
