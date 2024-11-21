import React from 'react';
import Image from 'next/image';
import { SiTicktick } from "react-icons/si";
import Link from 'next/link';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Secondhero from './otherComponents/Secondhero';
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

const Hero2 = () => {
  return (


    <div className='w-full bg-slate-200 py-10 md:py-20'>
      
           <div className='hidden md:block w-full  font-bold text-center my-4 text-lg md:text-2xl lg:text-4xl 2xl:text-5xl'>
                   <h1 className={`md:bg-gradient-to-r  from-gray-700 via-indigo-900 to-gray-700  md:bg-clip-text md:text-transparent p-4 ${poppins.className}`}>ARE YOU A BUSY ENTREPRENEUR IMPACTED BY<br/>
                    INFLATION & HIGH OPERATIONAL COSTS?</h1>
                </div>
      <Secondhero />
      <div className='w-full  text-center md:pt-6  pt-3'>
        <p className={`text-xl md:text-4xl font-extrabold ${roboto.className} text-[#c9a143] `}>Do you need a virtual assistant?</p>
        <p className='pt-4 text-[12px] md:text-xl font-serif'>Here is a quick way to assess if hiring a Real Estate virtual assistant(VA) is a great move for you and your business.</p>
        <p className='pt-4 text-[12px] md:text-xl font-serif'>It's an astounding YES if you feel the same way about any of the statements described below.</p>
      </div>
      <div className='w-full flex justify-center items-center mt-8 '>
        <div className='border-blue-400 border-b '>
          <Image priority src={"/illustratedimg.png"} width={500} height={500} alt='Illustrate' className='md:w-[450px] md:h-[300px] w-[300px] h-[200px] ' />
        </div>
      </div>
      <div className='w-full h-[500px]  mt-8 md:mt-2 md:flex md:flex-col-2  '>
        <div className='md:w-1/2 w-full  md:h-full flex justify-center items-center '>
          <Image priority src={'/Stres.jpg'} width={600} height={400} alt='stress' className='md:w-[500px] md:h-[330px] w-[320px] h-[220px] rounded border-2 border-blue-300 shadow-lg' />

        </div>
        <div className='md:w-1/2 w-full  md:h-full flex justify-center items-center' >
          <div className='space-y-4 mx-auto md:mx-0 mt-10 md:mt-0 px-4 md:px-0'>
            <ul className='text-[11px] md:text-[17px] space-y-4  '>
              <li>
                <span><SiTicktick size={20} className='text-blue-600 inline-flex   md:size-8 ' /></span> You are overwhelmed with the heavy workload.</li>
              <li><span><SiTicktick size={20} className='text-blue-600 inline-flex md:size-8' /></span> You feel tired of doing repetitive admin tasks.</li>
              <li><span><SiTicktick size={20} className='text-blue-600 inline-flex md:size-8' /></span> You want to focus more on growing your business.</li>
              <li><span><SiTicktick size={20} className='text-blue-600 inline-flex md:size-8' /></span> You want to keep doing the tasks that you love and delegate the rest.</li>
              <li><span><SiTicktick size={20} className='text-blue-600 inline-flex md:size-8' /></span> You need help but cannot afford the cost of hiring an in-office employee.</li>
              <li><span><SiTicktick size={20} className='text-blue-600 inline-flex md:size-8' /></span> You only want to pay for the work you need when you need it.</li>
              <li><span><SiTicktick size={20} className='text-blue-600 inline-flex md:size-8 ' /></span> You don’t have the time to hire, recruit and train a new assistant.</li></ul>
          </div>
        </div>
      
    </div>
    <div className='w-full flex flex-col justify-center items-center mt-16 md:mt-0'>
       <p className='pt-4 md:text-2xl text-[12px]'>Welcome to <span className={`text-[#f99b27] ${roboto.className} font-bold cursor-pointer`}>MN Trusted</span>, you've come to the right place.
                 </p>
                 <p className='text-[10px] md:text-lg pt-4'>We specialize in providing Virtual Assistant Tailored for the Real Estate Industry </p>
               <p className='text-[10px] md:text-lg pt-4'>Help is here; we are making your entrepreneurial journey more manageable.</p>

              <div className='pt-4'>
                 <Link href='/contact' className='inline-flex items-center md:px-6 px-4 md:py-4 py-2 bg-[#f99b27] rounded-md text-white font-bold hover:bg-[#bb8c53] hover:text-black/70 '>FEEL FREE TO CONTACT US <MdOutlineKeyboardArrowRight size={22}  />
                 </Link>
              </div>
             
      </div>
      <div className='hidden md:block text-center justify-center items-center py-6'>
           <p className='text-base px-4 md:px-0 md:text-lg  2xl:text-2xl font-bold text-center   font-serif text-gray-900 p-2 inline-flex items-center'>
                Providing Real Estate Virtual Assistant Services since 2009 in  United States and other parts of the world.
                </p>
           </div>

      </div> 
  )

}

export default Hero2