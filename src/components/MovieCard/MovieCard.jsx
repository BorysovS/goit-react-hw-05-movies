import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { getFilmById } from "services/fetchApiFilm";

export const MovieCard = () => { 
    const { movieId } = useParams();
    const [film, setFilm] = useState(null)

    useEffect(() => {
        async function fetchMovieById() { 
            try {
                const FilmById = await getFilmById(movieId);
                setFilm(FilmById);
            } catch (error) {
              console.log(error.message);  
            }
        };

        fetchMovieById();
    }, [movieId])

    if (!film) { 
        return null
    }
    
    const { poster_path, title, overview } = film;
    const genres = film.genres.map(genre => genre.name).join(', ');
    const userScore = Math.round(film.vote_average * 10);
    
    return (
        <div>
            {film &&         <div>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
            <ul>
                    <li>{title}</li>
                    <li>User Score: {userScore}%</li>
                <li>Overwiews
                        <p>{overview}</p>
                </li>
                <li>Genres:
                    <p>{genres}</p>
                </li>
            </ul>
            </div>}
    </div>
    ) 
}