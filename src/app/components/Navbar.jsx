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
        { name: "Contact", href: "#contact" },
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
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
        setIsMobileMenuOpen(false)
    }

    return (
        <nav
            className={`absolute top-0 left-0 right-0 z-50  transition-all duration-300 ${isScrolled ? "bg-[#0a0a12]/90 backdrop-blur-md border-b border-purple-500/10 py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <a href="#home" className="nav-item flex items-center gap-2 group">
                    {/* <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">MA</span>
                    </div> */}
                    <div className="relative w-12 h-12">
                        <Image
                            src={assets.ad_logo}
                            alt="logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                </a>

                <div className="hidden md:flex items-center gap-1  rounded-full px-4 py-2">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollToSection(link.href)}
                            className={`nav-item  cursor-pointer px-4 py-2 rounded-full hover:bg-white/5 transition-all duration-300 text-sm font-medium ${theme === "dark" ? "text-white" : "text-black"}`}
                        >
                            {link.name}
                        </button>
                    ))}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={toggleTheme}
                            className={`nav-item cursor-pointer w-10 h-10 rounded-full border border-purple-500/20 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group ${theme === "dark" ? "bg-[#1a1a2e]/80" : "bg-gray-200/30"}`}
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? (
                                <svg
                                    className={`w-5 h-5  group-hover:text-yellow-400 transition-colors ${theme === "light" ? "text-black" : "text-white"}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <circle cx="12" cy="12" r="5" strokeWidth="2" />
                                    <path
                                        strokeLinecap="round"
                                        strokeWidth="2"
                                        d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                                    />
                                </svg>
                            ) : (
                                <svg
                                        className={`w-5 h-5  transition-colors ${theme === "light" ? "text-black" : "text-white"}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                    />
                                </svg>
                            )}
                        </button>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="nav-item cursor-pointer  md:hidden w-10 h-10 rounded-full bg-[#1a1a2e]/80 border border-purple-500/20 flex items-center justify-center hover:bg-purple-500/20 transition-all duration-300"
                            aria-label="Toggle menu"
                        >
                            <div className="flex flex-col gap-1.5">
                                <span
                                    className={`w-5 h-0.5 bg-gray-300 transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                                        }`}
                                />
                                <span
                                    className={`w-5 h-0.5 bg-gray-300 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
                                />
                                <span
                                    className={`w-5 h-0.5 bg-gray-300 transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                                        }`}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden absolute top-full left-0 right-0 bg-[#0a0a12]/95 backdrop-blur-md border-b border-purple-500/10 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-64 py-4" : "max-h-0 py-0"
                    }`}
            >
                <div className="flex flex-col items-center gap-2 px-6">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollToSection(link.href)}
                            className={`w-full py-3  rounded-lg transition-all duration-300 text-sm font-medium ${theme === "dark" ? "text-white" : "text-black"}`}
                        >
                            {link.name}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
