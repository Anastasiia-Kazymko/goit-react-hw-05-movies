import {
  MovieInfoWrap,
  MovieInfoPoster,
  MovieOverview,
} from './MoviesInfo.styled';

const MoviesInfo = ({ movie }) => {
  const { title, vote_average, overview, genres, poster_path, release_date } =
    movie;

  let src = `https://image.tmdb.org/t/p/original/${poster_path}`;
  if (poster_path === null) {
    src = `https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png`;
  }

  return (
    <MovieInfoWrap>
      <MovieInfoPoster src={src} alt={title} width="300" />
      <MovieOverview>
        <h1>
          {title}({release_date.slice(0, 4)})
        </h1>
        <p>User Score: {Math.round((vote_average / 10) * 100)}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <p>{genres.map(gene => gene.name).join(', ')}</p>
      </MovieOverview>
    </MovieInfoWrap>
  );
};

export default MoviesInfo;
