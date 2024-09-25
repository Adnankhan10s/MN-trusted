import Sidebar from "@/components/AdminComponents/Sidebar";
import Image from "next/image";

export default function Layout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <>
    <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full">
         <div className="flex items-center justify-between w-full py-3 max-h-[60px] md:px-12 px-6 border-b border-black">
           <h3 className="font-bold text-lg text-[#0066cc]">Admin Panel</h3>
           <Image src={"/admin.webp"} width={40} height={40} alt="Admin" className="rounded-full"/>
         </div>
         {children}
        </div>
    </div>
     
    </>
  )
}