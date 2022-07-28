import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { findMovieId } from '../components/Services/fetch-movie';
import MoviesInfo from 'components/MoviesInfo';
import AdditionalInfo from 'components/AdditionalInfo ';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      return;
    }

    findMovieId(id)
      .then(movieEl => {
        setMovie(movieEl);
      })
      .catch(error => console.log(error));
  }, [id]);

  return (
    <>
      {movie && <MoviesInfo movie={movie} />}
      <AdditionalInfo />
    </>
  );
};

export default MovieDetails;
