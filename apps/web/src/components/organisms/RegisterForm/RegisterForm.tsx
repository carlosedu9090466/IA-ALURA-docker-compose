import React, { useState } from 'react'
import { Typography } from '../../atoms/Typography/Typography'
import { FormField } from '../../molecules/FormField/FormField'
import { RememberMeRow } from '../../molecules/RememberMeRow/RememberMeRow'
import { Button } from '../../atoms/Button/Button'
import { Divider } from '../../molecules/Divider/Divider'
import { SocialButton } from '../../molecules/SocialButton/SocialButton'
import { Link } from '../../atoms/Link/Link'

export interface RegisterFormProps {
  onRegisterSubmit?: (data: { name: string; email: string; pass: string; rememberMe: boolean }) => void
  onGithubLogin?: () => void
  onGoogleLogin?: () => void
  loginHref?: string
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  onRegisterSubmit,
  onGithubLogin,
  onGoogleLogin,
  loginHref = '#',
}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [errors, setErrors] = useState<{ name?: string; email?: string; pass?: string }>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: { name?: string; email?: string; pass?: string } = {}

    if (!name.trim()) {
      newErrors.name = 'Informe seu nome completo'
    }
    if (!email.trim()) {
      newErrors.email = 'Informe seu email'
    }
    if (!pass.trim()) {
      newErrors.pass = 'Informe sua senha'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    if (onRegisterSubmit) {
      onRegisterSubmit({ name, email, pass, rememberMe })
    }
  }

  return (
    <div className="w-full flex flex-col justify-center py-2 px-2 sm:px-4 text-left">
      <div className="mb-6">
        <Typography variant="h1" className="mb-1">
          Cadastro
        </Typography>
        <Typography variant="subtitle">
          Olá! Preencha seus dados.
        </Typography>
      </div>

      <form onSubmit={handleSubmit} className="w-full">
        <FormField
          id="name"
          label="Nome"
          placeholder="Nome completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={errors.name}
        />

        <FormField
          id="email"
          type="email"
          label="Email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
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
          showForgotPassword={false}
        />

        <Button
          type="submit"
          variant="primary"
          fullWidth
          className="mt-6 shadow-lg hover:shadow-[#81FE88]/20"
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
          Cadastrar
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
        <span>Já tem conta?</span>
        <Link href={loginHref} variant="accent">
          Faça seu login!
          <svg className="w-4 h-4 ml-0.5 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
