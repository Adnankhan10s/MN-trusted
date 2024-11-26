"use client"
import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import axios from 'axios'
import Email from 'next-auth/providers/email'

const page = () => {
   
    const [authState, setAuthState] = useState(
        {
            email:"",
            password:"",
        }
    )

    const handleSubmit = (e:React.FormEvent) =>{
        e.preventDefault();
        axios.post("/api/auth/login",authState)
        .then((res)=>{
            const response = res.data;
            if (response.status==200) {
              signIn("credentials" , {
                email: authState.email,
                password:authState.password,
                callbackUrl:"/admin",
                redirect:true,
            }
              )
                
            }else if(response?.status ==400){
               console.log(response?.error)
            }
        })
        

    }

  return (
    <div className='w-screen h-screen flex justify-center items-center bg-slate-200'>

        <div className='md:w-[600px] md:h-[500px] p-5 w-[320px] h-[350px] rounded-md bg-white/30 backdrop-blur-md'>
            <h1 className='text-center mt-6 text-4xl text-emerald-500 font-bold'>Admin Login</h1>
            <form onSubmit={handleSubmit}>
             <div className='mt-14'>
                 <label className='block text-xl font-semibold'>Email</label>
                 <input onChange={(e)=>setAuthState({...authState, email:e.target.value})} className='text-lg p-2 mt-2 rounded w-full bg-slate-200 outline-none focus:ring-2 block' type="email" placeholder='Enter Your Email' />
             </div>
             <div className='mt-5'>
                 <label className='block text-xl font-semibold'>Password</label>
                 <input onChange={(e)=>setAuthState({...authState, password:e.target.value})} className='text-lg p-2 mt-2 rounded w-full bg-slate-200 outline-none focus:ring-2 block' type="password" placeholder='Enter Your Password' />
             </div>
             <div className='mt-8'>
               <button type='submit' className='w-full font-bold text-lg text-white bg-blue-500 p-2 rounded'>Submit</button>
             </div>
             </form>
        </div>

    </div>
  )
}

export default page