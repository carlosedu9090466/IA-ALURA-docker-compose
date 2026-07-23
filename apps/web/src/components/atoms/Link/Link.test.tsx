import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Link } from './Link'

describe('Link Component', () => {
  it('renders link text and href', () => {
    render(<Link href="/forgot">Esqueci a senha</Link>)
    const link = screen.getByRole('link', { name: /esqueci a senha/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/forgot')
  })

  it('applies accent variant styles', () => {
    render(<Link variant="accent">Crie seu cadastro!</Link>)
    const link = screen.getByRole('link')
    expect(link.className).toContain('text-[#81FE88]')
  })
})
