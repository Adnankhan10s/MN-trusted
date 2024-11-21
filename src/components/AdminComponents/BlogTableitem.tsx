"use client"
import Image from "next/image";
import { MdDeleteOutline } from "react-icons/md";
import  { Blog } from "../Blog";
import axios from "axios";
import { useEffect, useState } from "react";

const handleDelete= async(id:string)=>{
  try {
    const res= await axios.delete(`/api/blogs?id=${id}`);
    window.location.reload();
    alert("BLog Deleted")
  } catch (error) {
   alert('Failed to delet')
  }
}


const BlogTableitem  = ( ) => {
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

    <div>
    <div className='w-full flex justify-center gap-6 mt-10 px-6 overflow-scroll md:overflow-auto'>
      <button onClick={()=>setMenu('All')} className={menu==="All" ?'bg-black/80 text-white py-1 px-4 rounded-sm':""}>All</button>
      <button onClick={()=>setMenu('Real Estate')} className={menu==="Real Estate" ?'bg-black/80 text-white py-1 px-4 rounded-sm':""}>Real Estate</button>
      <button onClick={()=>setMenu('Data Handling')} className={menu==="Data Handling" ?'bg-black/80 text-white py-1 px-4 rounded-sm':""}>Data Handling</button>
      <button onClick={()=>setMenu('Other')} className={menu==="Other" ?'bg-black/80 text-white py-1 px-4 rounded-sm':""}>Other</button>
      
      </div>
      <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">       
      <h1>All Blogs</h1>      
      <div className="relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
          <table className="w-full text-sm text-gray-500">
            <thead className="text-sm text-gray-700 text-left uppercase bg-gray-50">
              <tr>
                <th scope="col" className="hidden sm:block px-6 py-3">
                  Author name
                </th>
                <th scope="col" className=" px-6 py-3">
                  Blog Title
                </th>
                <th scope="col" className=" px-6 py-3">
                  Date
                </th>
                <th scope="col" className=" px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
            {
       blogs.filter((item:any)=>menu==="All"?true:item.category===menu).map((blog)=>(
       

    <tr key={blog._id} className="bg-white border-b">
      <th  scope="row" className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
       <Image alt="authorimg" src={blog.imageUrl } width={20} height={20}  />
      </th>
      <td className="px-6 py-4">
          {blog.title.length > 40 ? blog.title.substring(0,40)+"...":blog.title}
      </td>
      <td className="px-6 py-4">
          {new Date(blog.createdAt).toLocaleDateString()}
      </td>
      <td className="px-6 py-4">
      <MdDeleteOutline size={25}  onClick={()=>handleDelete(blog._id)}   className="hover:text-red-500 cursor-pointer" />

      </td>
    </tr>
   ))
}
            </tbody>

          </table>
      </div>
    </div>
   
   
</div>
  )

}
export default BlogTableitem