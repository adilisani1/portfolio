"use client"

import { useState, useEffect, useContext } from "react"
import { gsap } from "gsap"
import { assets } from "../../../assets/assets"
import Image from "next/image"
import { ThemeContext } from "../context/ThemeContext"

function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(true)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const { theme, toggleTheme } = useContext(ThemeContext)

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Portfolio", href: "#portfolio" },
    ]

    useEffect(() => {
        gsap.fromTo(
            ".nav-item",
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out", delay: 0.5 },
        )

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // const toggleDarkMode = () => {
    //     setIsDarkMode(!isDarkMode)
    // }

    const scrollToSection = (href) => {
        const lenis = typeof window !== "undefined" ? window.lenis : null
        const currentPath = typeof window !== "undefined" ? window.location.pathname : "/"

        if (href === "#home") {
            if (currentPath !== "/") {
                window.location.href = "/"
                setIsMobileMenuOpen(false)
                return
            }

            if (lenis) {
                lenis.scrollTo(0, { duration: 1.1 })
            } else {
                window.scrollTo({ top: 0, behavior: "smooth" })
            }
            setIsMobileMenuOpen(false)
            return
        }

        const element = document.querySelector(href)

        if (element) {
            if (lenis) {
                lenis.scrollTo(element, { duration: 1.1 })
            } else {
                element.scrollIntoView({ behavior: "smooth", block: "start" })
            }
        } else if (currentPath !== "/") {
            window.location.href = `/${href}`
        }

        setIsMobileMenuOpen(false)
    }

    return (
        <nav
            className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? `${theme === "dark" ? "bg-primary/90" : "bg-white/90"} backdrop-blur-md py-3` : "bg-transparent py-5"}`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <div className="flex-1">
                    <button
                        type="button"
                        onClick={() => scrollToSection("#home")}
                        className="nav-item flex items-center gap-2 group cursor-pointer"
                        aria-label="Go to home"
                    >

                        <div className="relative w-12 h-12">
                            <Image
                                src={assets.ad_logo}
                                alt="logo"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </button>

                </div>
                <div className="flex-1 hidden md:flex items-center justify-center gap-1 bg-secondary/10 border border-secondary/20  rounded-full px-4 py-2">
                    {navLinks.map((link) => (
                        <button
                            type="button"
                            key={link.name}
                            onClick={() => scrollToSection(link.href)}
                            className={`nav-item  cursor-pointer px-4 py-2 rounded-full hover:bg-white/5 transition-all duration-300 text-sm font-medium ${theme === "dark" ? "text-white" : "text-black"}`}
                        >
                            {link.name}
                        </button>
                    ))}
                </div>
                <div className="flex-1 flex justify-end items-center gap-3">
                    <button
                        type="button"
                        onClick={toggleTheme}
                        className={`nav-item hidden md:inline-flex cursor-pointer w-10 h-10 rounded-full border border-secondary/30 items-center justify-center hover:border-secondary/60 transition-all duration-300 ${theme === "dark" ? "bg-dimBlue text-white" : "bg-secondary/10 text-primary"}`}
                        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                    >
                        {theme === "dark" ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="4" strokeWidth="2" />
                                <path strokeLinecap="round" strokeWidth="2" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        )}
                    </button>
                    <button
                        type="button"
                        onClick={() => scrollToSection("#contact")}
                        className={`group hidden md:inline-flex cursor-pointer items-center gap-2 px-8 py-2.5 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,246,255,0.2)] ${theme === "dark" ? "bg-secondary text-primary hover:bg-cyan-300" : "bg-secondary/20 text-primary hover:bg-secondary/30"}`}
                    >
                        Contact me
                        <svg
                            className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                    </button>

                    <button
                        type="button"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="nav-item cursor-pointer md:hidden w-11 h-11 rounded-full bg-dimBlue border border-secondary/30 flex items-center justify-center hover:bg-secondary/20 transition-all duration-300"
                        aria-label="Toggle menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <div className="flex flex-col gap-1.5">
                            <span
                                className={`w-5 h-0.5 bg-secondary transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
                            />
                            <span
                                className={`w-5 h-0.5 bg-secondary transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
                            />
                            <span
                                className={`w-5 h-0.5 bg-secondary transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden absolute top-full left-0 right-0 backdrop-blur-md border-b border-secondary/20 transition-all duration-300 overflow-hidden ${theme === "dark" ? "bg-primary/95" : "bg-white/95"} ${isMobileMenuOpen ? "max-h-[640px] py-4" : "max-h-0 py-0"}`}
            >
                <div className="flex flex-col items-stretch gap-1 px-6">
                    {navLinks.map((link) => (
                        <button
                            type="button"
                            key={link.name}
                            onClick={() => scrollToSection(link.href)}
                            className={`w-full py-3 px-4 text-left rounded-lg hover:bg-secondary/10 hover:text-secondary transition-all duration-300 text-sm font-medium ${theme === "dark" ? "text-white" : "text-black"}`}
                        >
                            {link.name}
                        </button>
                    ))}
                    <button
                        type="button"
                        onClick={toggleTheme}
                        className={`mt-2 w-full py-3 px-4 inline-flex items-center justify-between rounded-lg border border-secondary/20 hover:border-secondary/50 transition-all duration-300 text-sm font-medium ${theme === "dark" ? "text-white" : "text-black"}`}
                        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                    >
                        <span>{theme === "dark" ? "Light mode" : "Dark mode"}</span>
                        {theme === "dark" ? (
                            <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="4" strokeWidth="2" />
                                <path strokeLinecap="round" strokeWidth="2" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        )}
                    </button>
                    <button
                        type="button"
                        onClick={() => scrollToSection("#contact")}
                        className={`group mt-3 inline-flex cursor-pointer items-center justify-center gap-2 px-6 py-3 font-semibold rounded-full transition-all duration-300 ${theme === "dark" ? "bg-secondary text-primary hover:bg-cyan-300" : "bg-secondary/20 text-primary hover:bg-secondary/30"}`}
                    >
                        Contact me
                        <svg
                            className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
