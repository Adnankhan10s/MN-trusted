"use client"
import React from 'react';
import {motion} from 'framer-motion';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight:"900",
    subsets:["latin"],
    display:"swap"
})

const AboutHead = () => {
  return (
    <>
    <div
    
    className='w-full h-[90px] bg-slate-500 shadow-lg flex justify-center items-center
    bg-gradient-to-r  from-gray-700 via-indigo-900 to-gray-700  bg-clip-text text-transparent '>
           <motion.h1
           initial={{opacity:0 , x:75}}
           whileInView={{opacity:1 , x:0}}
           viewport={{once:false}}
           transition={{duration:0.5 , delay:0.2}}
           
           className={`text-center text-4xl font-extrabolds md:text-6xl ${roboto.className}`}>
            ABOUT US
           </motion.h1>
    </div>
    </>
  )
}

export default AboutHead