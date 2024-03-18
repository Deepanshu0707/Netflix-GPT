import React, { useState } from 'react'
import Header from "./Header";
const Login = () => {
  const [isLogin,setIsLogin] = useState(true);
  const handleLoginSignUpButton = ()=>{
    setIsLogin(!isLogin);
  }
  return (
    <div className='login-main-div'>

      <Header/>
      
      <div className='bg-img absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bg-img" />
      </div>
      
      <form className='absolute bg-black w-[500px] mt-[120px] ml-[605px] bg-opacity-70 text-white '>
        <h1 className='font-semibold text-5xl px-20 pt-[50px] pb-5'>{isLogin ? "Sign In" : "Sign Up"} </h1>
        {!isLogin && <input type="text" placeholder='Full Name' className='p-4 my-2  rounded-md bg-gray-700 w-[350px] mx-[80px] bg-opacity-50'/>}
        <input type="text" placeholder='Email Address' className='p-4 my-2  rounded-md bg-gray-700 w-[350px] mx-[80px] bg-opacity-50'/>
        <input type="text" placeholder='Password' className='p-4 my-2  rounded-lg bg-gray-700  w-[350px] mx-[80px] bg-opacity-50'/>
        <button className=' bg-red-700  p-4 my-3 rounded-lg  w-[350px] mx-[80px] font-bold text-xl'>Sign In</button>
        <p className=' text-lg  px-[80px] py-5 mb-10 cursor-pointer' onClick={handleLoginSignUpButton}>
          {isLogin ? "New to Netflix? Sign Up Now" : "Already a User? Sign In Now" }
          </p>
      </form>

    </div>
    
  )
}

export default Login
