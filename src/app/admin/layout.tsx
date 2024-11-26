import Sidebar from "@/components/AdminComponents/Sidebar";
import SingOut from "@/components/AdminComponents/SingOut";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
import {redirect} from 'next/navigation'
export default async function Layout({ children }: Readonly<{ children: React.ReactNode; }>) {
 const session = await getServerSession(authOptions);
 if (!session){
       redirect("/login")
 }
  return (
    <>
    <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full">
         <div className="flex items-center justify-between w-full py-3 max-h-[60px] md:px-12 px-6 border-b border-black">
           <h3 className="font-bold text-lg text-[#0066cc]">Admin Panel</h3>
           <div className="flex gap-4"><SingOut/> <Image src={"/admin.webp"} width={40} height={40} alt="Admin" className="rounded-full"/></div>
         </div>
        
         {children}
        
        </div>
    </div>
     
    </>
  )
}