import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { findMovie } from 'components/Services/fetch-movie';
import SearchBox from 'components/SearchBox';
import MoviesList from 'components/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchName = searchParams.get('query') ?? '';

  const updateQueryString = query => {
    setSearchParams(query !== '' ? { query } : {});
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.elements[0].value);
    if (searchParams === '') {
      return alert('Please fill in the field!');
    }
    setSearchParams({ query: searchName.toLowerCase().trim() });
  };

  useEffect(() => {
    if (!searchName) {
      return;
    }
    console.log(searchName);
    findMovie(searchName)
      .then(({ results }) => {
        setMovies(results);
      })
      .catch(error => console.log(error));
  }, [searchName]);

  return (
    <>
      <SearchBox
        value={searchName}
        onSubmit={handleSubmit}
        onChange={updateQueryString}
      />
      <div>{movies && <MoviesList movies={movies} />}</div>
    </>
  );
};

export default Movies;
