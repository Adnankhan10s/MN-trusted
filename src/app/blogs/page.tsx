import Blog from '@/components/Blog'
import React from 'react'

const wait = async (ms:number) => {
  return new Promise(resolve =>setTimeout(resolve , ms))
};

const page = async() => {

  await wait(2000);
  return (
    <div className='w-full h-full'>
      <Blog />
    </div>
  )
}

export default page