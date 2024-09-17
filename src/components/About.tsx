import React from 'react';
import { Bebas_Neue } from 'next/font/google';
import { FaRegCircleCheck } from "react-icons/fa6";



const bebasneue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})
const services = [
  {
    title: " WordPress or CRM Management"
  },
  { title: "Property Listing and Research" },
  { title: "Data Entry, Data Mining, and Data Scraping" },
  { title: "Digital Marketing Management" },
  { title: "Graphic Designer Specialist for Real estate Promos" },
  { title: "Spreadsheet. and Documentation Presentation work - MS Office Expert" },
  { title: "Email Handling and Campaign Management (Mailchimp, iContact, etc.) | Specialized in Listing Promotions" },
  { title: "General Administrative Support" },
  { title: "Search Engine Optimization" }

]


const About = () => {
  return (
    <div className='md:w-full md:h-full lg:min-h-[1200px] h-[2050px] bg-[#0066cc] space-y-4 md:space-y-0 overflow-clip' id='about'>

      <div className='flex h-[100px] text-white justify-center items-center text-6xl font-bold font-head  shadow-md'>
        <h1 className={bebasneue.className}>ABOUT US</h1>
      </div>

      <div className='md:w-full w-auto md:h-[200px] h-[400px]    flex  justify-center items-center   '>
       <div className='md:flex md:justify-center items-center content-center  md:w-full md:space-x-10 mt-10 '>
        <div className=' md:mx-0 mx-auto md:w-[450px] w-[350px]  h-[190px]  border-dashed border-2 border-gray-800 text-center p-2'>
          <h2 className='font-bold text-[#f99b27] md:text-xl'>Our Vision</h2>
          <p className='text-gray-800 font-bold md:font-bold md:pt-4  '> We envision ourselves as a partner of choice, providing value to customers and creating opportunities for their long-term and sustainable growth.</p>
        </div>
        <div className='mt-2 md:mt-0  mx-auto md:mx-0 md:w-[450px] w-[350px] h-[190px] border-2 border-dashed border-gray-800 text-center p-2'>
          <h2 className='font-bold text-[#f99b27] md:text-xl'>Our Mission</h2>
          <p className='text-gray-800 font-bold md:font-bold md:pt-2'>Our mission is to become the leading provider of value-added virtual assistant services globally and achieve it with the highest level of integrity and transparency, helping clients meet their business goals.</p>
        </div>
        </div>
      </div>

      <div className='text-center text-white md:leading-8 leading-6 md:pt-9'>
        <h1 className=' text-[#f99b27] text-2xl  font-bold'>
          Get the best property listing services</h1>

        <p className='text-[12px] md:text-[16px] pt-2'> Find the best property listing services you need to help you successfully meet your project planning goals and deadline </p>

        <p> We specialize in providing Virtual Assistance tailored for the Real Estate industry, backed by over a decade of experience. Alongside my dedicated team, we have successfully executed numerous projects for a diverse clientele including Investors, Agents, Brokers, and Property Owners.</p>

        <p>Our team offers expertise in a wide range of services, including:
        </p>

        <ul className='pt-6 text-start px-14 leading-8 space-y-4 '>
          {services.map((index, value) => (
            <li key={value} className='flex items-center gap-4 md:text-lg'><span><FaRegCircleCheck className='text-[#f99b27] md:size-8' size={20} /></span>   {index.title}</li>
          ))}

        </ul>
        <div className='pt-6 leading-8 text-center px-4 '>
        <p>With a focus on delivering high-quality results and maintaining client satisfaction, we are committed to streamlining operations and enhancing productivity within the Real Estate sector.</p>
        <p>Please feel free to reach out to us for any of your virtual assistance needs in the real estate industry. We look forward to discussing how we can support and enhance your business operations.
        </p>
        </div>
      </div>


    </div>
  )
}

export default About

