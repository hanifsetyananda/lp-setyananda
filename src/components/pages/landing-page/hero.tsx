import { motion } from "framer-motion"

const easeInOut = [0.25, 0.1, 0.25, 1]

export default function HeroSection() {
    return (
        <section id="home" className="relative overflow-hidden pt-20 pb-16 lg:min-h-screen lg:flex lg:items-center lg:pt-0 lg:pb-0">
            {/* Background Image — blurred, behind text on all screen sizes */}
            <div className="absolute inset-0 z-0 flex items-center justify-end pointer-events-none overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, rotate: -20, x: 60, scale: 0.88 }}
                    animate={{ opacity: 1, rotate: -15, x: 0, scale: 1 }}
                    transition={{ duration: 1.2, ease: easeInOut }}
                    className="absolute right-[-15%] sm:right-[-10%] lg:right-[-10%] top-1/2 -translate-y-1/2 w-[95%] sm:w-[80%] lg:w-[65%] max-w-[1100px]"
                >
                    <img
                        src="/img1.png"
                        alt="Hero background"
                        className="w-full h-auto object-contain drop-shadow-2xl blur-sm opacity-30 sm:opacity-50 lg:opacity-90"
                    />
                    {/* Dark mode overlay — dims the image */}
                    <div className="absolute inset-0 rounded-inherit hidden dark:block bg-background/60 backdrop-blur-[1px]" />
                </motion.div>
            </div>

            {/* Content — sits above the blurred image */}
            <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.18, delayChildren: 0.25 }
                        }
                    }}
                    className="flex flex-col gap-5 max-w-2xl lg:max-w-4xl"
                >
                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: 36, filter: "blur(4px)" },
                            visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: easeInOut } }
                        }}
                        className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight"
                    >
                        Wujudkan{" "}
                        <span className="text-primary">Aplikasi Impian</span>{" "}
                        Anda Bersama Saya
                    </motion.h1>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 24, filter: "blur(2px)" },
                            visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: easeInOut } }
                        }}
                        className="text-muted-foreground text-base sm:text-lg max-w-xl leading-relaxed"
                    >
                        Saya membantu individu dan bisnis membangun website yang modern, cepat, dan profesional.
                        Dari portfolio pribadi hingga aplikasi kompleks.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    )
}