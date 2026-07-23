import React from 'react'

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
  variant?: 'default' | 'accent'
}

export const Link: React.FC<LinkProps> = ({
  children,
  variant = 'default',
  className = '',
  href = '#',
  ...props
}) => {
  const variantStyles = {
    default: 'text-xs text-gray-300 underline hover:text-white transition-colors',
    accent: 'text-sm text-[#81FE88] font-bold hover:underline transition-colors inline-flex items-center gap-1',
  }

  return (
    <a href={href} className={`${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </a>
  )
}
