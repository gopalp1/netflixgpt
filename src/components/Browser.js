import Header from "./Header";
import MainContiner from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPLayingMovies from  "../hooks/useNowplayingMovies"
const Browser =( )=>{
    useNowPLayingMovies();


    return(
        <div className="bg-black">
            <Header/>
            <MainContiner/>
            <SecondaryContainer/>
        </div>
    )
}
export default Browser;