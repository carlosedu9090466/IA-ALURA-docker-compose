import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Checkbox } from './Checkbox'

describe('Checkbox Component', () => {
  it('renders checkbox with label', () => {
    render(<Checkbox label="Lembrar-me" />)
    expect(screen.getByText('Lembrar-me')).toBeInTheDocument()
  })

  it('toggles check state on click', () => {
    const handleChange = vi.fn()
    render(<Checkbox label="Lembrar-me" onChange={handleChange} />)
    const checkbox = screen.getByRole('checkbox')
    fireEvent.click(checkbox)
    expect(handleChange).toHaveBeenCalledTimes(1)
  })
})
