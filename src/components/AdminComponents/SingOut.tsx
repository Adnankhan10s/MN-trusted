"use client"
import React from 'react'
import { signOut } from 'next-auth/react'
const SingOut = () => { 
  return (
    <div>
        <button onClick={()=>signOut({callbackUrl:"/login",redirect:true})} className='bg-orange-300 rounded-md font-bold text-white p-2'>SignOut</button>
    </div>
  )
}

export default SingOut