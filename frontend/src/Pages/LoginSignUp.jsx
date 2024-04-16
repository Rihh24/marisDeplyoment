import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignUp = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type='text' placeholder='Your Name' />
          <input type='text' placeholder='Phone Number' />
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account? <span>Login Here</span></p>
        <div className="loginsignup-agree">
          <input type='checkbox' name='' id='' />
          <p>By continuing, i agree to use the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp
