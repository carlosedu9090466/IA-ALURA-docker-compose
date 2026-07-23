import React from 'react'
import { AuthTemplate } from '../../components/templates/AuthTemplate/AuthTemplate'
import { AuthBanner } from '../../components/organisms/AuthBanner/AuthBanner'
import { LoginForm } from '../../components/organisms/LoginForm/LoginForm'

export interface LoginPageProps {
  onNavigateToRegister?: () => void
}

export const LoginPage: React.FC<LoginPageProps> = ({ onNavigateToRegister }) => {
  const handleLoginSubmit = (data: { identifier: string; pass: string; rememberMe: boolean }) => {
    console.log('Form submitted:', data)
  }

  const handleGithubLogin = () => {
    console.log('GitHub login clicked')
  }

  const handleGoogleLogin = () => {
    console.log('Google login clicked')
  }

  const handleSignUpClick = (e: React.MouseEvent) => {
    if (onNavigateToRegister) {
      e.preventDefault()
      onNavigateToRegister()
    }
  }

  return (
    <AuthTemplate
      pageKey="login"
      bannerSlot={<AuthBanner imageSrc="/IMG_1 - Desktop.png" altText="Banner Code Connect" />}
      formSlot={
        <LoginForm
          onLoginSubmit={handleLoginSubmit}
          onGithubLogin={handleGithubLogin}
          onGoogleLogin={handleGoogleLogin}
          signUpHref="/cadastro"
          onClick={(e: any) => {
            if (e.target.closest('a')?.getAttribute('href') === '/cadastro') {
              handleSignUpClick(e)
            }
          }}
          forgotPasswordHref="/recuperar-senha"
        />
      }
    />
  )
}
