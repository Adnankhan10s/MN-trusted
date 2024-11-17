import BlogTableitem from "@/components/AdminComponents/BlogTableitem"
import { Blog } from "@/components/Blog"

const fetchBlog = async(): Promise<Blog[]> =>{
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`, {
      cache:'no-store' ,
       headers: {
         Accept: 'application/json',
       },
     });   
      const blogs :Blog[] =await res.json();
      return blogs
  } catch (error) {
    console.log(error)
    return [];
  }

}


const page = async () => {
  const blogs = await fetchBlog();
  return (
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
              <BlogTableitem  blogs={blogs} />
            </tbody>

          </table>
      </div>
    </div>
  )
}

export default page
