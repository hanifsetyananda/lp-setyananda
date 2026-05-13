import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "#components/ui/navigation-menu"
import { useState } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"
import { useTheme } from "../../theme-provider"

function Header() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const { theme, setTheme } = useTheme()
    
    const navLinks = [
        { href: "#home", label: "Beranda" },
        { href: "#service", label: "Layanan" },
        { href: "#contact", label: "Kontak" },
    ]

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md"
        >
            <nav className="max-w-7xl flex items-center mx-auto px-4 sm:px-6 justify-between h-16">
                {/* Logo */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <h3 className="font-bold text-xl tracking-tight text-foreground">Setyananda</h3>
                </div>

                {/* Right Area (Desktop Nav + Mobile Actions) */}
                <div className="flex items-center gap-4">
                    {/* Desktop Navigation */}
                    <NavigationMenu className="hidden md:flex">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                {navLinks.map(link => (
                                    <NavigationMenuLink key={link.href} asChild className={navigationMenuTriggerStyle()}>
                                        <a href={link.href} className="text-muted-foreground hover:text-foreground bg-transparent">{link.label}</a>
                                    </NavigationMenuLink>
                                ))}
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* Dark Mode Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                        aria-label="Toggle dark mode"
                    >
                        {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden p-2 rounded-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                        onClick={() => setMobileOpen(o => !o)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown */}
            {mobileOpen && (
                <div className="md:hidden bg-background shadow-md border-b border-border">
                    <div className="flex flex-col px-6 py-3 gap-0">
                        {navLinks.map(link => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="py-3 text-base text-muted-foreground hover:text-foreground font-medium transition-colors border-b border-border/50 last:border-0"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </motion.header>
    )
}

export default Header