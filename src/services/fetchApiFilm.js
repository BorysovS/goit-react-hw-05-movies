import axios from 'axios';

const API_KEY = '7a32caca7156537126d1246055d1764e';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingFilm = async () => {
  const resp = await axios.get(`/trending/movie/day?api_key=${API_KEY}&page=1`);
  const data = resp.data;

  return data;
};
