import Moviecard from "./Moviecard";
 const MovieList = ({title,Movies}) => {
console.log(Movies,"Movies");
    return (
    <div className="  ">
        <h1>{title}</h1>
        <div className="flex gap-4 overflow-x-scroll">
            {
         Movies?.map((data)=>
            <Moviecard key={data?.id} imgPath={data?.poster_path} title={data?.title}/>  
         )   

            }
         
        </div>
    </div>
    
    )
}

export default MovieList