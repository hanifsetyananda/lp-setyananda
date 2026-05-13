import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Footer from '../components/pages/landing-page/footer'

describe('Footer Component', () => {
  it('renders branding name correctly', () => {
    render(<Footer />)
    expect(screen.getByText('Setyananda')).toBeInTheDocument()
  })

  it('contains navigation links with correct hrefs', () => {
    render(<Footer />)
    const berandaLink = screen.getByRole('link', { name: /Beranda/i })
    const layananLink = screen.getByRole('link', { name: /Layanan/i })
    const kontakLink = screen.getByRole('link', { name: /Kontak/i })

    expect(berandaLink).toHaveAttribute('href', '#home')
    expect(layananLink).toHaveAttribute('href', '#service')
    expect(kontakLink).toHaveAttribute('href', '#contact')
  })

  it('contains facebook link with correct attributes', () => {
    render(<Footer />)
    const facebookLink = screen.getByLabelText(/Kunjungi halaman Facebook Setyananda/i)
    
    expect(facebookLink).toHaveAttribute('href', 'https://web.facebook.com/profile.php?id=61589536477399')
    expect(facebookLink).toHaveAttribute('target', '_blank')
    expect(facebookLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('shows copyright text', () => {
    render(<Footer />)
    expect(screen.getByText(/Copyright 2026 Setyananda/i)).toBeInTheDocument()
  })
})
