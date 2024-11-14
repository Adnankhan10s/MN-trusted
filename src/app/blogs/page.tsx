"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Poppins, Cookie } from 'next/font/google';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Carousel from '@/components/Crousel'
import BlogCard from '@/components/otherComponents/BlogCard';
import axios from 'axios';

export interface Blog extends Document {
  _id:string;
  title:string;
  description:string;
  imageUrl:string;
  createdAt:Date;
}

const cookie = Cookie({
  weight:"400",
  subsets:["latin"],
  display:"auto"
})

const poppins = Poppins({
  weight: "900",
  display: "swap",
  subsets: ["latin"]
});

const wait = async (ms:number) => {
  return new Promise(resolve =>setTimeout(resolve , ms))
}
const slides = [
  { image: '/banner/b1.jpg', text: 'Home Buying Tips and Property Insights from Industry Experts' },
  { image: '/banner/b2.jpg', text: 'Discover the Latest in Real Estate Market Trends and Opportunities' },
  { image: '/banner/b3.jpg', text: 'Explore expert insights, property market trends, and tips to make informed investments' },
];


const Page : React.FC =  () => {

const [blogData, setBlogData] = useState<Blog[]>([])

    useEffect(() => {
    const fetchBlog = async ()=>{
         await wait(2000);

       try {
        const response = await axios.get("/api/blogs");
        console.log(response.data)
        return setBlogData(response.data);
       } catch (error) {
         console.log("Fetchin Data Error " , error)
       }
    }
    fetchBlog();
 }, []);
  return (
    // Nav Section
     <section className='bg-slate-200 w-full h-full  '>
     
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
     
     <div className='w-full  pt-[70px] shadow-md md:pt-20 '>
     <Carousel slides={slides} />
     </div>
     <div className='w-full text-center  pt-10 '>   
      <h1 className={`${cookie.className} md:text-6xl text-4xl  text-[#00004f] font-extrabold`}>
        Latest Insights and Stories
        </h1>
        <div className='md:w-[500px] w-[250px] h-[1px] bg-[#1c1c1c] mx-auto mt-4'></div>
     </div>
     <div className='text-center'>
      <p className=' pt-4 md:px-28 px-10 font-serif font-medium text-gray-950 md:font-bold '>Welcome to our blog, where we share the latest insights, trends, and stories from our field. Whether you're looking for tips, industry news, or in-depth guides, our blog has something for everyone. Dive into our curated articles and explore fresh perspectives to keep you informed and inspired.</p>
     </div>

     <div className='w-full h-full justify-items-center  mt-8 md:mt-20 grid grid-cols-1  sm:grid-cols-2 gap-6 md:grid-cols-3 2xl:grid-cols-4'>
     {
      blogData.map((blog)=>(
        <BlogCard key={blog._id} blog={blog}/>
      ))
    
     
   
    }

     </div>
    
     <Footer />
     </section>




    // <div className='bg-blue-500  md:w-full'>
    //   <div className='bg-transparent backdrop-blur-md w-full h-[70px] md:h-[80px] flex justify-between md:justify-between  content-center items-center shadow-lg md:px-2 px-2 fixed z-50 overflow-hidden'>
    //     <Link href={"/"}><Image src={"/Logo.png"} width={500} height={500} alt='logo' className='md:w-[250px] w-[150px] h-[60px] text-black' />
    //     </Link>
    //     <div>
    //       <h1 className={`md:text-4xl pr-4 md:pr-0 text-2xl text-[#cdbb87] font-extrabold ${poppins.className} `}>Blogs</h1>
    //     </div>


    //     <div >
    //       <Link href='/contact' className=' inline-flex items-center md:px-8 px-2 md:py-2 py-2 bg-[#f9mt-2] rounded-md text-white font-bold text-[12px] md:text-[18px]  bg-[#bb8c53] hover:text-black/70 '>CONTACT <MdOutlineKeyboardArrowRight size={22} />
    //       </Link>
    //     </div>
    //   </div>

    //   <div className=' h-full md:w-full  justify-center py-24  '>

    //     <motion.div
    //       initial={{ opacity: 0 }}
    //       whileInView={{ opacity: 1 }}
    //       viewport={{ once: true }}
    //       transition={{ duration: 0.5, delay: 0.5 }}
    //       className='text-center  '
    //     >
    //       <h1 className={`text-4xl md:text-6xl text-[#f99b27] ${cookie.className}`}>All New Updates Here !</h1>

    //     </motion.div>

    //     <div className=' border-t-2 border-[#f99b27] py-20 md:px-6 mt-10 md:w-full  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4 z-30  grid-cols-1  justify-items-center  gap-6  mx-auto  '>
    //       {/* Blog Cards */}
    //       <div className='shadow-xl w-[320px]  md:w-[300px] h-[470px] hover:scale-105  duration-75   mt-2  rounded overflow-hidden'>
    //         <Image src={'/blogs/blog1.jpg'} priority alt='img1' width={400} height={400} objectFit='cover' className='w-full' />
    //         <div className='px-6 py-4'>
    //           <div className='font-bold text-xl mb-2'>
    //             Technology
    //           </div>
    //           <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis, ratione ullam illo in necessitatibus, voluptatum iusto sed omnis
    //           </p>

    //         </div>
    //         <div className='flex justify-center items-center py-2 '><Link href={"/"} className="px-2 py-2 rounded-md font-bold hover:bg-gray-300 hover:text-black text-gray-800 border-black bg-gray-500">Read More</Link>
    //         </div>
    //       </div>
    //       <div className='shadow-xl w-[320px]  md:w-[300px] h-[470px] hover:scale-105  duration-75  mt-2  rounded overflow-hidden'>
    //         <Image src={'/blogs/blog2.jpg'} priority alt='img1' width={400} height={400} className='w-full' />
    //         <div className='px-6 py-4'>
    //           <div className='font-bold text-xl mb-2'>
    //             Technology
    //           </div>
    //           <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis, ratione ullam illo in necessitatibus, voluptatum iusto sed omnis
    //           </p>

    //         </div>
    //         <div className='flex justify-center items-center py-2'><Link href={"/"} className="px-2 py-2 rounded-md font-bold hover:bg-gray-300 hover:text-black text-gray-800 border-black bg-gray-500">Read More</Link>
    //         </div>
    //       </div>
    //       <div className='shadow-xl w-[320px]  md:w-[300px] h-[470px] hover:scale-105  duration-75  mt-2  rounded overflow-hidden'>
    //         <Image src={'/blogs/blog3.jpg'} priority alt='img1' width={400} height={400} className='w-full' />
    //         <div className='px-6 py-4'>
    //           <div className='font-bold text-xl mb-2'>
    //             Technology
    //           </div>
    //           <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis, ratione ullam illo in necessitatibus, voluptatum iusto sed omnis
    //           </p>

    //         </div>
    //         <div className='flex justify-center items-center py-2'><Link href={"/"} className="px-2 py-2 rounded-md font-bold hover:bg-gray-300 hover:text-black text-gray-800 border-black bg-gray-500">Read More</Link>
    //         </div>
    //       </div>
    //       <div className='shadow-xl w-[320px]  md:w-[300px] h-[470px] hover:scale-105  duration-75 mt-2 rounded overflow-hidden'>
    //         <Image src={'/blogs/blog1.jpg'} priority alt='img1' width={400} height={400} className='w-full' />
    //         <div className='px-6 py-4'>
    //           <div className='font-bold text-xl mb-2'>
    //             Technology
    //           </div>
    //           <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis, ratione ullam illo in necessitatibus, voluptatum iusto sed omnis
    //           </p>

    //         </div>
    //         <div className='flex justify-center items-center  py-2'><Link href={"/"} className="px-2 py-2 rounded-md font-bold hover:bg-gray-300 hover:text-black text-gray-800 border-black bg-gray-500">Read More</Link>
    //         </div>
    //       </div>
    //       <div className='shadow-xl w-[320px]  md:w-[300px] h-[470px] hover:scale-105  duration-75  mt-2  rounded overflow-hidden'>
    //         <Image src={'/blogs/blog1.jpg'} priority alt='img1' width={400} height={400} className='w-full' />
    //         <div className='px-6 py-4'>
    //           <div className='font-bold text-xl mb-2'>
    //             Technology
    //           </div>
    //           <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis, ratione ullam illo in necessitatibus, voluptatum iusto sed omnis
    //           </p>

    //         </div>
    //         <div className='flex justify-center items-center py-2 '><Link href={"/"} className="px-2 py-2 rounded-md font-bold hover:bg-gray-300 hover:text-black text-gray-800 border-black bg-gray-500">Read More</Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className='w-full border-t-2 border-[#f99b27]'>
    //     <Footer />
    //   </div>

    // </div>




  )
}

export default Page
