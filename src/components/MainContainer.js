import React from 'react'
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from 'react-redux';

const MainContainer = () => {

  const playingMovie = useSelector((state)=>state.movies?.nowPlayingMovies);
  
  if(!playingMovie) return;
  
  const mainMovie = playingMovie[4];
  const {original_title, overview, id } = mainMovie;

  return (
    <div className='w-screen h-screen'>
      
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
