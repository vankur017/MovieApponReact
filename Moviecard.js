import { CDN_URL } from "./constants";
export const Moviecard = (props)=>{
    
  
    const {movieData} = props

    const {
        title,
        poster_path,
        release_date
    } = movieData

    
    return (
        <div className="cards">
            <div className="m-card">
                <img src={
                    CDN_URL
                    +
                   poster_path}/>
                <h2>{title}</h2>
                <h4>{release_date}</h4>
            </div>
        </div>
    )
}
