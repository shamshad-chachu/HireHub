import React, { useEffect, useState } from 'react';
import JobCard from '../../components/JobCard/JobCard';
import { jobs } from '../../assets/jobs';
import LoadingCards from '../../components/LoadingCards';
import { motion } from 'motion/react';
import { Toaster } from 'sonner';

const Job = () => {
  const [isLoading,setIsLoading] = useState(false)
  const [jobLists, setJobList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchJob = async () => {
      setIsLoading(true)
      try {
        const response = await fetch("https://hirehub-springboot.onrender.com/Job/findAll");
        const result = await response.json();
        setJobList(result);
        setIsLoading(false)
        console.log(result);
      } catch (e) {
        console.log(e);
      }
    };
    fetchJob();
  }, []);

  // Filter jobs based on search query

  const filteredJobs = jobLists.filter(job =>
    job.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.des?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.location?.toLowerCase().includes(searchQuery.toLowerCase())
  );


// const filteredJobs = jobs.filter(job =>
//   job.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//   job.des?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//   job.loc?.toLowerCase().includes(searchQuery.toLowerCase()))
//     || 
//   jobLists.filter(job =>
//   job.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//   job.des?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//   job.loc?.toLowerCase().includes(searchQuery.toLowerCase())
// );
  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-800 leading-tight">Current Job Openings</h2>
          <p className="mt-3 text-lg text-slate-500 max-w-2xl mx-auto">
            Explore a wide range of career opportunities tailored to your skills and experience.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12 max-w-3xl mx-auto">
          <input
            type="text"
            placeholder="Search for jobs by title, location, or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
          />
        </div>

        {isLoading?<LoadingCards/>:(filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredJobs.map((job,i) => (
              <motion.div
              initial={{opacity:0,filter:"blur(10px)",y:10}}
              whileInView={{opacity:1,filter:"blur(0px)",y:0}}
              transition={{duration:0.3,delay:i*0.1,ease:"easeInOut"}}
              key={job.id || i} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-200">
                 <JobCard job={job}/>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center text-slate-500 py-10">
            <p className="text-lg">No jobs found matching your search.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Job;