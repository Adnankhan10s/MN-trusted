"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { Cookie } from 'next/font/google';

const cookie = Cookie({
    weight:"400",
    subsets:["latin"],
    display:"auto"
  });

const Secondhero = () => {
  return (
    <div className='w-full text-center   '>
    <motion.span
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    viewport={{once:false}}
    transition={{duration:0.5 , delay:0.5}}
    className={`${cookie.className} font-bold md:text-6xl 2xl:text-8xl text-2xl text-[#00004f] `}
    >
    Is hiring a Real Estate VA for you?
    </motion.span>
  </div>
  )
}

export default Secondhero