import { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { findMovieId } from '../components/Services/fetch-movie';
import MoviesInfo from 'components/MoviesInfo';
import AdditionalInfo from 'components/AdditionalInfo ';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const location = useLocation();

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

  const backLink = location.state?.from ?? '/';

  return (
    <>
      <Link to={backLink}>Go back</Link>
      {movie && <MoviesInfo movie={movie} />}
      <AdditionalInfo location={backLink} />
    </>
  );
};

export default MovieDetails;
