import React from 'react';
import { Roboto } from 'next/font/google'
import Link from 'next/link';
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { MdEmail } from "react-icons/md";




const roboto = Roboto({
  weight: '300',
  subsets: ['latin'],
  display: 'swap',
})
const navLinks = [
  { title: "Home", path: "/../#home" },
  { title: "About", path: "/../#about" },
  { title: "Services", path: "/../#services" },
  { title: "Blog Posts", path: "/blogs" },
  { title: "Contact-Us", path: "/contact" }
]




const Footer = () => {
  return (
    <footer>
      <div className='hidden md:w-full md:block md:bg-[#0066cc]'>
        <div className='hidden md:w-full md:h-[270px] h-[250px] md:flex justify-between px-14 items-center md:gap-4  '>



          <div className='md:w-[250px] max-w-[250px] h-[150px] md:ml-7 flex space-x-4 md:space-x-0 md:block '>
            <h1 className='md:font-bold text-white md:mb-4 mt-4 md:mt-0'>CONTACT US :</h1>
            <div className='leading-10 mt-4 md:mt-0 text-lg'>
              <span className={roboto.className}><a href='tel:+92 341258068' className=' md:font-bold  text-white hover:underline'>+92 3412458068</a><br /></span>
              <span className={roboto.className}><a href='mailto:email@echoecho.com?subject=SweetWords&body=Send Some Query' className=' md:font-bold  text-white hover:underline'>mntrusted@gmail.com</a></span>
            </div>


          </div>
          <hr />
          <div className='md:w-[250px] max-w-[150px] h-[150px]'>
            <h1 className='font-bold text-white mb-2 '>INFO :</h1>
            <div className='leading-8 '>
              {navLinks.map((link, index) => (
                <span className={roboto.className} key={index}><Link href={link.path} className=' font-bold text-lg  text-white hover:underline'>{link.title}</Link><br /></span>

              ))}
            </div>
          </div>
          <hr />
          <div className='w-[200px]  h-[150px]'>
            <h1 className='font-bold text-white mb-4 text-center '>FOLLOW US :</h1>

            <div className='flex justify-center space-x-8 mt-8'>
              <FaFacebook size={40} className='cursor-pointer ' />
              <AiFillInstagram size={42} className='cursor-pointer' />
              <AiFillTwitterCircle size={42} className='cursor-pointer' />

            </div>
          </div>
        </div>
        <hr />
        <p className='py-4 text-white text-center'>Copyright ©2024 MN Trusted.com . All Rights Reserved. | Privacy Policy</p>
      </div>

      {/* Mobile view Footer*/}

      <div className='md:hidden w-full bg-[#0066cc] block justify-center items-center space-y-2 h-[420px]  text-[14px] '>

        <div className='h-[100px] '>
          <h1 className='font-bold text-white text-center text-xl pt-6'>CONTACT US :</h1>
          <div className='flex justify-center items-center space-x-6 mt-4  '>
            <span className={roboto.className}><a href='tel:+92 341258068' className=' font-bold inline-flex items-center text-white hover:underline gap-2'> <BsTelephone size={25} /> +92 3412458068</a><br /></span>
            <span className={roboto.className}><a href='mailto:mntrusted@gmail.com?subject=What Can I Help You&body=Send Some Query' className=' font-bold text-white hover:underline inline-flex gap-2'><MdEmail size={25} /> mntrusted@gmail.com</a></span>
          </div>
        </div>

        <div className='h-[100px]'>
          <h1 className='font-bold text-white mb-4 text-center text-xl'>INFO :</h1>
          <div className='flex justify-center space-x-4'>
            {navLinks.map((link, index) => (
              <span className={roboto.className} key={index}><Link href={link.path} className=' font-bold   text-white hover:underline'>{link.title}</Link><br /></span>

            ))}
          </div>
        </div>

        <div className='h-[100px] '>
          <h1 className='font-bold text-white mb-4 text-center text-xl '>FOLLOW US :</h1>

          <div className='flex justify-center items-center space-x-8 mt-4'>
            <FaFacebook size={38} className='cursor-pointer ' />
            <AiFillInstagram size={42} className='cursor-pointer' />
            <AiFillTwitterCircle size={42} className='cursor-pointer' />

          </div>
        </div>
        <hr />

        <p className='py-4 text-white text-center text-[16px]'>Copyright ©2024 MN Trusted.com . All Rights Reserved. | Privacy Policy</p>


      </div>
    </footer>


  )
}

export default Footer
