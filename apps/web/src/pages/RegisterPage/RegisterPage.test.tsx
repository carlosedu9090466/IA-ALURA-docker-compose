import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { RegisterPage } from './RegisterPage'

describe('RegisterPage Component', () => {
  it('renders register page with banner and register form', () => {
    render(<RegisterPage />)
    expect(screen.getByAltText('Banner Cadastro Code Connect')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: /cadastro/i })).toBeInTheDocument()
    expect(screen.getByLabelText('Nome')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Senha')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /cadastrar/i })).toBeInTheDocument()
  })
})
