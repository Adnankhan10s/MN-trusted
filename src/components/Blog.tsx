"use client"
import Link from 'next/link';
import React, { useEffect, useState }  from 'react';
import { Poppins, Cookie } from 'next/font/google';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Carousel from '@/components/Crousel'
import BlogCard from '@/components/otherComponents/BlogCard';
import axios from 'axios';
import BlogSpin from './otherComponents/BlogSpin';
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
export interface Blog extends Document {
  _id:string;
  title:string;
  description:string;
  imageUrl:string;
  category:string;
  createdAt:Date;
}


const slides = [
  { image: '/banner/b1.jpg', text: 'Home Buying Tips and Property Insights from Industry Experts' },
  { image: '/banner/b2.jpg', text: 'Discover the Latest in Real Estate Market Trends and Opportunities' },
  { image: '/banner/b3.jpg', text: 'Explore expert insights, property market trends, and tips to make informed investments' },
];



const Blog  = () => {
   const [menu, setMenu] = useState ("All");
   const [blogs ,setBlogs] = useState<Blog[]>([]);
   const [loader, setLoader] = useState(true);

   async function fetchBlogs() {
    try {
      const response = await axios.get('/api/blogs');
      setBlogs(response.data);
         setLoader(false)
    } catch (error) {
      console.error('Error fetching blogs:', error);
      return [];
    }
  }
  useEffect(() => {
    fetchBlogs()
  }, [])
  

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
    <div className='w-full flex justify-center gap-6 my-10 px-6 overflow-scroll md:overflow-auto'>
      <button onClick={()=>setMenu('All')} className={menu==="All" ?'bg-black/80 text-white py-1 px-4 rounded-sm':""}>All</button>
      <button onClick={()=>setMenu('Real Estate')} className={menu==="Real Estate" ?'bg-black/80 text-white py-1 px-4 rounded-sm':""}>Real Estate</button>
      <button onClick={()=>setMenu('Data Handling')} className={menu==="Data Handling" ?'bg-black/80 text-white py-1 px-4 rounded-sm':""}>Data Handling</button>
      <button onClick={()=>setMenu('Other')} className={menu==="Other" ?'bg-black/80 text-white py-1 px-4 rounded-sm':""}>Other</button>
      
      </div>
     
  
      <div className='w-full h-full justify-items-center  mt-8 md:mt-20 grid grid-cols-1  sm:grid-cols-2 gap-6 md:grid md:grid-cols-3 2xl:grid-cols-4'>
      {
  
            loader?<div className='w-full h-[500px]'><BlogSpin/></div>:
      blogs.filter((item:any)=>menu==="All"?true:item.category===menu).map((blog:Blog)=>(
        <BlogCard key={blog._id} blog={blog}/>
      ))
    
     
     
    }
  </div>
   
    
     <Footer />
     </section>





  )
}

export default Blog
