// import React, { useEffect, useRef, useState } from 'react';
// import { assets } from '../../../assets/assets';
// import Image from 'next/image';

// const Navbar = () => {
//     const [isScroll, setIsScroll] = useState(false);
//     const sideMenuRef = useRef(null);

//     const openMenu = () => {
//         sideMenuRef.current.style.transform = 'translateX(-16rem)';
//     }
//     const closeMenu = () => {
//         sideMenuRef.current.style.transform = 'translateX(16rem)';
//     }

//     useEffect(() => {
//         window.addEventListener("scroll", () => {
//             if (window.scrollY > 50) {
//                 setIsScroll(true);
//             } else {
//                 setIsScroll(false);
//             }
//         })
//     }, [isScroll]);


//   return (
//       <>
//           <div className='fixed top-0 right-0 w-11/12 z-[-1] translate-y-[-50%] opacity-50'>
//               <Image src={assets.header_bg_color_two} alt='header-bg' className='w-full' />
//           </div>

//           <nav className={`w-full flex items-center justify-between absolute top-0 left-0 px-5 lg:px-8 xl:px-[8%] py-4 z-50
//              ${isScroll ? "bg-white/50 shadow-sm backdrop-blur-lg " : ""}`}>

//               <a href='#home' className='flex-1  '>
//                   <h2 className='font-extrabold md:text-4xl text-3xl font-Outfit'>AD<span className='text-orange-600 text-3xl'>.</span></h2>
//               </a>

//               <ul className={`hidden md:flex flex-1 justify-center items-center gap-6 lg:gap-8 rounded-full px-12 py-3 font-Ovo
//                  ${isScroll ? "" : "bg-white/80 shadow-sm"}`}>
//                   <li><a  href="#home">Home</a></li>
//                   <li><a  href="#about">About</a></li>
//                   <li><a href="#services">Services</a></li>
//                   <li><a href="#portfolio">Portfolio</a></li>
//                   <li><a href="#contact">Contact</a></li>
//               </ul>

//               <div className=' flex gap-4 justify-end flex-1  items-center'>
//                   <button>
//                       <Image src={assets.moon_icon} alt='moon' className="w-6" />
//                   </button>
//                   <a
//                       href="#resume"
//                       className='hidden lg:flex  items-center gap-3 px-10 py-2 border border-gray-500 rounded-full ml-4  hover:bg-black/80 '>
//                       Resume
//                       <Image src={assets.arrow_dark} alt='arrow' className="arrow w-3" />
//                   </a>
//               </div>


//                   {/* MOBILE MENU BUTTON */}
//               {/* <button ref={sideMenuRef} className=' flex items-center font-Outfit font-bold text-[17px] uppercase border border-gray-500 rounded-full px-6 py-1 gap-1.5 cursor-pointer menu-bg'
//               > */}
//               {/* <span>Menu</span> */}
//               <div className="menu-trigger pt-2 md:hidden ml-3" onClick={openMenu}>
//                   <span className="menu-trigger-icon">
//                       <span className="hamburger ">
//                           <span></span>
//                           <span></span>
//                           <span></span>
//                       </span>
//                   </span>
//               </div>
//               {/* </button> */}

//                   {/* mobile menu List */}
//                   <ul ref={sideMenuRef} className={`md:hidden fixed top-0 bottom-0 w-64 z-50 bg-rose-50 h-screen flex flex-col gap-6 py-20 px-10  transition-all duration-500 font-ovo -right-64
//                     `}>
//                       <div className='absolute top-5 right-5' onClick={closeMenu}>
//                           <Image src={ assets.arrow_dark} alt='' className='w-4 cursor-pointer'  />
//                       </div>
//                       <li><a href="#home" onClick={closeMenu}>Home</a></li>
//                       <li><a href="#about" onClick={closeMenu}>About</a></li>
//                       <li><a href="#services" onClick={closeMenu}>Services</a></li>
//                   <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
//                       <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
//                   </ul>

//       </nav>
//       </>
//   )
// }

// export default Navbar;


"use client"

import { useState, useEffect } from "react"
import { gsap } from "gsap"

function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(true)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Contact", href: "#contact" },
    ]

    useEffect(() => {
        // Animate navbar on load
        gsap.fromTo(
            ".nav-item",
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out", delay: 0.5 },
        )

        // Handle scroll
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    // For now, just toggle state - full theme implementation can be added later
    }

    const scrollToSection = (href) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
        setIsMobileMenuOpen(false)
    }

    return (
        <nav
            className={`absolute top-0 left-0 right-0 z-50  transition-all duration-300 ${isScrolled ? "bg-[#0a0a12]/90 backdrop-blur-md border-b border-purple-500/10 py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo - Left */}
                <a href="#home" className="nav-item flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">MA</span>
                    </div>
                    {/* <span className="text-white font-semibold text-lg hidden sm:block group-hover:text-purple-400 transition-colors">
                        Muhammad Adil
                    </span> */}
                </a>

                {/* Nav Links - Center (Desktop) */}
                <div className="hidden md:flex items-center gap-1  rounded-full px-4 py-2">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollToSection(link.href)}
                            className="nav-item  cursor-pointer px-4 py-2 text-gray-300 hover:text-white rounded-full hover:bg-white/5 transition-all duration-300 text-sm font-medium"
                        >
                            {link.name}
                        </button>
                    ))}
                    {/* Right Side - Theme Toggle & Mobile Menu */}
                    <div className="flex items-center gap-3">
                        {/* Dark/Light Mode Toggle */}
                        <button
                            onClick={toggleDarkMode}
                            className="nav-item w-10 h-10 rounded-full bg-[#1a1a2e]/80 border border-purple-500/20 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
                            aria-label="Toggle theme"
                        >
                            {isDarkMode ? (
                                // Sun icon for light mode
                                <svg
                                    className="w-5 h-5 text-gray-300 group-hover:text-yellow-400 transition-colors"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <circle cx="12" cy="12" r="5" strokeWidth="2" />
                                    <path
                                        strokeLinecap="round"
                                        strokeWidth="2"
                                        d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                                    />
                                </svg>
                            ) : (
                                // Moon icon for dark mode
                                <svg
                                    className="w-5 h-5 text-gray-300 group-hover:text-purple-400 transition-colors"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                    />
                                </svg>
                            )}
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="nav-item md:hidden w-10 h-10 rounded-full bg-[#1a1a2e]/80 border border-purple-500/20 flex items-center justify-center hover:bg-purple-500/20 transition-all duration-300"
                            aria-label="Toggle menu"
                        >
                            <div className="flex flex-col gap-1.5">
                                <span
                                    className={`w-5 h-0.5 bg-gray-300 transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                                        }`}
                                />
                                <span
                                    className={`w-5 h-0.5 bg-gray-300 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
                                />
                                <span
                                    className={`w-5 h-0.5 bg-gray-300 transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                                        }`}
                                />
                            </div>
                        </button>
                    </div>
                </div>


            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute top-full left-0 right-0 bg-[#0a0a12]/95 backdrop-blur-md border-b border-purple-500/10 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-64 py-4" : "max-h-0 py-0"
                    }`}
            >
                <div className="flex flex-col items-center gap-2 px-6">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollToSection(link.href)}
                            className="w-full py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300 text-sm font-medium"
                        >
                            {link.name}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;