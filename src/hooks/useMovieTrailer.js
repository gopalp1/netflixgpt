import { useEffect, useState } from "react";
import { API_options } from "../Utils/constant";
const useMovieTrailer = (movieId) => {
  const [trailerId, setTrailerId] = useState(null);
  
  useEffect(() => {
    getMovieTrailer();
  }, []);
  const getMovieTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_options
    );
    const json = await data.json();
    const filterData = json.results.filter((Video) => Video.type === "Trailer");
    const trailer = filterData.length ? filterData[1] : json.results;
    setTrailerId(trailer.key);
  };
  return trailerId;
};
export default useMovieTrailer;