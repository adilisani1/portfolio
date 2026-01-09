// import React, { useState } from 'react'
// import { assets, portfolioData } from '../../../assets/assets';
// import Image from 'next/image';

// const Portfolio = () => {

//     const [portfolio, setPortfolio] = useState(portfolioData);
//     const [activeCategory, setActiveCategory] = useState('All');
//     const [page, setPage] = useState(1);
//     const PROJECT_SHOW = 4

//     const filteredCategory = ['All', ...new Set(portfolioData.map(proj => proj.category))]
//     console.log(filteredCategory);


//     const handleCategoryClick = category => {
//         if (category === 'All') {
//             setPortfolio(portfolioData);
//         } else {
//             setPortfolio(portfolioData.filter(project => project.category === category));
//         }
//         setActiveCategory(category);
//         setPage(1)
//     };

//     const handlePageChange = (newPage) => {
//         setPage(newPage);
//     };

//     const totalPages = portfolio.length;
//     const noOfPages = Math.ceil(totalPages / PROJECT_SHOW)
//     const start = (page - 1) * PROJECT_SHOW;
//     const end = start + PROJECT_SHOW;

//     return (
//         <div id='portfolio' className='w-full px-[12%] py-10 scroll-mt-20'>

//             <h4 className='text-center mb-2 text-lg font-ovo'>Portfolio</h4>
//             <h2 className='text-center text-5xl font-ovo'>My Latest Work</h2>
//             <p className='text-center max-w-4xl mx-auto mt-5 mb-12 font-ovo'>
//                 My portfolio highlights projects that demonstrate my skills in ReactJS, NextJS, and web accessibility.
//             </p>
           
//             {/* Categories */}
//             <div className="text-center flex justify-center">
//                 <ul className="flex items-center justify-center gap-2 rounded-full bg-gray-100 w-fit py-1.5 px-1.5 ">
//                     {filteredCategory.map((category, index) => (
//                         <li key={index}>
//                             <button
//                                 className={`
//             px-6 py-2 rounded-full font-Outfit text-md cursor-pointer
//             text-pink-400
    
//             transition-colors duration-500
//             ${activeCategory === category
//                                         ? 'bg-pink-500 text-white'
//                                         : ''
//                                     }
//           `}
//                                 onClick={() => handleCategoryClick(category)}
//                             >
//                                 {category}
//                             </button>
//                         </li>
//                     ))}
//                 </ul>
//             </div>


//             {/* <!-- Categories End --> */}
//             <div className='grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2  gap-10 my-10 '>
//                 {portfolio.slice(start, end).map((project, index) => (
//                     <div key={index}
//                         className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative
//                         cursor-pointer group' style={{ backgroundImage: `url(${project.imgSrc})` }}>
//                         <div className='bg-white w-10/12  rounded-md absolute
//                          bottom-4 left-0 right-0 mx-auto py-3 px-5 flex items-center
//                          justify-between duration-500 group-hover:bottom-7'>
//                             <div className=''>
//                                 <h2 className='font-semibold'>{project.title}</h2>
//                                 <p className='text-sm text-gray-700'>{project.category}</p>
//                             </div>
//                             <div>
//                                 <Image src={assets.arrow_dark} alt="" className="w-5" />
//                             </div>
//                         </div>
//                     </div>
//                 ))}
               
//             </div>
//             {/* Pagination */}
//             <div className="flex justify-center my-10">
//                 {[...Array(noOfPages).keys()].map((_, index) => (
//                     <button
//                         key={index}
//                         className={`mx-1 w-10 h-10 rounded-full font-Outfit text-md cursor-pointer bg-gray-200 text-gray-700 transition-colors duration-500 ${page === index + 1 ? 'bg-pink-500 text-white' : ''}`}
//                         onClick={() => handlePageChange(index + 1)}
//                     >
//                         {index + 1}
//                     </button>
//                 ))}
//             </div>
//         </div>
//   )
// }

// export default Portfolio;
// "use client"

