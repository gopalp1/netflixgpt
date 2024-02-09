import { useEffect } from "react"
import { API_options } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/moviesSlice";
const useNowPLayingMovies = () => {
    const dispatch = useDispatch();
 

   const getNowPlayingMovies = async() =>{

    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_options);
   let json = await data.json();
   dispatch(addNowPlayingMovies(json.results))

    }
    useEffect(()=>{
        getNowPlayingMovies()
    },[])

}

export default useNowPLayingMovies;