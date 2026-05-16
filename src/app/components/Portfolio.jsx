"use client"

import { useRef, useState, useLayoutEffect, useContext } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MdArrowOutward } from "react-icons/md"

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

import { projects } from "../../../assets/assets"
import { ThemeContext } from "../context/ThemeContext"

function Portfolio({
    viewMoreText = "View Project",
    showViewAll = true,
    limit,
    eyebrow = "FEATURED WORKS",
    headingPrefix = "Latest",
    headingHighlight = "Projects",
    description = "Showcasing my recent work in web development, creating digital experiences that combine functionality with stunning design.",
}) {
    const { theme } = useContext(ThemeContext)
    const visibleProjects = typeof limit === "number" ? projects.slice(0, limit) : projects
    const component = useRef(null)
    const itemsRef = useRef([])
    const revealRef = useRef(null)
    const [currentItem, setCurrentItem] = useState(null)
    const lastMousePos = useRef({ x: 0, y: 0 })
    const [isHoverCapable, setIsHoverCapable] = useState(false)

    useLayoutEffect(() => {
        const updateHoverCapability = () => {
            // Only enable the floating preview on devices that actually support hover
            // (prevents "stuck hover" on mobile/touch screens).
            const canHover =
                typeof window !== "undefined" &&
                window.matchMedia &&
                window.matchMedia("(hover: hover) and (pointer: fine)").matches
            setIsHoverCapable(Boolean(canHover))
        }

        updateHoverCapability()
        window.addEventListener("resize", updateHoverCapability)
        return () => window.removeEventListener("resize", updateHoverCapability)
    }, [])

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
            if (!isHoverCapable || !revealRef.current || currentItem === null) return

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
    }, [currentItem, isHoverCapable])

    useLayoutEffect(() => {
        if (!isHoverCapable || !revealRef.current) return

        if (currentItem !== null) {
            const project = visibleProjects[currentItem]
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
    }, [currentItem, isHoverCapable])

    const onMouseEnter = (index, e) => {
        if (!isHoverCapable) return
        setCurrentItem(index)
    }

    const onMouseLeave = () => {
        setCurrentItem(null)
    }

    return (
        <section id="portfolio" className="w-full py-20 md:py-28 relative overflow-x-hidden">
            <div className="container mx-auto">
                <div className="relative px-6 md:px-12 pb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-2 h-2 rounded-full bg-secondary"></div>
                        <span className="text-sm font-semibold text-secondary uppercase tracking-widest">{eyebrow}</span>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-bold mb-4">
                        {headingPrefix}{" "}
                        <span className="bg-gradient-to-r from-secondary via-cyan-300 to-secondary bg-clip-text text-transparent">
                            {headingHighlight}
                        </span>
                    </h2>

                    <p className="text-gray-400 text-lg max-w-2xl">
                        {description}
                    </p>
                </div>

                <ul ref={component} className="relative" onMouseLeave={onMouseLeave}>
                    {visibleProjects.map((project, index) => (
                        <li key={index} ref={(el) => (itemsRef.current[index] = el)} className="opacity-0 group">
                            <a
                                href={project.link}
                                target="_blank"
                                className="block"
                                onMouseEnter={(e) => onMouseEnter(index, e)}
                                onTouchStart={onMouseLeave}
                            >
                                <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center gap-6 px-6 md:px-12 py-8 border-t border-secondary/20 hover:bg-dimBlue transition-all duration-300">
                                    <div className="flex-1">
                                        <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-secondary group-hover:to-secondary group-hover:bg-clip-text transition-all">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm md:text-base">{project.description}</p>
                                    </div>

                                    <div className="flex items-center gap-2 lg:justify-start justify-between  w-full lg:w-auto font-semibold group-hover:gap-3 transition-all duration-300">
                                        <span className={`text-sm md:text-base px-3 py-1 rounded-full transition-colors duration-300 ${theme === "light" ? "bg-secondary/10 text-secondary" : "bg-secondary/15 text-secondary"}`}>{viewMoreText}</span>
                                        <div
                                            className="w-8 h-8 rounded-full bg-gradient-to-tl from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                                        >
                                            <MdArrowOutward className="text-lg  text-white" />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>

                {showViewAll && (
                    <div className="flex justify-center px-6 md:px-12 py-12 border-t border-secondary/20">
                        <Link
                            href="/portfolio"
                            className={`group inline-flex cursor-pointer items-center gap-2 px-8 py-2.5 font-semibold rounded-full bg-secondary transition-all duration-300 ${
                                theme === "light"
                                    ? "text-white hover:bg-[#0e7490] hover:shadow-[0_0_30px_rgba(8,145,178,0.35)]"
                                    : "text-primary hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(0,246,255,0.2)]"
                            }`}
                        >
                            View All Projects
                            <svg
                                className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                        </Link>
                    </div>
                )}
            </div>

            {isHoverCapable && (
                <div
                    ref={revealRef}
                    className="pointer-events-none fixed z-[9999] rounded-2xl shadow-2xl border-2 border-secondary/50 overflow-hidden"
                    style={{
                        width: "220px",
                        height: "320px",
                        left: "0px",
                        top: "0px",
                    }}
                >
                    <div className="absolute inset-0 bg-dimBlue backdrop-blur-sm" />
                    {currentItem !== null && visibleProjects[currentItem]?.image && (
                        <img
                            key={`project-${currentItem}-${typeof visibleProjects[currentItem].image === "string" ? visibleProjects[currentItem].image : visibleProjects[currentItem].image?.src}`}
                            src={
                                typeof visibleProjects[currentItem].image === "string"
                                    ? visibleProjects[currentItem].image
                                    : visibleProjects[currentItem].image?.src || "/placeholder.svg"
                            }
                            alt={visibleProjects[currentItem]?.title || "Project preview"}
                            className="relative w-full h-full object-cover"
                            loading="eager"
                            onError={(e) => {
                                console.error("Image failed to load:", visibleProjects[currentItem]?.image)
                                e.currentTarget.onerror = null
                                e.currentTarget.src =
                                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='320'%3E%3Crect fill='%23334155' width='220' height='320'/%3E%3Ctext fill='%2394a3b8' fontFamily='sans-serif' fontSize='14' x='50%25' y='50%25' textAnchor='middle' dominantBaseline='middle'%3ENo image%3C/text%3E%3C/svg%3E"
                            }}
                        />
                    )}
                </div>
            )}
        </section>
    )
}

export default Portfolio
