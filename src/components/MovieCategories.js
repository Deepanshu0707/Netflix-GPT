import MovieCard from "./MovieCard"


const MovieCategories = ({title, movies}) => {

  return (
    <div className="">
        <h1 className="text-white text-3xl font-bold pb-3">{title}</h1>
        <div className="flex overflow-x-scroll">       
        <div className="flex">
           {movies.map((item)=>{
                return <MovieCard key={item.id} posterPath={item?.poster_path}/>
           })
           }  
        </div>
        </div> 
    </div>
  )
}
export default MovieCategories
