import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'sonner';

const JobDetails = () => {
  const navigate = useNavigate()
  const goBack=()=>{

    toast.success("Applied Succesfull")
    setTimeout(()=>{
      navigate("/Jobs")
    },1000)
    
  }
  const location = useLocation();
  const job = location.state;
  if (!job) {
    return (
      <div className='p-5 text-center'>
        <h2 className='text-xl font-semibold'>No job details available.</h2>
        <p className='mt-2 text-gray-600'>Please navigate to this page from a job listing.</p>
      </div>
    );
  }

  return (
    <div className='m-5 p-8 bg-white rounded-lg shadow-lg max-w-4xl mx-auto'>
      <Toaster position='top-right'/>
      <div className='text-center mb-6'>
        <h1 className='text-3xl font-bold text-gray-900'>{job.title}</h1>
        <p className='text-xl text-gray-700 mt-2'>{job.companyName}</p>
        <p className='text-lg text-gray-500 mt-1'>{job.location}</p>
      </div>
      
      <hr className='my-6' />

      <div className='mb-6'>
        <h2 className='text-2xl font-semibold text-gray-800 mb-3'>Job Description</h2>
        <p className='text-gray-700 leading-relaxed whitespace-pre-wrap'>{job.description}</p>
      </div>

      <div className='mb-8'>
        <h2 className='text-2xl font-semibold text-gray-800 mb-3'>Required Experience</h2>
        <p className='text-gray-700 leading-relaxed'>{job.experience}</p>
      </div>

      <div className='text-center'>
        <button 
          className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105'
          onClick={() => {goBack()}}>
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetails;