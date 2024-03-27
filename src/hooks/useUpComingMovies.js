import { useDispatch } from "react-redux";
import { upComingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/constant";

const useUpComingMovies = async()=>{
    const dispatch = useDispatch();  
    const UpComingMovies = async()=>{
        try{
          const movies = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options);
          const sortMovies = await movies.json();
          const allMovies = sortMovies.results;
          console.log(allMovies);
          dispatch(upComingMovies(allMovies));
        } catch(err){
          console.log(err);
        }
        }
        useEffect(()=>{
            UpComingMovies();
        },[])
}


export default useUpComingMovies;