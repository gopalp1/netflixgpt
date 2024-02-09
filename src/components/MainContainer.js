import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContiner = () =>{
const movies = useSelector(store =>store.movies?.nowPlayingmovies);
if(!movies) return ;
const mainMovies = movies[0];

if (!mainMovies) return ;
const {title, overview,id} = mainMovies;

    return (<div>

      <VideoTitle  title = {title} overview = {overview}/>
      <VideoBackground movieId={id}/>
    </div>)
}

export default MainContiner;