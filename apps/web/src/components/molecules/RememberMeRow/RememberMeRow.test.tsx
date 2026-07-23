import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { RememberMeRow } from './RememberMeRow'

describe('RememberMeRow Component', () => {
  it('renders checkbox and forgot password link', () => {
    render(
      <RememberMeRow
        rememberMe={false}
        onRememberMeChange={() => {}}
        forgotPasswordHref="/forgot"
      />
    )
    expect(screen.getByText('Lembrar-me')).toBeInTheDocument()
    expect(screen.getByText('Esqueci a senha')).toBeInTheDocument()
  })

  it('triggers onRememberMeChange on checkbox click', () => {
    const handleToggle = vi.fn()
    render(<RememberMeRow rememberMe={false} onRememberMeChange={handleToggle} />)
    fireEvent.click(screen.getByRole('checkbox'))
    expect(handleToggle).toHaveBeenCalledTimes(1)
  })
})
