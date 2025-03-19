import Image from 'next/image'
import React from 'react';
import { assets } from '../../../assets/assets';


const Header = () => {
  return (
      <div className='w-11/12 max-w-5xl text-center mx-auto h-screen flex flex-col  
      justify-center items-center gap-4'>
          <div className=' '>
              <Image src={assets.profile_img} alt='profile' className='rounded-full w-36  ' />
         </div>
          <h3 className='flex items-center gap-2 text-xl md:text-2xl mb-3 font-ovo'>
             Hi! I'm Muhammad Adil <Image src={assets.hand_icon} alt='' className='w-6'/>
          </h3>
          <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-ovo '>
              Frontend Software Engineer specializing in <span>(ReactJS)</span>
          </h1>
          <p className='max-w-2xl mx-auto font-ovo'>
              Where passion meets precision: Designing seamless digital experiences with React JS, Redux, and WordPress,
              while navigating life from a wheelchair and redefining web development.
          </p>

          <div className='flex flex-col sm:flex-row items-center gap-4 mt-4 '>
              <a className='px-10 py-3 border border-white text-white rounded-full bg-black flex items-center gap-2' href='#contactme'>
                  Contact me <Image src={assets.arrow_light} alt='arrow' className='w-4' />
              </a>
              <a href='/my-resume.pdf' download
               className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>
                  My Resume <Image src={assets.arrow_light} alt='arrow' className='w-4' />
              </a>
          </div>

    </div>
  )
}

export default Header
