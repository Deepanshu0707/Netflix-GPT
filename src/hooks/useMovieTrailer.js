import { useDispatch } from "react-redux";
import { trailerMovie } from "../utils/moviesSlice";
import { options } from "../utils/constant";
import { useEffect } from "react";

const useMovieTrailer = (movieId)=>{
        const dispatch = useDispatch();
        const getMovieVideos = async()=>{
         const video = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options)
         const json = await video.json();
         console.log(json);
          const allTrailerVideos = json.results.filter(item=> item.type === "Trailer")
          const trailerVideo = allTrailerVideos.length ? allTrailerVideos[0] : json.results[0];
          dispatch(trailerMovie(trailerVideo));
        }
        useEffect(()=>{
          getMovieVideos();
        },[])
};

export default useMovieTrailer;
