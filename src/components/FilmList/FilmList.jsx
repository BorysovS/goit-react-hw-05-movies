import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LinkStyle, FilmListItem, FilmTitle } from './FilmList.styled';

export const FilmList = ({ films }) => {
    const location = useLocation()
    
    return (
        <>
            {films && (
                films.map(film => (
                    < FilmListItem key={film.id} >
                        <LinkStyle to={`/movies/${film.id}`} state={{from:location}}>
                            <FilmTitle>{film.title}</FilmTitle>
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