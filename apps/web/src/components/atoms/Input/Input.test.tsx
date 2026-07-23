import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Input } from './Input'

describe('Input Component', () => {
  it('renders input with placeholder', () => {
    render(<Input placeholder="usuario123" />)
    expect(screen.getByPlaceholderText('usuario123')).toBeInTheDocument()
  })

  it('handles user typing', () => {
    const handleChange = vi.fn()
    render(<Input onChange={handleChange} placeholder="Email" />)
    const input = screen.getByPlaceholderText('Email')
    fireEvent.change(input, { target: { value: 'test@example.com' } })
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect((input as HTMLInputElement).value).toBe('test@example.com')
  })

  it('applies error styles when hasError is true', () => {
    render(<Input placeholder="Senha" hasError />)
    const input = screen.getByPlaceholderText('Senha')
    expect(input.className).toContain('border-red-500')
  })
})
