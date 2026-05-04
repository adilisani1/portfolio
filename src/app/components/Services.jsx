"use client"

import { useContext, useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Code, Database, Smartphone, Fingerprint } from "lucide-react"
import { ThemeContext } from "../context/ThemeContext"

const services = [
    {
        id: 1,
        title: "Web Development",
        description: "Building modern, responsive web applications with clean architecture and performance in mind.",
        icon: Code,
        gradient: "from-primary to-secondary",
        skills: ["React.js", "Next.js", "Node.js", "Tailwind CSS"],
    },
    {
        id: 2,
        title: "CMS Development",
        description: "Developing and customizing CMS websites for easy content management and business growth.",
        icon: Database,
        gradient: "from-primary to-secondary",
        skills: ["WordPress", "PHP"],
    },
    {
        id: 3,
        title: "Mobile Apps",
        description: "Developing cross-platform mobile applications focused on smooth UX and reliable performance.",
        icon: Smartphone,
        gradient: "from-primary to-secondary",
        skills: ["React Native", "Node.js", "Tailwind CSS"],
    },
    {
        id: 4,
        title: "Graphics & Brand Identity",
        description: "Crafting unique brand identities that stand out and leave lasting impressions.",
        icon: Fingerprint,
        gradient: "from-secondary to-primary",
        skills: ["Logos", "Posters", "Flyers", "Social media designs"],
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
            id="services"
            ref={containerRef}
            className="min-h-screen relative "
            // style={{ background: "linear-gradient(180deg, #0a0a12 0%, #0d0d18 100%)" }}
        >
            <div className="flex container mx-auto flex-col lg:flex-row min-h-screen gap-10">
                <div className="lg:sticky lg:w-1/2 lg:top-0 lg:h-screen flex items-center lg:justify-center p-8 lg:p-16 ">
                    <div className="">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/40 bg-dimBlue mb-8">
                            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                            <span className="text-secondary text-sm font-medium tracking-wide">SERVICES</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-none tracking-tight">
                            My Services
                            <span className="block bg-gradient-to-r from-secondary via-cyan-300 to-secondary bg-clip-text text-transparent mt-2">
                                are
                            </span>
                        </h2>
                        <p className="mt-8 text-lg  leading-relaxed">
                            Scroll down to explore what I can do for you. Each service is crafted with precision and passion.
                        </p>
                        <div className="mt-12 flex items-center gap-4">
                            {services.map((service, i) => (
                                <div
                                    key={i}
                                    className={`w-3 h-3 rounded-full bg-gradient-to-r ${service.gradient} shadow-lg shadow-secondary/30`}
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
                                        className={`group relative rounded-2xl p-8 lg:p-10 min-h-[320px] lg:min-h-[400px] flex flex-col justify-between ${theme === "dark" ? "bg-dimBlue" : "bg-gray-200/30"} border border-secondary/20 hover:border-secondary/50 backdrop-blur-sm shadow-2xl shadow-black/30 overflow-hidden transition-all duration-500`}
                                    >
                                        <div
                                            className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${service.gradient} opacity-50`}
                                        />

                                        <div
                                            className={`absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br ${service.gradient} opacity-[0.07] blur-3xl rounded-full transition-opacity duration-700 group-hover:opacity-[0.15]`}
                                        />

                                        <div className="absolute inset-0 rounded-2xl bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        <div className="relative z-10">
                                            <div className="flex items-start justify-between mb-8">
                                                <div
                                                    className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-xl shadow-secondary/20`}
                                                >
                                                    <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                                                </div>
                                                <span className=" text-sm font-mono tracking-wider opacity-70">0{service.id}</span>
                                            </div>
                                            <h3 className="text-2xl lg:text-3xl font-bold  tracking-tight">{service.title}</h3>
                                        </div>

                                        <div className="relative z-10">
                                            <p className="text-base lg:text-lg leading-relaxed max-w-sm">
                                                {service.description}
                                            </p>
                                            <p
                                                className="mt-8 text-sm font-semibold text-secondary"
                                            >
                                                {service.skills.join(", ")}
                                            </p>
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
