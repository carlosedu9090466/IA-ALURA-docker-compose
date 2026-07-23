import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FormField } from './FormField'

describe('FormField Component', () => {
  it('renders label and input', () => {
    render(<FormField id="email" label="Email ou usuário" placeholder="usuario123" />)
    expect(screen.getByLabelText('Email ou usuário')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('usuario123')).toBeInTheDocument()
  })

  it('renders error message if provided', () => {
    render(<FormField id="email" label="Email" error="Campo obrigatório" />)
    expect(screen.getByText('Campo obrigatório')).toBeInTheDocument()
  })
})
