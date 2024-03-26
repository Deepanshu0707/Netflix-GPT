import React from 'react'
// absolute top-0 left-0 pt-[22%] pl-[60px]
const VideoTitle = ({title, overview}) => {
  return (
    <div className='absolute pt-[22%] pl-[60px] z-10 text-white bg-gradient-to-r from-black w-screen h-[735px]'>
      <h1 className='text-[50px] font-bold'>{title}</h1>
      <p className='w-1/4 -mt-5 py-6 text-[17px]'>{overview}</p>
      <div>
        <button className='bg-white text-black p-3 px-10 rounded-lg text-lg font-bold opacity-90'>Play</button>
         
        <button className='bg-gray-500 text-white p-3 px-10 rounded-lg text-lg font-bold mx-5 opacity-75'>More Info</button>
      </div>
    </div>
  )
} 
export default VideoTitle
