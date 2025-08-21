import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import img from '../../assets/img.jpg'
import LoginRegister from '../Login/Login&Register'
const Home = () => {
  const[showsingin,setShowSignin] = useState(false)
  const[isloged,setIsLoged] = useState(false);

  if(isloged){
    setTimeout(()=>setIsLoged(false),3000)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-sans antialiased p-4 relative">
      <div className='absolute top-2 top-md-5 lg-top-2 shadow-lg right-10 p-2 rounded-full bg-blue-50 text-black font-bold' onClick={()=>setShowSignin(true)}><i className="fa-solid fa-user text-2xl"></i></div>
      {isloged&&<div className='absolute text-green-500 shadow-lg  md:top-1/12 md-50%  md:right-20 bg-white/100 text-2xl p-5 rounded-xl'> login Success</div>}
      <div className='absolute top-0 '>{showsingin&&<LoginRegister setShowSignin={setShowSignin} setIsLoged={setIsLoged}/>}</div>
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-12 text-center md:text-left">
        
        {/* Visual Section with Responsive Image */}
        <div className="md-mt-0 mt-10 md:w-1/2 w-full flex justify-center">
          <div className="w-full max-w-md aspect-square rounded-3xl shadow-2xl overflow-hidden">
            <img src={img} alt="A professional office setting" className="object-cover w-full h-full" />
          </div>
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 w-full space-y-8">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 leading-tight">
            Find Your <span className="text-indigo-600">Dream Job</span>, Today.
          </h1>
          <p className="text-xl text-slate-600 max-w-lg mx-auto md:mx-0">
            A seamless platform for job seekers and employers to connect. Discover opportunities or post your hiring needs with ease.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 mt-10">
            
            {/* Job Listing Button */}
            <Link 
              to='/jobs'
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 transition-all duration-300 ease-in-out shadow-lg transform hover:-translate-y-1"
            >
              Browse All Job Listings
            </Link>
            
            {/* Post a Job Button */}
            <Link
              to='/Hire'
              className="inline-flex items-center justify-center px-8 py-4 border border-indigo-600 text-lg font-bold rounded-full text-indigo-600 bg-white hover:bg-indigo-600 hover:text-white transition-all duration-300 ease-in-out"
            >
              Post a Job
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;