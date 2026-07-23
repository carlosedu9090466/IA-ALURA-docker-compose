import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { RegisterForm } from './RegisterForm'

describe('RegisterForm Component', () => {
  it('renders register heading, input fields, and social buttons', () => {
    render(<RegisterForm />)
    expect(screen.getByRole('heading', { level: 1, name: /cadastro/i })).toBeInTheDocument()
    expect(screen.getByLabelText('Nome')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Senha')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /cadastrar/i })).toBeInTheDocument()
    expect(screen.getByText('Github')).toBeInTheDocument()
    expect(screen.getByText('Gmail')).toBeInTheDocument()
    expect(screen.getByText(/faça seu login/i)).toBeInTheDocument()
  })

  it('validates empty inputs on submission', () => {
    render(<RegisterForm />)
    fireEvent.click(screen.getByRole('button', { name: /cadastrar/i }))
    expect(screen.getByText('Informe seu nome completo')).toBeInTheDocument()
    expect(screen.getByText('Informe seu email')).toBeInTheDocument()
    expect(screen.getByText('Informe sua senha')).toBeInTheDocument()
  })

  it('calls onRegisterSubmit when form is submitted with valid data', () => {
    const handleRegisterSubmit = vi.fn()
    render(<RegisterForm onRegisterSubmit={handleRegisterSubmit} />)

    fireEvent.change(screen.getByLabelText('Nome'), {
      target: { value: 'Maria Silva' },
    })
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'maria@example.com' },
    })
    fireEvent.change(screen.getByLabelText('Senha'), {
      target: { value: 'secret123' },
    })
    fireEvent.click(screen.getByRole('button', { name: /cadastrar/i }))

    expect(handleRegisterSubmit).toHaveBeenCalledWith({
      name: 'Maria Silva',
      email: 'maria@example.com',
      pass: 'secret123',
      rememberMe: false,
    })
  })
})
