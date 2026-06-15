"use client"

import { useContext, useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Briefcase, GraduationCap, MapPin } from "lucide-react"
import { ThemeContext } from "../context/ThemeContext"

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

const experience = [
   
    {
        date: "MAY 2022 — PRESENT",
        role: "Freelance Software Engineer",
        company: "Upwork & Social Media - Remote",
        location: "Remote",
        // tags: ["React.js", "Next.js", "React Native"],
        bullets: [
            "Building production web & mobile apps with React, Next.js and React Native.",
            "Translating Figma designs into pixel-perfect, accessible React components.",
            "Designed and shipped dashboards for crypto / fintech clients.",
        ],
    },

    {
        date: "MAR 2025 — PRESENT",
        role: "Web Developer",
        company: "Ebizz Solutions",
        location: "Remote",
        // tags: ["React.js", "Next.js", "WordPress"],
        bullets: [
            "Collaborating to implement features and improve UI.",
            "Focused on boosting UI responsiveness and backend efficiency.",
            "Key Technologies: React.js, Next.js (with server-side rendering), and Tailwind CSS.",
        ],
    },
    {
        date: "MAR 2020 — 2022",
        role: "Co-Founder & Frontend Lead",
        company: "ParhoAurParhao",
        location: "Pakistan",
        // tags: ["Frontend", "Product", "Marketing"],
        bullets: [
            "Platform to connect people seeking tuition and Tutors",
            "Developing frontend and assisting team in Marketing",
        ],
    },
]

const education = [
    {
        date: "AUG 2025 — AUG 2027",
        title: "Allama Iqbal Open University",
        subtitle: "Bachelor of Commerce",
        description:
            "Pursuing a Bachelor's degree in Commerce while continuing to grow as a full-stack engineer.",
        tag: "DEGREE",
    },
    {
        date: "DEC 2022",
        title: "Coursera",
        subtitle: "Full-Stack Web Development with React Specialization",
        description:
            "Multi-course specialization covering React, the MERN stack, and modern frontend architecture.",
        tag: "SPECIALIZATION",
    },
]

