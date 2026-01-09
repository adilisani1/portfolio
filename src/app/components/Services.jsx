// import React from 'react'
// import { assets, servicesData } from '../../../assets/assets';
// import Image from 'next/image';

// const Services = () => {
//   return (
//       <div id='services' className='w-full   px-[12%] py-10 scroll-mt-20'>
//           <h4 className='text-center mb-2 text-lg font-ovo'>What I Do</h4>
//           <h2 className='text-center text-5xl font-ovo'>My Services</h2>
//           <p className='text-center max-w-4xl mx-auto mt-5 mb-12 font-ovo'>
//               I create custom, responsive websites optimized for performance and accessibility. I focus on delivering smooth user experiences across all devices, ensuring accessibility for everyone, and seamlessly integrating APIs to enhance functionality.
//           </p>
//           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2  gap-10 my-10 grid-rows-auto' >
//               {servicesData.map(({title, icon, desc, link}, index) => (
//                   <div key={index}
//                       className='bg-card-gradient md:flex block rounded-3xl px-8 py-8 relative z-1 hover:bg-lightHover transition-all hover:-translate-y-1 duration-500 bg-darkCard'>
//                       <div className='min-w-32'>
//                           <Image src={icon} alt={title} className='md:object-contain object-cover w-22' />
//                      </div>
//                       <div>
//                           <h3 className='text-3xl font-ovo mt-5'>{title}</h3>
//                           <p className='mt-4 font-ovo'>{desc}</p>
//                       </div>
//                   </div>
//               ))}
//           </div>

//         </div>
//      )
// }

// export default Services;
// "use client"

// import { useEffect, useRef } from "react"
// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

// gsap.registerPlugin(ScrollTrigger)

// const servicesData = [
//     {
//         title: "Design Strategy",
//         subtitle: "UX-UI Design",
//         desc: "We always ensure that it combines a clean and beautiful visual design.",
//         tags: ["UI/UX Audit", "Workshops"],
//     },
//     {
//         title: "Product Leadership",
//         subtitle: "Strategy & Planning",
//         desc: "We always ensure that it combines a clean and beautiful visual design.",
//         tags: ["UI/UX Audit", "Workshops"],
//     },
//     {
//         title: "Front-End Development",
//         subtitle: "Web Development",
//         desc: "We always ensure that it combines a clean and beautiful visual design.",
//         tags: ["UI/UX Audit", "Workshops"],
//     },
//     {
//         title: "Back-End Development",
//         subtitle: "Server & Database",
//         desc: "We always ensure that it combines a clean and beautiful visual design.",
//         tags: ["UI/UX Audit", "Workshops"],
//     },
// ]

// export default function Services() {
//     const sectionRef = useRef(null)
//     const pinWrapRef = useRef(null)
//     const leftRef = useRef(null)

//     useEffect(() => {
//         const ctx = gsap.context(() => {
//             const cards = gsap.utils.toArray(".service-card")

//             // Tune these two values to match your exact look
//             const topOffset = 120 // how far from top pinned cards sit
//             const pinLen = 420    // how long each card stays pinned

//             // 1) Pin LEFT content for the whole stacked animation duration
//             ScrollTrigger.create({
//                 trigger: pinWrapRef.current,
//                 start: "top top",
//                 end: `+=${cards.length * pinLen}`,
//                 pin: leftRef.current,
//                 // pinSpacing: false,
//                 anticipatePin: 1,
//             })

//             // 2) Stack cards: pin each one, overlap by removing spacing
//             cards.forEach((card, i) => {
//                 gsap.set(card, { zIndex: i + 1 })

//                 ScrollTrigger.create({
//                     trigger: pinWrapRef.current,
//                     start: () => `top+=${i * pinLen} top+=${topOffset}`,
//                     end: () => `top+=${(i + 1) * pinLen} top+=${topOffset}`,
//                     pin: card,
//                     pinSpacing: false,
//                     anticipatePin: 1,
//                     invalidateOnRefresh: true,
//                 })
//             })

//             // keep triggers accurate after fonts/images/layout settle
//             ScrollTrigger.refresh()
//         }, sectionRef)

//         return () => ctx.revert()
//     }, [])

