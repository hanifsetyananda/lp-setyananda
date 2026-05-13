import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor, act } from '@testing-library/react'
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
    vi.spyOn(console, 'error').mockImplementation(() => {}) // Suppress console.error logs in test output
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

  it('shows error state when emailjs.send fails', async () => {
    const user = userEvent.setup()
    render(<ContactSection />)

    // Mock failure API response
    ;(emailjs.send as unknown as ReturnType<typeof vi.fn>).mockRejectedValueOnce(
      new Error('EmailJS error')
    )

    await user.type(screen.getByLabelText(/Nama Lengkap/i), 'Andi Wijaya')
    await user.type(screen.getByLabelText(/^Email$/i), 'andi@contoh.com')
    await user.type(
      screen.getByLabelText(/Isi Pesan/i),
      'Halo, ingin konsultasi pembuatan web.'
    )

    const submitBtn = screen.getByRole('button', {
      name: /Kirim Pesan Sekarang/i,
    })
    await user.click(submitBtn)

    await waitFor(() => {
      expect(emailjs.send).toHaveBeenCalledTimes(1)
    })

    // Assert error message display
    expect(
      screen.getByText(/terjadi kesalahan saat mengirim pesan/i)
    ).toBeInTheDocument()
  })

  it('resets form fields after successful submission', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true })
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    render(<ContactSection />)

    // Mock successful API response
    ;(emailjs.send as unknown as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      status: 200,
      text: 'OK',
    })

    await user.type(screen.getByLabelText(/Nama Lengkap/i), 'Andi Wijaya')
    await user.type(screen.getByLabelText(/^Email$/i), 'andi@contoh.com')
    await user.type(
      screen.getByLabelText(/Isi Pesan/i),
      'Halo, ingin konsultasi pembuatan web.'
    )

    const submitBtn = screen.getByRole('button', {
      name: /Kirim Pesan Sekarang/i,
    })
    await user.click(submitBtn)

    await waitFor(() => {
      expect(emailjs.send).toHaveBeenCalledTimes(1)
    })

    // Advance timers by 4 seconds to trigger form reset
    // Wrap in act because it triggers state updates
    await act(async () => {
      await vi.advanceTimersByTimeAsync(4000)
    })

    await waitFor(() => {
      expect(screen.getByLabelText(/Nama Lengkap/i)).toHaveValue('')
      expect(screen.getByLabelText(/^Email$/i)).toHaveValue('')
      expect(screen.getByLabelText(/Isi Pesan/i)).toHaveValue('')
    })

    vi.useRealTimers()
  })
})
