import { useDispatch } from "react-redux";
import { popularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/constant";

const usePopularMovies = async()=>{
    const dispatch = useDispatch();  
    const popularMovie = async()=>{
        try{
          const movies = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
          const sortMovies = await movies.json();
          const allMovies = sortMovies.results;
          console.log(allMovies);
          dispatch(popularMovies(allMovies));
        } catch(err){
          console.log(err);
        }
        }
        useEffect(()=>{
          popularMovie();
        },[])
}


export default usePopularMovies;