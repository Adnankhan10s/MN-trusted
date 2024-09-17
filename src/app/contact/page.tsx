import React from 'react';
import { FaRegistered } from 'react-icons/fa';
import Link from 'next/link';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';








const Contact = () => {
  
  
  return (
    <div className='bg-[#0066cc] md:w-full   relative z-10'>
      <div className='flex w-full h-[60px]  bg-[#0066cc] text-white p-4 shadow-md    '>
        <div className='flex justify-center items-center text-center  w-[100%] '>
          <div className='flex p-2 '>
            <h1 className='font-bold text-6xl font-signature'><Link href={"/"}>MN</Link></h1>
            <p className='font-semibold text-2xl font-para bg-gradient-to-b from-[#ff874a]  to-[#ffd9b2] inline-block text-transparent bg-clip-text'>Trusted </p>
            <FaRegistered size={15} className='text-[#ff874a] pt-2 ' />
          </div>
        </div>
      </div>
      {/* Form */}

   <div className='mt-16 md:w-full md:h-[600px]'>
      <ContactForm />
         
      </div>


      <hr />
      <div>
        <Footer />
      </div>


    </div>
  )
}

export default Contact
