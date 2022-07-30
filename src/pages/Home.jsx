import { useState, useEffect } from 'react';
import { popularFilm } from 'components/Services/fetch-movie';
import MoviesList from 'components/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    popularFilm()
      .then(({ results }) => {
        setMovies(results);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {movies && <MoviesList movies={movies} />}
    </div>
  );
};

export default Home;
