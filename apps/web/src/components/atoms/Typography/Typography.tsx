import React from 'react'

export interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'subtitle' | 'caption'
  children: React.ReactNode
  className?: string
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  children,
  className = '',
}) => {
  switch (variant) {
    case 'h1':
      return <h1 className={`text-2xl sm:text-3xl font-bold text-white tracking-tight ${className}`}>{children}</h1>
    case 'h2':
      return <h2 className={`text-xl font-semibold text-white ${className}`}>{children}</h2>
    case 'h3':
      return <h3 className={`text-lg font-medium text-white ${className}`}>{children}</h3>
    case 'subtitle':
      return <p className={`text-sm text-gray-300 ${className}`}>{children}</p>
    case 'caption':
      return <p className={`text-xs text-gray-400 ${className}`}>{children}</p>
    case 'body':
    default:
      return <p className={`text-sm text-gray-200 ${className}`}>{children}</p>
  }
}
