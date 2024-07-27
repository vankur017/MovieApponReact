import {useEffect, useState} from "react"
import { Shimmer } from "./Shimmer";
import { Moviecard } from "./Moviecard"

async function fetchAPI(endpt) {
    const API_KEY = "b7245e222a08e634587088e5a69e6041";
    const API_URL = "https://api.themoviedb.org/3";
   
    const response = await fetch(`${API_URL}${endpt}?api_key=${API_KEY}&languange=en-US`)

    const data = await response.json();
    return data
}


export const Body =()=>{

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState("")
    console.log(movies);
    useEffect(()=>{
        fetchAPI("/movie/popular")
        .then((data)=> setMovies(data.results))
        .catch((error)=> console.log(error))
    }, [])


    return (
        <div className="card-container">
            <div className="search">
                <input type="text" placeholder="search any movie..." value={search} onChange={(e)=>(
                    setSearch(e.target.value))}/>
                <button onClick={()=>{
                   const filterMovie = movies.filter((res)=>res.title.includes(search))
                   setMovies(filterMovie)
                }} >Search</button>
            </div>

            <div className="movie-card">
                {movies.map((movie)=>(
                            <Moviecard key ={movie.id} movieData ={movie}/>
                ))
                    }
            </div>

        </div>
    )
}