function Resume() {
    const sectionRef = useRef(null)
    const { theme } = useContext(ThemeContext)
    const isDark = theme === "dark"

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".resume-eyebrow, .resume-title, .resume-sub",
                { y: 40, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.12,
                    ease: "power3.out",
                },
            )

            gsap.fromTo(
                ".timeline-card",
                { y: 40, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                        toggleActions: "play none none none",
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.18,
                    ease: "power2.out",
                },
            )

            gsap.fromTo(
                ".timeline-line",
                { scaleY: 0, transformOrigin: "top center" },
                {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                        toggleActions: "play none none none",
                    },
                    scaleY: 1,
                    duration: 1.4,
                    ease: "power2.out",
                },
            )

            gsap.fromTo(
                ".spec-card",
                { y: 40, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: ".spec-section",
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                },
            )

            ScrollTrigger.refresh()
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            id="resume"
            ref={sectionRef}
            className="relative py-24 overflow-hidden"
        >
            {/* Ambient glow background */}
            <div className="pointer-events-none absolute inset-0 -z-0">
                <div
                    className="absolute top-1/4 -left-32 w-[420px] h-[420px] rounded-full blur-3xl opacity-30"
                    style={{ background: "radial-gradient(circle, rgba(0,246,255,0.25), transparent 70%)" }}
                />
                <div
                    className="absolute bottom-10 -right-24 w-[360px] h-[360px] rounded-full blur-3xl opacity-20"
                    style={{ background: "radial-gradient(circle, rgba(130,80,255,0.35), transparent 70%)" }}
                />
            </div>

            <div className="container mx-auto px-8 lg:px-16 relative z-10">
                {/* ─── Section header ─── */}
                <div className="mb-16">
                    <div className="resume-eyebrow inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/40 bg-dimBlue mb-6">
                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                        <span className="text-secondary text-sm font-medium tracking-wide">
                            MY JOURNEY
                        </span>
                    </div>
                    <h2 className={`resume-title text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                        Experience &amp;{" "}
                        <span className="bg-gradient-to-r from-secondary via-cyan-300 to-secondary bg-clip-text text-transparent">
                            Education
                        </span>
                    </h2>
                    <p className={`resume-sub text-base md:text-lg max-w-2xl ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                        A snapshot of the roles, projects, and learning that have shaped me as a MERN Stack Software Engineer.
                    </p>
                </div>

                {/* ─── EXPERIENCE TIMELINE ─── */}
                <div className="mb-24">
                    <div className="flex items-center gap-3 mb-12">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isDark ? "bg-dimBlue border border-secondary/30" : "bg-secondary/10 border border-secondary/30"}`}>
                            <Briefcase className="w-5 h-5 text-secondary" />
                        </div>
                        <h3 className={`text-2xl md:text-3xl font-bold tracking-wide ${isDark ? "text-white" : "text-gray-900"}`}>
                            Experience
                        </h3>
                    </div>

                    <div className="timeline-track relative">
                        {/* Centered vertical line (desktop) / left line (mobile) */}
                        <div
                            className="timeline-line absolute top-0 bottom-0 w-px left-3 md:left-1/2 md:-translate-x-1/2"
                            style={{
                                background: isDark
                                    ? "linear-gradient(180deg, rgba(0,246,255,0.7) 0%, rgba(0,246,255,0.3) 50%, rgba(130,80,255,0.5) 100%)"
                                    : "linear-gradient(180deg, rgba(0,180,200,0.55) 0%, rgba(0,180,200,0.25) 50%, rgba(130,80,255,0.4) 100%)",
                            }}
                        />

                        <div className="flex flex-col gap-12 md:gap-16">
                            {experience.map((item, idx) => {
                                const isLeft = idx % 2 === 0
                                return (
                                    <div
                                        key={idx}
                                        className={`relative md:grid md:grid-cols-2 md:gap-12 items-start ${isLeft ? "" : ""}`}
                                    >
                                        {/* Timeline dot (positioned on the line) */}
                                        <span className="absolute top-6 left-3 md:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                                            <span className={`absolute w-5 h-5 rounded-full ${isDark ? "bg-secondary/25" : "bg-secondary/30"} animate-ping`} />
                                            <span className={`relative w-3.5 h-3.5 rounded-full bg-secondary ring-4 ${isDark ? "ring-primary" : "ring-white"}`} />
                                        </span>

                                        {/* Card — left column on even, right column on odd */}
                                        <div
                                            className={`timeline-card pl-10 md:pl-0 ${isLeft
                                                ? "md:col-start-1 md:pr-8"
                                                : "md:col-start-2 md:pl-8"
                                                }`}
                                        >
                                            <div
                                                className={`relative group rounded-2xl p-6 md:p-7 border transition-all duration-300 hover:-translate-y-1 ${isDark
                                                    ? "bg-dimBlue/60 border-secondary/15 hover:border-secondary/50 hover:shadow-[0_8px_40px_rgba(0,246,255,0.12)]"
                                                    : "bg-white border-gray-200 shadow-sm hover:shadow-lg hover:border-secondary/40"
                                                    }`}
                                            >
                                                {/* Connector arm from card to centerline (desktop only) */}
                                                <span
                                                    className={`hidden md:block absolute top-7 h-px w-8 ${isLeft ? "right-0 translate-x-full" : "left-0 -translate-x-full"}`}
                                                    style={{
                                                        background: isDark
                                                            ? "linear-gradient(90deg, rgba(0,246,255,0.6), rgba(0,246,255,0.1))"
                                                            : "linear-gradient(90deg, rgba(0,180,200,0.5), rgba(0,180,200,0.1))",
                                                    }}
                                                />

                                                <div className="flex flex-wrap items-center gap-3 mb-3">
                                                    <span className={`text-xs tracking-widest font-semibold px-3 py-1 rounded-full ${isDark ? "bg-secondary/10 text-secondary" : "bg-secondary/15 text-secondary"}`}>
                                                        {item.date}
                                                    </span>
                                                    <span className={`inline-flex items-center gap-1 text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                                                        <MapPin className="w-3 h-3" />
                                                        {item.location}
                                                    </span>
                                                </div>

                                                <h4 className={`text-xl md:text-2xl font-bold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>
                                                    {item.role}
                                                </h4>
                                                <p className="text-secondary font-medium text-sm md:text-base mb-4">
                                                    @ {item.company}
                                                </p>

                                                <ul className="flex flex-col gap-2.5 mb-5">
                                                    {item.bullets.map((b, i) => (
                                                        <li
                                                            key={i}
                                                            className={`flex items-start gap-3 text-sm md:text-[15px] leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}
                                                        >
                                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                                                            <span>{b}</span>
                                                        </li>
                                                    ))}
                                                </ul>

                                                {/* <div className={`flex flex-wrap gap-2 ${isLeft ? "md:justify-end" : ""}`}>
                                                    {item.tags.map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className={`text-[11px] font-medium px-2.5 py-1 rounded-md border ${isDark
                                                                ? "border-secondary/20 text-gray-300 bg-secondary/5"
                                                                : "border-gray-200 text-gray-700 bg-gray-50"
                                                                }`}
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* ─── EDUCATION ─── */}
                <div className="spec-section">
                    <div className="flex items-center gap-3 mb-10">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isDark ? "bg-dimBlue border border-secondary/30" : "bg-secondary/10 border border-secondary/30"}`}>
                            <GraduationCap className="w-5 h-5 text-secondary" />
                        </div>
                        <h3 className={`text-2xl md:text-3xl font-bold tracking-wide ${isDark ? "text-white" : "text-gray-900"}`}>
                            Education
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {education.map((item, idx) => (
                            <div key={idx} className="flex flex-col">
                                {/* Label above card */}
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="h-px w-6 bg-secondary/60" />
                                    <span className="text-xs md:text-sm tracking-[0.2em] font-semibold text-secondary uppercase">
                                        {item.tag}
                                    </span>
                                </div>

                                <div
                                    className={`spec-card relative overflow-hidden rounded-2xl p-7 md:p-8 border transition-all duration-300 hover:-translate-y-1 flex-1 ${isDark
                                        ? "bg-gradient-to-br from-dimBlue/80 via-dimBlue/40 to-transparent border-secondary/20 hover:border-secondary/50"
                                        : "bg-gradient-to-br from-white to-secondary/5 border-gray-200 shadow-sm hover:shadow-xl hover:border-secondary/40"
                                        }`}
                                >
                                    {/* Decorative corner glow */}
                                    <div
                                        className="absolute -top-20 -right-20 w-56 h-56 rounded-full blur-3xl opacity-40 pointer-events-none"
                                        style={{ background: "radial-gradient(circle, rgba(0,246,255,0.35), transparent 70%)" }}
                                    />

                                    <div className="relative">
                                        <div className="flex flex-wrap items-center gap-3 mb-4">
                                            <span className={`text-xs tracking-widest font-semibold px-3 py-1 rounded-full ${isDark ? "bg-secondary/10 text-secondary" : "bg-secondary/15 text-secondary"}`}>
                                                {item.date}
                                            </span>
                                        </div>

                                        <h4 className={`text-xl md:text-2xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
                                            {item.title}
                                        </h4>
                                        <p className="text-secondary font-semibold text-base md:text-lg mb-4">
                                            {item.subtitle}
                                        </p>
                                        <p className={`text-sm md:text-base leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume
