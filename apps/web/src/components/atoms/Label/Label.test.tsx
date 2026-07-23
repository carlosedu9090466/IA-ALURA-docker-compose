import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Label } from './Label'

describe('Label Component', () => {
  it('renders label text', () => {
    render(<Label htmlFor="email">Email ou usuário</Label>)
    expect(screen.getByText('Email ou usuário')).toBeInTheDocument()
  })

  it('renders required indicator if required is true', () => {
    render(<Label required>Senha</Label>)
    expect(screen.getByText('*')).toBeInTheDocument()
  })
})
