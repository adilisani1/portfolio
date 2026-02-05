"use client"

import { useRef, useState, useLayoutEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MdArrowOutward } from "react-icons/md"

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

import { projects } from "../../../assets/assets"

function Portfolio({ viewMoreText = "View Project" }) {
    const component = useRef(null)
    const itemsRef = useRef([])
    const revealRef = useRef(null)
    const [currentItem, setCurrentItem] = useState(null)
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
    const lastMousePos = useRef({ x: 0, y: 0 })

    useLayoutEffect(() => {
        if (revealRef.current) {
            gsap.set(revealRef.current, {
                opacity: 0,
                scale: 0.8,
                display: "none",
                visibility: "hidden",
                x: 0,
                y: 0,
            })
        }
    }, [])

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            itemsRef.current.forEach((item, index) => {
                gsap.fromTo(
                    item,
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        delay: index * 0.15,
                    },
                )
            })
        }, component)

        return () => ctx.revert()
    }, [])

    useLayoutEffect(() => {
        const handleMouseMove = (e) => {
            if (!revealRef.current || currentItem === null) return

            const mouse = { x: e.clientX, y: e.clientY }

            const speed = Math.hypot(mouse.x - lastMousePos.current.x, mouse.y - lastMousePos.current.y)

            const imageWidth = 220
            const imageHeight = 320
            const offsetX = 110
            const offsetY = 160

            let posX = mouse.x - offsetX
            let posY = mouse.y - offsetY

            posX = Math.max(10, Math.min(posX, window.innerWidth - imageWidth - 10))
            posY = Math.max(10, Math.min(posY, window.innerHeight - imageHeight - 10))

            gsap.to(revealRef.current, {
                left: `${posX}px`,
                top: `${posY}px`,
                rotation: speed * (mouse.x > lastMousePos.current.x ? 1 : -1) * 0.3,
                duration: 0.6,
                ease: "power3.out",
            })

            lastMousePos.current = mouse
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [currentItem])

    useLayoutEffect(() => {
        if (!revealRef.current) return

        if (currentItem !== null) {
            const project = projects[currentItem]
            if (!project) {
                return
            }

            const mouseX = lastMousePos.current.x || window.innerWidth / 2
            const mouseY = lastMousePos.current.y || window.innerHeight / 2

            const imageWidth = 220
            const imageHeight = 320
            const offsetX = 110
            const offsetY = 160

            let initialX = mouseX - offsetX
            let initialY = mouseY - offsetY

            initialX = Math.max(10, Math.min(initialX, window.innerWidth - imageWidth - 10))
            initialY = Math.max(10, Math.min(initialY, window.innerHeight - imageHeight - 10))

            gsap.set(revealRef.current, {
                left: `${initialX}px`,
                top: `${initialY}px`,
                opacity: 0,
                scale: 0.8,
                display: "block",
                visibility: "visible",
                x: 0,
                y: 0,
            })

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    if (revealRef.current) {
                        gsap.to(revealRef.current, {
                            opacity: 1,
                            scale: 1,
                            duration: 0.35,
                            ease: "power2.out",
                        })
                    }
                })
            })
        } else {
            gsap.to(revealRef.current, {
                opacity: 0,
                scale: 0.8,
                duration: 0.25,
                ease: "power2.in",
                onComplete: () => {
                    if (revealRef.current) {
                        gsap.set(revealRef.current, {
                            display: "none",
                            visibility: "hidden",
                        })
                    }
                },
            })
        }
    }, [currentItem])

    const onMouseEnter = (index, e) => {
        setCurrentItem(index)
    }

    const onMouseLeave = () => {
        setCurrentItem(null)
    }

    return (
        <section id="portfolio" className="w-full bg-gradient-to-b from-[#0a0a12] to-[#0d0d18] relative overflow-x-hidden">
            <div className="container mx-auto">
                <div className="relative px-6 md:px-12 pt-24 pb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-500"></div>
                        <span className="text-sm font-semibold text-purple-400 uppercase tracking-widest">FEATURED WORKS</span>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
                        Latest{" "}
                        <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-purple-400 bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h2>

                    <p className="text-gray-400 text-lg max-w-2xl">
                        Showcasing my recent work in web development, creating digital experiences that combine functionality with
                        stunning design.
                    </p>
                </div>

                <ul ref={component} className="relative" onMouseLeave={onMouseLeave}>
                    {projects.map((project, index) => (
                        <li key={index} ref={(el) => (itemsRef.current[index] = el)} className="opacity-0 group">
                            <a href={project.link} target="_blank" className="block" onMouseEnter={(e) => onMouseEnter(index, e)}>
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 px-6 md:px-12 py-8 border-t border-purple-900/30 hover:bg-purple-950/20 transition-all duration-300">
                                    <div className="flex-1">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm md:text-base">{project.description}</p>
                                    </div>

                                    <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all duration-300">
                                        <span className="text-sm md:text-base">{viewMoreText}</span>
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <MdArrowOutward className="text-lg" />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div
                ref={revealRef}
                className="pointer-events-none fixed z-[9999] rounded-2xl shadow-2xl border-2 border-purple-500/50 overflow-hidden"
                style={{
                    width: "220px",
                    height: "320px",
                    left: "0px",
                    top: "0px",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-purple-900/40 backdrop-blur-sm " />
                {currentItem !== null && projects[currentItem]?.image && (
                    <img
                        key={`project-${currentItem}-${typeof projects[currentItem].image === "string" ? projects[currentItem].image : projects[currentItem].image?.src}`}
                        src={typeof projects[currentItem].image === "string" ? projects[currentItem].image : projects[currentItem].image?.src || "/placeholder.svg"}
                        alt={projects[currentItem]?.title || "Project preview"}
                        className="relative  w-full h-full object-cover"
                        loading="eager"
                        onError={(e) => {
                            console.error("Image failed to load:", projects[currentItem]?.image)
                            e.currentTarget.onerror = null
                            e.currentTarget.src =
                                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='320'%3E%3Crect fill='%23334155' width='220' height='320'/%3E%3Ctext fill='%2394a3b8' fontFamily='sans-serif' fontSize='14' x='50%25' y='50%25' textAnchor='middle' dominantBaseline='middle'%3ENo image%3C/text%3E%3C/svg%3E"
                        }}
                    />
                )}
            </div>
        </section>
    )
}

export default Portfolio
