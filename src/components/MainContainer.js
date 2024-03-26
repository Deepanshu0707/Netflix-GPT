import React from 'react'
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from 'react-redux';

const MainContainer = () => {

  const playingMovie = useSelector((state)=>state.movies?.nowPlayingMovies);
  
  if(!playingMovie) return;
  
  const mainMovie = playingMovie[0];
  const {original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoBackground movieId={id}/>
      <VideoTitle title={original_title} overview={overview}/>
    </div>
  )
}

export default MainContainer
