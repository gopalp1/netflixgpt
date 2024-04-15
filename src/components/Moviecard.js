import { img_CDN_link } from "../Utils/constant";
const MovieCard = ({ imgPath, title}) => {
  return (
    <div className="pl-4 py-4 max-h-[300px] md:min-w-[160px] min-w-[200px]">
      <img
        className=" rounded-lg  object-cover"
        src={img_CDN_link + imgPath}
        alt="movie card"
      />
      <h5>hhh</h5>
    </div>
    
  );
};

export default MovieCard;
