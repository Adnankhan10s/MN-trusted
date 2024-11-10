import React from 'react';
import { Roboto } from 'next/font/google'
import Link from 'next/link';
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Image from 'next/image';




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

<footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex  md:items-center lg:items-start md:flex-row  md:flex-nowrap flex-wrap flex-col">
    <div className="md:w-64 w-full flex-col  md:flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <Image src={"/Logo.png"} width={150} height={150} alt='Logo' priority={true} className='mx-auto md:mx-0 w-[150px] h-[70]' />
      <p className="mt-2 text-sm text-gray-500">Providing Real Estate Virtual Assistant Services since 2009 in United States and other parts of the world.
      </p>
    </div>
    <div className="flex-grow flex  md:ml-10 md:justify-between md:px-10 flex-wrap  md:pl-40 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-full w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm md:text-lg mb-3">Contact-Us</h2>
        <nav className="list-none mb-10 md:w-[200px] flex-col w-full  ">
          <li >
             <span className={`${roboto.className}  inline-flex  items-center gap-2`}><BsTelephone size={20} className='align-middle' /><a href='tel:+92 341258068' className=' md:font-bold  text-gray-600 hover:underline'>+92 3412458068</a><br /></span>
          </li>
          <li >
             <span className={`inline-flex items-center gap-2 ${roboto.className}`}><MdEmail size={20} className='align-middle' /><a href='mailto:mntrusted@gmail.com?subject=Enter Subject For Which Service&body=Type Message' className=' md:font-bold  text-gray-600 hover:underline'>mntrusted@gmail.com</a></span>
          </li>
          
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font md:text-lg font-medium text-gray-900 tracking-widest text-sm mb-3">Info</h2>
        <div className='flex flex-col justify-center '>
             {navLinks.map((link, index) => (
               <span className={roboto.className} key={index}><Link href={link.path} className=' font-bold   text-gray-600 hover:underline'>{link.title}</Link><br /></span>

            ))}
           </div>
      </div>
      
     
    </div>
  </div>
  <div className="bg-blue-200">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">© 2024 MN-TRUSTED —
        <a href="" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@mn-trusted</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-500">
          <svg fill="currentColor"    className="w-5 h-5 cursor-pointer" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor"    className="w-5 h-5 cursor-pointer" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor"    className="w-5 h-5 cursor-pointer" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a  className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor"    className="w-5 h-5 cursor-pointer" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>

    // <footer>
    //   <div className='hidden md:w-full md:block md:bg-[#0066cc]'>
    //     <div className='hidden md:w-full md:h-[270px] h-[250px] md:flex justify-between px-14 items-center md:gap-4  '>



    //       <div className='md:w-[250px] max-w-[250px] h-[150px] md:ml-7 flex space-x-4 md:space-x-0 md:block '>
    //         <h1 className='md:font-bold text-white md:mb-4 mt-4 md:mt-0'>CONTACT US :</h1>
    //         <div className='leading-10 mt-4 md:mt-0 text-lg'>
    //           <span className={roboto.className}><a href='tel:+92 341258068' className=' md:font-bold  text-white hover:underline'>+92 3412458068</a><br /></span>
    //           <span className={roboto.className}><a href='mailto:mntrusted@gmail.com?subject=Enter Subject For Which Service&body=Type Message' className=' md:font-bold  text-white hover:underline'>mntrusted@gmail.com</a></span>
    //         </div>


    //       </div>
    //       <hr />
    //       <div className='md:w-[250px] max-w-[150px] h-[150px]'>
    //         <h1 className='font-bold text-white mb-2 '>INFO :</h1>
    //         <div className='leading-8 '>
    //           {navLinks.map((link, index) => (
    //             <span className={roboto.className} key={index}><Link href={link.path} className=' font-bold text-lg  text-white hover:underline'>{link.title}</Link><br /></span>

    //           ))}
    //         </div>
    //       </div>
    //       <hr />
    //       <div className='w-[200px]  h-[150px]'>
    //         <h1 className='font-bold text-white mb-4 text-center '>FOLLOW US :</h1>

    //         <div className='flex justify-center space-x-8 mt-8'>
    //           <FaFacebook size={40} className='cursor-pointer ' />
    //           <AiFillInstagram size={42} className='cursor-pointer' />
    //           <AiFillTwitterCircle size={42} className='cursor-pointer' />

    //         </div>
    //       </div>
    //     </div>
    //     <hr />
    //     <p className='py-4 text-white text-center'>Copyright ©2024 MN Trusted.com . All Rights Reserved. | Privacy Policy</p>
    //   </div>

    //   {/* Mobile view Footer*/}

    //   <div className='md:hidden w-full bg-[#0066cc] block justify-center items-center space-y-2 h-[420px]  text-[14px] '>

    //     <div className='h-[100px] '>
    //       <h1 className='font-bold text-white text-center text-xl pt-6'>CONTACT US :</h1>
    //       <div className='flex justify-center items-center space-x-6 mt-4  '>
    //         <span className={roboto.className}><a href='tel:+92 341258068' className=' font-bold inline-flex items-center text-white hover:underline gap-2'> <BsTelephone size={25} /> +92 3412458068</a><br /></span>
    //         <span className={roboto.className}><a href='mailto:mntrusted@gmail.com?subject=Enter Subject For Which Service You&body=Type Message' className=' font-bold text-white hover:underline inline-flex gap-2'><MdEmail size={25} /> mntrusted@gmail.com</a></span>
    //       </div>
    //     </div>

    //     <div className='h-[100px]'>
    //       <h1 className='font-bold text-white mb-4 text-center text-xl'>INFO :</h1>
    //       <div className='flex justify-center space-x-4'>
    //         {navLinks.map((link, index) => (
    //           <span className={roboto.className} key={index}><Link href={link.path} className=' font-bold   text-white hover:underline'>{link.title}</Link><br /></span>

    //         ))}
    //       </div>
    //     </div>

    //     <div className='h-[100px] '>
    //       <h1 className='font-bold text-white mb-4 text-center text-xl '>FOLLOW US :</h1>

    //       <div className='flex justify-center items-center space-x-8 mt-4'>
    //         <FaFacebook size={38} className='cursor-pointer ' />
    //         <AiFillInstagram size={42} className='cursor-pointer' />
    //         <AiFillTwitterCircle size={42} className='cursor-pointer' />

    //       </div>
    //     </div>
    //     <hr />

    //     <p className='py-4 text-white text-center text-[16px]'>Copyright ©2024 MN Trusted.com . All Rights Reserved. | Privacy Policy</p>


    //   </div>
    // </footer>


  )
}

export default Footer
