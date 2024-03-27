import React from 'react'
import { useSelector } from 'react-redux'
import MovieCategories from './MovieCategories';
import MovieCard from './MovieCard';

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies)
  

  
  return (
    movies.nowPlayingMovies && (
    <div className='relative pt-[10px] pl-[40px]  w-screen bg-black'>
        <div className='relative -mt-[230px] z-20'>
        <MovieCategories title= {"Now Playing"} movies={movies.nowPlayingMovies} />  
        {movies.topRatedMovies && <MovieCategories title= {"Top Rated"} movies={movies.topRatedMovies} />} 
        {movies.popularMovies && <MovieCategories title= {"Popular Movie"} movies={movies.popularMovies} />} 
        {movies.upComingMovies && <MovieCategories title= {"UpComing Movie"} movies={movies.upComingMovies} /> }      
        
        
        
        </div>
        
    </div>
    )
  )
}

export default SecondaryContainer


/*
      1. //Movie Categories Like Action/ Adventure / Romantics //  Component 
      2. Movie Card * N   // Component 
    */


{/* <div className='relative pt-[10px] pl-[20px]  w-screen bg-black '>
      <h1 className='text-white'>Secondary Container</h1>
      <div className='flex overflow-x-scroll gap-4'>
      <img className='absolute -mt-[250px]  h-[250px] w-[200px] z-10 object-cover' src="https://image.tmdb.org/t/p/w780/1XDDXPXGiI8id7MrUxK36ke7gkX.jpg" alt="Logo" />
      <img className='h-[250px] w-[200px] object-cover' src="https://image.tmdb.org/t/p/w780/1XDDXPXGiI8id7MrUxK36ke7gkX.jpg" alt="Logo" />
      <img className='h-[250px] w-[200px] object-cover' src="https://image.tmdb.org/t/p/w780/1XDDXPXGiI8id7MrUxK36ke7gkX.jpg" alt="Logo" />
      <img className='h-[250px] w-[200px] object-cover' src="https://image.tmdb.org/t/p/w780/1XDDXPXGiI8id7MrUxK36ke7gkX.jpg" alt="Logo" />
      <img className='h-[250px] w-[200px] object-cover' src="https://image.tmdb.org/t/p/w780/1XDDXPXGiI8id7MrUxK36ke7gkX.jpg" alt="Logo" />
      <img className='h-[250px] w-[200px] object-cover' src="https://image.tmdb.org/t/p/w780/1XDDXPXGiI8id7MrUxK36ke7gkX.jpg" alt="Logo" />
      <img className='h-[250px] w-[200px] object-cover' src="https://image.tmdb.org/t/p/w780/1XDDXPXGiI8id7MrUxK36ke7gkX.jpg" alt="Logo" />
      <img className='h-[250px] w-[200px] object-cover' src="https://image.tmdb.org/t/p/w780/1XDDXPXGiI8id7MrUxK36ke7gkX.jpg" alt="Logo" />
      <img className='h-[250px] w-[200px] object-cover' src="https://image.tmdb.org/t/p/w780/1XDDXPXGiI8id7MrUxK36ke7gkX.jpg" alt="Logo" />
      <img className='h-[250px] w-[200px] object-cover' src="https://image.tmdb.org/t/p/w780/1XDDXPXGiI8id7MrUxK36ke7gkX.jpg" alt="Logo" />
      </div>
      
    </div> */}