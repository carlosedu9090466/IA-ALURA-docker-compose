import React from 'react'

export interface DividerProps {
  children?: React.ReactNode
  className?: string
}

export const Divider: React.FC<DividerProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative flex items-center my-6 ${className}`}>
      <div className="flex-grow border-t border-gray-700"></div>
      {children && <span className="flex-shrink mx-4 text-xs text-gray-400 font-normal">{children}</span>}
      <div className="flex-grow border-t border-gray-700"></div>
    </div>
  )
}
