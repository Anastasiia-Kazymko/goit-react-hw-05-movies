import {
  MovieInfoWrap,
  MovieInfoPoster,
  MovieOverview,
} from './MoviesInfo.styled';

const MoviesInfo = ({ movie }) => {
  return (
    <MovieInfoWrap>
      <MovieInfoPoster
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={movie.title}
        width="300"
      />
      <MovieOverview>
        <h1>
          {movie.title}({movie.release_date.slice(0, 4)})
        </h1>
        <p>User Score: {Math.round((movie.vote_average / 10) * 100)}%</p>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        <h2>Genres</h2>
        <p>{movie.genres.map(gene => gene.name).join(', ')}</p>
      </MovieOverview>
    </MovieInfoWrap>
  );
};

export default MoviesInfo;
