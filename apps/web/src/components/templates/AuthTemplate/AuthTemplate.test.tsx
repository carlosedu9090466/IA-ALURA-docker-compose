import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { AuthTemplate } from './AuthTemplate'

describe('AuthTemplate Component', () => {
  it('renders bannerSlot and formSlot correctly', () => {
    render(
      <AuthTemplate
        bannerSlot={<div data-testid="banner-slot">Banner Content</div>}
        formSlot={<div data-testid="form-slot">Form Content</div>}
      />
    )
    expect(screen.getByTestId('banner-slot')).toBeInTheDocument()
    expect(screen.getByTestId('form-slot')).toBeInTheDocument()
  })

  it('renders watermark background elements', () => {
    render(<AuthTemplate bannerSlot={<div />} formSlot={<div />} />)
    expect(screen.getByTestId('watermark-top-left')).toBeInTheDocument()
    expect(screen.getByTestId('watermark-bottom-right')).toBeInTheDocument()
  })
})
