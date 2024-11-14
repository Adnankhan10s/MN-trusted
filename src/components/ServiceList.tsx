"use client"
import React from 'react';
import {motion} from 'framer-motion';
import { Bebas_Neue, Oswald } from 'next/font/google';
import Link from 'next/link';
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import { categories } from '../../serviceData';

const oswald = Oswald({
  weight:"400",
  subsets:["latin"],
  display:"swap"
})

const bebasneue = Bebas_Neue({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  })

const ServiceList = () => {
  return (
   <div className='md:w-full bg-slate-200 flex justify-center md:h-[600px] h-[800px] border-t border-2 border-[[#00004f] ' id='services'>
    <motion.div
    initial={{opacity:0 , scale:0 }}
    whileInView={{opacity:1 , scale: 1}}
    transition={{duration:0.6}}
    viewport={{once:false}}

    className='md:w-[1250px] px-3  text-center pt-6 md:h-[600px] mt-4 overflow-clip '
    >
      <div className='text-xl md:text-4xl font-bold text-[#f99b27]'>
        <h1 className={bebasneue.className}>WHAT VIRTUAL ASSISSTANT SERVICES</h1>
        <h1 className={bebasneue.className}>DO WE PROVIDE & SUPPORT ?</h1>
        </div>
       <h1 className='text-[#00004f]   md:text-2xl font-bold'>Real Estate Virtual Assistant Services We Offer</h1>
       <p className='text-start text-gray-950 pt-2 text-[14px]  md:text-xl'>MN Trusted is a real estate virtual assistant service providing company that ensures streamlined management of your daily tasks.<span className={` ${oswald.className} text-[#00004f]  font-extrabold text-lg cursor-pointer`}> MN trusted </span> real estate virtual assistant services are the Holy Grail to enhance your productivity without working yourself out. The real estate virtual assistant services we offer include :</p>
 
 <div className='grid md:grid-cols-2   md:gap-x-16 gap-y-2 mt-10  '>
          {categories.map((category)=>(
           
       <Link key={category.id} prefetch={true} href={`/categories/${category.id}`} className=' md:text-[16px] text-[12px]  px-2 py-2 border hover:bg-[#f99b27] hover:border-white hover:text-white border-[#00004f]  text-[#00004f] text-start md:items-end gap-4 inline-flex font-bold   '>
         
             {category.title} <MdOutlineKeyboardArrowRight size={20}  /> 
             </Link>
             
       ))   }
       </div>
    
       



    </motion.div>
    



   </div>
  )
}

export default ServiceList
