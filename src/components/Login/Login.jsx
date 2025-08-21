import React, { useRef, useState } from 'react'
import Register from '../Register/Register'

const Login = ({setIsRegigterd,setShowSignin,setIsLoged}) => {
  const[newUser,setNewUser] = useState(false)
  const  NameOrEmail= useRef()
  const Lpassword = useRef()

  const HandelLogin =(e)=>{
    e.preventDefault();
      console.log(localStorage.getItem("name"));
    if((localStorage.getItem("name")==NameOrEmail.current.value || localStorage.getItem("email")==NameOrEmail.current.value )&& localStorage.getItem("password")==Lpassword.current.value)
    {
        setIsLoged(true)
        setShowSignin(false)
    }else{
      setNewUser(true)
    }
  }

 
  return (
    <div className='space-y-6 bg-white rounded-lg  shadow-lg w-3/12 p-7 min-w-xs relative'>
      <h2 className='absolute text-2xl font-bold right-7 text-gray-800 top-2' onClick={()=>setShowSignin(false)}>X</h2>
    <h3 className='text-center text-3xl font-extrabold text-gray-800'>Login</h3>
    <form onSubmit={HandelLogin}>
      <div className='mt-4'>
        <label htmlFor="uname" className='text-sm font-medium text-gray-700'>Username or Email</label>
        <input type="text" ref={NameOrEmail} id='n' placeholder='Enter username' required className='p-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'/>
      </div>
      <div className='my-4'>
        <label htmlFor="pass" className='text-sm font-medium text-gray-700'>Password</label>
        <input type="password" ref={Lpassword} placeholder='Enter Password' required className='p-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'/>
      </div>

      <button type="submit" className="w-full px-4 py-2 text-sm font-medium text-white rounded-md shadow-sm bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300">
        Login
      </button>
      {newUser&&<p className='text-sm font-medium text-red-700 mt-5'>User Not Found</p>}
    </form>
    <p className='text-sm font-medium text-gray-700 text-center'>Create a new account  <span onClick={()=>{setIsRegigterd(false)}} className='text-blue-600'>Click here</span></p>

  </div>
  )
}

export default Login