
import React from 'react';
import Herocard from './otherComponents/Herocard';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: "500",
    subsets: ["latin"],
    display: "auto"
  });





const Hero = () => {
    return (
        <div className=' z-10 md:w-full h-screen md:h-screen 2xl:h-screen w-full  bg-slate-200 border-b-2  border-black md:mt-0 relative  items-center' id='home'>          
        <div className=''>
        <div className='md:hidden pt-[90px] text-center justify-center items-center py-6'>
           <p className='text-base px-4 md:px-0 md:text-lg  2xl:text-2xl font-bold text-center  font-serif text-[#00004f] p-2 inline-flex items-center'>
                Providing Real Estate Virtual Assistant Services since 2009 in  United States and other parts of the world.
                </p>
                <p className='pt-4 md:text-2xl text-[14px]'>Welcome to <span className={`text-[#f99b27] ${roboto.className} font-bold cursor-pointer`}>MN Trusted</span>, you've come to the right place.
                 </p>
                 <p className='text-[12px] md:text-lg pt-4'>We specialize in providing Virtual Assistant Tailored for the Real Estate Industry </p>
               <p className='text-[12px] md:text-lg pt-4'>Help is here; we are making your entrepreneurial journey more manageable.</p>

           </div>
            <div className='md:hidden  mx-auto overflow-clip   w-[350px]  h-[200px] rounded-md border-white border-2 shadow-md '>
           <video src='/bgvideo.mp4' width={500} height={300}  className='md:hidden  rounded-md border-blue-400 object-cover' autoPlay loop   preload='autoPlay' muted />
         </div>
           <div className='md:absolute z-20 md:top-[360px] mt-12 md:mt-0 right-0 w-full h-[200px] flex-col place-items-center   '>
           <Herocard  />
           </div>
         </div>
         <video src='/bgvideo.mp4' width={1300} height={800}  className='hidden md:block opacity-95 w-full h-full object-cover' autoPlay loop   preload='autoPlay' muted />
           





        </div>
    )

}

export default Hero