//   return (
//       <section
//           ref={sectionRef}
//           id="services"
//           className="w-full bg-[#1a1f3a] py-24 px-[5%] md:px-[8%] overflow-hidden"
//       >
//           <div
//               ref={pinWrapRef}
//               className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
//           >
//               {/* LEFT (Pinned until animation ends) */}
//               <div ref={leftRef} className="text-white">
//                   <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">
//                       OUR PROCESS
//                   </p>
//                   <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
//                       How We Carry Out Our Projects
//                   </h2>
//                   <p className="text-gray-300 text-lg leading-relaxed max-w-md">
//                       We offer a range of services to help elevate your brand & drive results.
//                   </p>
//               </div>

//               {/* RIGHT (Cards that stack) */}
//               <div className="relative">
//                   {/* IMPORTANT: give some spacing so the first card isn't glued to top */}
//                   <div className="h-[120px]" />

//                   {servicesData.map((service, index) => (
//                       <div
//                           key={index}
//                           className="service-card bg-[#2a3051] border border-4 border-[#242941] rounded-3xl p-10 shadow-2xl mb-10"
//                       >
//                           <p className="text-gray-300 text-sm uppercase tracking-wider mb-3">
//                               {service.subtitle}
//                           </p>

//                           <h3 className="text-4xl font-bold text-white mb-4">
//                               {service.title}
//                           </h3>

//                           <p className="text-gray-300 mb-6 leading-relaxed">
//                               {service.desc}
//                           </p>

//                           <div className="flex flex-wrap gap-3">
//                               {service.tags.map((tag, tagIndex) => (
//                                   <span
//                                       key={tagIndex}
//                                       className="px-4 py-2 bg-[#1a1f3a] text-white text-sm rounded-full"
//                                   >
//                                       {tag}
//                                   </span>
//                               ))}
//                           </div>
//                       </div>
//                   ))}

//                   {/* Extra space so the last card can finish pin duration cleanly */}
//                   <div className="h-[500px]" />
//               </div>
//           </div>
//       </section>
//   )
// }

// "use client"

// import { useEffect, useRef } from "react"
// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

// gsap.registerPlugin(ScrollTrigger)

// const servicesData = [
//     {
//         subtitle: "UX-UI DESIGN",
//         title: "Design Strategy",
//         desc: "We always ensure that it combines a clean and beautiful visual design.",
//         tags: ["UI/UX Audit", "Workshops"],
//     },
//     {
//         subtitle: "STRATEGY & PLANNING",
//         title: "Product Leadership",
//         desc: "We always ensure that it combines a clean and beautiful visual design.",
//         tags: ["UI/UX Audit", "Workshops"],
//     },
//     {
//         subtitle: "WEB DEVELOPMENT",
//         title: "Front-End Development",
//         desc: "We always ensure that it combines a clean and beautiful visual design.",
//         tags: ["UI/UX Audit", "Workshops"],
//     },
//     {
//         subtitle: "SERVER & DATABASE",
//         title: "Back-End Development",
//         desc: "We always ensure that it combines a clean and beautiful visual design.",
//         tags: ["UI/UX Audit", "Workshops"],
//     },
// ]

// export default function Services() {
//     const sectionRef = useRef(null)
//     const leftRef = useRef(null)
//     const cardsWrapRef = useRef(null)

//     useEffect(() => {
//         const ctx = gsap.context(() => {
//             const cards = gsap.utils.toArray(".service-card")

//             const pinLen = 600
//             const topOffset = 120

//             ScrollTrigger.create({
//                 trigger: sectionRef.current,
//                 start: `top top+=${topOffset}`,
//                 end: `+=${(cards.length - 1) * pinLen}`,
//                 pin: leftRef.current,
//                 pinSpacing: false,
//                 anticipatePin: 1,
//             })

//             // ✅ Each card unpins when the next card reaches it
//             cards.forEach((card, index) => {
//                 if (index < cards.length - 1) {
//                     ScrollTrigger.create({
//                         trigger: card,
//                         start: `top top+=${topOffset}`,
//                         end: `+=${pinLen}`,
//                         pin: true,
//                         pinSpacing: false,
//                         anticipatePin: 1,
//                         invalidateOnRefresh: true,
//                     })
//                 }
//             })

