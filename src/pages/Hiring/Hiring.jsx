import React, { useState } from 'react';

const Hiring = () => {
  const [formData, setFormData] = useState({
    title: '',
    companyName: '',
    location: '',
    experience: '',
    openings: '',
    description: '',
  });

  const [responseMessage, setResponseMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const Handeldata = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);
      const response = await fetch("http://localhost:8082/Job/JobPost", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Response status ${response.status}, message: ${errorData.message}`);
      }
      
      const responseText = await response.text();
      setResponseMessage(responseText);
      // Clear the form fields after successful submission
      setFormData({
        title: '',
        companyName: '',
        location: '',
        experience: '',
        openings: '',
        description: '',
      });

    } catch (error) {
      console.error("Error in sending data", error);
      setResponseMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-xl p-6 md:p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800">Job Posting Details</h1>
        {responseMessage && (
          <div className={`p-4 rounded-md text-center font-semibold ${responseMessage.startsWith('Error') ? 'bg-red-200 text-red-700' : 'bg-green-200 text-green-700'}`}>
            {responseMessage}
          </div>
        )}
        <form className="space-y-6" onSubmit={Handeldata}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Job Title</label>
              <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="e.g., Software Engineer" required />
            </div>
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
              <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="e.g., Google" required />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
              <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="e.g., San Francisco, CA" required />
            </div>
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Experience Level</label>
              <input type="text" id="experience" name="experience" value={formData.experience} onChange={handleChange} className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="e.g., Senior" required />
            </div>
          </div>
          
          <div>
            <label htmlFor="openings" className="block text-sm font-medium text-gray-700">No. of Openings</label>
            <input type="number" id="openings" name="openings" value={formData.openings} onChange={handleChange} className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="e.g., 5" required />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Job Description</label>
            <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows="4" className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Provide a detailed description of the job..." required></textarea>
          </div>

          <button type="submit" className="w-full px-4 py-2 text-sm font-medium text-white rounded-md shadow-sm bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hiring;