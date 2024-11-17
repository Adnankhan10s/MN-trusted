
import React from 'react';
import { Poppins } from 'next/font/google';
import Herocard from './otherComponents/Herocard';

const poppins = Poppins({
    weight:"800",
    subsets:["latin"],
    display:"swap"

});





const Hero = () => {
    return (
        <div className=' z-10 md:w-full h-[850px] md:h-[700px] 2xl:h-screen w-full md:bg-white bg-slate-200 border-b-2  border-black md:mt-0 relative  items-center' id='home'>

        <div className='absolute z-20 md:pt-28 pt-28  right-0 w-full h-[200px] flex-col place-items-center   md:h-[800px]'>
          
           <div className=' text-center justify-center items-center'>
           <p className='text-base px-4 md:px-0 md:text-lg  2xl:text-2xl font-bold text-center  font-serif text-gray-900 p-2 inline-flex items-center'>
                Providing Real Estate Virtual Assistant Services since 2009 in  United States and other parts of the world.
                </p>
           </div>
           <div>
           <div className='md:w-full  font-bold text-center text-lg md:text-2xl lg:text-4xl 2xl:text-5xl'>
                   <h1 className={`md:bg-gradient-to-r  from-gray-700 via-indigo-900 to-gray-700 text-[#ff874a] md:bg-clip-text md:text-transparent p-4 ${poppins.className}`}>ARE YOU A BUSY ENTREPRENEUR IMPACTED BY<br/>
                    INFLATION & HIGH OPERATIONAL COSTS?</h1>
                </div>
                <div className='md:hidden mx-auto overflow-clip  w-[350px]  h-[200px] rounded-md border-white border-2 shadow-md my-8'>
           <video src='/bgvideo.mp4' width={500} height={300}  className='md:hidden  rounded-md border-blue-400 object-cover' autoPlay loop   preload='autoPlay' muted />
           </div>
                <div className='w-full md:mt-10 2xl:mt-14 mt-10 '>
                <Herocard  />
                </div>
           </div>
        </div>

           <video src='/bgvideo.mp4' width={1300} height={800}  className='hidden md:block opacity-65 w-full h-full object-cover' autoPlay loop   preload='autoPlay' muted />
           





        </div>
    )

}

export default Hero