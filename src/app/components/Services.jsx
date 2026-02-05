"use client"

import { useContext, useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Code, Palette, Smartphone, Fingerprint, MessageCircle } from "lucide-react"
import { ThemeContext } from "../context/ThemeContext"

const services = [
    {
        id: 1,
        title: "Web Development",
        description: "Building modern, responsive websites with cutting-edge technologies and frameworks.",
        icon: Code,
        gradient: "from-purple-600 to-purple-500",
    },
    {
        id: 2,
        title: "UI/UX Design",
        description: "Creating intuitive and beautiful user experiences that delight and engage users.",
        icon: Palette,
        gradient: "from-purple-500 to-purple-400",
    },
    {
        id: 3,
        title: "Mobile Apps",
        description: "Developing cross-platform mobile applications for iOS and Android devices.",
        icon: Smartphone,
        gradient: "from-purple-600 to-purple-500",
    },
    {
        id: 4,
        title: "Brand Identity",
        description: "Crafting unique brand identities that stand out and leave lasting impressions.",
        icon: Fingerprint,
        gradient: "from-purple-500 to-purple-600",
    },
    {
        id: 5,
        title: "Consulting",
        description: "Providing expert guidance to help your business grow and scale digitally.",
        icon: MessageCircle,
        gradient: "from-purple-600 to-purple-500",
    },
]

function Services() {
    const containerRef = useRef(null)
    const cardsRef = useRef(null)
    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const cards = gsap.utils.toArray(".service-card")

        cards.forEach((card, index) => {
            const isLast = index === cards.length - 1

            if (!isLast) {
                gsap.to(card, {
                    scale: 0.9 + index * 0.015,
                    opacity: 0,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 15%",
                        end: "bottom 15%",
                        scrub: 0.5,
                    },
                })
            }
        })

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    }, [])

    return (
        <section
            ref={containerRef}
            className="min-h-screen relative "
            // style={{ background: "linear-gradient(180deg, #0a0a12 0%, #0d0d18 100%)" }}
        >
            <div className="flex container mx-auto flex-col lg:flex-row min-h-screen gap-10">
                <div className="lg:sticky lg:w-1/2 lg:top-0 lg:h-screen flex items-center lg:justify-center p-8 lg:p-16 ">
                    <div className="">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-8">
                            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                            <span className="text-purple-400 text-sm font-medium tracking-wide">SERVICES</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-none tracking-tight">
                            My Services
                            <span className="block bg-gradient-to-r from-purple-400 via-purple-300 to-purple-400 bg-clip-text text-transparent mt-2">
                                are
                            </span>
                        </h2>
                        <p className="mt-8 text-lg text-gray-400 leading-relaxed">
                            Scroll down to explore what I can do for you. Each service is crafted with precision and passion.
                        </p>
                        <div className="mt-12 flex items-center gap-4">
                            {services.map((service, i) => (
                                <div
                                    key={i}
                                    className={`w-3 h-3 rounded-full bg-gradient-to-r ${service.gradient} shadow-lg shadow-purple-500/20`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div ref={cardsRef} className="lg:w-1/2 py-[10vh] lg:py-[20vh]">
                    <div className="px-4 lg:px-8">
                        {services.map((service, index) => {
                            const Icon = service.icon
                            return (
                                <div
                                    key={service.id}
                                    className="service-card sticky top-[15vh] mb-8 last:mb-0"
                                    style={{
                                        zIndex: services.length - index,
                                    }}
                                >
                                    <div
                                        className={`group relative rounded-2xl p-8 lg:p-10 min-h-[320px] lg:min-h-[400px] flex flex-col justify-between ${theme === "dark" ? "bg-[#1a1a2e]/80" : "bg-gray-200/30"} border border-purple-900/30 hover:border-purple-500/50 backdrop-blur-sm shadow-2xl shadow-black/30 overflow-hidden transition-all duration-500`}
                                    >
                                        <div
                                            className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${service.gradient} opacity-50`}
                                        />

                                        <div
                                            className={`absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br ${service.gradient} opacity-[0.07] blur-3xl rounded-full transition-opacity duration-700 group-hover:opacity-[0.15]`}
                                        />

                                        <div className="absolute inset-0 rounded-2xl bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        <div className="relative z-10">
                                            <div className="flex items-start justify-between mb-8">
                                                <div
                                                    className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-xl shadow-purple-500/20`}
                                                >
                                                    <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                                                </div>
                                                <span className="text-gray-500 text-sm font-mono tracking-wider">0{service.id}</span>
                                            </div>
                                            <h3 className="text-2xl lg:text-3xl font-bold  tracking-tight">{service.title}</h3>
                                        </div>

                                        <div className="relative z-10">
                                            <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-sm">
                                                {service.description}
                                            </p>
                                            <button
                                                className={`mt-8 inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent hover:opacity-80 transition-opacity group/btn`}
                                            >
                                                Learn more
                                                <svg
                                                    className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 text-purple-400"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
