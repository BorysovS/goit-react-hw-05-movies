import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LinkStyle, FilmListItem } from './FilmList.styled';

export const FilmList = ({ films }) => {
    const location = useLocation()
    
    return (
        <>
            {films && (
                films.map(film => (
                    < FilmListItem key={film.id} >
                        <LinkStyle to={`/movies/${film.id}`} state={{from:location}}>
                            <h2>{film.title}</h2>
                        </LinkStyle>
                    </FilmListItem>
                ))
            )}
        </>
    )
}

FilmList.propTypes = {
    films: PropTypes.array.isRequired,
}