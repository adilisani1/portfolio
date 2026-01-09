// import React from 'react';
// import { RiSendPlaneFill } from "react-icons/ri";
// import { HiOutlineMail } from "react-icons/hi";
// import { LuPhoneCall } from "react-icons/lu";
// import { socialMedia } from '../../../assets/assets';


// const Contact = () => {
//   return (
//       <div id='contact' className='w-full px-[6%] md:px-[12%] py-10 scroll-mt-20'>
//           <h4 className='text-center mb-2 text-lg font-ovo'>Contact</h4>
//           <h2 className='text-center text-5xl font-ovo mb-10'>Get in touch</h2>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-2">
//               <div className="md:col-span-1 flex flex-col max-w-2xl">
//                   <h3 className="mb-2 text-md font-ovo font-black">Connect with me !</h3>
//                   <p className="md:text-[19.5px] font-ovo mb-8 ">
//                       Feel free to reach out if you have any questions or need help with a project.
//                   </p>
//                   <div>
//                       <div className='flex gap-3'>
//                               <div className=' w-11 h-11 rounded-full
//                           flex justify-center items-center bg-black/70' >
//                               <HiOutlineMail className="text-white text-[20px]" />
//                           </div>
//                           <div>
//                               <p className="text-sm font-ovo font-light leading-4">Email me:</p>
//                               <a href="mailto:adil.isani1@gmail.com" className="text-[#1A1213] flex text-md gap-3 mb-3 font-semibold ">
//                                   adil.isani1@gmail.com
//                               </a>
//                           </div>
//                       </div>
//                       <div className='flex gap-3'>
//                           <div className=' w-11 h-11 rounded-full
//                           flex justify-center items-center bg-black/70' >
//                               <LuPhoneCall className=" text-white text-[18.5px]" />
//                           </div>
//                           <div>
//                               <p className="text-sm font-ovo font-light leading-4">Contact:</p>
//                               <a href="phone" className="text-black flex gap-3 font-semibold mb-3">
//                                   +92 (321) 3427371
//                               </a>
//                           </div>
//                       </div>
//                   </div>

//                       <div className="flex gap-3 mt-3 md:mb-5 mb-7">
//                           {socialMedia.map((social, index) => (
//                               <a key={index} href={social.url} target="_blank" rel="noopener noreferrer"
//                                   className='flex items-center text-[20px] gap-2 font-ovo duration-500 transition-all hover:translate-y-1'>
//                                   <span className='bg-black/70 rounded-4xl w-9 h-9 p-2.5 flex
//                               justify-center items-center text-white '> {social.icon}</span>
//                               </a>
//                           ))}
//                       </div>
                
//               </div>
//               <div className="md:col-span-2 flex justify-center ">
//                   <form className="md:p-3 rounded-4xl w-full max-w-[50rem] md:ml-auto">
//                       <div className="grid grid-cols-2 mb-5 gap-5">
//                           <input
//                               className="flex-1 px-5 py-2 outline-none border-none bg-gray-200 rounded-xl"
//                               type="email"
//                               placeholder="Enter your email"
//                               required
//                           />
//                           <input
//                               className="flex-1 px-5 py-2 outline-none border-none bg-gray-200 rounded-xl"
//                               type="text"
//                               placeholder="Enter your name"
//                               required
//                           />
//                       </div>
//                       <textarea
//                           className="w-full px-5 py-3 outline-none mb-5 flex-1 border-none bg-gray-200 rounded-xl"
//                           rows="6"
//                           placeholder="Enter your message"
//                       ></textarea>
//                       <div>
//                           <button
//                               type="submit"
//                               className="md:px-8 md:py-3 px-5 py-2.5 w-max text-white flex items-center gap-2 font-ovo text-sm md:text-lg bg-black/80 justify-between rounded-xl cursor-pointer duration-500 buttons"
//                           >
//                               Submit Now
//                               <span>
//                                   <RiSendPlaneFill className="w-5 h-5" />
//                               </span>
//                           </button>
//                       </div>
//                   </form>
//               </div>
//           </div>



//     </div >
//   )
// }

// export default Contact



