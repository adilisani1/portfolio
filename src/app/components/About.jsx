"use client"

import { useContext, useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { assets } from "../../../assets/assets"
import Image from "next/image"
import { ThemeContext } from "../context/ThemeContext"

gsap.registerPlugin(ScrollTrigger)

// Brand colour per skill
const SKILL_THEME = {
    "React JS":     { color: "#61DAFB", rgb: "97,218,251"   },
    "JavaScript":   { color: "#F7DF1E", rgb: "247,223,30"   },
    "Next JS":      { color: "#E2E8F0", rgb: "226,232,240"  },
    "Node JS":      { color: "#6DA55F", rgb: "109,165,95"   },
    "WordPress":    { color: "#21759B", rgb: "33,117,155"   },
    "Tailwind CSS": { color: "#38BDF8", rgb: "56,189,248"   },
    "Adobe XD":     { color: "#FF26BE", rgb: "255,38,190"   },
    "Figma":        { color: "#A259FF", rgb: "162,89,255"   },
}

// Floating drift keyframe injected once
const DRIFT_CSS = `
@keyframes skillDrift {
    0%   { transform: translateY(0px)   scale(1.05); }
    50%  { transform: translateY(-18px) scale(1.07); }
    100% { transform: translateY(0px)   scale(1.05); }
}
@keyframes scanRing {
    0%   { opacity: 0.9; transform: scale(0.88); }
    60%  { opacity: 0;   transform: scale(1.22); }
    100% { opacity: 0;   transform: scale(1.22); }
}
@keyframes cornerPulse {
    0%, 100% { opacity: 0.6; }
    50%       { opacity: 1;   }
}
`

function About() {
    const { theme } = useContext(ThemeContext)
    const [hoveredSkill, setHoveredSkill]     = useState(null)
    const [displayedSkill, setDisplayedSkill] = useState(null)
    const [mousePos, setMousePos]             = useState({ x: 0.5, y: 0.5 })

    const fadeTimer  = useRef(null)
    const sectionRef = useRef(null)
    const textRef    = useRef(null)
    const skillsRef  = useRef(null)

    const skills = [
        { name: "React JS",     icon: assets.react_icon },
        { name: "JavaScript",   icon: assets.javascript_icon },
        { name: "Next JS",      icon: theme === "dark" ? assets.next_js_white : assets.next_js },
        { name: "Node JS",      icon: assets.node_js },
        { name: "WordPress",    icon: assets.word_press_two },
        { name: "Tailwind CSS", icon: assets.tailwind },
        { name: "Adobe XD",     icon: assets.adobe_xd },
        { name: "Figma",        icon: assets.figma },
    ]

    // Keep displayed skill alive during fade-out
    useEffect(() => {
        if (hoveredSkill) {
            clearTimeout(fadeTimer.current)
            setDisplayedSkill(hoveredSkill)
        } else {
            fadeTimer.current = setTimeout(() => setDisplayedSkill(null), 700)
        }
        return () => clearTimeout(fadeTimer.current)
    }, [hoveredSkill])

    // Mouse parallax tracking within section
    useEffect(() => {
        const el = sectionRef.current
        if (!el) return
        const onMove = (e) => {
            const { left, top, width, height } = el.getBoundingClientRect()
            setMousePos({
                x: Math.min(1, Math.max(0, (e.clientX - left) / width)),
                y: Math.min(1, Math.max(0, (e.clientY - top)  / height)),
            })
        }
        el.addEventListener("mousemove", onMove)
        return () => el.removeEventListener("mousemove", onMove)
    }, [])

    // GSAP scroll animations
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(textRef.current.children, {
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                },
                y: 60, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out",
            })

            gsap.fromTo(".skill-card",
                { y: 40, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: skillsRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse",
                    },
                    y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out",
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const st         = displayedSkill ? SKILL_THEME[displayedSkill.name] : null
    const isVisible  = !!hoveredSkill

    // Parallax offsets — icon drifts opposite to mouse
    const parallaxX  = (mousePos.x - 0.5) * -24   // px shift
    const parallaxY  = (mousePos.y - 0.5) * -16

    return (
        <section
            id="about"
            ref={sectionRef}
            className="min-h-screen relative overflow-x-hidden"
        >
            {/* Inject animation keyframes once */}
            <style>{DRIFT_CSS}</style>

            {/* ══ Background atmosphere ══ */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">

                {/* Layer 1 – far ambient glow (large, very soft) */}
                <div
                    className="absolute inset-0"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transition: "opacity 0.6s ease, background 0.6s ease",
                        background: st
                            ? `radial-gradient(ellipse 75% 90% at 92% 50%, rgba(${st.rgb},0.22) 0%, transparent 65%)`
                            : "none",
                    }}
                />

                {/* Layer 2 – sharper mid-glow that follows the mouse */}
                <div
                    className="absolute inset-0"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transition: "opacity 0.4s ease, background 0.3s ease",
                        background: st
                            ? `radial-gradient(ellipse 40% 55% at ${88 + parallaxX * 0.05}% ${50 + parallaxY * 0.05}%, rgba(${st.rgb},0.28) 0%, transparent 60%)`
                            : "none",
                    }}
                />

                {/* Layer 3 – full-height icon, parallax-shifted, floating drift */}
                {displayedSkill && (
                    <div
                        className="absolute inset-y-0 right-0"
                        style={{
                            width: "min(60vh, 520px)",
                            opacity: isVisible ? 1 : 0,
                            transition: "opacity 0.55s ease",
                            maskImage: "linear-gradient(to right, transparent 0%, black 30%, black 80%, transparent 100%)",
                            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 30%, black 80%, transparent 100%)",
                            transform: `translate(${parallaxX}px, ${parallaxY}px)`,
                            willChange: "transform",
                        }}
                    >
                        <Image
                            src={displayedSkill.icon || "/placeholder.svg"}
                            alt=""
                            fill
                            className="object-contain"
                            style={{
                                opacity: 0.18,
                                filter: st
                                    ? `drop-shadow(0 0 40px rgba(${st.rgb},0.55)) saturate(1.5)`
                                    : "saturate(1.5)",
                                animation: "skillDrift 6s ease-in-out infinite",
                            }}
                        />
                    </div>
                )}

                {/* Top accent line */}
                <div
                    className="absolute inset-x-0 top-0 h-px"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transition: "opacity 0.5s ease, background 0.5s ease",
                        background: st
                            ? `linear-gradient(90deg, transparent 30%, ${st.color}88 65%, transparent)`
                            : "transparent",
                    }}
                />
                {/* Bottom accent line */}
                <div
                    className="absolute inset-x-0 bottom-0 h-px"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transition: "opacity 0.5s ease, background 0.5s ease",
                        background: st
                            ? `linear-gradient(90deg, transparent 30%, ${st.color}55 65%, transparent)`
                            : "transparent",
                    }}
                />
            </div>

            {/* ══ Main content ══ */}
            <div className="container relative z-10 mx-auto py-24 px-6 md:px-12 lg:px-20">
                <div ref={textRef} className="mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/40 bg-dimBlue mb-8">
                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                        <span className="text-secondary text-sm font-medium tracking-wide">ABOUT ME</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                        Building Digital
                        <br />
                        <span className="bg-gradient-to-r from-secondary via-cyan-300 to-secondary bg-clip-text text-transparent">
                            Experiences
                        </span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
                        <p className=" text-lg leading-relaxed">
                            I'm a <span className="font-medium">MERN Stack Software Engineer</span> who enjoys building modern
                            web and mobile applications that people love to use. I work with <span className="text-secondary font-medium">React.js,
                            Next.js, Node.js, React Native, and WordPress</span> to create fast, scalable, and user-friendly
                            products. Over the years, I've developed a strong attention to detail and a passion for turning
                            ideas into meaningful digital experiences by combining clean design with solid engineering.
                        </p>
                        <p className=" text-lg leading-relaxed">
                            Living with <span className="font-medium">Muscular Dystrophy</span> and being a wheelchair user
                            has not only shaped my abilities but also fueled my drive to create and break new
                            ground. I believe that{" "}
                            <span className="text-secondary font-medium">every challenge is an opportunity</span>.
                        </p>
                    </div>
                </div>

                <div ref={skillsRef}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/40 bg-dimBlue mb-10">
                        <svg className="w-4 h-4 text-secondary" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                        <span className="text-secondary text-sm font-medium tracking-wide">MY SKILLS</span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {skills.map((skill) => {
                            const skTheme   = SKILL_THEME[skill.name]
                            const isHovered = hoveredSkill?.name === skill.name

                            return (
                                <div
                                    key={skill.name}
                                    onMouseEnter={() => setHoveredSkill(skill)}
                                    onMouseLeave={() => setHoveredSkill(null)}
                                    onFocus={() => setHoveredSkill(skill)}
                                    onBlur={() => setHoveredSkill(null)}
                                    tabIndex={0}
                                    className={`skill-card group relative p-6 rounded-2xl border cursor-pointer focus:outline-none ${theme === "dark" ? "bg-dimBlue" : "bg-gray-200/30"}`}
                                    style={{
                                        borderColor: isHovered
                                            ? `rgba(${skTheme?.rgb},0.55)`
                                            : "rgba(130,80,255,0.2)",
                                        boxShadow: isHovered
                                            ? `0 0 0 1px rgba(${skTheme?.rgb},0.3), 0 8px 40px rgba(${skTheme?.rgb},0.22), inset 0 1px 0 rgba(${skTheme?.rgb},0.15)`
                                            : "none",
                                        transform: isHovered ? "scale(1.06) translateY(-3px)" : "scale(1)",
                                        transition: "border-color 0.35s, box-shadow 0.35s, transform 0.35s cubic-bezier(.34,1.56,.64,1)",
                                    }}
                                >
                                    {/* Expanding scan ring */}
                                    {isHovered && (
                                        <div
                                            className="absolute inset-0 rounded-2xl"
                                            style={{
                                                border: `1.5px solid rgba(${skTheme?.rgb},0.7)`,
                                                animation: "scanRing 1.4s ease-out infinite",
                                                pointerEvents: "none",
                                            }}
                                        />
                                    )}

                                    {/* Corner brackets (top-left, bottom-right) */}
                                    {isHovered && (
                                        <>
                                            {/* TL */}
                                            <span className="absolute top-2 left-2 w-3 h-3 pointer-events-none"
                                                style={{ borderTop: `2px solid ${skTheme?.color}`, borderLeft: `2px solid ${skTheme?.color}`, animation: "cornerPulse 2s ease-in-out infinite", borderRadius: "2px 0 0 0" }} />
                                            {/* TR */}
                                            <span className="absolute top-2 right-2 w-3 h-3 pointer-events-none"
                                                style={{ borderTop: `2px solid ${skTheme?.color}`, borderRight: `2px solid ${skTheme?.color}`, animation: "cornerPulse 2s ease-in-out infinite 0.25s", borderRadius: "0 2px 0 0" }} />
                                            {/* BL */}
                                            <span className="absolute bottom-2 left-2 w-3 h-3 pointer-events-none"
                                                style={{ borderBottom: `2px solid ${skTheme?.color}`, borderLeft: `2px solid ${skTheme?.color}`, animation: "cornerPulse 2s ease-in-out infinite 0.5s", borderRadius: "0 0 0 2px" }} />
                                            {/* BR */}
                                            <span className="absolute bottom-2 right-2 w-3 h-3 pointer-events-none"
                                                style={{ borderBottom: `2px solid ${skTheme?.color}`, borderRight: `2px solid ${skTheme?.color}`, animation: "cornerPulse 2s ease-in-out infinite 0.75s", borderRadius: "0 0 2px 0" }} />
                                        </>
                                    )}

                                    {/* Card inner glow */}
                                    <div
                                        className="absolute inset-0 rounded-2xl pointer-events-none"
                                        style={{
                                            background: skTheme
                                                ? `radial-gradient(ellipse 85% 75% at 50% 50%, rgba(${skTheme.rgb},0.18) 0%, transparent 100%)`
                                                : "none",
                                            opacity: isHovered ? 1 : 0,
                                            transition: "opacity 0.4s ease",
                                        }}
                                    />

                                    {/* Icon + label */}
                                    <div className="relative flex flex-col items-center gap-4">
                                        <div
                                            className="relative w-16 h-16"
                                            style={{
                                                transform: isHovered ? "scale(1.18) translateY(-2px)" : "scale(1)",
                                                transition: "transform 0.4s cubic-bezier(.34,1.56,.64,1)",
                                                filter: isHovered && skTheme
                                                    ? `drop-shadow(0 0 10px rgba(${skTheme.rgb},0.7))`
                                                    : "none",
                                            }}
                                        >
                                            <Image
                                                src={skill.icon || "/placeholder.svg"}
                                                alt={skill.name}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>

                                        <span
                                            className="text-sm font-semibold text-center"
                                            style={{
                                                color: isHovered && skTheme ? skTheme.color : (theme === "light" ? "#111" : "#e2e8f0"),
                                                transition: "color 0.3s ease",
                                                textShadow: isHovered && skTheme
                                                    ? `0 0 12px rgba(${skTheme.rgb},0.6)`
                                                    : "none",
                                            }}
                                        >
                                            {skill.name}
                                        </span>
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

export default About
