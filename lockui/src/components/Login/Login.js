import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // If login is successful, redirect the user to the profile page or any other desired page
        window.location.replace('/profile');
      } else {
        // Handle login error (e.g., invalid credentials)
        // For this example, we are just logging the error message
        console.error('Login failed:', response.statusText);
      }
    } catch (error) {
      // Handle any network or server error
      console.error('Error:', error);
    }
  };

  return (
    <div className='LoginComponent'>
      <form className='LoginForm' onSubmit={handleFormSubmit}>
        <h1>
          <span>Login</span>
        </h1>
        <div>
          <label>UserName</label>
          <input
            className='inpBox'
            type='text'
            placeholder='Enter your user name'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            className='inpBox'
            type='password'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='submitBtn'>
          <button type='submit'>Submit</button>
        </div>
        <h3>
          New to the site? <Link to='/register'><span>Register</span></Link>
        </h3>
      </form>
    </div>
  );
};

export default Login;
