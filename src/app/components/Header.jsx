"use client"

import { useContext, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ThemeContext } from "../context/ThemeContext"

function Hero() {
    const sectionRef = useRef(null)
    const imageRef = useRef(null)
    const badgeRef = useRef(null)
    const headingRef = useRef(null)
    const descRef = useRef(null)
    const buttonsRef = useRef(null)

    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

            tl.fromTo(imageRef.current, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8 })
                .fromTo(badgeRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.4")
                .fromTo(headingRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.3")
                .fromTo(descRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.4")
                .fromTo(
                    buttonsRef.current.children,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.5, stagger: 0.15 },
                    "-=0.3",
                )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="min-h-screen flex items-center justify-center px-6 py-24  relative overflow-x-hidden"
            // style={{
            //     background: "linear-gradient(180deg, #0a0a12 0%, #0d0d18 100%)",
            // }}
        >
            <div className="max-w-4xl mx-auto text-center">
                <div ref={imageRef} className="mb-8 flex justify-center">
                    <div className="relative">
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-purple-500/30 bg-purple-500/10 shadow-[0_0_40px_rgba(139,92,246,0.3)]">
                            <img
                                src="/profile.png"
                                alt="Muhammad Adil"
                                className="w-full h-[175px] object-cover aspect-square"
                            />
                        </div>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-purple-500/20 to-transparent blur-xl -z-10" />
                    </div>
                </div>

                <div ref={badgeRef} className="mb-8 flex justify-center">
                    <div className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full  border border-purple-500/30 backdrop-blur-sm ${theme === "dark" ? "bg-purple-500/20" : "bg-purple-500/10"}`}>
                        <span className="text-purple-400 text-sm font-medium">{"Hi! I'm"}</span>
                        <span className="font-semibold">Muhammad Adil</span>
                        <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                    </div>
                </div>

                <h1 ref={headingRef} className="text-4xl lg:text-5xl font-bold mb-8 leading-tight uppercase font-hanken">
                    <span className="relative inline-block ">
                        <span className="relative z-10">Frontend Software Engineer</span>
                        <span
                            className="absolute inset-0 -skew-x-2  -z-0 scale-y-110 opacity-80"
                            style={{ transform: "skewX(-2deg) scaleY(1.1)" }}
                        />
                    </span>
                    <br />
                    <span className="relative inline-block  mt-2">
                        <span className="relative z-10">specializing in </span>
                        <span
                            className="absolute inset-0 -skew-x-2  -z-0 scale-y-110 opacity-80"
                            style={{ transform: "skewX(-2deg) scaleY(1.1)" }}
                        />
                    </span>
                    <span className="relative inline-block  mt-2">
                        <span className="relative z-10">(ReactJS)</span>
                        <span
                            className="absolute inset-0 -skew-x-2 -z-0 scale-y-110 opacity-80"
                            style={{ transform: "skewX(-2deg) scaleY(1.1)" }}
                        />
                    </span>
                </h1>

                <p
                    ref={descRef}
                    className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-hanken"
                >
                    Where passion meets precision: Designing seamless digital experiences with{" "}
                    <span className="text-purple-400 font-medium">React JS, Next JS, React Native, and WordPress</span>, while
                    navigating life from a wheelchair and redefining web development.
                </p>

                <div ref={buttonsRef} className="flex flex-wrap justify-center gap-4">
                    <button className={`group inline-flex cursor-pointer items-center gap-2 px-8 py-2.5 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] ${theme === "dark" ? "bg-white text-[#0a0a12] hover:bg-gray-100" : "bg-purple-500/10 text-[#0a0a12] hover:bg-purple-500/20"}`}>
                        Contact me
                        <svg
                            className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                    </button>
                    <button className="inline-flex cursor-pointer items-center gap-2 px-8 py-2.5 bg-transparent  font-semibold rounded-full border border-gray-600 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300">
                        My Resume
                    </button>
                </div>

                <div className="mt-14 flex justify-center">
                    <div className="flex flex-col items-center gap-2 text-gray-500">
                        <span className="text-xs uppercase tracking-widest">Scroll</span>
                        <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center pt-2">
                            <div className="w-1.5 h-3 bg-purple-500 rounded-full animate-bounce" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
