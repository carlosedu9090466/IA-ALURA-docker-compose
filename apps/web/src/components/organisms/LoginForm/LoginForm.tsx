import React, { useState } from 'react'
import { Typography } from '../../atoms/Typography/Typography'
import { FormField } from '../../molecules/FormField/FormField'
import { RememberMeRow } from '../../molecules/RememberMeRow/RememberMeRow'
import { Button } from '../../atoms/Button/Button'
import { Divider } from '../../molecules/Divider/Divider'
import { SocialButton } from '../../molecules/SocialButton/SocialButton'
import { Link } from '../../atoms/Link/Link'

export interface LoginFormProps {
  onLoginSubmit?: (data: { identifier: string; pass: string; rememberMe: boolean }) => void
  onGithubLogin?: () => void
  onGoogleLogin?: () => void
  signUpHref?: string
  forgotPasswordHref?: string
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onLoginSubmit,
  onGithubLogin,
  onGoogleLogin,
  signUpHref = '#',
  forgotPasswordHref = '#',
}) => {
  const [identifier, setIdentifier] = useState('')
  const [pass, setPass] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [errors, setErrors] = useState<{ identifier?: string; pass?: string }>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: { identifier?: string; pass?: string } = {}

    if (!identifier.trim()) {
      newErrors.identifier = 'Informe o email ou usuário'
    }
    if (!pass.trim()) {
      newErrors.pass = 'Informe a senha'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    if (onLoginSubmit) {
      onLoginSubmit({ identifier, pass, rememberMe })
    }
  }

  return (
    <div className="w-full flex flex-col justify-center py-2 px-2 sm:px-4 text-left">
      <div className="mb-6">
        <Typography variant="h1" className="mb-1">
          Login
        </Typography>
        <Typography variant="subtitle">
          Boas-vindas! Faça seu login.
        </Typography>
      </div>

      <form onSubmit={handleSubmit} className="w-full">
        <FormField
          id="identifier"
          label="Email ou usuário"
          placeholder="usuario123"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          error={errors.identifier}
        />

        <FormField
          id="password"
          type="password"
          label="Senha"
          placeholder="******"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          error={errors.pass}
        />

        <RememberMeRow
          rememberMe={rememberMe}
          onRememberMeChange={(e) => setRememberMe(e.target.checked)}
          forgotPasswordHref={forgotPasswordHref}
        />

        <Button
          type="submit"
          variant="primary"
          fullWidth
          className="mt-6 shadow-lg hover:shadow-brand-green/20"
          icon={
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          }
        >
          Login
        </Button>
      </form>

      <Divider>ou entre com outras contas</Divider>

      <div className="flex justify-center items-center gap-8 my-2">
        <SocialButton
          iconSrc="/Github.png"
          iconAlt="GitHub Logo"
          label="Github"
          onClick={onGithubLogin}
        />
        <SocialButton
          iconSrc="/Google.png"
          iconAlt="Google Logo"
          label="Gmail"
          onClick={onGoogleLogin}
        />
      </div>

      <div className="text-center mt-6 text-xs sm:text-sm text-gray-300 flex items-center justify-center gap-1.5 flex-wrap">
        <span>Ainda não tem conta?</span>
        <Link href={signUpHref} variant="accent">
          Crie seu cadastro! 📝
        </Link>
      </div>
    </div>
  )
}
