
import { FilmList } from 'components/FilmList/FilmList';
import { useEffect, useState } from 'react';
import { getTrendingFilm } from '../services/fetchApiFilm';
import { StyleListFilm } from './Home.styled';

const Home = () => { 
  const [trendFilm, setTrendFilm] = useState([])


  useEffect(() => { 
    async function fetchTrendFilm() { 
      try {
        const films = await getTrendingFilm();
        setTrendFilm([...films.results])
      } catch(err) {
        console.log(err.message);
      } 
    }
    fetchTrendFilm();
  }, [])


    return (
      <StyleListFilm>
        <FilmList films={trendFilm} />
    </StyleListFilm>
)
}

export default Home