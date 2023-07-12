import React from 'react'
import './Login.css'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className='LoginComponent'>
      <form className='LoginForm'>
        <h1>
          <span>Login</span>
        </h1>
        <div>
            <label>UserName</label>
            <input className='inpBox'
            type="text"
            placeholder="Enter your user name"
            />
        </div>
        <div>
            <label>Password</label>
            <input className='inpBox'
            type="password"
            placeholder="Enter your password"
            />
        </div>
        <div className="submitBtn">
            <button>Submit</button>
        </div>
        <h3>New to the site? <Link to="/register"><span>Register</span></Link></h3>
      </form>
    </div>
  )
}

export default Login
