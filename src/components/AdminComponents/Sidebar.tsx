import { DM_Serif_Text } from 'next/font/google';
import { FaRegistered } from 'react-icons/fa';
import { IoIosAddCircleOutline } from "react-icons/io";
import { GoChecklist } from "react-icons/go";
import Link from 'next/link';



const dmserif = DM_Serif_Text({
    weight: "400",
    subsets: ["latin"],
    display: "swap"
})

const Sidebar = () => {
    return (
        <div className='flex flex-col bg-slate-200'>
            <div className='px-2 sm:pl-14 py-3 border border-black'>
                <div className='flex p-2 '>
                    <h1 className={`font-bold md:text-4xl text-2xl text-[#0066cc] ${dmserif.className} `}>MN</h1>
                    <p className='font-semibold md:text-lg text-sm font-para bg-gradient-to-b from-[#0c0c0c]  to-[#eecdad] inline-block text-transparent bg-clip-text'>Trusted </p>
                    <FaRegistered size={15} className='text-[#070707] pt-2 ' />
                </div>
            </div>

            <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-black'>
                <div className='w[50%] sm:w-[80%] absolute right-0'>
                    <Link href='/admin/addProduct' className='flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#0066cc]'>
                        <IoIosAddCircleOutline size={26} /> <p>Add Blogs</p>
                    </Link>
                    <Link href="/admin/blogList" className=' mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#0066cc]'>
                        <GoChecklist size={26} /> <p>Blog List</p>
                    </Link>
                </div>
            </div>

            



        </div>
    )
}

export default Sidebar