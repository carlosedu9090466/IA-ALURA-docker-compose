import React from 'react'
import { AuthTemplate } from '../../components/templates/AuthTemplate/AuthTemplate'
import { AuthBanner } from '../../components/organisms/AuthBanner/AuthBanner'
import { LoginForm } from '../../components/organisms/LoginForm/LoginForm'

export const LoginPage: React.FC = () => {
  const handleLoginSubmit = (data: { identifier: string; pass: string; rememberMe: boolean }) => {
    console.log('Form submitted:', data)
  }

  const handleGithubLogin = () => {
    console.log('GitHub login clicked')
  }

  const handleGoogleLogin = () => {
    console.log('Google login clicked')
  }

  return (
    <AuthTemplate
      bannerSlot={<AuthBanner imageSrc="/IMG_1 - Desktop.png" altText="Banner Code Connect" />}
      formSlot={
        <LoginForm
          onLoginSubmit={handleLoginSubmit}
          onGithubLogin={handleGithubLogin}
          onGoogleLogin={handleGoogleLogin}
          signUpHref="/cadastro"
          forgotPasswordHref="/recuperar-senha"
        />
      }
    />
  )
}
