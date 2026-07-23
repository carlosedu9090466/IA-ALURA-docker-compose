import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { LoginForm } from './LoginForm'

describe('LoginForm Component', () => {
  it('renders login heading, input fields, and social buttons', () => {
    render(<LoginForm />)
    expect(screen.getByRole('heading', { level: 1, name: /login/i })).toBeInTheDocument()
    expect(screen.getByLabelText('Email ou usuário')).toBeInTheDocument()
    expect(screen.getByLabelText('Senha')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
    expect(screen.getByText('Github')).toBeInTheDocument()
    expect(screen.getByText('Gmail')).toBeInTheDocument()
    expect(screen.getByText(/crie seu cadastro/i)).toBeInTheDocument()
  })

  it('validates empty inputs on submission', () => {
    render(<LoginForm />)
    fireEvent.click(screen.getByRole('button', { name: /login/i }))
    expect(screen.getByText('Informe o email ou usuário')).toBeInTheDocument()
    expect(screen.getByText('Informe a senha')).toBeInTheDocument()
  })

  it('calls onLoginSubmit when form is submitted with values', () => {
    const handleLoginSubmit = vi.fn()
    render(<LoginForm onLoginSubmit={handleLoginSubmit} />)

    fireEvent.change(screen.getByLabelText('Email ou usuário'), {
      target: { value: 'usuario123' },
    })
    fireEvent.change(screen.getByLabelText('Senha'), {
      target: { value: '123456' },
    })
    fireEvent.click(screen.getByRole('button', { name: /login/i }))

    expect(handleLoginSubmit).toHaveBeenCalledWith({
      identifier: 'usuario123',
      pass: '123456',
      rememberMe: false,
    })
  })
})
