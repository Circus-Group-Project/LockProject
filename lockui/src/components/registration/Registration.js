import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Registration.css'

const Registration = () => {
  const [userType, setUserType] = useState('normal');

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  return (
    <div className='RegisterComponent'>
      <form className='RegisterForm'>
        <h1>
          <span>Registration</span>
        </h1>
        <div>
          <label>UserName</label>
          <input
            className='inputBox'
            type='text'
            placeholder='Enter your user name'
            required
          />
        </div>
        <div>
          <label>UserName</label>
          <input
            className='inputBox'
            type='text'
            placeholder='Re-Enter your user name'
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            className='inputBox'
            type='password'
            placeholder='Enter your password'
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            className='inputBox'
            type='password'
            placeholder='Re-Enter your password'
            required
          />
        </div>
        <div className='radioContain'>
          <div>
            <input
              className='radio'
              type='radio'
              value='normal'
              checked={userType === 'normal'}
              onChange={handleUserTypeChange}
            />
            <span>Normal User</span>
          </div>
          <div>
            <input
              className='radio'
              type='radio'
              value='admin'
              checked={userType === 'admin'}
              onChange={handleUserTypeChange}
            />
            <span>Admin</span>
          </div>
        </div>
        {userType === 'admin' && (
          <div>
            <label>Admin Key</label>
            <input
              className='inputBox'
              type='text'
              placeholder='Enter admin key'
              required
            />
          </div>
        )}
        <div className='submitBtn'>
          <button type='submit'>Submit</button>
        </div>
        <h3>
          Already Have an Account? <Link to='/'><span>Login</span></Link>
        </h3>
      </form>
    </div>
  );
};

export default Registration;
