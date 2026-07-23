import React from 'react'

export interface AuthTemplateProps {
  bannerSlot: React.ReactNode
  formSlot: React.ReactNode
}

export const AuthTemplate: React.FC<AuthTemplateProps> = ({ bannerSlot, formSlot }) => {
  return (
    <div className="relative min-h-screen w-full bg-[#060b0e] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-hidden font-sans select-none">
      {/* Background Watermark Graphics (CodeConnect Logo Outlines) */}
      <div
        data-testid="watermark-top-left"
        className="absolute -top-16 -left-16 w-96 h-96 opacity-10 pointer-events-none text-emerald-500"
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect x="30" y="30" width="80" height="120" rx="40" stroke="currentColor" strokeWidth="18" />
          <rect x="90" y="50" width="80" height="120" rx="40" stroke="currentColor" strokeWidth="18" />
        </svg>
      </div>

      <div
        data-testid="watermark-bottom-right"
        className="absolute -bottom-20 -right-20 w-96 h-96 opacity-10 pointer-events-none text-emerald-500"
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect x="30" y="30" width="80" height="120" rx="40" stroke="currentColor" strokeWidth="18" />
          <rect x="90" y="50" width="80" height="120" rx="40" stroke="currentColor" strokeWidth="18" />
        </svg>
      </div>

      {/* Main Central Card Container */}
      <div className="relative z-10 w-full max-w-4xl bg-[#171d1f] rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-gray-800/60 backdrop-blur-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="w-full h-full flex items-center justify-center">
            {bannerSlot}
          </div>
          <div className="w-full flex items-center justify-center">
            {formSlot}
          </div>
        </div>
      </div>
    </div>
  )
}
