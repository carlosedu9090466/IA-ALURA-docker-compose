import React from 'react'

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode
  required?: boolean
}

export const Label: React.FC<LabelProps> = ({ children, required, className = '', ...props }) => {
  return (
    <label className={`block text-sm font-medium text-gray-200 mb-1.5 ${className}`} {...props}>
      {children}
      {required && <span className="text-red-400 ml-1">*</span>}
    </label>
  )
}
