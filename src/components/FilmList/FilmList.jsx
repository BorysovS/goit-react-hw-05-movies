import { Link } from 'react-router-dom';

export const FilmList = ({ films }) => {
    return (
        <>
            {films && (
                films.map(film => (
                    < li key={film.id} >
                        <Link to={`/movies/${film.id}`}>
                            <h2>{film.title}</h2>
                        </Link>
                    </li>
                ))
            )}
        </>
    )
}