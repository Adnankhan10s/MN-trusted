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

const page = ({params}:CategoryPageProps) => {

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
              <Image src={categoryData.mainImage} alt='Main Img' width={1000} height={700} priority className='w-full h-full  object-fill' />
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


        // <main>
        // <div className='bg-[#0066cc] md:w-full md:h-[1800px]  justify-center px-4 md:px-0 overflow-hidden'>
        //     <Navbar />
           
        //     <div className='md:w-full md:h-[300px]'>
        //     <Image src={categoryData.mainImage} priority={true}  width={1000} height={300} alt='main' className='md:w-full md:h-[300px]' /></div>
          

         
        //     <div className='md:w-[1000px]  mt-8 mx-auto ' >
        //         <h1 className='md:text-4xl text-lg text-center md:text-start px-4 md:px-0 font-bold text-white font-sans'>{categoryData.title}</h1>
        //         <p className='text-white/70 pt-4 md:text-lg text-[12px] text-center md:text-start'>Since you will need people with multitasking abilities rather than rea estate specialization, we walk the talk by providing reliable remote workers who are highly available and punctual. You can hire a virtual assistant for real estate reports creation from us to do away with the repetitive reports creation task. EVA's VA for real estate report creation can handle the following -</p>
               
               
        //         {categoryData.items.map((item,index)=>(

              
        //      <div className=' md:w-[1000px] md:max-h-[300px] h-[500px]   md:flex content-center items-center md:space-x-14 mt-4  ' key={index}>
             
        //        <div className='md:w-[220px] md:h-[220px] ' >
        //         <Image src={item.image} width={220} height={220} alt='img' className='rounded-full border-[20px] border-solid border-blue-400 mx-auto md:mx-0 '/>
        //         </div>
        //         <div className='md:w-[600px]   text-center md:text-start mt-4    '>
        //             <h1 className='text-[#ff874a] text-lg md:text-2xl font-bold'>{item.title}</h1>
        //             <p className='text-white py-4 pt-4 md:text-[17px] text-[12px]'>{item.description}</p>
        //         </div>
                
        //      </div> ))}       
        //     </div>  

             
        // </div>
        // <hr  />
        // <Footer />
        // </main>
        
    )
}

export default page
