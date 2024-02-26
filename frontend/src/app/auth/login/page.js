import React, { useState } from 'react'
import Link from 'next/link'
import axios from '@/app/lib/axios';
const Login = () => {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');


  const handleLogin = async (event)=>{
    event.preventDefault();
    try{
      await axios.post('/login',{email,password});
    }catch(e){
      console.log(e);
    }
  }

  return (
    <div className='flex w-full h-full flex-col items-center justify-center  '>
    <h1 className='text-3xl m-5 font-extrabold'>Welcome</h1>
    <div>
    <h5 className='font-medium'>Email</h5>
    <input className=" w-50 bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="john@doe.com"/>
    <h5 className='font-medium '>Password</h5>
    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="password" placeholder='**************' />
    </div>
    <Link
                        href="/dashboard"
                        className="bg-primary hover:bg-blue-700 text-white font-bold py-2  px-12 rounded-full m-3"
                    >
   Login</Link>
</div>
  )
}

export default Login