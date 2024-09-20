"use client"
import Link from 'next/link';
import React from 'react';
import { FaRegistered } from 'react-icons/fa6';
import { Poppins , DM_Serif_Text, Cookie } from 'next/font/google';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Footer from '@/components/Footer';

const cookie = Cookie({
  weight:"400",
  subsets:["latin"],
  display:"swap"
});

const poppins = Poppins({
  weight: "900",
  display: "swap",
  subsets: ["latin"]
});
const dmSeriftext = DM_Serif_Text({
  weight:"400",
  subsets:["latin"],
  display:"swap"
})


const page = () => {
  return (
    // Nav Section
    <div className='  bg-blue-500  md:w-full'>
      <div className='bg-transparent backdrop-blur-md w-full h-[70px] flex justify-between content-center items-center shadow-lg px-4 fixed z-50 overflow-hidden'>
        <div className='flex p-2 '>
          <h1 className={`font-bold md:text-6xl text-2xl ${dmSeriftext.className} `}><Link href={"../"}>MN</Link></h1>
          <p className='font-semibold md:text-2xl text-sm font-para bg-gradient-to-b from-[#ff874a]  to-[#ffd9b2] inline-block text-transparent bg-clip-text'>Trusted </p>
          <FaRegistered size={15} className='text-[#ff874a] pt-2 ' />
        </div>

        <div>
          <h1 className={`md:text-4xl text-2xl text-white font-extrabold ${poppins.className} `}>Blogs</h1>
        </div>


        <div >
          <Link href='/contact' className='inline-flex items-center md:px-6 px-1 md:py-2 py-2 bg-[#f9mt-2] rounded-md text-white font-bold text-[12px] md:text-[18px]  bg-[#bb8c53] hover:text-black/70 '>CONTACT US <MdOutlineKeyboardArrowRight size={22} />
          </Link>
        </div>
      </div>

      <div className=' h-full md:w-full  justify-center py-24  '>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center  '
      >
        <h1 className={`text-4xl md:text-6xl text-[#f99b27] ${cookie.className}`}>All New Updates Here !</h1>

      </motion.div> 
             
         <div className=' border-t-2 border-[#f99b27] py-20 md:px-6 mt-10 md:w-full  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4 z-30  grid-cols-1  justify-items-center  gap-6  mx-auto  '>
          {/* Blog Cards */}
          <div className='shadow-xl w-[320px]  md:w-[300px] h-[470px] hover:scale-105  duration-75   mt-2  rounded overflow-hidden'>
            <Image src={'/blogs/blog1.jpg'} priority alt='img1' width={400} height={400}  objectFit='cover' className='w-full'/>
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>
                  Technology
              </div>
              <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis, ratione ullam illo in necessitatibus, voluptatum iusto sed omnis
              </p>

            </div>
            <div className='flex justify-center items-center py-2 '><Link href={"/"} className="px-2 py-2 rounded-md font-bold hover:bg-gray-300 hover:text-black text-gray-800 border-black bg-gray-500">Read More</Link>
            </div>
          </div>
          <div className='shadow-xl w-[320px]  md:w-[300px] h-[470px] hover:scale-105  duration-75  mt-2  rounded overflow-hidden'>
            <Image src={'/blogs/blog2.jpg'} priority alt='img1' width={400} height={400}  className='w-full'/>
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>
                  Technology
              </div>
              <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis, ratione ullam illo in necessitatibus, voluptatum iusto sed omnis
              </p>

            </div>
            <div className='flex justify-center items-center py-2'><Link href={"/"} className="px-2 py-2 rounded-md font-bold hover:bg-gray-300 hover:text-black text-gray-800 border-black bg-gray-500">Read More</Link>
            </div>
          </div>
          <div className='shadow-xl w-[320px]  md:w-[300px] h-[470px] hover:scale-105  duration-75  mt-2  rounded overflow-hidden'>
            <Image src={'/blogs/blog3.jpg'} priority alt='img1' width={400} height={400}  className='w-full'/>
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>
                  Technology
              </div>
              <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis, ratione ullam illo in necessitatibus, voluptatum iusto sed omnis
              </p>

            </div>
            <div className='flex justify-center items-center py-2'><Link href={"/"} className="px-2 py-2 rounded-md font-bold hover:bg-gray-300 hover:text-black text-gray-800 border-black bg-gray-500">Read More</Link>
            </div>
          </div>
          <div className='shadow-xl w-[320px]  md:w-[300px] h-[470px] hover:scale-105  duration-75 mt-2 rounded overflow-hidden'>
            <Image src={'/blogs/blog1.jpg'} priority alt='img1' width={400} height={400}  className='w-full'/>
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>
                  Technology
              </div>
              <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis, ratione ullam illo in necessitatibus, voluptatum iusto sed omnis
              </p>

            </div>
            <div className='flex justify-center items-center  py-2'><Link href={"/"} className="px-2 py-2 rounded-md font-bold hover:bg-gray-300 hover:text-black text-gray-800 border-black bg-gray-500">Read More</Link>
            </div>
          </div>
          <div className='shadow-xl w-[320px]  md:w-[300px] h-[470px] hover:scale-105  duration-75  mt-2  rounded overflow-hidden'>
            <Image src={'/blogs/blog1.jpg'} priority alt='img1' width={400} height={400}  className='w-full'/>
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>
                  Technology
              </div>
              <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis, ratione ullam illo in necessitatibus, voluptatum iusto sed omnis
              </p>

            </div>
            <div className='flex justify-center items-center py-2 '><Link href={"/"} className="px-2 py-2 rounded-md font-bold hover:bg-gray-300 hover:text-black text-gray-800 border-black bg-gray-500">Read More</Link>
            </div>
          </div>
        </div>
      </div>

<div className='w-full border-t-2 border-[#f99b27]'>
<Footer  />
</div>

    </div>




  )
}

export default page
