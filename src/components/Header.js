import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser,removeUser } from '../utils/userSlice';
import { netflixLogo, userAvatarLogo } from '../utils/constant';


const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state)=>state.user);
   
    const handleLogout = ()=>{
      //Signout API work for removing the login user for the app//
      signOut(auth).then(() => {})
      .catch((error) => {});
    }

    useEffect(()=>{
      //onAuthStateChanged Is Like A Event Listener which keep record of Authentication state changed// 
     const unSubscribe =  onAuthStateChanged(auth, (user) => {
          if (user) {
            const {uid, email, displayName} = user;
            dispatch(addUser(
              {uid : uid, email : email, displayName : displayName}
              ));
           navigate('/browse');
          } else {
            dispatch(removeUser());
            navigate('/');
          }
        });

        //Cleanup function //
        return ()=>{
          unSubscribe();
          console.log("UnMount The onAuthStateChange Listener");
        };
  },[])
  return (
    <div className='fixed w-full px-8 py-3 z-50  flex justify-between bg-gradient-to-b from-black '>
    <div>
      <img className='w-[200px]' src={netflixLogo} alt="logo" />
    </div>
    {user && <div className='flex justify-center items-center -mt-3'>
    <img className='h-[39px] w-[39px] mr-4' src={userAvatarLogo} alt="user-logo" />
    <button className='font-bold text-white' onClick={handleLogout}>{user.displayName} &nbsp; (Logout)</button>
    </div>}
    
    </div>
  )
}

export default Header
