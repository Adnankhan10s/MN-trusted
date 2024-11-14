import Image from 'next/image';
import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { categories } from '../../../../serviceData';
import { notFound } from 'next/navigation';
import { Oswald } from 'next/font/google';
import ItemList from '@/components/otherComponents/ItemList';


const oswald = Oswald({
   weight:"600",
   subsets:["latin"],
   display:"auto"
});

interface CategoryPageProps{
    params:{
        category:string;
    };
}
const wait = async (ms:number) => {
    return new Promise(resolve =>setTimeout(resolve , ms))
};
const page = async ({params}:CategoryPageProps) => {
    await wait(2000);
       const {category}= params;
       const categoryData = categories.find((cat)=> cat.id === category);
    if(!categoryData){
        notFound();
    }

    return (
        
        <div className='w-full h-full  bg-slate-200 '>
             <Navbar />
             <div className='w-full h-full bg-slate-200 pb-10'>
             <div className='w-full h-[300px] md:h-[600px] shadow-md pt-20 '>
              <Image src={categoryData.mainImage}  alt='Main Img' width={1000} height={700} priority className='w-full h-full  object-fill' />
             </div>
             <div className='w-full pt-6 md:pt-8 '>
                
                 <h1 className={`font-bold md:text-4xl text-xl text-[#00004f] text-center ${oswald.className} `}>{categoryData.title}</h1>
                 <div className='w-60 md:w-[400px] h-[1px] bg-[#f99b27] my-2 md:my-4 mx-auto'></div>
             </div>
             <div className='w-full h-auto py-6 px-6 md:px-10 '>
                 <p className='text-center  font-bold text-gray-950 text-[13px] leading-4 md:leading-8  md:text-lg '>{categoryData.description}</p>
             </div>
             <ItemList items={categoryData.items} />
             </div>
             <div className='w-full h-[1px] bg-[#00004f] my-2 md:my-4 mx-auto'></div>

             <Footer />
        </div>


       
        
    )
}

export default page
