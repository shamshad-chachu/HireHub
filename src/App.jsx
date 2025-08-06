import React from 'react'
import Home from './pages/Home/Home'
import Job from './pages/JobList/Job'
import Hiring from './pages/Hiring/Hiring'

import { Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/jobs' element={<Job/>}></Route>
      <Route path='/Hire' element={<Hiring/>}></Route>

    </Routes>
  )
}

export default App