import React from 'react'

const Register = ({setIsRegigterd,setShowSignin}) => {
  const HandleForm=(e)=>{
    e.preventDefault()
    const formData = new FormData(e.target);
    const formValue = Object.fromEntries(formData.entries());
    console.log(formValue);
    for(let key in formValue){
     localStorage.setItem(key,formValue[key])
    // localStorage.clear()
     setIsRegigterd(true)
    }
  }
  return (
     <div className='space-y-6 bg-white rounded-lg  shadow-lg w-3/12 p-7 min-w-xs relative'>
      <h2 className='absolute text-2xl font-bold right-7 text-gray-800 top-2' onClick={()=>setShowSignin(false)}>X</h2>

        <h3 className='text-center text-3xl font-extrabold text-gray-800'>Sing up</h3>
        <form onSubmit={HandleForm}>
          <div className='mt-4'>
            <label htmlFor="uname" className='text-sm font-medium text-gray-700'>Username</label>
            <input type="text" id='uname' name='name' placeholder='Enter username' required className='p-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'/>
          </div>
          <div className='mt-4'>
            <label htmlFor="email" className='text-sm font-medium text-gray-700'>Email</label>
            <input type="email" id='email' name='email' placeholder='Enter email' required className='p-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'/>
          </div>
          <div className='my-4'>
            <label htmlFor="pass" className='text-sm font-medium text-gray-700'>Password</label>
            <input type="password" id='pass' name='password' placeholder='Enter Password' required className='p-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'/>
          </div>

          <button type="submit" className="w-full px-4 py-2 text-sm font-medium text-white rounded-md shadow-sm bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300">
            Sing up
          </button>
        </form>
        <p className='text-sm font-medium text-gray-700 text-center'>already have an account  <span onClick={()=>{setIsRegigterd(true)}} className='text-blue-600'>Login</span></p>
      </div>
  )
}

export default Register