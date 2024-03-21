import React, { useRef, useState } from 'react'
import Header from "./Header";
import { checkValidData } from '../utils/validation';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser} from '../utils/userSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLogin,setIsLogin] = useState(true);
  const [errorMsg,setErrorMsg] = useState(null);
  const email = useRef();
  const password = useRef();
  const name = useRef();
 
 
  const handleLoginSignUpButton = ()=>{
    setIsLogin(!isLogin);
  }
  const handleFormButton = ()=>{
    let errorMsg = null;
    if(isLogin){
      errorMsg = checkValidData(email.current.value,password.current.value);
    } else{
      errorMsg = checkValidData(email.current.value,password.current.value,name.current.value);
      setErrorMsg(errorMsg);
      if(errorMsg){
        return
      }
    }
    

      if(!isLogin){ 
       createUserWithEmailAndPassword(auth, email.current.value, password.current.value, name.current.value)
        // Signed up ..
       .then((userCredential) => {
       //Updating Profile...
        updateProfile(auth.currentUser, {
          displayName: name.current.value,
        }).then(() => {
          // Profile updated!
          const {uid,email,displayName} = auth.currentUser;
          dispatch(addUser(
            {uid : uid, email : email, displayName : displayName}
            ));
          navigate("/browse");
        }).catch((error) => {
          // An error occurred

        });
      
       
       
      
       // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorCode + " " + errorMessage);
        // ..
      });
      } else{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(`Login In: ${user.email}`);
          console.log(user);
          const {uid, email, displayName} = user;
          dispatch(addUser(
            {uid : uid, email : email, displayName : displayName}
            ));
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " " + errorMessage);
        });
      }
  }
  return (
    <div className='login-main-div'>

      <Header/>
      
      <div className='bg-img absolute w-full'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bg-img" />
      </div>
      
      <form className='absolute bg-black w-[500px] mt-[120px] ml-[605px] bg-opacity-70 text-white' 
      onSubmit={(e)=>e.preventDefault()}>
        <h1 className='font-semibold text-5xl px-20 pt-[50px] pb-5'>{isLogin ? "Sign In" : "Sign Up"} </h1>
        {!isLogin && <input ref={name} type="text" placeholder='Full Name' className='p-4 my-2  rounded-md bg-gray-700 w-[350px] mx-[80px] bg-opacity-50'/>}
        <input ref={email} type="text" placeholder='Email Address' className='p-4 my-2  rounded-md bg-gray-700 w-[350px] mx-[80px] bg-opacity-50'/>
        <input ref={password} type="password" placeholder='Password' className='p-4 my-2  rounded-lg bg-gray-700  w-[350px] mx-[80px] bg-opacity-50'/>
        <button className=' bg-red-700  p-4 my-3 rounded-lg  w-[350px] mx-[80px] font-bold text-xl' 
        onClick={handleFormButton}>{isLogin ? "Log In" : "Sign Up"}</button>
        <p className='w-[350px] mx-[82px] text-red-500 font-semibold'>{errorMsg}</p>
        <p className=' text-lg  px-[80px] py-5 mb-10 cursor-pointer' onClick={handleLoginSignUpButton}>
          {isLogin ? "New to Netflix? Sign Up Now" : "Already a User? Sign In Now" }
          </p>
      </form>

    </div>
    
  )
}

export default Login
