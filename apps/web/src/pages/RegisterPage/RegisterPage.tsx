import React from 'react'
import { AuthTemplate } from '../../components/templates/AuthTemplate/AuthTemplate'
import { AuthBanner } from '../../components/organisms/AuthBanner/AuthBanner'
import { RegisterForm } from '../../components/organisms/RegisterForm/RegisterForm'

export interface RegisterPageProps {
  onNavigateToLogin?: () => void
}

export const RegisterPage: React.FC<RegisterPageProps> = ({ onNavigateToLogin }) => {
  const handleRegisterSubmit = (data: { name: string; email: string; pass: string; rememberMe: boolean }) => {
    console.log('Register form submitted:', data)
  }

  const handleGithubLogin = () => {
    console.log('GitHub register clicked')
  }

  const handleGoogleLogin = () => {
    console.log('Google register clicked')
  }

  const handleLoginClick = (e: React.MouseEvent) => {
    if (onNavigateToLogin) {
      e.preventDefault()
      onNavigateToLogin()
    }
  }

  return (
    <AuthTemplate
      pageKey="register"
      bannerSlot={
        <AuthBanner
          imageSrc="/Imagens Gerais/IMG2_Desktop.png"
          altText="Banner Cadastro Code Connect"
        />
      }
      formSlot={
        <RegisterForm
          onRegisterSubmit={handleRegisterSubmit}
          onGithubLogin={handleGithubLogin}
          onGoogleLogin={handleGoogleLogin}
          loginHref="/"
          onClick={(e: any) => {
            if (e.target.closest('a')?.getAttribute('href') === '/') {
              handleLoginClick(e)
            }
          }}
        />
      }
    />
  )
}