"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function Contact() {
    const sectionRef = useRef(null)
    const formRef = useRef(null)
    const infoRef = useRef(null)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(infoRef.current.children, {
                scrollTrigger: {
                    trigger: infoRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
                y: 40,
                opacity: 0,
                duration: 0.6,
                stagger: 0.12,
                ease: "power2.out",
            })

            gsap.from(formRef.current, {
                scrollTrigger: {
                    trigger: formRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
                y: 40,
                opacity: 0,
                scale: 0.98,
                duration: 0.8,
                ease: "power2.out",
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate submission
        await new Promise((resolve) => setTimeout(resolve, 1500))
        console.log("Form submitted:", formData)
        setIsSubmitting(false)
        setFormData({ name: "", email: "", subject: "", message: "" })
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="min-h-screen py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden"
            style={{ background: "linear-gradient(180deg, #0a0a12 0%, #0d0d18 100%)" }}
        >
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/3 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto relative z-10  px-6 md:px-12 pt-24 pb-12 ">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-purple-500/30 bg-purple-500/10 mb-10">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-400" />
                        </span>
                        <span className="text-purple-300 text-sm font-medium tracking-wider uppercase">Get In Touch</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                        Let's Work{" "}
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                            Together
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Have a project in mind? Let's discuss how we can bring your ideas to life and create something extraordinary
                        together.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
                    <div ref={infoRef} className="lg:col-span-2 space-y-10">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">Contact Information</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Feel free to reach out for collaborations, opportunities, or just a friendly chat about web development.
                            </p>
                        </div>

                        <div className="space-y-5">
                            {[
                                {
                                    icon: (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    ),
                                    label: "Email",
                                    value: "hello@muhammadadil.dev",
                                },
                                {
                                    icon: (
                                        <>
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </>
                                    ),
                                    label: "Location",
                                    value: "Available Worldwide (Remote)",
                                },
                                {
                                    icon: (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    ),
                                    label: "Availability",
                                    value: "Open for Freelance Projects",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="group flex items-center gap-5 p-5 rounded-2xl bg-gradient-to-br from-[#1a1a2e]/90 to-[#16162a]/90 border border-purple-500/10 hover:border-purple-500/40 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/5"
                                >
                                    <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/10 group-hover:from-purple-500/30 group-hover:to-pink-500/20 transition-all duration-500">
                                        <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            {item.icon}
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-sm font-medium mb-1">{item.label}</p>
                                        <p className="text-white font-semibold text-lg">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <h4 className="text-white font-semibold text-lg mb-5">Follow Me</h4>
                            <div className="flex gap-4">
                                {[
                                    { name: "GitHub", icon: GitHubIcon },
                                    { name: "LinkedIn", icon: LinkedInIcon },
                                    { name: "Twitter", icon: TwitterIcon },
                                    { name: "Instagram", icon: InstagramIcon },
                                ].map((social) => (
                                    <a
                                        key={social.name}
                                        href="#"
                                        className="group relative p-4 rounded-2xl bg-gradient-to-br from-[#1a1a2e]/90 to-[#16162a]/90 border border-purple-500/10 hover:border-purple-500/40 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10 overflow-hidden"
                                        aria-label={social.name}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 transition-all duration-500" />
                                        <social.icon className="relative w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div
                        ref={formRef}
                        className="lg:col-span-3 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[#1a1a2e]/80 to-[#14142a]/80 border border-purple-500/10 backdrop-blur-xl shadow-2xl shadow-purple-500/5 relative overflow-hidden"
                    >
                        {/* Form glow effect */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

                        <form onSubmit={handleSubmit} className="relative space-y-7">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="block text-gray-300 text-sm font-semibold">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full px-5 py-4 rounded-xl bg-[#0d0d18]/80 border border-purple-500/20 text-white placeholder-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all duration-300 text-base"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-gray-300 text-sm font-semibold">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="w-full px-5 py-4 rounded-xl bg-[#0d0d18]/80 border border-purple-500/20 text-white placeholder-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all duration-300 text-base"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="block text-gray-300 text-sm font-semibold">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Project Inquiry"
                                    className="w-full px-5 py-4 rounded-xl bg-[#0d0d18]/80 border border-purple-500/20 text-white placeholder-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all duration-300 text-base"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-gray-300 text-sm font-semibold">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project..."
                                    rows={6}
                                    className="w-full px-5 py-4 rounded-xl bg-[#0d0d18]/80 border border-purple-500/20 text-white placeholder-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all duration-300 resize-none text-base"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group relative w-full py-5 px-8 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/25 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <span className="relative flex items-center justify-center gap-3">
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                />
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <svg
                                                className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2.5}
                                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                />
                                            </svg>
                                        </>
                                    )}
                                </span>
                            </button>

                            <p className="text-center text-gray-500 text-sm pt-2">I'll get back to you within 24 hours</p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

// Social Icons using SVG
function GitHubIcon({ className }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
    )
}

function LinkedInIcon({ className }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    )
}

function TwitterIcon({ className }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    )
}

function InstagramIcon({ className }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
    )
}

export default Contact;