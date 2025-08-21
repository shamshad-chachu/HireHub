import React, { useState } from 'react'
import Register from '../../components/Register/Register'
import Login from '../../components/Login/Login';

const LoginRegister = ({setShowSignin,setIsLoged}) => {
  const [isRegisterd,setIsRegigterd] = useState(true);
  return (
    <div className=' min-h-screen min-w-screen bg-gray-500/60 p-4 flex items-center justify-center relative'>
      {isRegisterd?<Login setIsRegigterd={setIsRegigterd} setShowSignin={setShowSignin} setIsLoged={setIsLoged}/>
      :<Register setIsRegigterd={setIsRegigterd} setShowSignin={setShowSignin}/>}
      
    </div>
  )
}

export default LoginRegister