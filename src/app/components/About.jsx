import React from 'react';
import { assets, toolsIcon } from '../../../assets/assets';
import Image from 'next/image';

const About = () => {
  return (
      <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
          <h4 className='text-center mb-2 text-lg font-ovo'>Introduction</h4>
          <h2 className='text-center text-5xl font-ovo'>About me</h2>

          <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
              <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                  <Image className="w-full rounded-2xl" src={assets.about_profile_img } alt="profile"/>
              </div>
              <div className='flex-1'>
                  <p className='mb-10 max-w-3xl font-ovo text-[20px]'>
                      I’m a React JS developer passionate about building dynamic, accessible web apps.
                      Living with Muscular Dystrophy for 10 years fuels my drive to innovate and overcome challenges.
                      Let's create something amazing together.
                  </p>

                  <h2 className='mb-5 text-2xl font-ovo uppercase'>Skills</h2>
                  <ul className='flex items-center gap-3 sm:gap-5 '>
                      {toolsIcon.map((icon, index) => (
                          <li className='flex items-center justify-center w-12 sm:w-[120px] aspect-square 
                           border border-gray-400  shadow-md rounded-full cursor-pointer hover:-translate-y-1 duration-500' key={index}>
                              <Image src={icon} alt="icon" className='w-5 sm:w-16'/>
                          </li>
                      ))}
                  </ul>
              </div>
          </div>
     </div>
  )
}

export default About;