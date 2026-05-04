"use client"

import Link from "next/link"
import Footer from "../components/Footer"
import Portfolio from "../components/Portfolio"
import SmoothScroll from "../container/SmoothScroll"

export default function PortfolioPage() {
    return (
        <SmoothScroll>
            <div className="container mx-auto px-6 md:px-12 pt-10">
                <Link
                    href="/"
                    className="group inline-flex items-center gap-2 px-5 py-2.5 bg-transparent text-sm font-semibold rounded-full border border-secondary/40 hover:border-secondary hover:bg-dimBlue transition-all duration-300"
                >
                    <svg
                        className="w-4 h-4 transition-transform group-hover:-translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Home
                </Link>
            </div>
            <Portfolio
                showViewAll={false}
                eyebrow="ALL PROJECTS"
                headingPrefix="My"
                headingHighlight="Project"
                description="A complete look at the work I've shipped across web development, e-commerce, and CMS each one a different problem solved end to end."
            />
            <Footer />
        </SmoothScroll>
    )
}
