import Image from "next/image";
import profile_icon from "@/../public/admin.webp"

const BlogTableitem = ({authorImg,title}:any) => {
  return (
    <tr className="bg-white border-b">
      <th scope="row" className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
       <Image alt="authorimg" src={authorImg?authorImg:profile_icon } width={20} height={20}  />
      </th>
      <td className="px-6 py-4">
          {title?title:"no title"}
      </td>
      <td className="px-6 py-4">
          {"11 Jan 2024"}
      </td>
      <td className="px-6 py-4">
          x
      </td>
    </tr>
  )
}

export default BlogTableitem