import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { UseSelector, useSelector } from 'react-redux';
const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((state)=>state.user);
    console.log(user);
    const handleLogout = ()=>{
      //Signout API work for removing the login user for the app//
      signOut(auth).then(() => {
        navigate("/");

      }).catch((error) => {
        // An error happened
      });
  }
  return (
    <div className='absolute w-full px-8 py-3 z-50 flex justify-between bg-gradient-to-b from-black'>
    <div>
      <img className='w-[200px]' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
    </div>
    {user && <div className='flex justify-center items-center'>
    <img className='h-[39px] w-[39px] mr-4' src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-dyrp6bw6adbulg5b.jpg" alt="user-logo" />
    <button className='font-bold text-white' onClick={handleLogout}>{user.displayName} &nbsp; (Logout)</button>
    </div>}
    
    </div>
  )
}

export default Header
