// import React from 'react';
// import { assets, toolsIcon } from '../../../assets/assets';
// import Image from 'next/image';

// const About = () => {
//   return (
//       <div id='about' className='w-full px-[12%] py-10 relative scroll-mt-20'>

//           <h4 className='text-center mb-2 text-lg font-ovo'>Introduction</h4>
//           <h2 className='text-center text-5xl font-ovo'>About me</h2>

//           <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
//               <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
//                   <Image className="w-full rounded-2xl" src={assets.about_profile_img } alt="profile"/>
//               </div>
//               <div className='flex-1'>
//                   <p className='mb-10 max-w-4xl font-ovo text-[18px]'>
//                       I’m a React JS developer passionate about building dynamic, accessible web apps.
//                       Living with Muscular Dystrophy for 10 years fuels my drive to innovate and overcome challenges.
//                       Let's create something amazing together.
//                   </p>

//                   <h2 className='mb-5 text-3xl font-Outfit uppercase'>Skills</h2>

//                   <ul className="grid  grid-cols-2 md:grid-cols-4 max-w-3xl md:gap-4 gap-4">
//                       {toolsIcon.map(({ icon, name, color }, index) => (
//                           //   <li
//                           //       key={index}
//                           //       className={`flex items-center justify-between gap-2 xl:gap-3 w-auto h-16 px-4 py-3 border
//                           //          border-gray-400 shadow-md rounded-lg cursor-pointer hover:-translate-y-1 duration-500 ${color} m-2`}
//                           //   >
//                           <li
//                               key={index}
//                               className={`md:max-w-[180px] w-full mb-4 mr-2 text-center flex flex-col items-center justify-center border py-5
//                                  border-gray-400 shadow-md rounded-lg cursor-pointer hover:-translate-y-1 duration-500 ${color} `}
//                           >

//                               <Image src={icon} alt={name} className="w-10 h-10 xl:w-14 xl:h-14 mb-1 object-cover rounded-md" />
//                               <p className="font-Outfit text-[14px] xl:text-[16px] " >{name}</p>
//                               {/* <div className="flex justify-end ml-auto">
//                                   <p className="xl:text-md text-sm text-gray-500">90%</p>
//                               </div> */}
//                           </li>
//                       ))}
//                   </ul>

//               </div>
//           </div>
//      </div>
//   )
// }

// export default About;
// "use client"

// import { useEffect, useRef } from "react"
// import { assets, toolsIcon } from "../../../assets/assets"
// import Image from "next/image"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// gsap.registerPlugin(ScrollTrigger)

// const About = () => {
//     const sectionRef = useRef(null)
//     const headingRef = useRef(null)
//     const subheadingRef = useRef(null)
//     const imageRef = useRef(null)
//     const textRef = useRef(null)
//     const statsRef = useRef(null)
//     const skillsTitleRef = useRef(null)
//     const skillsRef = useRef(null)

//     useEffect(() => {
//         const ctx = gsap.context(() => {
//             const tl = gsap.timeline({
//                 scrollTrigger: {
//                     trigger: sectionRef.current,
//                     start: "top 70%",
//                     end: "top 30%",
//                     toggleActions: "play none none none",
//                 },
//             })

//             tl.from(headingRef.current, {
//                 opacity: 0,
//                 y: 30,
//                 duration: 0.6,
//             })
//                 .from(
//                     subheadingRef.current,
//                     {
//                         opacity: 0,
//                         y: 30,
//                         duration: 0.6,
//                     },
//                     "-=0.4",
//                 )
//                 .from(
//                     imageRef.current,
//                     {
//                         opacity: 0,
//                         scale: 0.9,
//                         duration: 0.8,
//                     },
//                     "-=0.3",
//                 )
//                 .from(
//                     textRef.current.children,
//                     {
//                         opacity: 0,
//                         y: 20,
//                         duration: 0.5,
//                         stagger: 0.1,
//                     },
//                     "-=0.5",
//                 )
//                 .from(
//                     statsRef.current.children,
//                     {
//                         opacity: 0,
//                         scale: 0.8,
//                         duration: 0.5,
//                         stagger: 0.15,
//                     },
//                     "-=0.3",
//                 )

//             gsap.from(skillsTitleRef.current, {
//                 opacity: 0,
//                 y: 30,
//                 duration: 0.8,
//                 scrollTrigger: {
//                     trigger: skillsTitleRef.current,
//                     start: "top 85%",
//                     toggleActions: "play none none none",
//                 },
//             })

//             gsap.from(skillsRef.current.children, {
//                 opacity: 0,
//                 y: 40,
//                 scale: 0.9,
//                 duration: 0.6,
//                 stagger: 0.08,
//                 ease: "back.out(1.2)",
//                 scrollTrigger: {
//                     trigger: skillsRef.current,
//                     start: "top 85%",
//                     toggleActions: "play none none none",
//                 },
//             })
//         }, sectionRef)

