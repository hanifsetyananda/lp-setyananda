import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactSection from '#components/pages/landing-page/contact'
import emailjs from '@emailjs/browser'

// Fully mock @emailjs/browser to protect the 200 monthly email limit
vi.mock('@emailjs/browser', () => ({
  default: {
    send: vi.fn(),
  },
}))

describe('ContactSection Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    window.alert = vi.fn() // Mock window.alert to prevent jsdom errors
  })

  it('renders all required form fields correctly', () => {
    render(<ContactSection />)
    expect(screen.getByLabelText(/Nama Lengkap/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^Email$/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Nomor Telepon/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Isi Pesan/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Kirim Pesan Sekarang/i })
    ).toBeInTheDocument()
  })

  it('updates input values when typing', async () => {
    const user = userEvent.setup()
    render(<ContactSection />)

    const nameInput = screen.getByLabelText(/Nama Lengkap/i)
    await user.type(nameInput, 'Budi Santoso')
    expect(nameInput).toHaveValue('Budi Santoso')
  })

  it('shows error validation message when submitting empty required fields', async () => {
    const user = userEvent.setup()
    render(<ContactSection />)

    const submitBtn = screen.getByRole('button', {
      name: /Kirim Pesan Sekarang/i,
    })
    await user.click(submitBtn)

    expect(
      screen.getByText(/Mohon lengkapi semua field yang wajib diisi/i)
    ).toBeInTheDocument()
    expect(emailjs.send).not.toHaveBeenCalled()
  })

  it('successfully submits valid form data using mocked emailjs.send', async () => {
    const user = userEvent.setup()
    render(<ContactSection />)

    // Mock successful API response
    ;(emailjs.send as unknown as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      status: 200,
      text: 'OK',
    })

    await user.type(screen.getByLabelText(/Nama Lengkap/i), 'Andi Wijaya')
    await user.type(screen.getByLabelText(/^Email$/i), 'andi@contoh.com')
    await user.type(screen.getByLabelText(/Isi Pesan/i), 'Halo, ingin konsultasi pembuatan web.')

    const submitBtn = screen.getByRole('button', {
      name: /Kirim Pesan Sekarang/i,
    })
    await user.click(submitBtn)

    // Ensure emailjs.send was triggered with corresponding variables
    await waitFor(() => {
      expect(emailjs.send).toHaveBeenCalledTimes(1)
    })

    // Assert success alert and message display
    expect(window.alert).toHaveBeenCalledWith(
      expect.stringContaining('Pesan berhasil dikirim!')
    )
    expect(
      screen.getByText(/Pesan berhasil dikirim! Saya akan segera membalasnya/i)
    ).toBeInTheDocument()
  })
})
