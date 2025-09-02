import React, { useState } from 'react';

const Register = ({ setIsRegigterd, setShowSignin}) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [newUser, setNewUser] = useState(false);

  // This function updates the state as the user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // This function handles the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      const response = await fetch('https://hirehub-springboot.onrender.com/User/Register', { // Change this URL to your Spring Boot endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          uname: formData.username,
          email: formData.email,
          pass: formData.password,
        }),
      });

      if (response.ok) {
        // Handle successful registration, e.g., show a success message or redirect
        console.log('User registered successfully!');
       setIsRegigterd(true)
        setShowSignin(true);
      } else {
        // Handle registration failure, e.g., display an error message
        const errorData = await response.json();
        console.error('Registration failed:', errorData);
        setNewUser(true); // You can use this state to show an error message
      }
    } catch (error) {
      console.error('There was an error submitting the form:', error);
      setNewUser(true);
    }
  };

  return (
    <div className='space-y-6 bg-white rounded-lg shadow-lg w-3/12 p-7 min-w-xs relative'>
      <h2 className='absolute text-2xl font-bold right-7 text-gray-800 top-2' onClick={() => setShowSignin(false)}>X</h2>
      <h3 className='text-center text-3xl font-extrabold text-gray-800'>Register</h3>
      <form onSubmit={handleSubmit}>
        <div className='mt-4'>
          <label htmlFor="username" className='text-sm font-medium text-gray-700'>Username</label>
          <input
            type="text"
            id='username'
            name='username'
            value={formData.username}
            onChange={handleChange}
            placeholder='Enter username'
            required
            className='p-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-full'
          />
        </div>
        <div className='my-4'>
          <label htmlFor="email" className='text-sm font-medium text-gray-700'>Email</label>
          <input
            type="email"
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter email'
            required
            className='p-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-full'
          />
        </div>
        <div className='my-4'>
          <label htmlFor="password" className='text-sm font-medium text-gray-700'>Password</label>
          <input
            type="password"
            id='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            placeholder='Enter password'
            required
            className='p-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-full'
          />
        </div>
        <div className='my-4'>
          <label htmlFor="confirmPassword" className='text-sm font-medium text-gray-700'>Confirm Password</label>
          <input
            type="password"
            id='confirmPassword'
            name='confirmPassword'
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder='Confirm password'
            required
            className='p-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-full'
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-sm font-medium text-white rounded-md shadow-sm bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300"
        >
          Submit
        </button>
        {newUser && <p className='text-sm font-medium text-red-700 mt-5'>Registration failed. Please try again.</p>}
      </form>
      <p className='text-sm font-medium text-gray-700 text-center'>
        Already have an account? <span onClick={() => { setIsRegigterd(true); }} className='text-blue-600'>Click here</span>
      </p>
    </div>
  );
};

export default Register;