//         return () => ctx.revert()
//     }, [])

//     return (
//         <div ref={sectionRef} id="about" className="w-full px-[12%] py-20 relative scroll-mt-20 bg-white">
//             <div className="text-center mb-16">
//                 <h4 ref={headingRef} className="text-gray-600 mb-3 text-sm font-medium tracking-widest uppercase">
//                     About Me
//                 </h4>
//                 <h2 ref={subheadingRef} className="text-5xl md:text-6xl font-bold font-ovo text-gray-900">
//                     Turning Vision Into Reality
//                 </h2>
//             </div>

//             <div className="flex w-full flex-col lg:flex-row items-start gap-16 mb-20">
//                 {/* Left: Image */}
//                 <div ref={imageRef} className="lg:w-5/12 w-full">
//                     <div className="aspect-square bg-card rounded-lg border border-border flex items-center justify-center">
//                         <Image
//                             className="w-full h-auto object-contain"
//                             src={assets.about_profile_img || "/placeholder.svg?height=600&width=500"}
//                             alt="profile"
//                             width={300}
//                             height={300}

//                         />
//                         {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" /> */}
//                     </div>
//                 </div>

//                 {/* Right: Content */}
//                 <div className="lg:w-7/12 w-full flex flex-col justify-center">
//                     <div ref={textRef} className="space-y-6 mb-12">
//                         <p className="text-gray-700 text-lg leading-relaxed font-ovo">
//                             I'm a <span className="font-semibold text-gray-900">React JS developer</span> passionate about building
//                             dynamic, accessible web applications that make a difference.
//                         </p>
//                         <p className="text-gray-700 text-lg leading-relaxed font-ovo">
//                             Living with Muscular Dystrophy for 10 years has shaped my perspective and fueled my determination to
//                             innovate and overcome challenges. I believe technology has the power to transform lives.
//                         </p>
//                         <p className="text-gray-700 text-lg leading-relaxed font-ovo">
//                             Let's collaborate and create something extraordinary together.
//                         </p>
//                     </div>

//                     <div ref={statsRef} className="grid grid-cols-3 gap-8 mb-12">
//                         <div className="text-center">
//                             <div className="text-4xl font-bold text-gray-900 mb-2">10+</div>
//                             <div className="text-sm text-gray-600 uppercase tracking-wide">Years Experience</div>
//                         </div>
//                         <div className="text-center">
//                             <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
//                             <div className="text-sm text-gray-600 uppercase tracking-wide">Projects Done</div>
//                         </div>
//                         <div className="text-center">
//                             <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
//                             <div className="text-sm text-gray-600 uppercase tracking-wide">Client Satisfaction</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="mt-20">
//                 <h2 ref={skillsTitleRef} className="mb-10 text-4xl font-bold text-center font-ovo text-gray-900">
//                     Technical Skills
//                 </h2>

//                 <ul
//                     ref={skillsRef}
//                     className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
//                 >
//                     {toolsIcon.map(({ icon, name, color }, index) => (
//                         <li
//                             key={index}
//                             className={`group relative w-full text-center flex flex-col items-center justify-center
//                 border-2 border-gray-200 bg-white shadow-lg rounded-2xl cursor-pointer
//                 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 py-8 px-4 ${color}`}
//                         >
//                             <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
//                                 <Image
//                                     src={icon || "/placeholder.svg"}
//                                     alt={name}
//                                     className="w-16 h-16 object-contain mx-auto"
//                                     width={64}
//                                     height={64}
//                                 />
//                             </div>
//                             <p className="font-semibold text-gray-800 text-base">{name}</p>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default About


"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const skills = [
    { name: "React JS", icon: ReactIcon },
    { name: "JavaScript", icon: JavaScriptIcon },
    { name: "Node JS", icon: NodeIcon },
    { name: "WordPress", icon: WordPressIcon },
    { name: "Tailwind CSS", icon: TailwindIcon },
    { name: "Adobe Photoshop", icon: PhotoshopIcon },
    { name: "Adobe XD", icon: AdobeXDIcon },
    { name: "Figma", icon: FigmaIcon },
]

function ReactIcon() {
    return (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none">
            <circle cx="12" cy="12" r="2.5" fill="#61DAFB" />
            <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none" />
            <ellipse
                cx="12"
                cy="12"
                rx="10"
                ry="4"
                stroke="#61DAFB"
                strokeWidth="1"
                fill="none"
                transform="rotate(60 12 12)"
            />
            <ellipse
                cx="12"
                cy="12"
                rx="10"
                ry="4"
                stroke="#61DAFB"
                strokeWidth="1"
                fill="none"
                transform="rotate(120 12 12)"
            />
        </svg>
    )
}

