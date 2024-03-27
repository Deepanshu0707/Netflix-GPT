import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({movieId}) => {
   
  useMovieTrailer(movieId);
  let trailerKey = useSelector(store=>store.movies?.trailerMovie)
  
  return (
    <div className='absolute top-0 bottom-0 w-screen aspect-video text-white -mt-[105px]'>
      <iframe className='w-screen  aspect-video'
      src={"https://www.youtube.com/embed/" + trailerKey?.key + "?autoplay=1&mute=1&controls=0&showinfo=0"} title="Video Player">
      </iframe>
    </div>
  )
}

export default VideoBackground





// {/* <div className=' w-screen  '>

// <iframe className='w-screen aspect-video overflow-hidden '
// src={"https://www.youtube.com/embed/" + trailerKey?.key + "?autoplay=1&mute=1&controls=0&showinfo=0"} title="Video Player">
// </iframe>
// {/* title="YouTube video player"
// allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" */}
// </div>  */}
