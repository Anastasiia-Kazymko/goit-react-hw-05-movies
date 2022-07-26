import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { findMovieId } from '../components/Services/fetch-movie';

const MovieDetails = () => {
  const [movies, setMovies] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    findMovieId(id)
      .then(({ results }) => {
        console.log(results);
      })
      .catch(error => console.log(error));
  }, [id]);
};

export default MovieDetails;