// import { useEffect, useRef, useState } from "react"
// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
// import { assets, portfolioData } from "../../../assets/assets"
// import Image from "next/image"
// gsap.registerPlugin(ScrollTrigger)

// const Portfolio = () => {
//     const sectionRef = useRef(null)
//     const titleRef = useRef(null)
//     const subtitleRef = useRef(null)
//     const dividerRef = useRef(null)
//     const projectRefs = useRef([])
//     const [hoveredIndex, setHoveredIndex] = useState(null)

//     useEffect(() => {
//         const ctx = gsap.context(() => {
//             gsap.from(titleRef.current, {
//                 y: 50,
//                 opacity: 0,
//                 duration: 1,
//                 ease: "power3.out",
//                 scrollTrigger: {
//                     trigger: titleRef.current,
//                     start: "top 80%",
//                 },
//             })

//             gsap.from(subtitleRef.current, {
//                 y: 30,
//                 opacity: 0,
//                 duration: 1,
//                 delay: 0.2,
//                 ease: "power3.out",
//                 scrollTrigger: {
//                     trigger: subtitleRef.current,
//                     start: "top 80%",
//                 },
//             })

//             gsap.from(dividerRef.current, {
//                 scaleX: 0,
//                 duration: 1,
//                 delay: 0.4,
//                 ease: "power3.out",
//                 scrollTrigger: {
//                     trigger: dividerRef.current,
//                     start: "top 80%",
//                 },
//             })

//             projectRefs.current.forEach((project, index) => {
//                 if (project) {
//                     gsap.from(project, {
//                         y: 60,
//                         opacity: 0,
//                         duration: 0.8,
//                         delay: 0.6 + index * 0.15,
//                         ease: "power3.out",
//                         scrollTrigger: {
//                             trigger: project,
//                             start: "top 90%",
//                         },
//                     })
//                 }
//             })
//         }, sectionRef)

//         return () => ctx.revert()
//     }, [])

//     return (
//         <div
//             id="portfolio"
//             ref={sectionRef}
//             className="w-full px-[8%] py-24 scroll-mt-20 relative overflow-hidden"
//             // style={{
//             //     background: "#ffffff",
//             // }}
//         >
//             {/* <div className='fixed top-0 right-0 w-11/12 z-[-1] translate-y-[-50%] opacity-50'>
//                 <Image src={assets.header_bg_color_two} alt='header-bg' className='w-full' />
//             </div> */}
//             <h1
//                 ref={titleRef}
//                 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-4 relative z-10"
//                 style={{ letterSpacing: "-0.03em", lineHeight: "1" }}
//             >
//                 Projects
//             </h1>

//             <p ref={subtitleRef} className="text-gray-600 text-base md:text-lg mb-16 max-w-2xl leading-relaxed relative z-10">
//                 A selection of some of my favorite website and design projects.
//             </p>

//             <div
//                 ref={dividerRef}
//                 className="w-full h-[0.5px] bg-gray-300 mb-8 relative z-10"
//                 style={{ transformOrigin: "left" }}
//             />

//             <div className="space-y-0 relative z-10">
//                 {portfolioData.map((project, index) => (
//                     <div
//                         key={index}
//                         ref={(el) => (projectRefs.current[index] = el)}
//                         onMouseEnter={() => setHoveredIndex(index)}
//                         onMouseLeave={() => setHoveredIndex(null)}
//                         className="group relative grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center py-10 border-b border-gray-200 cursor-pointer transition-all duration-300"
//                     >
//                         {/* Left side - Text Content */}
//                         <div className="space-y-3 z-10">
//                             <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
//                                 {project.title}
//                             </h2>
//                             <div className="inline-block">
//                                 <span className="text-yellow-600 text-sm md:text-base font-medium tracking-wide uppercase">
//                                     {project.category}
//                                 </span>
//                             </div>
//                         </div>

