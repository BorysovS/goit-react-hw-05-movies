import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const FilmList = ({ films }) => {
    const location = useLocation()
    
    return (
        <>
            {films && (
                films.map(film => (
                    < li key={film.id} >
                        <Link to={`/movies/${film.id}`} state={{from:location}}>
                            <h2>{film.title}</h2>
                        </Link>
                    </li>
                ))
            )}
        </>
    )
}

FilmList.propTypes = {
    films: PropTypes.array.isRequired,
}