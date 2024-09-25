"use client"
import {DotLoader} from "react-spinners";

const Spinner = () => {
  return (
    <div className="flex justify-center content-center items-center h-[100vh] w-[100vw] bg-slate-200">
        <DotLoader
         color="#0066cc"
         speedMultiplier={1}
         
         />
    </div>
  )
}

export default Spinner