//                         <div
//                             className={`relative overflow-hidden rounded-lg transition-all duration-500 ease-out ${hoveredIndex === index
//                                     ? "w-[280px] h-[200px] md:w-[320px] md:h-[240px] opacity-100 scale-100"
//                                     : "w-0 h-0 opacity-0 scale-95"
//                                 }`}
//                         >
//                             <Image
//                                 fill={true}
                                
//                                 src={project.imgSrc || "/placeholder.svg?height=240&width=320"}
//                                 alt={project.alt}
//                                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                             />

//                             {/* Overlay with View Project */}
//                             <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/50 flex items-center justify-center">
//                                 <a
//                                     href={project.link}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="flex items-center gap-2 text-white text-base md:text-lg font-medium bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full hover:bg-white/20 hover:gap-3 transition-all duration-300"
//                                     onClick={(e) => e.stopPropagation()}
//                                 >
//                                     View Project
//                                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                                     </svg>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Portfolio















// "use client"

// import { useRef, useEffect, useState } from "react"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { MdArrowOutward } from "react-icons/md"
// import Image from "next/image"

// // Register GSAP plugin safely
// if (typeof window !== "undefined") {
//     gsap.registerPlugin(ScrollTrigger)
// }

// const projects = [
//     {
//         title: "Next.js Todo App",
//         description: "Next.js",
//         link: "#",
//         image: "/nextjs-todo-app.jpg",
//     },
//     {
//         title: "E-commerce Platform",
//         description: "React • TypeScript",
//         link: "#",
//         image: "/ecommerce-platform-concept.png",
//     },
//     {
//         title: "Portfolio Website",
//         description: "Next.js • Tailwind",
//         link: "#",
//         image: "/portfolio-website-showcase.png",
//     },
//     {
//         title: "Dashboard Analytics",
//         description: "React • D3.js",
//         link: "#",
//         image: "/analytics-dashboard.png",
//     },
// ]

// function Portfolio({ viewMoreText = "View More" }) {
//     const component = useRef(null)
//     const itemsRef = useRef([])
//     const revealRef = useRef(null)
//     const [currentItem, setCurrentItem] = useState(null)
//     const [imageError, setImageError] = useState(false)
//     const lastMousePos = useRef({ x: 0, y: 0 })

//     // --- Animate list items on mount ---
//     useEffect(() => {
//         const ctx = gsap.context(() => {
//             itemsRef.current.forEach((item, index) => {
//                 gsap.fromTo(
//                     item,
//                     { opacity: 0, y: 20 },
//                     {
//                         opacity: 1,
//                         y: 0,
//                         duration: 1.3,
//                         ease: "elastic.out(1, 0.3)",
//                         delay: index * 0.2,
//                     },
//                 )
//             })
//         }, component)

//         return () => ctx.revert()
//     }, [])

//     // --- Handle mouse movement for floating image ---
//     useEffect(() => {
//         const handleMouseMove = (e) => {
//             if (currentItem === null || !revealRef.current) return

//             const mousePos = { x: e.clientX, y: e.clientY + window.scrollY }
//             const speed = Math.abs(mousePos.x - lastMousePos.current.x)
//             const maxY = window.scrollY + window.innerHeight - 350
//             const maxX = window.innerWidth - 250

//             gsap.to(revealRef.current, {
//                 x: gsap.utils.clamp(0, maxX, mousePos.x - 110),
//                 y: gsap.utils.clamp(0, maxY, mousePos.y - 160),
//                 rotation: speed * (mousePos.x > lastMousePos.current.x ? 1 : -1),
//                 ease: "back.out(2)",
//                 duration: 1.2,
//             })

//             lastMousePos.current = mousePos
//         }

//         window.addEventListener("mousemove", handleMouseMove)
//         return () => window.removeEventListener("mousemove", handleMouseMove)
//     }, [currentItem])

//     // Reset image error when item changes
//     useEffect(() => {
//         setImageError(false)
//     }, [currentItem])

