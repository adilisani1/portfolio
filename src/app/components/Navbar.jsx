import React, { useEffect, useRef, useState } from 'react';
import { assets } from '../../../assets/assets';
import Image from 'next/image';

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef(null);

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        })
    }, [isScroll]);


  return (
      <>
          <div className='fixed top-0 right-0 w-11/12 z-[-1] translate-y-[-50%] opacity-50'>
              <Image src={assets.header_bg_color_two} alt='header-bg' className='w-full' />
          </div>

          <nav className={`w-full flex items-center justify-between fixed top-0 left-0 px-5 lg:px-8 xl:px-[8%] py-4 z-50
             ${isScroll ? "bg-white/50 shadow-sm backdrop-blur-lg " : ""}`}>
              
              <a href='#home' className='flex-1  '>
                  <h2 className='font-extrabold md:text-4xl text-3xl font-Outfit'>AD<span className='text-orange-600 text-3xl'>.</span></h2>
              </a>

              <ul className={`hidden md:flex flex-1 justify-center items-center gap-6 lg:gap-8 rounded-full px-12 py-3 font-Ovo 
                 ${isScroll ? "" : "bg-white/80 shadow-sm"}`}>
                  <li><a  href="#home">Home</a></li>
                  <li><a  href="#about">About</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#work">My Work</a></li>
                  <li><a href="#contact">Contact</a></li>
              </ul>

              <div className=' flex gap-4 justify-end flex-1  items-center'>
                  <button>
                      <Image src={assets.moon_icon} alt='moon' className="w-6" />
                  </button>
                  <a
                      href="#resume"
                      className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4  resume-button transition-all'>
                      Resume
                      <Image src={assets.arrow_dark} alt='arrow' className="arrow w-3" />
                  </a>
              </div>

                  
                  {/* MOBILE MENU BUTTON */}
              {/* <button ref={sideMenuRef} className=' flex items-center font-Outfit font-bold text-[17px] uppercase border border-gray-500 rounded-full px-6 py-1 gap-1.5 cursor-pointer menu-bg'
              > */}
              {/* <span>Menu</span> */}
              <div className="menu-trigger pt-2 md:hidden ml-3" onClick={openMenu}>
                  <span className="menu-trigger-icon">
                      <span className="hamburger ">
                          <span></span>
                          <span></span>
                          <span></span>
                      </span>
                  </span>
              </div>
              {/* </button> */}

                  {/* mobile menu List */}
                  <ul ref={sideMenuRef} className={`md:hidden fixed top-0 bottom-0 w-64 z-50 bg-rose-50 h-screen flex flex-col gap-6 py-20 px-10  transition-all duration-500 font-ovo -right-64
                    `}>
                      <div className='absolute top-5 right-5' onClick={closeMenu}>
                          <Image src={ assets.arrow_dark} alt='' className='w-4 cursor-pointer'  />
                      </div>
                      <li><a href="#home" onClick={closeMenu}>Home</a></li>
                      <li><a href="#about" onClick={closeMenu}>About</a></li>
                      <li><a href="#services" onClick={closeMenu}>Services</a></li>
                      <li><a href="#work" onClick={closeMenu}>My Work</a></li>
                      <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                  </ul>
                  
      </nav>
      </>
  )
}

export default Navbar;