function JavaScriptIcon() {
    return (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
            <rect x="2" y="2" width="20" height="20" rx="2" fill="#C9A227" />
            <text x="7" y="18" fontSize="12" fontWeight="bold" fill="#1a1a2e" fontFamily="sans-serif">
                JS
            </text>
        </svg>
    )
}

function NodeIcon() {
    return (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none">
            <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="#1a1a2e" stroke="#68A063" strokeWidth="1.5" />
            <text x="7" y="15" fontSize="7" fontWeight="bold" fill="#68A063" fontFamily="sans-serif">
                JS
            </text>
        </svg>
    )
}

function WordPressIcon() {
    return (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#6B7280" strokeWidth="1.5" fill="none" />
            <text x="6" y="16" fontSize="10" fontWeight="bold" fill="#6B7280" fontFamily="serif">
                W
            </text>
        </svg>
    )
}

function TailwindIcon() {
    return (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none">
            <path d="M6 12c.6-4 3-6 7-6 6 0 6.5 4.5 9.5 5.5-2 2.5-4.5 3.5-7.5 3-2.5-.4-3.5-1.5-9-2.5z" fill="#38BDF8" />
            <path
                d="M3 17c.6-4 3-6 7-6 6 0 6.5 4.5 9.5 5.5-2 2.5-4.5 3.5-7.5 3-2.5-.4-3.5-1.5-9-2.5z"
                fill="#38BDF8"
                opacity="0.6"
            />
        </svg>
    )
}

function PhotoshopIcon() {
    return (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
            <rect x="2" y="2" width="20" height="20" rx="3" fill="#31A8FF" />
            <text x="4" y="17" fontSize="10" fontWeight="bold" fill="#001E36" fontFamily="sans-serif">
                Ps
            </text>
        </svg>
    )
}

function AdobeXDIcon() {
    return (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
            <rect x="2" y="2" width="20" height="20" rx="3" fill="#470137" />
            <text x="4" y="17" fontSize="9" fontWeight="bold" fill="#FF61F6" fontFamily="sans-serif">
                Xd
            </text>
        </svg>
    )
}

function FigmaIcon() {
    return (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none">
            <rect x="5" y="2" width="6" height="6" rx="3" fill="#F24E1E" />
            <rect x="13" y="2" width="6" height="6" rx="3" fill="#FF7262" />
            <rect x="5" y="9" width="6" height="6" rx="3" fill="#A259FF" />
            <circle cx="16" cy="12" r="3" fill="#1ABCFE" />
            <rect x="5" y="16" width="6" height="6" rx="3" fill="#0ACF83" />
        </svg>
    )
}

function About() {
    const sectionRef = useRef(null)
    const textRef = useRef(null)
    const skillsRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate text content
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

            // Animate skill cards
            gsap.from(".skill-card", {
                scrollTrigger: {
                    trigger: skillsRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                },
                y: 40,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out",
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="min-h-screen relative overflow-x-hidden"
            style={{ background: "linear-gradient(180deg, #0a0a12 0%, #0d0d18 100%)" }}
        >
            <div className="container  mx-auto py-24 px-6 md:px-12 lg:px-20 ">
                {/* About Me Header */}
                <div ref={textRef} className="mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-8">
                        <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                        <span className="text-purple-300 text-sm font-medium tracking-wide">ABOUT ME</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                        Building Digital
                        <br />
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                            Experiences
                        </span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
                        <p className="text-gray-300 text-lg leading-relaxed">
                            I'm a <span className="text-white font-medium">MERN stack developer</span> who loves working with
                            React.js, Next.js, React Native, and WordPress. I've spent the last few years diving deep into front-end
                            development, building clean, fast, and user-friendly websites and apps.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Living with <span className="text-white font-medium">Muscular Dystrophy</span> and being a wheelchair user
                            for the past 10 years has not only shaped my abilities but also fueled my drive to create and break new
                            ground. I believe that{" "}
                            <span className="text-purple-400 font-medium">every challenge is an opportunity</span>.
                        </p>
                    </div>
                </div>

                {/* Skills Section */}
                <div ref={skillsRef}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-500/30 bg-pink-500/10 mb-10">
                        <svg className="w-4 h-4 text-pink-400" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                        <span className="text-pink-300 text-sm font-medium tracking-wide">MY SKILLS</span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {skills.map((skill, index) => (
                            <div
                                key={skill.name}
                                className="skill-card group relative p-6 rounded-2xl bg-[#1a1a2e]/80 border border-purple-900/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                            >
                                {/* Subtle glow on hover */}
                                <div className="absolute inset-0 rounded-2xl bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative flex flex-col items-center gap-4">
                                    <div className="p-3 rounded-xl bg-[#12121a] group-hover:bg-[#1a1a2e] transition-colors duration-300">
                                        <skill.icon />
                                    </div>
                                    <span className="text-gray-300 text-sm font-medium text-center group-hover:text-white transition-colors duration-300">
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

export default About;