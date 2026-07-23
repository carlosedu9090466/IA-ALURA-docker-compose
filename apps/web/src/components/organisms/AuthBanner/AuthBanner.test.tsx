import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { AuthBanner } from './AuthBanner'

describe('AuthBanner Component', () => {
  it('renders image with alt text', () => {
    render(<AuthBanner imageSrc="/IMG_1 - Desktop.png" altText="Code Connect Banner" />)
    const img = screen.getByAltText('Code Connect Banner')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', '/IMG_1 - Desktop.png')
  })
})