//             ScrollTrigger.refresh()
//         }, sectionRef)

//         return () => ctx.revert()
//     }, [])

//     return (
//         <section
//             ref={sectionRef}
//             id="services"
//             className="w-full bg-[#1a1f3a] py-24 px-[5%] overflow-hidden"
//         >
//             <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">

//                 {/* LEFT COLUMN */}
//                 <div
//                     ref={leftRef}
//                     className="lg:w-[45%] text-white flex-shrink-0"
//                 >
//                     <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">
//                         OUR PROCESS
//                     </p>

//                     <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
//                         How We Carry Out Our Projects
//                     </h2>

//                     <p className="text-gray-300 text-lg max-w-md">
//                         We offer a range of services to help elevate your brand & drive results.
//                     </p>
//                 </div>

//                 <div ref={cardsWrapRef} className="flex-1 relative">

//                     {/* top offset so first card pins nicely */}
//                     <div className="h-[120px]" />

//                     {servicesData.map((service, index) => (
//                         <div
//                             key={index}
//                             className="service-card bg-[#2a3051] border border-[#242941] rounded-3xl p-10 shadow-2xl mb-16"
//                         >
//                             <p className="text-gray-300 text-sm uppercase tracking-wider mb-3">
//                                 {service.subtitle}
//                             </p>

//                             <h3 className="text-4xl font-bold text-white mb-4">
//                                 {service.title}
//                             </h3>

//                             <p className="text-gray-300 mb-6 leading-relaxed">
//                                 {service.desc}
//                             </p>
//                         </div>
//                     ))}

//                     {/* Spacer for last card to unpin naturally */}
//                     <div className="h-96" />
//                 </div>

//             </div>
//         </section>
//     )
// }

// "use client"

// import { useEffect, useRef } from "react"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// const services = [
//     {
//         id: 1,
//         title: "Web Development",
//         description: "Building modern, responsive websites with cutting-edge technologies.",
//         color: "#1a1a2e",
//     },
//     {
//         id: 2,
//         title: "UI/UX Design",
//         description: "Creating intuitive and beautiful user experiences that delight.",
//         color: "#16213e",
//     },
//     {
//         id: 3,
//         title: "Mobile Apps",
//         description: "Developing cross-platform mobile applications for iOS and Android.",
//         color: "#0f3460",
//     },
//     {
//         id: 4,
//         title: "Brand Identity",
//         description: "Crafting unique brand identities that stand out from the crowd.",
//         color: "#1a1a2e",
//     },
//     {
//         id: 5,
//         title: "Consulting",
//         description: "Providing expert guidance to help your business grow digitally.",
//         color: "#16213e",
//     },
// ]

// function Services() {
//     const containerRef = useRef(null)
//     const cardsRef = useRef(null)

//     useEffect(() => {
//         gsap.registerPlugin(ScrollTrigger)

//         const cards = gsap.utils.toArray(".service-card")

//         cards.forEach((card, index) => {
//             const isLast = index === cards.length - 1

//             if (!isLast) {
//                 gsap.to(card, {
//                     scale: 0.9 + index * 0.015,
//                     opacity: 0,
//                     scrollTrigger: {
//                         trigger: card,
//                         start: "top 15%",
//                         end: "bottom 15%",
//                         scrub: 0.5,
//                         // markers: true, // uncomment to debug
//                     },
//                 })
//             }
//         })

//         return () => {
//             ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
//         }
//     }, [])

