"use client"
import React from 'react'
import { DotLoader } from 'react-spinners'

const BlogSpin = () => {
  return (
    <div className="flex justify-center content-center items-center h-[500px] min-w-[100vw] bg-slate-200">
        <DotLoader
         color="#0066cc"
         speedMultiplier={1}
         
         />
    </div>
  )
}

export default BlogSpin