//     // --- Handle image reveal animation ---
//     useEffect(() => {
//         const ctx = gsap.context(() => {
//             if (currentItem !== null) {
//                 // Show image container
//                 gsap.to(revealRef.current, {
//                     opacity: 1,
//                     scale: 1,
//                     visibility: "visible",
//                     ease: "power3.inOut",
//                     duration: 0.4,
//                 })

//                 // Animate image element or fallback div safely
//                 const imgEl = revealRef.current?.querySelector("img")
//                 const fallbackEl = revealRef.current?.querySelector(".fallback-message")
//                 if (imgEl && !imageError) {
//                     gsap.to(imgEl, {
//                         opacity: 1,
//                         scale: 1,
//                         duration: 1.2,
//                         ease: "power3.inOut",
//                     })
//                 } else if (fallbackEl) {
//                     gsap.to(fallbackEl, {
//                         opacity: 1,
//                         scale: 1,
//                         duration: 1.2,
//                         ease: "power3.inOut",
//                     })
//                 }
//             } else {
//                 // Hide image container
//                 gsap.to(revealRef.current, {
//                     opacity: 0,
//                     scale: 0.9,
//                     visibility: "hidden",
//                     ease: "power3.inOut",
//                     duration: 0.4,
//                 })
//             }
//         }, component)

//         return () => ctx.revert()
//     }, [currentItem, imageError])

//     const onMouseEnter = (index) => setCurrentItem(index)
//     const onMouseLeave = () => setCurrentItem(null)

//     // --- Get current image from project data instead of fallback ---
//     const currentImage = currentItem !== null ? projects[currentItem]?.image : null

//     return (
//         <div>
//             <ul ref={component} className="grid border-b border-b-slate-700" onMouseLeave={onMouseLeave}>
//                 {projects.map((project, index) => (
//                     <li
//                         key={index}
//                         ref={(el) => {
//                             itemsRef.current[index] = el
//                         }}
//                         onMouseEnter={() => onMouseEnter(index)}
//                         className="list-item opacity-0"
//                     >
//                         <a href={project.link}>
//                             <div className="flex flex-col justify-between border-t border-t-slate-700 py-10 text-slate-200 md:flex-row hover:bg-slate-800/30 transition-colors px-4 md:px-6">
//                                 <div className="flex flex-col">
//                                     <span className="text-3xl font-bold">{project.title}</span>
//                                     <div className="text-lg text-slate-400 mt-2">{project.description}</div>
//                                 </div>
//                                 <span className="ml-auto flex items-center gap-2 text-xl font-medium md:ml-0 mt-4 md:mt-0">
//                                     {viewMoreText} <MdArrowOutward />
//                                 </span>
//                             </div>
//                         </a>
//                     </li>
//                 ))}
//             </ul>

//             {/* Floating hover image */}
//             <div
//                 ref={revealRef}
//                 className="hover-reveal pointer-events-none fixed left-0 top-0 z-50 h-[320px] w-[220px] rounded-lg opacity-0 shadow-2xl overflow-hidden bg-slate-800"
//             >
//                 {currentItem !== null && (
//                     <div className="relative w-full h-full">
//                         {currentImage && !imageError ? (
//                             <Image
//                                 src={currentImage}
//                                 alt="Project preview"
//                                 className="rounded-lg object-cover opacity-0"
//                                 fill={true}
//                                 onError={() => {
//                                     setImageError(true)
//                                 }}
//                             />
//                         ) : (
//                             <div className="fallback-message absolute inset-0 flex items-center justify-center bg-slate-700 text-slate-400 text-sm opacity-0">
//                                 <div className="text-center">
//                                     <div className="mb-2">📷</div>
//                                     <div>No preview available</div>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 )}
//             </div>
//         </div>
//     )
// }
// export default Portfolio;

// "use client"

// import { useRef, useEffect, useState } from "react"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { MdArrowOutward } from "react-icons/md"
// import Image from "next/image"
// import { assets } from "../../../assets/assets"

