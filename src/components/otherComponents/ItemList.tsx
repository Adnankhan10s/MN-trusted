'use client'
import React from 'react';
import { Item } from '../../../serviceData';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Lato } from 'next/font/google';

const lato = Lato({
weight:"900",
subsets:["latin"],
display:"auto"
});
interface ItemsListProps{
 items:Item[];
}

const ItemList : React.FC<ItemsListProps> = ({items}) => {
  return (
    <div className='w-full h-full bg-slate-200 px-6'>
             {
                items.map((item , index)=>(
                    <motion.div 
                    key={index}
                    initial={{opacity :0, y:75}}
                    whileInView={{opacity : 1 , y : 0}}
                    viewport={{once:false}}
                    transition={{duration : 0.5 , delay : 0.25 }}
                    className={`mt-12 flex flex-col gap-6 ${index % 2 === 1 ? " md:flex-row-reverse gap-12": " md:flex-row"}`}
                    >
                        <div className='space-y-2 w-full'>
                         {/* <h2 className='text-white/70 text-7xl my-4'>{`0 ${index +1}`}</h2> */}
                         <h2 className={`${lato.className} md:text-4xl 2xl:text-6xl text-2xl font-bold text-[#f99b27]`}>{item.title}</h2>
                         <p className='md:text-lg text-gray-950 break-words  md:font-bold md:p-4 px-1 py-2'>{item.description}</p>
                         <div className='w-64 h-[1px] bg-[#00004f] my-4'>
                         </div>
                        
                        </div>
                        <div className='flex justify-center items-center md:h-[300px] md:w-[500px] w-[310px] h-[270px] '>
                            <Image width={600} height={300} src={item.image} alt={item.title} className='object-fill hover:scale-105 duration-500 delay-75 transition-all md:h-[300px] md:w-[500px] h-[270px] border rounded border-gray-400' />
                        </div>

                    </motion.div>
                ))
            }

    </div>
  )
}

export default ItemList