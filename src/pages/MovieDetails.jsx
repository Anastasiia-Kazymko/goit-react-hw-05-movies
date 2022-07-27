import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { findMovieId } from '../components/Services/fetch-movie';

const MovieDetails = () => {
  const [movies, setMovies] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (id === undefined) {
      return;
    }
    console.log(id);
    findMovieId(id)
      .then(movie => {
        setMovies(movie);
      })
      .catch(error => console.log(error));
  }, [id]);
  console.log(movies);
  const movieGenres = movies.genres.map(gene => gene.name);

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`}
        alt={movies.title}
        width="300"
      />
      <h1>
        {movies.title}({movies.release_date.slice(0, 4)})
      </h1>
      <p>User Score: {movies.popularity}%</p>
      <h2>Overview</h2>
      <p>{movies.overview}</p>
      <h2>Genres</h2>
      <p>{movieGenres}</p>
    </div>
  );
};

export default MovieDetails;
