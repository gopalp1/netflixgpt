import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer  = () =>{
    const movies = useSelector(store =>store.movies?.nowPlayingmovies);
    if(!movies) return ;

    return (
        <div className="text-white text-3xl font-bold"> 
        <MovieList title ={"Now playing movies"} Movies={movies}/>
        <MovieList title ={"Now playing movies"} Movies={movies}/>

        </div>
    )

}
export default SecondaryContainer;