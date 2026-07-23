import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Typography } from './Typography'

describe('Typography Component', () => {
  it('renders h1 element', () => {
    render(<Typography variant="h1">Login</Typography>)
    expect(screen.getByRole('heading', { level: 1, name: /login/i })).toBeInTheDocument()
  })

  it('renders subtitle paragraph', () => {
    render(<Typography variant="subtitle">Boas-vindas! Faça seu login.</Typography>)
    expect(screen.getByText('Boas-vindas! Faça seu login.')).toBeInTheDocument()
  })
})
