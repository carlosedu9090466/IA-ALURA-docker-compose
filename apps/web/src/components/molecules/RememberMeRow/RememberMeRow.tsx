import React from 'react'
import { Checkbox } from '../../atoms/Checkbox/Checkbox'
import { Link } from '../../atoms/Link/Link'

export interface RememberMeRowProps {
  rememberMe: boolean
  onRememberMeChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  forgotPasswordHref?: string
  showForgotPassword?: boolean
}

export const RememberMeRow: React.FC<RememberMeRowProps> = ({
  rememberMe,
  onRememberMeChange,
  forgotPasswordHref = '#',
  showForgotPassword = true,
}) => {
  return (
    <div className="flex items-center justify-between my-4 text-xs">
      <Checkbox
        id="remember-me"
        checked={rememberMe}
        onChange={onRememberMeChange}
        label="Lembrar-me"
      />
      {showForgotPassword && (
        <Link href={forgotPasswordHref} variant="default">
          Esqueci a senha
        </Link>
      )}
    </div>
  )
}
