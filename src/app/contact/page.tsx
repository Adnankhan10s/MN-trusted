import React from 'react';
import { FaRegistered } from 'react-icons/fa';
import Link from 'next/link';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import Image from 'next/image';








const Contact = () => {
  
  
  return (
    <div className='bg-[#0066cc] md:w-full  h-full  relative z-10'>
      <div className='flex w-full h-[80px]  bg-[#0066cc] text-white p-4 shadow-md    '>
        <div className='flex justify-center items-center text-center  w-[100%]  '>
        <Link href={"/"}>
        <Image src={"/logo_transparent.png"} width={500} height={500} alt='logo' className='w-[300px] h-[270px] text-black' />
        </Link>
        </div>
      </div>
      {/* Form */}

   <div className='mt-16 md:w-full md:h-[600px]'>
      <ContactForm />
         
      </div>

      <div className='md:mt-6 '>
      <hr />
      
        <Footer />
      </div>


    </div>
  )
}

export default Contact
