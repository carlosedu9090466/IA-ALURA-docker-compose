import React from 'react'
import { Label } from '../../atoms/Label/Label'
import { Input, type InputProps } from '../../atoms/Input/Input'

export interface FormFieldProps extends InputProps {
  label: string
  error?: string
  id: string
}

export const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, id, className = '', ...inputProps }, ref) => {
    return (
      <div className={`mb-4 text-left ${className}`}>
        <Label htmlFor={id}>{label}</Label>
        <Input id={id} ref={ref} hasError={!!error} {...inputProps} />
        {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
      </div>
    )
  }
)

FormField.displayName = 'FormField'
