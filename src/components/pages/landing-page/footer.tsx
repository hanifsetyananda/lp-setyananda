import { motion } from "framer-motion"
function FacebookIcon({ className }: { className?: string }) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={className}
        >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
    )
}

export default function Footer() {
    return (
        <motion.footer 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full pt-16 pb-8 border-t border-zinc-200 dark:border-zinc-800 bg-background"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-zinc-200 dark:border-zinc-800">
                {/* Kolom 1: Merek & Deskripsi */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <h3 className="font-bold text-xl tracking-tight text-foreground">Setyananda</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                        Solusi digital tepercaya untuk pembuatan website pribadi, company profile modern, dan aplikasi kustom berkinerja tinggi guna mengakselerasi pertumbuhan bisnis Anda.
                    </p>
                </div>

                {/* Kolom 2: Tautan Cepat */}
                <div className="flex flex-col gap-3">
                    <h4 className="font-semibold text-foreground text-sm tracking-wide uppercase">Tautan Cepat</h4>
                    <div className="flex flex-col gap-2 font-medium text-sm text-muted-foreground">
                        <a href="#home" className="hover:text-foreground transition-colors w-fit">Beranda</a>
                        <a href="#service" className="hover:text-foreground transition-colors w-fit">Layanan</a>
                        <a href="#contact" className="hover:text-foreground transition-colors w-fit">Kontak</a>
                    </div>
                </div>

                {/* Kolom 3: Media Sosial */}
                <div className="flex flex-col gap-3">
                    <h4 className="font-semibold text-foreground text-sm tracking-wide uppercase">Media Sosial</h4>
                    <p className="text-muted-foreground text-sm">
                        Terhubung bersama kami untuk informasi terbaru dan konsultasi proyek.
                    </p>
                    <div className="flex items-center gap-3 pt-1">
                        <a 
                            href="https://web.facebook.com/profile.php?id=61589536477399" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Kunjungi halaman Facebook Setyananda"
                            className="p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-muted-foreground hover:text-foreground hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all duration-200"
                        >
                            <FacebookIcon className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bagian Bawah: Hak Cipta */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
                <p className="text-muted-foreground text-xs font-medium">
                    Copyright 2026 Setyananda. Hak Cipta Dilindungi.
                </p>
                <div className="flex gap-4 text-xs text-muted-foreground">
                    <span>Dibuat dengan cinta di Indonesia</span>
                </div>
            </div>
        </motion.footer>
    )
}
