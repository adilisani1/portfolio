import React from 'react'
import { assets, servicesData } from '../../../assets/assets';
import Image from 'next/image';

const Services = () => {
  return (
      <div id='services' className='w-full  px-[12%] py-10 scroll-mt-20'>
          <h4 className='text-center mb-2 text-lg font-ovo'>What I Do</h4>
          <h2 className='text-center text-5xl font-ovo'>My Services</h2>
          <p className='text-center max-w-4xl mx-auto mt-5 mb-12 font-ovo'>
              I create custom, responsive websites optimized for performance and accessibility. I focus on delivering smooth user experiences across all devices, ensuring accessibility for everyone, and seamlessly integrating APIs to enhance functionality.
          </p>
          <div className='grid grid-cols-auto gap-10 my-10 grid-rows-auto' >
              {servicesData.map(({title, icon, desc, link}, index) => (
                  <div key={index}
                      className='bg-card-gradient rounded-3xl px-8 py-8 relative z-1 hover:bg-lightHover transition-all hover:-translate-y-1 duration-500 bg-darkCard'>
                      <div className='min-w-32'>
                          <Image src={icon} alt={title} className='object-contain h-20' />
                     </div>
                      <div>
                          <h3 className='text-3xl font-ovo mt-5'>{title}</h3>
                          <p className='mt-4 font-ovo'>{desc}</p>
                      </div>
                  </div>
              ))}
          </div>
        </div>
     )
}

export default Services;