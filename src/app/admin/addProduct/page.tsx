"use client"

import Image from "next/image"
import { useState } from "react"

const page = () => {
  const [image ,setImage] = useState<File | null>(null);

  return (
   <>
    <form className="pt-5 px-5 sm:pt-12 sm:pl-16">
      <p className="text-xl ">Upload thumbnail</p>
      <label htmlFor="image">
        <Image src={!image?"/upload_area.png":URL.createObjectURL(image)}  width={170} height={70} alt="Upload" className="mt-4"/>
      </label>
      <input onChange={(e)=>setImage(e.target.files ? e.target.files[0]:image)} type="file" id="image" hidden required />
    </form>
      
      
       </>
  )
}

export default page