"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {FaRegistered } from 'react-icons/fa';
import {AiOutlineClose , AiOutlineMenu} from 'react-icons/ai';
import {motion} from 'framer-motion';
import { DM_Serif_Text } from 'next/font/google';
import { Roboto } from 'next/font/google';
import { Poppins } from 'next/font/google';
import Image from 'next/image';


const poppins = Poppins({
    weight:"800",
    display:"swap",
    subsets:["latin"]
})

const roboto = Roboto({
    weight:"900",
    subsets:["greek"],
    display:"swap"
})

const dmSeriftext = DM_Serif_Text({
    weight:"400",
    subsets:["latin"],
    display:"swap"
})


const navLinks =[
    {title:"Home", path:"/"},
    {title:"About", path:"/../#about"},
    {title: "Services", path:"/../#services"},
    {title:"Blog Posts" , path:"/blogs"},
    {title : "Contact-Us", path:"/contact"}
]

const Navbar = () => {
   const [nav , setNav]=useState(false);
   const toggleNav =()=>{
    setNav(!nav)
   }
   const closeNav=()=>{
    setNav(false)
   }
   const menuVarients={
    open:{
        x : 0,
    transition:{
        stiffness: 20,
        damping :15,
         }
        },
    closed:{
        x:'-100%',
        transition:{
            stiffness:20,
            damping:15,
        }
    }
   }

   useEffect(()=>{
    if(nav){
        document.body.style.overflow="hidden";
    } else{
        document.body.style.overflow="auto";
    }
   },[nav]);
  return (
    <nav >
        <div className='hidden md:flex md:w-full h-[80px] bg-transparent backdrop-blur-lg   text-white p-4 shadow-md   fixed  overflow-hidden '>  
        <div className='flex justify-between items-center text-center   w-[100%]  '>
        <Image src={"/logo_transparent.png"} width={500} height={500} alt='logo' className='w-[300px] h-[270px] text-black' />
            <div className=''>
                <ul className={`flex gap-4 pr-2 ${roboto.className}  text-[16px]  lg:text-2xl font-semibold`}>
                    {navLinks.map((link , index)=>(
                       <li key={index} className='hover:text-[#ff874a]'>
                        <Link href={link.path}>{link.title}</Link>
                       </li>
                    ))}
                </ul>
            </div>
        </div>
        </div>

        {/* Mobile view */}
       
<div className='md:hidden flex items-center w-full h-[100px] bg-[#0066cc] text-white shadow-md relative'>
<Image src={"/logo_transparent.png"} width={500} height={500} alt='logo' className='w-[250px] h-[200px] text-black' />

         
            <div onClick={toggleNav} className="md:hidden absolute top-5 right-4 border rounded text-white border-white/80 p-2 z-50">
                 {nav ? <AiOutlineClose size={25} />: <AiOutlineMenu size={25}/>}
            </div>
            
            <motion.div
            initial = {false}
            animate ={nav ? 'open' : 'closed'}
            variants={menuVarients}
            className='fixed  top-0 left-0 w-full h-screen z-40 bg-white/30  backdrop-blur-xl '

            >
               <Image src={"/logo_transparent.png"} width={500} height={500} alt='logo' className=' w-[250px] h-[130px] text-black  ' />
               
              
                
                <ul className='text-4xl   font-para mt-6 text-center space-y-8 '>
                {
                    navLinks.map((link , index)=>(
                       <li key={index} className={`${poppins.className} font-bold text-black hover:text-[#c7a98a]`}>
                          <Link onClick={closeNav} href={link.path}>{link.title}</Link>
                       </li>
                    ))
                }
                </ul>

            </motion.div>

            </div>

        
    </nav>
  )
}

export default Navbar