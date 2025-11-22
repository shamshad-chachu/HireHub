import React, { useState } from 'react'
import Register from '../../components/Register/Register'
import Login from '../../components/Login/Login';
import { easeInOut, motion } from 'motion/react';

const LoginRegister = ({setShowSignin,setIsLoged}) => {
  const [isRegisterd,setIsRegigterd] = useState(true);
  return (
    <motion.div 
    initial={{
      opacity:0,
      scale:0
    }}
    whileInView={{
      opacity:1,
      scale:1
    }}
    transition={{
      duration:0.3,
      ease:"easeInOut",
      scale: { type: "spring",},
    }}
    className=' min-h-screen min-w-screen bg-gray-500/60 p-4 flex items-center justify-center relative'>
      {isRegisterd?<Login setIsRegigterd={setIsRegigterd} setShowSignin={setShowSignin} setIsLoged={setIsLoged}/>
      :<Register setIsRegigterd={setIsRegigterd} setShowSignin={setShowSignin}/>}
      
    </motion.div>
  )
}

export default LoginRegister