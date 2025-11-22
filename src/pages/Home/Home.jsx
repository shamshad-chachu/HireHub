import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import img from '../../assets/img.jpg'
import LoginRegister from '../Login/Login&Register'
import { motion} from 'motion/react'
import { Toaster } from 'sonner'
const Home = () => {
  const[showsingin,setShowSignin] = useState(false)
  const[isloged,setIsLoged] = useState(false);

  const MotionLink = motion(Link);

  if(isloged){
    setTimeout(()=>setIsLoged(false),3000)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-sans antialiased p-4 relative">
      <Toaster position='top-center'/>
      <div className='absolute top-2 top-md-5 lg-top-2 shadow-lg right-10 p-2 rounded-full bg-blue-50 text-black font-bold' onClick={()=>setShowSignin(true)}><i className="fa-solid fa-user text-2xl"></i></div>
      {isloged&&<div className='absolute text-green-500 shadow-lg  md:top-1/12 md-50%  md:right-20 bg-white/100 text-2xl p-5 rounded-xl'> login Success</div>}
      <div className='absolute top-0 z-100'>{showsingin&&<LoginRegister setShowSignin={setShowSignin} setIsLoged={setIsLoged}/>}</div>
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-12 text-center md:text-left">
        
        {/* Visual Section with Responsive Image */}
        <div className="md-mt-0 mt-10 md:w-1/2 w-full flex justify-center">
          <motion.div 
          initial={{
            opacity:0,
            filter:"blur(10px)",
          }}
          whileInView={{
            opacity:1,
            filter:"blur(0px)",
          }}
          transition={{
            duration:0.3,
            ease:"easeIn"
          }}
          className="w-full max-w-md aspect-square rounded-3xl shadow-2xl ">
            <img src={img} alt="A professional office setting" className="object-cover w-full h-full rounded-3xl" />
            {/* <div className="absolute h-full inset-0 w-full aspect-square max-w-md [background-image:conic-gradient(at_center,transparent,red_20%,transparent_30%)] animate-spin [animation-duration:4s]"/>
            <div className="absolute h-full inset-0 w-full aspect-square max-w-md [background-image:conic-gradient(at_center,transparent,blue_20%,transparent_30%)] animate-spin [animation-duration:4s] [animation-delay:1500ms]"/>
            <div className="absolute h-full inset-0 w-full aspect-square max-w-md [background-image:conic-gradient(at_center,transparent,green_20%,transparent_30%)] animate-spin [animation-duration:4s] [animation-delay:2500ms]"/> */}
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 w-full space-y-8">
          <motion.h1 
          initial={{
            opacity:0,
            filter:"blur(10px)"
          }}
          whileInView={{
            opacity:1,
            filter:"blur(0px)"
          }}
          transition={{
            duration:0.3,
            ease:"easeInOut"
          }}
          className="text-5xl sm:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
            Find Your <span className="text-indigo-600">Dream Job</span>, Today.
          </motion.h1>
          <motion.p className="text-xl text-neutral-600 max-w-lg mx-auto md:mx-0 tracking-tight">
            {"A seamless platform for job seekers and employers to connect. Discover opportunities or post your hiring needs with ease.".split(" ").map((item,idx)=>{
              return <motion.span
              initial={{
                opacity:0,
                y:10,
                filter:"blur(10px)"
              }}
              animate={{
                opacity:1,
                y:0,
                filter:"blur(0px)"
              }}
              transition={{
                duration:0.5,
                ease:"easeInOut",
                delay:idx * 0.1
              }}
              >{item} </motion.span>
            })}
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 mt-10">
            
            {/* Job Listing Button */}
            <MotionLink
              to='/jobs'
            initial={{
              opacity:0,
              scale:.8
            }}
            animate={{
              opacity:1,
              scale:1
            }}
            transition={{
              duration:0.3,
              delay:1,
              ease:"easeInOut"
            }}
              className="group overflow-hidden relative inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 transition-all duration-300 ease-in-out shadow-lg transform hover:-translate-y-1"
            >
              Browse All Job Listings
              <div className='bg-neutral-200 opacity-0 backdrop-blur-md w-2/10 h-[200px] absolute rotate-30 translate-x-[-200%]  group-hover:translate-x-[320%] group-hover:opacity-40 transition duration-[1s] ease-in'></div>
            </MotionLink>
            
            {/* Post a Job Button */}
            <MotionLink
            initial={{
              opacity:0,
              // translate:30
              scale:0.8
            }}
            animate={{
              opacity:1,
              // translate:0,
              scale:1
            }}
            transition={{
              duration:0.3,
              delay:1,
              ease:"easeInOut",
            }}
              to='/Hire'
              className="group overflow-hidden relative inline-flex items-center justify-center px-8 py-4 border border-indigo-600 text-lg font-bold rounded-full text-indigo-600 bg-white hover:bg-indigo-600 hover:text-white transition-all duration-300 ease-in-out"
            >
              Post a Job
              <div className='bg-neutral-200 opacity-0 backdrop-blur-md w-3/10 h-[200px] absolute rotate-30 translate-x-[-200%]  group-hover:translate-x-[320%] group-hover:opacity-40 transition duration-[1s] ease-in'></div>
            </MotionLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;