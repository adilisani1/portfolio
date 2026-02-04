"use client"

import { useContext, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { assets } from "../../../assets/assets"
import Image from "next/image"
import { ThemeContext } from "../context/ThemeContext";


gsap.registerPlugin(ScrollTrigger)



function About() {
    const { theme } = useContext(ThemeContext)

    const skills = [
        { name: "React JS", icon: assets.react_icon },
        { name: "JavaScript", icon: assets.javascript_icon },
        { name: "Next JS", icon: theme === "dark" ? assets.next_js_white : assets.next_js },
        { name: "Node JS", icon: assets.node_js },
        { name: "WordPress", icon: assets.word_press_two },
        { name: "Tailwind CSS", icon: assets.tailwind },
        { name: "Adobe XD", icon: assets.adobe_xd },
        { name: "Figma", icon: assets.figma },
    ]


    const sectionRef = useRef(null)
    const textRef = useRef(null)
    const skillsRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(textRef.current.children, {
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                },
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
            })

            gsap.fromTo(".skill-card",
                {
                    y: 40,
                    opacity: 0,
                },
                {
                    scrollTrigger: {
                        trigger: skillsRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse",
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power2.out",
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="min-h-screen relative overflow-x-hidden"
            // style={{ background: "linear-gradient(180deg, #0a0a12 0%, #0d0d18 100%)" }}
        >
            <div className="container  mx-auto py-24 px-6 md:px-12 lg:px-20 ">
                <div ref={textRef} className="mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-8">
                        <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                        <span className="text-purple-300 text-sm font-medium tracking-wide">ABOUT ME</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                        Building Digital
                        <br />
                        <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-purple-400 bg-clip-text text-transparent">
                            Experiences
                        </span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
                        <p className="text-gray-300 text-lg leading-relaxed">
                            I'm a <span className="font-medium">MERN stack developer</span> who loves working with
                            React.js, Next.js, React Native, and WordPress. I've spent the last few years diving deep into front-end
                            development, building clean, fast, and user-friendly websites and apps.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Living with <span className=" font-medium">Muscular Dystrophy</span> and being a wheelchair user
                            for the past 10 years has not only shaped my abilities but also fueled my drive to create and break new
                            ground. I believe that{" "}
                            <span className="text-purple-400 font-medium">every challenge is an opportunity</span>.
                        </p>
                    </div>
                </div>

                <div ref={skillsRef}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-10">
                        <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                        <span className="text-purple-300 text-sm font-medium tracking-wide">MY SKILLS</span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {skills.map((skill, index) => (
                            <div
                                key={skill.name}
                                className={`skill-card group relative p-6 rounded-2xl  border border-purple-900/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer ${theme === "dark" ? "bg-[#1a1a2e]/80" : "bg-gray-200/30"}`}
                            >
                                <div className="absolute inset-0 rounded-2xl bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative flex flex-col items-center gap-4">
                                    <div className="relative p-3 rounded-xl  transition-colors duration-300 w-16 h-16">
                                        <Image
                                            src={skill.icon || "/placeholder.svg"}
                                            alt={skill.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <span className={`text-sm font-medium text-center transition-colors duration-300 ${theme === "light" ? "text-black group-hover:text-gray-600" : "text-white group-hover:text-purple-300"}`}>
                                        {skill.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
