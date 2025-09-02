import React, { useState } from 'react'

const Login = ({ setIsRegigterd, setShowSignin, setIsLoged }) => {
  const [formData, setFormData] = useState({
    usernameOrEmail: '',
    password: '',
  });

  const [loginError, setLoginError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const HandelLogin = async (e) => {
    e.preventDefault();
    setLoginError(null); // Clear any previous errors

    try {
      const response = await fetch('https://hirehub-springboot.onrender.com/User/Login', { // Replace with your Spring Boot login endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          usernameOrEmail: formData.usernameOrEmail,
          password: formData.password,
        }),
      });

      if (response.ok) {
        // Successful login
        setIsLoged(true);
        setShowSignin(false);
        console.log('Login successful!');
        const res = await response.json()
        console.log(res.user)
      } else {
        // Login failed
        const errorData = await response.json();
        setLoginError(errorData.message || 'Invalid username or password!');
      }
    } catch (error) {
      // Network or other errors
      setLoginError('An error occurred. Please try again later.');
      console.error('Login error:', error);
    }
  };

  return (
    <div className='space-y-6 bg-white rounded-lg shadow-lg w-3/12 p-7 min-w-xs relative'>
      <h2 className='absolute text-2xl font-bold right-7 text-gray-800 top-2' onClick={() => setShowSignin(false)}>X</h2>
      <h3 className='text-center text-3xl font-extrabold text-gray-800'>Login</h3>
      <form onSubmit={HandelLogin}>
        <div className='mt-4'>
          <label htmlFor="uname" className='text-sm font-medium text-gray-700'>Username or Email</label>
          <input
            type="text"
            id='name'
            name='usernameOrEmail'
            value={formData.usernameOrEmail}
            onChange={handleChange}
            placeholder='Enter username or email'
            required
            className='p-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-full'
          />
        </div>
        <div className='my-4'>
          <label htmlFor="pass" className='text-sm font-medium text-gray-700'>Password</label>
          <input
            type="password"
            id='pass'
            name='password'
            value={formData.password}
            onChange={handleChange}
            placeholder='Enter Password'
            required
            className='p-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-full'
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-sm font-medium text-white rounded-md shadow-sm bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300"
        >
          Login
        </button>
        {loginError && <p className='text-sm font-medium text-red-700 mt-5'>{loginError}</p>}
      </form>
      <p className='text-sm font-medium text-gray-700 text-center'>Create a new account <span onClick={() => { setIsRegigterd(false) }} className='text-blue-600'>Click here</span></p>
    </div>
  );
};

export default Login;