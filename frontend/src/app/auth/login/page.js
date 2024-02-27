"use client"

import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useFormik } from 'formik';
import axios from '@/app/lib/axios';
import { useRouter } from 'next/navigation';
import { basicSchema } from '../schema/yup';
const Login = () => {

  const { push } = useRouter();
  
  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    push('/dashboard')
    //actions.resetForm();
   
  };
  
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  

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
      <form onSubmit={handleSubmit}>
    <div>
    <h5 className='font-medium'>Email</h5>
    <input 
    value={values.email}
    onChange={handleChange}
    onBlur={handleBlur}
    id="email"
    type="email"
    className={ errors.email && touched.email ? "w-50 border-2  bg-gray-200 appearance-none  border-red-500 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" : "w-50 bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"}
    placeholder="john@doe.com"/>
    {errors.email && touched.email && <p className='text-red-500'>{errors.email}</p>}
    <h5 className='font-medium '>Password</h5>
    <input
    value={values.password}
    onChange={handleChange}
    onBlur={handleBlur}
    id="password"
    type="password" 
    className={ errors.password && touched.password ? "bg-gray-200 appearance-none border-2 border-red-500 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" : "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"}  placeholder='**************' />
    </div>
    {errors.password && touched.password && <p className='text-red-500'>{errors.password}</p>}
    <button
                       onSubmit={onSubmit}
                        className="bg-primary hover:bg-blue-700 text-white font-bold py-2  px-12 rounded-full m-3"
                    >
   Login</button>
   </form>
</div>
  )
}

export default Login