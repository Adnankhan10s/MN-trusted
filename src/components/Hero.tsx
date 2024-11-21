
import React from 'react';
import Herocard from './otherComponents/Herocard';
import { Poppins, Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: "500",
    subsets: ["latin"],
    display: "auto"
  });

  const poppins = Poppins({
    weight:"800",
    subsets:["latin"],
    display:"swap"
  
  });



const Hero = () => {
    return (
        <div className=' z-10 md:w-full h-screen py-6 md:py-0 md:h-screen 2xl:h-screen w-full  bg-slate-200 border-b-2  border-black md:mt-0 relative  items-center' id='home'>          
        <div className=''>
        <div className='md:hidden pt-[90px] text-center justify-center items-center py-6'>
           <p className='text-base px-4 md:px-0 md:text-lg  2xl:text-2xl font-bold text-center  font-serif text-[#00004f] p-2 inline-flex items-center'>
                Providing Real Estate Virtual Assistant Services since 2009 in  United States and other parts of the world.
            </p>
            <div className='  w-full  font-bold text-center my-4 text-lg'>
                   <h1 className={`md:bg-gradient-to-r  from-gray-700 via-indigo-900 to-gray-700 text-[#f99b27]  md:bg-clip-text md:text-transparent p-4 ${poppins.className}`}>ARE YOU A BUSY ENTREPRENEUR IMPACTED BY<br/>
                    INFLATION & HIGH OPERATIONAL COSTS?</h1>
                </div>
           </div>
            <div className='md:hidden  mx-auto overflow-clip   w-[350px]  h-[200px] rounded-md border-white border-2 shadow-md '>
           <video src='/bgvideo.mp4' width={500} height={300}  className='md:hidden  rounded-md border-blue-400 object-cover' autoPlay loop   preload='autoPlay' muted />
         </div>
           <div className='md:absolute mt-2 z-20 md:bottom-[100px]  right-0 w-full h-[200px] flex-col place-items-center   '>
           <Herocard  />
           </div>
         </div>
         <video src='/bgvideo.mp4' width={1300} height={800}  className='hidden md:block opacity-95 w-full h-full object-cover' autoPlay loop   preload='autoPlay' muted />
           

        </div>
    )

}

export default Hero