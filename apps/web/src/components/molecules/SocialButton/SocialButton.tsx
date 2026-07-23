import React from 'react'

export interface SocialButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconSrc: string
  iconAlt: string
  label: string
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  iconSrc,
  iconAlt,
  label,
  className = '',
  type = 'button',
  ...props
}) => {
  return (
    <button
      type={type}
      className={`flex flex-col items-center justify-center p-2 rounded-lg hover:bg-white/5 transition-all group cursor-pointer ${className}`}
      {...props}
    >
      <div className="w-8 h-8 flex items-center justify-center transition-transform group-hover:scale-110">
        <img src={iconSrc} alt={iconAlt} className="w-6 h-6 object-contain" />
      </div>
      <span className="text-xs text-gray-300 group-hover:text-white transition-colors mt-1 font-normal">
        {label}
      </span>
    </button>
  )
}
