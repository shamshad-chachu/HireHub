import React, { useState } from 'react';

const Hiring = () => {
  const [data, setData] = useState(null);

  const Handeldata = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValue = Object.fromEntries(formData.entries());
    console.log(formValue);

    try {
      const response = await fetch("https://hirehub-springboot.onrender.com/employee", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValue)
      });
      if (!response.ok) {
        const ErrorData = await response.json();
        throw new Error(`Response status ${response.status}, message: ${ErrorData.message}`);
      }
      const ResponseData = await response.text();
      console.log(ResponseData);
      // Optional: clear the form or show a success message
      e.target.reset(); 
      setData(ResponseData);
    } catch (error) {
      console.log("Error in sending data", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-xl p-6 md:p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800">Job Posting Details</h1>
        <form className="space-y-6" onSubmit={Handeldata}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* <div>
              <label htmlFor="id" className="block text-sm font-medium text-gray-700">Job ID</label>
              <input type="text" id="id" name="id" className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="e.g., 12345" required />
              </div> */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Job Title</label>
                <input type="text" id="title" name="title" className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="e.g., Software Engineer" required />
              </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
              <input type="text" id="location" name="loc" className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="e.g., San Francisco, CA" required />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Experience Level</label>
              <input type="text" id="experience" name="exp" className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="e.g., Senior" required />
            </div>
          </div>
          
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Job Description</label>
            <textarea id="description" name="des" rows="4" className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Provide a detailed description of the job..." required></textarea>
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