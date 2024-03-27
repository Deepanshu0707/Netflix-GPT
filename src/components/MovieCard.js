import {IMG_CDN} from "../utils/constant";

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-[200px] h-[250px] mr-5 mb-8">
       <img className="h-[250px] w-[200px]" src={IMG_CDN + posterPath} alt="Movie_CARD" />
    </div>
  )
}

export default MovieCard
