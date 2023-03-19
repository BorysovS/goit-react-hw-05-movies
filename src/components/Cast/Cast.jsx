import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { getCastMovie } from "services/fetchApiFilm"

const Cast = () => { 
    const [casts, setCasts] = useState([])
    const { movieId } = useParams();

    useEffect(() => {
        if (!movieId) {
           return 
        }
        async function getCastInfo() { 
            try {
                const castsInfo = await getCastMovie(movieId);
            setCasts(castsInfo.cast);
            } catch (error) {
               console.log(error.message); 
            }  
        }
        getCastInfo()
    }, [movieId])
    
    return (
        <ul>
            {casts.map(cast => (
                <li key={cast.id}>
                    <img src={`https://image.tmdb.org/t/p/w200/${cast.profile_path
                        }`} alt={cast.name} />
                    <p>{cast.name}</p>
                    <p>Character: {cast.character}</p>
             </li>   
            ))}
        </ul>)
}

export default Cast