// // Register GSAP plugin safely
// if (typeof window !== "undefined") {
//     gsap.registerPlugin(ScrollTrigger)
// }

// const projects = [
//     {
//         title: "Next.js Todo App",
//         description: "Next.js • TypeScript • Tailwind CSS",
//         link: "#",
//         image: "/todo-app-dashboard-interface.jpg",
//         gradient: "from-purple-600 to-pink-600",
//     },
//     {
//         title: "E-commerce Platform",
//         description: "React • Node.js • MongoDB",
//         link: "#",
//         image: "/happycart-wbsite.png",
//         gradient: "from-blue-600 to-purple-600",
//     },
//     {
//         title: "Portfolio Website",
//         description: "Next.js • Tailwind • GSAP",
//         link: "#",
//         image: "/portfolio-design-showcase.jpg",
//         gradient: "from-cyan-600 to-blue-600",
//     },
//     {
//         title: "Dashboard Analytics",
//         description: "React • D3.js • Redux",
//         link: "#",
//         image: "/analytics-dashboard-charts.png",
//         gradient: "from-pink-600 to-purple-600",
//     },
// ]

// function Portfolio({ viewMoreText = "View Project" }) {
//     const component = useRef(null)
//     const itemsRef = useRef([])
//     const revealRef = useRef(null)
//     const [currentItem, setCurrentItem] = useState(null)
//     const lastMousePos = useRef({ x: 0, y: 0 })

//     // --- Animate list items on mount ---
//     useEffect(() => {
//         const ctx = gsap.context(() => {
//             itemsRef.current.forEach((item, index) => {
//                 gsap.fromTo(
//                     item,
//                     { opacity: 0, y: 20 },
//                     {
//                         opacity: 1,
//                         y: 0,
//                         duration: 0.8,
//                         ease: "power3.out",
//                         delay: index * 0.15,
//                     },
//                 )
//             })
//         }, component)

//         return () => ctx.revert()
//     }, [])

//     // --- Handle mouse movement for floating image ---
//     useEffect(() => {
//         const handleMouseMove = (e) => {
//             if (currentItem === null || !revealRef.current) return

//             const mousePos = { x: e.clientX, y: e.clientY + window.scrollY }
//             const speed = Math.abs(mousePos.x - lastMousePos.current.x)
//             const maxY = window.scrollY + window.innerHeight - 350
//             const maxX = window.innerWidth - 250

//             gsap.to(revealRef.current, {
//                 x: gsap.utils.clamp(0, maxX, mousePos.x - 110),
//                 y: gsap.utils.clamp(0, maxY, mousePos.y - 160),
//                 rotation: speed * (mousePos.x > lastMousePos.current.x ? 1 : -1),
//                 ease: "back.out(2)",
//                 duration: 1,
//             })

//             lastMousePos.current = mousePos
//         }

//         window.addEventListener("mousemove", handleMouseMove)
//         return () => window.removeEventListener("mousemove", handleMouseMove)
//     }, [currentItem])

//     // --- Handle image reveal animation ---
//     useEffect(() => {
//         const ctx = gsap.context(() => {
//             if (currentItem !== null) {
//                 gsap.to(revealRef.current, {
//                     opacity: 1,
//                     scale: 1,
//                     visibility: "visible",
//                     ease: "power3.inOut",
//                     duration: 0.4,
//                 })

//                 const imgEl = revealRef.current?.querySelector("img")
//                 if (imgEl) {
//                     gsap.to(imgEl, {
//                         opacity: 1,
//                         scale: 1,
//                         duration: 0.8,
//                         ease: "power3.inOut",
//                     })
//                 }
//             } else {
//                 gsap.to(revealRef.current, {
//                     opacity: 0,
//                     scale: 0.9,
//                     visibility: "hidden",
//                     ease: "power3.inOut",
//                     duration: 0.4,
//                 })
//                 const imgEl = revealRef.current?.querySelector("img")
//                 if (imgEl) {
//                     gsap.to(imgEl, {
//                         opacity: 0,
//                         scale: 0.95,
//                         duration: 0.4,
//                     })
//                 }
//             }
//         }, component)

