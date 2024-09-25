"use client"

import Image from "next/image"
import { useState } from "react"

const Page = () => {
  const [image ,setImage] = useState<File | null>(null);

  return (
   <>
    <form className="pt-5 px-5 sm:pt-12 sm:pl-16">
      <p className="text-xl ">Upload thumbnail</p>
      <label htmlFor="image">
        <Image src={!image?"/upload_area.png":URL.createObjectURL(image)}  width={170} height={70} alt="Upload" className="mt-4 w-[170px] h-[100px]"
        
        />
      </label>
      <input onChange={(e)=>setImage(e.target.files ? e.target.files[0]:image)} type="file" id="image" hidden required />
      <p className="text-xl mt-4">Blog Title</p>
      <input className="w-full sm:w-[500px] mt-4 px-4 py-3 border" type="text" placeholder="Blog Title Here" required />
      
      <p className="text-xl mt-4">Blog Description</p>
      <textarea className="w-full sm:w-[600px] mt-4 px-4 py-3 border"  placeholder="Blog Desciption Here" rows={8} required />  
      <br />
      <button type="submit" className="mt-8 w-40 h-12 bg-[#0066cc] text-white">ADD</button>   
      </form>
      
      
       </>
  )
}

export default Page