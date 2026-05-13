import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import emailjs from "@emailjs/browser"
// import { Facebook, Linkedin } from "lucide-react"

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay }
    })
}

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function ContactSection() {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", content: "" })
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!formData.name.trim() || !formData.email.trim() || !formData.content.trim()) {
            setStatus("error")
            return
        }

        setStatus("loading")

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    reply_to: formData.email,
                    phone: formData.phone || "Tidak diisi",
                    message: formData.content,
                },
                EMAILJS_PUBLIC_KEY
            )

            setStatus("success")
            alert("✅ Pesan berhasil dikirim! Terima kasih telah menghubungi saya.")
            setTimeout(() => {
                setFormData({ name: "", email: "", phone: "", content: "" })
                setStatus("idle")
            }, 4000)
        } catch (err) {
            console.error("EmailJS error:", err)
            setStatus("error")
            setTimeout(() => setStatus("idle"), 4000)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
        if (status === "error") setStatus("idle")
    }

    return (
        <section id="contact" className="py-16 sm:py-24 bg-background">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

                    {/* LEFT — Info */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } }
                        }}
                        className="flex flex-col gap-6"
                    >
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">Hubungi Saya</h2>
                            <div className="space-y-3 text-base sm:text-lg text-muted-foreground leading-relaxed">
                                <motion.div
                                    whileHover={{ y: -6, scale: 1.01 }}
                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                    className="w-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                                >
                                    <img
                                        src="/contact.png"
                                        alt="Contact illustration"
                                        className="w-full object-cover"
                                    />
                                </motion.div>

                                <p>
                                    Pesan yang dikirim melalui formulir ini akan langsung diteruskan ke email pribadi saya. Saya berkomitmen untuk memberikan <span className="font-semibold text-foreground">respons cepat setiap hari antara pukul 13.00 – 07.00 WIB</span>.
                                </p>
                                <p>
                                    Anda juga dapat menghubungi saya secara langsung melalui platform media sosial profesional di bawah ini.
                                </p>
                            </div>
                        </div>

                        {/* Social icons — commented until social links are ready */}
                        {/* <div className="flex items-center gap-4">
                            <a href="#" aria-label="Facebook" className="p-3 bg-muted hover:bg-accent transition-colors rounded-full text-muted-foreground">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" aria-label="LinkedIn" className="p-3 bg-muted hover:bg-accent transition-colors rounded-full text-muted-foreground">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div> */}
                    </motion.div>

                    {/* RIGHT — Form */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] } }
                        }}
                        className="bg-card p-6 sm:p-10 rounded-2xl shadow-lg border-0 ring-0"
                    >
                        <h3 className="text-xl sm:text-2xl font-bold mb-6 text-foreground">Kirim Pesan</h3>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                            <AnimatePresence mode="wait">
                                {status === "success" && (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, y: -8, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -8, scale: 0.98 }}
                                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                                        className="p-4 bg-green-500/10 text-green-700 dark:text-green-400 border border-green-500/20 rounded-xl text-sm font-medium"
                                    >
                                        ✓ Pesan berhasil dikirim! Saya akan segera membalasnya.
                                    </motion.div>
                                )}

                                {status === "error" && (
                                    <motion.div
                                        key="error"
                                        initial={{ opacity: 0, y: -8, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -8, scale: 0.98 }}
                                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                                        className="p-4 bg-red-500/10 text-red-700 dark:text-red-400 border border-red-500/20 rounded-xl text-sm font-medium"
                                    >
                                        ✕ Mohon lengkapi semua field yang wajib diisi.
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm font-medium text-foreground">Nama Lengkap</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Masukkan nama Anda"
                                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700/60 bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all duration-200 text-sm sm:text-base text-foreground placeholder:text-muted-foreground"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="contoh@email.com"
                                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700/60 bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all duration-200 text-sm sm:text-base text-foreground placeholder:text-muted-foreground"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="phone" className="text-sm font-medium text-foreground">Nomor Telepon / WhatsApp <span className="text-muted-foreground font-normal">(Opsional)</span></label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Contoh: 08123456789"
                                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700/60 bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all duration-200 text-sm sm:text-base text-foreground placeholder:text-muted-foreground"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="content" className="text-sm font-medium text-foreground">Isi Pesan</label>
                                <textarea
                                    id="content"
                                    name="content"
                                    value={formData.content}
                                    onChange={handleChange}
                                    rows={5}
                                    placeholder="Ceritakan detail kebutuhan atau proyek Anda..."
                                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700/60 bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all duration-200 resize-none text-sm sm:text-base text-foreground placeholder:text-muted-foreground"
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={status === "loading"}
                                whileHover={status !== "loading" ? { scale: 1.01 } : {}}
                                whileTap={status !== "loading" ? { scale: 0.98 } : {}}
                                transition={{ duration: 0.15, ease: "easeOut" }}
                                className={`w-full mt-2 h-12 rounded-xl text-base font-semibold transition-colors duration-200 flex items-center justify-center gap-2 ${
                                    status === "loading"
                                        ? "bg-zinc-200 text-zinc-500 dark:bg-zinc-700 dark:text-zinc-400 cursor-not-allowed"
                                        : "bg-zinc-100 hover:bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-white"
                                }`}
                            >
                                {status === "loading" ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Mengirim...
                                    </>
                                ) : (
                                    "Kirim Pesan Sekarang"
                                )}
                            </motion.button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