//         return () => ctx.revert()
//     }, [currentItem])

//     const onMouseEnter = (index) => setCurrentItem(index)
//     const onMouseLeave = () => setCurrentItem(null)

//     const currentImage = currentItem !== null ? projects[currentItem]?.image : null

//     return (
//         <section className=" w-full bg-gradient-to-b from-[#0a0a12] to-[#0d0d18] relative overflow-x-hidden" id="portfolio">
//             {/* Section header */}
//             <div className="relative px-6 md:px-12 pt-24 pb-12">
//                 <div className="flex items-center gap-3 mb-6">
//                     <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
//                     <span className="text-sm font-semibold text-purple-400 uppercase tracking-widest">FEATURED WORKS</span>
//                 </div>
//                 <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 text-balance">
//                     Latest{" "}
//                     <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
//                         Projects
//                     </span>
//                 </h2>
//                 <p className="text-gray-400 text-lg max-w-2xl">
//                     Showcasing my recent work in web development, creating digital experiences that combine functionality with
//                     stunning design.
//                 </p>
//             </div>

//             {/* Projects list */}
//             <ul ref={component} className="relative" onMouseLeave={onMouseLeave}>
//                 {projects.map((project, index) => (
//                     <li
//                         key={index}
//                         ref={(el) => {
//                             itemsRef.current[index] = el
//                         }}
//                         onMouseEnter={() => onMouseEnter(index)}
//                         className="opacity-0 group"
//                     >
//                         <a href={project.link} className="block">
//                             <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 px-6 md:px-12 py-8 border-t border-purple-900/30 hover:bg-purple-950/20 transition-all duration-300">
//                                 {/* Project info */}
//                                 <div className="flex-1">
//                                     <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
//                                         {project.title}
//                                     </h3>
//                                     <p className="text-gray-400 text-sm md:text-base">{project.description}</p>
//                                 </div>

//                                 {/* View button */}
//                                 <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all duration-300">
//                                     <span className="text-sm md:text-base">{viewMoreText}</span>
//                                     <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                                         <MdArrowOutward className="text-white text-lg" />
//                                     </div>
//                                 </div>
//                             </div>
//                         </a>
//                     </li>
//                 ))}
//             </ul>

//             {/* Floating hover image */}
//             <div
//                 ref={revealRef}
//                 className="hover-reveal pointer-events-none fixed left-0 top-0 z-50 h-[320px] w-[220px] rounded-2xl opacity-0 scale-90 shadow-2xl overflow-hidden bg-gradient-to-br from-purple-900/90 to-pink-900/90 backdrop-blur-md border border-purple-600/60"
//                 style={{ visibility: "hidden" }}
//             >
//                 {currentItem !== null && (
//                     <div className="relative w-full h-full">
//                         <Image
//                             src={projects[currentItem]?.image || "/placeholder.svg"}
//                             alt="Project preview"
//                             className="rounded-2xl object-cover opacity-0 scale-95 w-full h-full"
//                             fill={true}
//                             sizes="220px"
//                             priority={true}
//                         />
//                     </div>
//                 )}
//             </div>
//         </section>
//     )
// }

// export default Portfolio



"use client"

import { useRef, useEffect, useState, useLayoutEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MdArrowOutward } from "react-icons/md"

// Register GSAP plugin safely
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

const projects = [
    {
        title: "Next.js Todo App",
        description: "Next.js • TypeScript • Tailwind CSS",
        link: "#",
        image: "/todo-app-dashboard-interface.jpg",
        gradient: "from-purple-600 to-pink-600",
    },
    {
        title: "E-commerce Platform",
        description: "React • Node.js • MongoDB",
        link: "#",
        image: "/happycart-wbsite.png",
        gradient: "from-blue-600 to-purple-600",
    },
    {
        title: "Portfolio Website",
        description: "Next.js • Tailwind • GSAP",
        link: "#",
        image: "/portfolio-design-showcase.jpg",
        gradient: "from-cyan-600 to-blue-600",
    },
    {
        title: "Dashboard Analytics",
        description: "React • D3.js • Redux",
        link: "#",
        image: "/analytics-dashboard-charts.png",
        gradient: "from-pink-600 to-purple-600",
    },
]

