import { useDispatch } from "react-redux";
import { nowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/constant";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();  
  const trendingMovie = async()=>{
    try{
      const movies = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
      const sortMovies = await movies.json();
      const allMovies = sortMovies.results;
      console.log(allMovies);
      dispatch(nowPlayingMovies(allMovies));
    } catch(err){
      console.log(err);
    }
    }
    useEffect(()=>{
      trendingMovie();
    },[])
}

export default useNowPlayingMovies
