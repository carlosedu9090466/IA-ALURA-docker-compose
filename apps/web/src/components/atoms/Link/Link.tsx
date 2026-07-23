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
    default: 'text-xs text-gray-300 underline hover:text-white transition-all duration-200 hover:scale-105 inline-block',
    accent: 'text-sm text-brand-green font-bold hover:underline transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-95 inline-flex items-center gap-1 cursor-pointer',
  }

  return (
    <a href={href} className={`${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </a>
  )
}
