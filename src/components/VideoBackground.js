import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({movieId}) => {
   
  useMovieTrailer(movieId);
  let trailerKey = useSelector(store=>store.movies?.trailerMovie)

  return (
    <div className='absolute w-screen -mt-[110px]'>

    <iframe className='w-screen aspect-video '
    src={"https://www.youtube.com/embed/" + trailerKey?.key + "?autoplay=1"}
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
    </iframe>
    
    </div>
  )
}

export default VideoBackground
