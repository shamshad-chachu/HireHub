import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const JobCard = ({job }) => {
    const shortDes = ((job.description).substring(0,100))

    const navigate = useNavigate();

    const HandelApply = (id)=>{
        navigate(`/JobDetails`,{state:job})
    }
  return (
    <div className="p-6" onClick={()=>{HandelApply(job.id)}}>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{job.title}</h3>
                  <p className="text-slate-600 text-sm mb-2">Experience: {job.experience}</p>
                  <p className="text-slate-600 text-sm mb-2">Location: {job.location}</p>
                  <p className="text-slate-500 text-sm line-clamp-3">{shortDes}</p>
                  <div className="mt-4">
                    {/* <a className={`w-full text-center inline-block ${apply?"bg-green-300":"bg-blue-600"} ${apply?"hover:bg-green-700":"hover:bg-blue-700"}
                     text-white font-bold py-2 px-4 rounded-lg transition duration-150 ease-in-out`} onClick={()=>{setApply(true)}} >
                      {apply?"Applied":"Apply Now"}
                    </a> */}
                    <a className={"w-full text-center inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg "}  >
                      Apply Now
                    </a>
                  </div>
                </div>
  )
}

export default JobCard