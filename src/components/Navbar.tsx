"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {AiOutlineClose , AiOutlineMenu} from 'react-icons/ai';
import {motion} from 'framer-motion';
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
    <section>
        <div className='z-30  hidden md:flex md:w-full h-[80px] bg-transparent backdrop-blur-sm   text-[#00004f] p-4 shadow-md   fixed  overflow-hidden '>  
        <div className='flex justify-between items-center text-center   w-[100%]  '>
            <Link href={"/"}>
        <Image src={"/Logo.png"} width={500} height={500} alt='logo' className='w-[250px] h-[60px] text-black' />
        </Link>
            <div className=''>
                <ul className={`flex gap-4 pr-2 ${roboto.className}  text-[16px]  lg:text-2xl font-bold`}>
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
       <div className='z-50 md:hidden w-full h-[80px] fixed   '>
<div className=' z-50 md:hidden relative px-4   flex items-center w-full h-[80px] bg-white/40 backdrop-blur-md  shadow-md '>
<Image src={"/Logo.png"} width={500} height={500} alt='logo' className='w-[180px] h-[50px] text-black' />

         
            <div onClick={toggleNav} className="md:hidden absolute top-5 right-4 border rounded text-black border-black/80 p-2 ">
                 {nav ? <AiOutlineClose size={25} />: <AiOutlineMenu size={25}/>}
            </div>
            
            <motion.div
            initial = {false}
            animate ={nav ? 'open' : 'closed'}
            variants={menuVarients}
            className='fixed  top-0 left-0 w-full h-screen z-40 bg-slate-300  backdrop-blur-xl '

            >
                <div className='w-full h-[100px] px-4 flex justify-between border-b-2 border-[#00004f] items-center content-center  '>
                 <div onClick={toggleNav} className="md:hidden absolute top-5 right-4 border rounded text-[#1c1c1c] border-[#1c1c1c] p-2 ">
                 {nav ? <AiOutlineClose size={25} />: <AiOutlineMenu size={25}/>}
            </div>
             <Link href={"/"}>
               <Image src={"/Logo.png"} width={500} height={500} alt='logo' className=' w-[180px] h-[60px] text-black  ' />
               </Link>
               </div>
                
                <ul className='text-4xl   font-para mt-6 text-center space-y-8 '>
                {
                    navLinks.map((link , index)=>(
                       <li key={index} className={`${poppins.className} font-bold text-[#00004f] hover:text-[#c7a98a]`}>
                          <Link onClick={closeNav} href={link.path}>{link.title}</Link>
                       </li>
                    ))
                }
                </ul>

            </motion.div>

            </div>
            </div>
        
   </section>
  )
}

export default Navbar