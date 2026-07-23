import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { SocialButton } from './SocialButton'

describe('SocialButton Component', () => {
  it('renders icon and label', () => {
    render(<SocialButton iconSrc="/Github.png" iconAlt="GitHub logo" label="Github" />)
    expect(screen.getByAltText('GitHub logo')).toBeInTheDocument()
    expect(screen.getByText('Github')).toBeInTheDocument()
  })

  it('triggers onClick handler when clicked', () => {
    const handleClick = vi.fn()
    render(
      <SocialButton
        iconSrc="/Google.png"
        iconAlt="Google logo"
        label="Gmail"
        onClick={handleClick}
      />
    )
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
