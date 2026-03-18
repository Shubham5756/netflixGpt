import React, { useRef } from 'react'
import { useState } from 'react';
import Header from './Header';
import checkValidData from '../utils/CheckValidData';
const Login = () => {

    const [isSignInForm , setIsSignInForm] = useState(true)
    const [errorMessage , setErrorMessage] = useState(null)
    const email = useRef(null);
    const password = useRef(null)

    const toggleSignInForm = () => {
            setIsSignInForm(!isSignInForm)
            console.log(isSignInForm)
    }
    const handleButtonClick = () => {
        console.log(email.current.value)
        console.log(password.current.value)
       const error =  checkValidData(email.current.value , password.current.value)
       setErrorMessage(error)
    }
    
  return (
    <div className=''>
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/6d631aa6-567d-46ef-a644-b5b00e4334d2/web/IN-en-20251215-TRIFECTA-perspective_f1cab02a-e42b-4913-a7d9-c5fe0f94f68d_large.jpg" alt="nacground_Logo" />
        </div>
        <form action="" onSubmit={(e)=> e.preventDefault() } className="bg-black p-10 absolute w-3/12  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 text-white rounded-xl bg-opacity-95">
        <h1 className='font-bold'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm ? <input type="name" placeholder='enter Name' className='p-2 m-2 bg-gray-700 rounded'/> : ""}
         <input type="email" placeholder='Email address' ref={email} className='p-2 m-2 bg-gray-700 rounded'/>
          <input type="password" placeholder='password' ref={password} className='p-2 m-2 bg-gray-700 rounded' />
          <p className='font-bold text-red-600'>{errorMessage}</p>
          <button className='bg-red-600 p-2 m-2 rounded'  onClick={handleButtonClick}  >{isSignInForm ? "sign In " : "sign Up"}</button>
          <p className='cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix ?  sign up now" : "already user ? please Sign In"}</p>
        </form>
      
    </div>
  )
}

export default Login