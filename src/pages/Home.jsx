
import { FilmList } from 'components/FilmList/FilmList';
import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { getTrendingFilm } from '../services/fetchApiFilm';

const Home = () => { 
  const [trendFilm, setTrendFilm] = useState([])


  useEffect(() => { 
    async function fetchTrendFilm() { 
      try {
        const films = await getTrendingFilm();
        setTrendFilm([...films.results])
      } catch(err) {
        console.log(err.message);
      } finally { };
    }
    fetchTrendFilm();
  }, [])
  console.log(trendFilm);
    return (
      <ul>
        <FilmList films={trendFilm} />
    </ul>
)
}

export default Home