//     return (
//         <div ref={containerRef} className="min-h-screen bg-background">
//             <div className="flex flex-col lg:flex-row min-h-screen">
//                 {/* Left Side - Sticky Text */}
//                 <div className="lg:w-1/2 lg:sticky lg:top-0 lg:h-screen flex items-center justify-center p-8 lg:p-16">
//                     <div className="max-w-md">
//                         <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
//                             My Services
//                             <span className="block text-muted-foreground">are</span>
//                         </h2>
//                         <p className="mt-6 text-lg text-muted-foreground">Scroll down to explore what I can do for you.</p>
//                         <div className="mt-8 flex gap-2">
//                             {services.map((_, i) => (
//                                 <div key={i} className="w-2 h-2 rounded-full bg-muted-foreground/30" />
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Side - Stacking Cards */}
//                 <div ref={cardsRef} className="lg:w-1/2 py-[10vh] lg:py-[20vh]">
//                     <div className="px-4 lg:px-8">
//                         {services.map((service, index) => (
//                             <div
//                                 key={service.id}
//                                 className="service-card sticky top-[15vh] mb-8 last:mb-0"
//                                 style={{
//                                     zIndex: services.length - index,
//                                 }}
//                             >
//                                 <div
//                                     className="rounded-2xl p-8 lg:p-12 min-h-[300px] lg:min-h-[400px] flex flex-col justify-between shadow-2xl"
//                                     style={{ backgroundColor: service.color }}
//                                 >
//                                     <div>
//                                         <span className="text-white/50 text-sm font-medium">0{service.id}</span>
//                                         <h3 className="text-2xl lg:text-4xl font-bold text-white mt-2">{service.title}</h3>
//                                     </div>
//                                     <p className="text-white/80 text-lg lg:text-xl max-w-sm">{service.description}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Services;

"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Code, Palette, Smartphone, Fingerprint, MessageCircle } from "lucide-react"

const services = [
    {
        id: 1,
        title: "Web Development",
        description: "Building modern, responsive websites with cutting-edge technologies and frameworks.",
        icon: Code,
        gradient: "from-purple-500 to-pink-400",
    },
    {
        id: 2,
        title: "UI/UX Design",
        description: "Creating intuitive and beautiful user experiences that delight and engage users.",
        icon: Palette,
        gradient: "from-pink-500 to-purple-400",
    },
    {
        id: 3,
        title: "Mobile Apps",
        description: "Developing cross-platform mobile applications for iOS and Android devices.",
        icon: Smartphone,
        gradient: "from-purple-400 to-indigo-500",
    },
    {
        id: 4,
        title: "Brand Identity",
        description: "Crafting unique brand identities that stand out and leave lasting impressions.",
        icon: Fingerprint,
        gradient: "from-pink-400 to-rose-500",
    },
    {
        id: 5,
        title: "Consulting",
        description: "Providing expert guidance to help your business grow and scale digitally.",
        icon: MessageCircle,
        gradient: "from-indigo-400 to-purple-500",
    },
]

function Services() {
    const containerRef = useRef(null)
    const cardsRef = useRef(null)

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
            style={{ background: "linear-gradient(180deg, #0a0a12 0%, #0d0d18 100%)" }}
        >
            <div className="flex flex-col lg:flex-row min-h-screen">
                {/* Left Side - Sticky Text */}
                <div className="lg:w-1/2 lg:sticky lg:top-0 lg:h-screen flex items-center justify-center p-8 lg:p-16">
                    <div className="max-w-md">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-8">
                            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                            <span className="text-purple-300 text-sm font-medium tracking-wide">SERVICES</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-none tracking-tight">
                            My Services
                            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mt-2">
                                are
                            </span>
                        </h2>
                        <p className="mt-8 text-lg text-gray-300 leading-relaxed">
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

                {/* Right Side - Stacking Cards */}
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
                                        className={`group relative rounded-2xl p-8 lg:p-10 min-h-[320px] lg:min-h-[400px] flex flex-col justify-between bg-[#1a1a2e]/80 border border-purple-900/30 hover:border-purple-500/50 backdrop-blur-sm shadow-2xl shadow-black/30 overflow-hidden transition-all duration-500`}
                                    >
                                        {/* Gradient accent line */}
                                        <div
                                            className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${service.gradient} opacity-50`}
                                        />

                                        {/* Corner glow - updated to purple */}
                                        <div
                                            className={`absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br ${service.gradient} opacity-[0.07] blur-3xl rounded-full transition-opacity duration-700 group-hover:opacity-[0.15]`}
                                        />

                                        {/* Hover glow effect */}
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
                                            <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">{service.title}</h3>
                                        </div>

                                        <div className="relative z-10">
                                            <p className="text-gray-300 text-base lg:text-lg leading-relaxed max-w-sm">
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
