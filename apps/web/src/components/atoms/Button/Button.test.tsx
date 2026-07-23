import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Button } from './Button'

describe('Button Component', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
  })

  it('handles click events', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('renders icon if provided', () => {
    render(<Button icon={<span data-testid="test-icon">→</span>}>Login</Button>)
    expect(screen.getByTestId('test-icon')).toBeInTheDocument()
  })

  it('applies fullWidth style by default', () => {
    render(<Button>Submit</Button>)
    const button = screen.getByRole('button')
    expect(button.className).toContain('w-full')
  })
})
