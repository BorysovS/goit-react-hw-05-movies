
import { SearchBox } from "components/SearchBox/SearchBox"
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom"
import { getSearchMovie } from "services/fetchApiFilm";
import { FilmList } from 'components/FilmList/FilmList';



const Movies = () => { 
    const [searchParam] = useSearchParams();
    const [searchFilm, setSearchFilm] = useState([]);
    const query = searchParam.get('searchQuery')

    useEffect(() => {
        if (!query) { 
            return
        }

        async function getQueryMovie() {
            try {
            const searchMovie = await getSearchMovie(query)
            setSearchFilm(searchMovie.results)
            
        } catch (error) {
            console.log(error.message);
        }
            
        }

        getQueryMovie();
    }, [query])
    

    return (
        <div>
            <SearchBox />
            {searchFilm && <FilmList films={searchFilm} />}
    </div>
)
}

export default Movies