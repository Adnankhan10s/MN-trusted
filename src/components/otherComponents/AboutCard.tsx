import React from 'react';


const AboutCard = () => {
    return (
        <div>
            <div className='md:w-full  w-full  md:h-[300px] h-[500px] md:mt-8    flex  justify-center items-center  overflow-clip  '>
                <div className='md:flex md:justify-between md:px-48 items-center content-center  md:w-full md:space-x-10 mt-10 '>
                    <div
               
                    className=' md:mx-0 mx-auto  lg:w-[600px] w-[350px]  lg:h-[220px] h-[200px]  border-dashed border-2 border-gray-800 text-center p-5'>
                        <h2 className='font-bold text-[#f99b27] md:text-2xl'>Our Vision</h2>
                        <p className='text-gray-800 font-bold md:font-bold md:pt-4  '> We envision ourselves as a partner of choice, providing value to customers and creating opportunities for their long-term and sustainable growth.</p>
                    </div>
                    <div
                    
                    className='mt-2 md:mt-0  mx-auto md:mx-0 lg:w-[600px] w-[350px] p-5 lg:h-[220px] h-[200px] border-2 border-dashed border-gray-800 text-center '>
                        <h2 className='font-bold text-[#f99b27] lg:text-2xl'>Our Mission</h2>
                        <p className='text-gray-800 font-bold md:font-bold md:pt-2'>Our mission is to become the leading provider of value-added virtual assistant services globally and achieve it with the highest level of integrity and transparency, helping clients meet their business goals.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutCard