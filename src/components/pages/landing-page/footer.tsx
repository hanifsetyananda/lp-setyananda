import { motion } from "framer-motion"

export default function Footer() {
    return (
        <motion.footer 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full py-8 border-t border-zinc-200 dark:border-zinc-800 bg-background"
        >
            <div className="max-w-7xl mx-auto px-4 flex justify-center items-center">
                <p className="text-muted-foreground text-sm font-medium">
                    Copyright 2026 Setyananda
                </p>
            </div>
        </motion.footer>
    )
}
