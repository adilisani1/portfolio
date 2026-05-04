"use client"

import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

function Footer() {
    const { theme } = useContext(ThemeContext)
    const scrollToTop = () => {
        const lenis = typeof window !== "undefined" ? window.lenis : null
        if (lenis) {
            lenis.scrollTo(0, { duration: 1.1 })
            return
        }
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <footer className={`border-t border-secondary/20 ${theme === "dark" ? "bg-primary/70" : "bg-white/70"} backdrop-blur-sm`}>
            <div className="container mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className={`text-sm ${theme === "dark" ? "text-dimWhite" : "text-gray-600"}`}>
                    (c) {new Date().getFullYear()} Muhammad Adil. All rights reserved.
                </p>

                <button
                    type="button"
                    onClick={scrollToTop}
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:opacity-80 transition-opacity"
                >
                    <svg
                        className="w-4 h-4 transition-transform group-hover:-translate-y-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    Back to top
                </button>
            </div>
        </footer>
    )
}

export default Footer
