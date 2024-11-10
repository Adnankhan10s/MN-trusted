import React from 'react';
import Image from 'next/image';
import { SiTicktick } from "react-icons/si";
import Link from 'next/link';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Secondhero from './otherComponents/Secondhero';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: "500",
  subsets: ["latin"],
  display: "auto"
})

const Hero2 = () => {
  return (


    <div className='w-full md:h-[1500px] h-[1300px] bg-slate-200 py-10 md:py-24'>
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








{/* 
    {/* //     <div className='md:min-w-full md:min-h-[850px] w-full  px-4 md:px-0  max-h-[1200px] bg-slate-300 text-black text-4xl pt-10 '>

    //       <motion.div
    //         initial={{ opacity: 0 }}
    //         whileInView={{ opacity: 1 }}
    //         viewport={{ once: true }}
    //         transition={{ duration: 0.5, delay: 0.5 }}
    //         className='text-center text-[#f99b27] '
    //       >
    //         <span> <h1 className={cookie.className}>Is hiring a Real Estate VA for you?</h1></span>

    //       </motion.div> */}

    {/* //       <div className='text-black text-center md:leading-10'>
    //         <h1 className='font-bold'><span className={bebasneue.className}>Do you need a virtual assistant?</span></h1>
    //         <p className='text-sm md:text-lg md:font-serif'>Here is a quick way to assess if hiring a Real Estate virtual assistant(VA) is a great move for you and your business.</p>
    //         <p className='text-sm md:text-lg md:font-serif'>It's an astounding YES if you feel the same way about any of the statements described below.</p>
    //       </div>


    //       <div className='md:flex  justify-center items-center  pt-10  gap-6 md:gap-9'>
    //         <Image */}
    {/* //           src={"/stress.jpg"}
    //           alt='circle'
    //           width={150}
    //           height={150} */}
    {/* //           className='rounded-full border-blue-400 border-[20px] mx-auto md:mx-0 md:w-[350px] md:h-[350px] w-[200px] h-[200px]' */}
    {/* //         />
    //         <div className='flex justify-center items-center md:pt-6  pt-4'  >
    //           <ul className='md:text-lg md:space-y-2 text-[10px] md:pt-2 '>
    //             <li ><span><SiTicktick size={20} className='text-blue-600 inline-flex  md:size-8 ' /></span> You are overwhelmed with the heavy workload.</li>
    //             <li><span><SiTicktick size={20} className='text-blue-600 inline-flex md:size-8' /></span> You feel tired of doing repetitive admin tasks.</li>
    //             <li><span><SiTicktick size={20} className='text-blue-600 inline-flex md:size-8' /></span> You want to focus more on growing your business.</li>
    //             <li><span><SiTicktick size={20} className='text-blue-600 inline-flex md:size-8' /></span> You want to keep doing the tasks that you love and delegate the rest.</li>
    //             <li><span><SiTicktick size={20} className='text-blue-600 inline-flex md:size-8' /></span> You need help but cannot afford the cost of hiring an in-office employee.</li>
    //             <li><span><SiTicktick size={20} className='text-blue-600 inline-flex md:size-8' /></span> You only want to pay for the work you need when you need it.</li>
    //             <li><span><SiTicktick size={20} className='text-blue-600 inline-flex md:size-8 ' /></span> You don’t have the time to hire, recruit and train a new assistant.</li>
    //             <p className='pt-4 text-[16px]'>Welcome to <span className={`text-[#f99b27] ${oswald.className} font-bold cursor-pointer`}>MN Trusted</span>, you've come to the right place.
    //             </p>
    //             <p className='text-[16px]'>We specialize in providing Virtual Assistant Tailored for the Real Estate Industry </p>
    //             <p className='text-[16px]'>Help is here; we are making your entrepreneurial journey more manageable.</p>

    //            <div className='md:pt-4'>
    //             <Link href='/contact' className='inline-flex items-center md:px-6 px-4 md:py-2 py-2 bg-[#f99b27] rounded-md text-white font-bold hover:bg-[#bb8c53] hover:text-black/70 '>FEEL FREE TO CONTACT US <MdOutlineKeyboardArrowRight size={22}  />
    //             </Link>
    //             </div>

    //           </ul>

    //         </div><br />

    //       </div>  */}
      </div> 
  )

}

export default Hero2