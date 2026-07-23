import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { LoginPage } from './LoginPage'

describe('LoginPage Component', () => {
  it('renders login page with banner and form', () => {
    render(<LoginPage />)
    expect(screen.getByAltText('Banner Code Connect')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: /login/i })).toBeInTheDocument()
    expect(screen.getByLabelText('Email ou usuário')).toBeInTheDocument()
    expect(screen.getByLabelText('Senha')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
  })
})
