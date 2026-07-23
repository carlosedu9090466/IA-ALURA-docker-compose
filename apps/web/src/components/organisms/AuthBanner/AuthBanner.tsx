import React from 'react'

export interface AuthBannerProps {
  imageSrc?: string
  altText?: string
  className?: string
}

export const AuthBanner: React.FC<AuthBannerProps> = ({
  imageSrc = '/IMG_1 - Desktop.png',
  altText = 'Banner Code Connect',
  className = '',
}) => {
  return (
    <div className={`relative w-full h-full min-h-[350px] md:min-h-[480px] rounded-xl overflow-hidden ${className}`}>
      <img
        src={imageSrc}
        alt={altText}
        className="w-full h-full object-cover object-center"
      />
    </div>
  )
}
