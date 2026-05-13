import { Card, CardContent, CardHeader, CardTitle } from "#components/ui/card"
import { motion } from "framer-motion"

const products = [
    {
        title: "Jasa Pembuatan Website Pribadi",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
        features: [
            "Website Portfolio agar terlihat Profesional",
            "Biaya Gratis jika ingin perubahan kecil",
            "Load halaman cepat karena dibuat menggunakan ReactJS",
        ],
        price: "Rp. 100.000",
        note: "Jika ingin menggunakan custom domain, ada biaya tambahan tersendiri"
    },
    {
        title: "Jasa Pembuatan Company Profile",
        image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=400&h=250&fit=crop",
        features: [
            "Fitur Artikel, Produk, Galeri",
            "Website muncul di Google Search",
            "Gratis Biaya Maintenance 3 Bulan Pertama"
        ],
        price: "Rp. 500.000",
        note: "Harga belum termasuk biaya domain dan hosting"
    },
    {
        title: "Jasa Pembuatan Aplikasi Custom",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
        features: [
            "Pembuatan aplikasi mobile, desktop, ataupun website",
            "Saya bisa memberikan solusi murah dan cerdas berdasarkan kebutuhan Anda",
            "Cocok jika anda sudah memiliki usaha dan ingin membuat aplikasi untuk mempermudah operasional anda"
        ],
        price: "Menyesuaikan",
        note: "Sebelumnya akan dilakukan diskusi terlebih dahulu untuk menentukan kebutuhan Anda"
    },

]

export default function ProductSection() {
    return (
        <section id="service" className="py-16 sm:py-24 overflow-hidden bg-zinc-50 dark:bg-zinc-900/50">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3 text-foreground">Layanan</h2>
                    <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
                        Layanan yang saya tawarkan untuk membantu mewujudkan ide digital Anda.
                    </p>
                </motion.div>

                {/* Horizontal scroll on mobile/tablet, grid on desktop */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    className="flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 snap-x snap-mandatory lg:snap-none scrollbar-hide"
                >
                    {products.map((product, idx) => (
                        <motion.div
                            key={idx}
                            variants={{
                                hidden: { opacity: 0, y: 40, scale: 0.97 },
                                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } }
                            }}
                            whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
                            className="flex-none w-[85vw] sm:w-[65vw] lg:w-auto snap-start"
                        >
                            <Card className="bg-card shadow-md hover:shadow-xl transition-all duration-300 border-0 ring-0 overflow-hidden flex flex-col h-full">
                                <div className="w-full h-[200px] overflow-hidden bg-muted rounded-t-xl">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <CardHeader className="flex-none pt-5 pb-2">
                                    <CardTitle className="text-base font-semibold leading-snug text-card-foreground">{product.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1 flex flex-col">
                                    <ul className="space-y-2 mb-5 flex-1">
                                        {product.features.map((feature, fIdx) => (
                                            <li key={fIdx} className="flex items-start text-muted-foreground">
                                                <span className="mr-2 text-primary mt-0.5">✓</span>
                                                <span className="text-sm leading-relaxed">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                                        <p className="font-medium text-sm text-card-foreground mb-1">
                                            Biaya : <span className="font-bold text-foreground">{product.price}</span>
                                        </p>
                                        <p className="text-xs text-muted-foreground leading-relaxed">{product.note}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Scroll hint on mobile */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="text-center text-xs text-muted-foreground mt-4 lg:hidden"
                >
                    ← Geser untuk melihat lebih →
                </motion.p>
            </div>
        </section>
    )
}
