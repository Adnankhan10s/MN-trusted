
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Roboto } from 'next/font/google';
import { Blog } from '../Blog';

const roboto = Roboto({
  weight:"400",
  subsets:["greek"],
  display:"auto"
});
interface BlogCardProps {
    blog: Blog;
  }
const BlogCard : React.FC< BlogCardProps > = ({blog}) => {
  const truncatedTitle = blog.title.length > 30 ? blog.title.substring(0,30)+"...":blog.title;
  const truncatedBlogDes = blog.description.length > 150 ? blog.description.substring(0,150) + " . . . .":blog.description;
  return (

         <div key={blog._id} className='w-[320px] h-[430px] md:w-[350px] shadow-lg shadow-blue-200 md:h-[450px] bg-white rounded border-black/40 border mx-auto flex flex-col overflow-clip'>
            <div className='border-b relative border-black/70 w-full h-[250px] overflow-hidden '>
                <Image src={blog.imageUrl} sizes='auto' fill alt='Cardimg' priority className='object-cover w-auto h-auto' />
            </div>
            <div className={`${roboto.className} text-[#00004f] h-[20px]  px-2 mt-2`}>
                 <h2 className='md:text-xl text-lg font-bold'>{truncatedTitle}</h2>
            </div>
            <div className='px-2 mt-2 md:text-base text-gray-900 h-[100px] text-sm md:h-[120px] overflow-clip  '>
                <p>{
                    truncatedBlogDes
                    } 
                </p>
            </div>
            
                <p className='px-4 py-1 bg-black/70 text-white font-bold'> {blog.category}</p>
            <div className='flex justify-between items-center px-4  my-4'>
                   <Link href={`/blogDetails/${blog._id}`} className='   duration-300 text-blue-800 text-lg font-bold hover:text-blue-600' >Read More</Link>
                   <p>{new Date(blog.createdAt).toLocaleDateString()} </p>
            </div>

         </div>
        

  );
};

export default BlogCard;