function Portfolio({ viewMoreText = "View Project" }) {
    // const component = useRef(null)
    // const itemsRef = useRef([])
    // const revealRef = useRef(null)
    // const [currentItem, setCurrentItem] = useState(null)
    // const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

    // // --- Animate list items on mount ---
    // useEffect(() => {
    //     const ctx = gsap.context(() => {
    //         itemsRef.current.forEach((item, index) => {
    //             gsap.fromTo(
    //                 item,
    //                 { opacity: 0, y: 20 },
    //                 {
    //                     opacity: 1,
    //                     y: 0,
    //                     duration: 0.8,
    //                     ease: "power3.out",
    //                     delay: index * 0.15,
    //                 },
    //             )
    //         })
    //     }, component)

    //     return () => ctx.revert()
    // }, [])

    // // --- Handle mouse movement for floating image ---
    // useEffect(() => {
    //     const handleMouseMove = (e) => {
    //         setMousePos({ x: e.clientX, y: e.clientY })
    //     }

    //     window.addEventListener("mousemove", handleMouseMove)
    //     return () => window.removeEventListener("mousemove", handleMouseMove)
    // }, [])

    // const onMouseEnter = (index) => {
    //     setCurrentItem(index)
    // }

    // const onMouseLeave = () => {
    //     setCurrentItem(null)
    // }
    const component = useRef(null)
    const itemsRef = useRef([])
    const revealRef = useRef(null)
    const [currentItem, setCurrentItem] = useState(null)
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
    const lastMousePos = useRef({ x: 0, y: 0 })

    // Initialize reveal element to hidden state
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

    // --- Animate list items on mount ---
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
                    }
                )
            })
        }, component)

        return () => ctx.revert()
    }, [])


    // --- Handle mouse movement with GSAP smooth animation ---
    useLayoutEffect(() => {
        const handleMouseMove = (e) => {
            if (!revealRef.current || currentItem === null) return

            const mouse = { x: e.clientX, y: e.clientY }

            const speed = Math.hypot(
                mouse.x - lastMousePos.current.x,
                mouse.y - lastMousePos.current.y
            )

            // Calculate position with bounds checking
            const imageWidth = 220
            const imageHeight = 320
            const offsetX = 110
            const offsetY = 160
            
            let posX = mouse.x - offsetX
            let posY = mouse.y - offsetY
            
            // Clamp to viewport bounds
            posX = Math.max(10, Math.min(posX, window.innerWidth - imageWidth - 10))
            posY = Math.max(10, Math.min(posY, window.innerHeight - imageHeight - 10))

            // Use left/top for fixed positioning
            gsap.to(revealRef.current, {
                left: `${posX}px`,
                top: `${posY}px`,
                rotation:
                    speed *
                    (mouse.x > lastMousePos.current.x ? 1 : -1) *
                    0.3,
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


            // Get current mouse position with scroll offset
            const mouseX = lastMousePos.current.x || window.innerWidth / 2
            const mouseY = lastMousePos.current.y || window.innerHeight / 2
            
            // Keep image within viewport bounds
            const imageWidth = 220
            const imageHeight = 320
            const offsetX = 110
            const offsetY = 160
            
            let initialX = mouseX - offsetX
            let initialY = mouseY - offsetY
            
            // Clamp to viewport bounds
            initialX = Math.max(10, Math.min(initialX, window.innerWidth - imageWidth - 10))
            initialY = Math.max(10, Math.min(initialY, window.innerHeight - imageHeight - 10))


            // Set base position first
            gsap.set(revealRef.current, {
                left: `${initialX}px`,
                top: `${initialY}px`,
                opacity: 0,
                scale: 0.8,
                display: "block",
                visibility: "visible",
                x: 0, // Reset transform x
                y: 0, // Reset transform y
            })

            // Wait for next frame to ensure img is in DOM
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    if (revealRef.current) {
                        // Animate in
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
            // Animate out
            gsap.to(revealRef.current, {
                opacity: 0,
                scale: 0.8,
                duration: 0.25,
                ease: "power2.in",
                onComplete: () => {
                    if (revealRef.current) {
                        gsap.set(revealRef.current, { 
                            display: "none", 
                            visibility: "hidden" 
                        })
                    }
                },
            })
        }
    }, [currentItem])



    const onMouseEnter = (index, e) => {
        // if (e) {
        //     lastMousePos.current = { x: e.clientX, y: e.clientY }
        // }
        setCurrentItem(index)
    }

    const onMouseLeave = () => {
        setCurrentItem(null)
    }
    return (
        <section
            id="portfolio"
            className="w-full bg-gradient-to-b from-[#0a0a12] to-[#0d0d18] relative overflow-x-hidden"
        >
            <div className="container mx-auto">

                {/* Section header */}
                <div className="relative px-6 md:px-12 pt-24 pb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                        <span className="text-sm font-semibold text-purple-400 uppercase tracking-widest">
                            FEATURED WORKS
                        </span>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
                        Latest{" "}
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h2>

                    <p className="text-gray-400 text-lg max-w-2xl">
                        Showcasing my recent work in web development, creating digital experiences that combine functionality with stunning design.
                    </p>
                </div>

                {/* Projects list */}
                <ul
                    ref={component}
                    className="relative"
                    onMouseLeave={onMouseLeave}
                >
                    {projects.map((project, index) => (
                        <li
                            key={index}
                            ref={(el) => (itemsRef.current[index] = el)}
                            className="opacity-0 group"
                        >
                            <a 
                                href={project.link} 
                                className="block"
                                onMouseEnter={(e) => onMouseEnter(index, e)}
                            >
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 px-6 md:px-12 py-8 border-t border-purple-900/30 hover:bg-purple-950/20 transition-all duration-300">

                                    {/* Project info */}
                                    <div className="flex-1">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm md:text-base">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* View button */}
                                    <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all duration-300">
                                        <span className="text-sm md:text-base">
                                            {viewMoreText}
                                        </span>
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <MdArrowOutward className="text-lg" />
                                        </div>
                                    </div>

                                </div>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Floating hover image (ALWAYS mounted)
                <div
                    ref={revealRef}
                    className="pointer-events-none fixed z-50 rounded-2xl shadow-2xl border-2 border-purple-500/50 overflow-hidden"
                    style={{
                        width: "220px",
                        height: "320px",
                        opacity: 0,
                        transform: "scale(0.8)",
                        display: "none",
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-pink-900/90 backdrop-blur-md" />
                    {currentItem !== null && (
                        <img
                            src={projects[currentItem]?.image}
                            alt={projects[currentItem]?.title}
                            className="relative w-full h-full object-cover"
                        />
                    )}
                </div> */}

            </div>

            {/* Floating hover image */}
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
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm " />
                {currentItem !== null && projects[currentItem]?.image && (
                    <img
                        key={`project-${currentItem}-${projects[currentItem].image}`}
                        src={projects[currentItem].image}
                        alt={projects[currentItem]?.title || "Project preview"}
                        className="relative  w-full h-full object-cover"
                        loading="eager"
                        onError={(e) => {
                            console.error("Image failed to load:", projects[currentItem]?.image)
                            e.currentTarget.onerror = null
                            e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='320'%3E%3Crect fill='%23334155' width='220' height='320'/%3E%3Ctext fill='%2394a3b8' font-family='sans-serif' font-size='14' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3ENo image%3C/text%3E%3C/svg%3E"
                        }}
                    />
                )}
            </div>
        </section>
    )
}

export default Portfolio