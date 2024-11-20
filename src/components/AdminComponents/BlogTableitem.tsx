"use client"
import Image from "next/image";
import { MdDeleteOutline } from "react-icons/md";
import  { Blog } from "../Blog";
import axios from "axios";


interface BlogTableItemProps {
  blogs: Blog[];
}

const BlogTableitem : React.FC<BlogTableItemProps> = ({ blogs}) => {
  

   const handleDelete= async(id:string)=>{
    try {
      const res= await axios.delete(`/api/blogs?id=${id}`);
      window.location.reload();
      alert("BLog Deleted")
    } catch (error) {
     alert('Failed to delet')
    }
  }

  return (

    <>
    
   
    {
       blogs.map((blog)=>(

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
    </tr>))
}
  </>
  )

}
export default BlogTableitem