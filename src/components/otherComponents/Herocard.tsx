"use client"
import React from 'react'
import {motion} from 'framer-motion';

const Herocard = () => {
  return (
    <motion.div 
    initial={{
        opacity:0 , y:75
    }}
    whileInView={{opacity:1 , y:0}}
    viewport={{once:false}}
    transition={{duration:0.3 , delay:0.5}}
    className='md:w-[700px] 2xl:w-[1000px]  w-[350px] md:px-6 px-4  mx-auto  md:h-[250px] h-[170px] bg-white/20 border-x-2 shadow-lg border-white/40 backdrop-blur-sm rounded-md'>
        <h1 className='md:py-4  pt-2 text-center 2xl:text-2xl 2xl:font-extrabold  md:text-xl text-sm font-semibold font-serif  text-[#00004f]'>Streamline Your Real Estate Business with Virtual Assistant Services</h1>
        <p className=' text-center pt-2 md:pt-6 md:leading-8 text-gray-950 md:text-black md:font-bold 2xl:text-lg  text-[12px] md:text-[16px]'>Boost productivity and focus on what matters most by delegating tasks to a real estate virtual assistant. From managing listings and handling client communications to organizing paperwork, a VA can help you save time and operate more efficiently.</p>
    </motion.div>
  )
}

export default Herocard