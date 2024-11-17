import Footer from '@/components/Footer';
import { Poppins } from 'next/font/google';
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation';
import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const poppins = Poppins({
    weight: "900",
    display: "swap",
    subsets: ["latin"]
  });

  interface BlogDetailProps {
    params: { id: string };
  }
  async function fetchBlogDetails(id: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${id}`, {
      cache: 'no-store',
    });
    if (!res.ok) {
      return null;
    }
    return res.json();
  }

const Page = async ({params}:BlogDetailProps) => {
    const blog = await fetchBlogDetails(params.id);
  
    if (!blog) {
        notFound();
      }
  return (
    <div className='bg-slate-200 w-full h-full '>
       <div className='bg-[#385386] backdrop-blur-md w-full h-[70px] md:h-[80px] flex justify-between md:justify-between  content-center items-center shadow-lg shadow-black md:px-4 px-2 fixed z-50 overflow-hidden'>
         <Link href={"/"}><Image src={"/Logo.png"} width={500} height={500} alt='logo' className='md:w-[250px] w-[120px] h-[40px] md:h-[60px] text-black' />
         </Link>
         <div>
           <h1 className={`md:text-4xl pr-4 md:pr-0 text-2xl text-[#cdbb87] font-extrabold ${poppins.className} `}>Blogs</h1>
         </div>
         <div>
           <Link href='/contact' className=' inline-flex items-center md:px-8 px-2 md:py-2 py-2 bg-[#f9mt-2] rounded-md text-white font-bold text-[12px] md:text-[18px]  bg-[#bb8c53] hover:text-black/70 '>CONTACT <MdOutlineKeyboardArrowRight size={22} />
           </Link>
         </div>
       </div>
       <div className='w-full pt-[90px]  flex justify-center'>
          <div className='relative md:w-[700px] md:h-[400px]  w-[350px] h-[220px] overflow-hidden bg-yellow-500 rounded shadow-md border border-black '>
            <Image src={blog.imageUrl} fill  alt='Image' className='object-fill w-auto h-auto' />
          </div>
       </div>
         <div className='w-full text-center mt-10'>
           <h1 className={`md:text-6xl text-2xl font-bold  text-[#00004f] ${poppins.className} `}>{blog.title}</h1>
           <div className='mt-5 md:w-[800px] w-[300px] h-[2px] rounded bg-[#1c1c1c] mx-auto'></div>
         </div>
         
         <div className='md:w-[800px] w-full mx-auto h-full my-10 text-justify  md:text-center px-10 md:px-2  '>
          <p className='font-bold text-gray-950 font-serif'>
            {blog.description}
          </p>

         </div>

           <div className='mx-auto md:w-[1000px] w-full px-10 md:px-4 flex justify-end mt-10 mb-4'>
            <p className='text-gray-800  border border-black/65 p-2'>
              {
                new Date(blog.createdAt).toLocaleDateString()
              }
            </p>
           </div>
           <Footer />
    </div>
  )
}

export default Page