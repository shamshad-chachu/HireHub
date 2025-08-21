import React, { useState } from 'react'
import Home from './pages/Home/Home'
import Job from './pages/JobList/Job'
import Hiring from './pages/Hiring/Hiring'
import { Route, Routes} from 'react-router-dom'
import LoginRegister from './pages/Login/Login&Register'
function App() {

  return (
    <Routes>
      {/* <Route path='/' element={isLoged?<Home/>:<LoginRegister setLoged={setLoged}/>}></Route> */}
      <Route path='/' element={<Home/>}></Route>

      <Route path='/jobs' element={<Job/>}></Route>
      <Route path='/Hire' element={<Hiring/>}></Route>

    </Routes>
  )
}

export default App