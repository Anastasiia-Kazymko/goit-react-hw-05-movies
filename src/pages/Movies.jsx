import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { findMovie } from 'components/Services/fetch-movie';
import SearchBox from 'components/SearchBox';
import MoviesList from 'components/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [value, setvalue] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchName = searchParams.get('query') ?? '';

  const updateQueryString = query => {
    setSearchParams(query !== '' ? { query } : {});
  };

  const handleSubmit = e => {
    e.preventDefault();
    setvalue(e.target.elements[0].value);
    if (value === '') {
      return alert('Please fill in the field!');
    }
    setSearchParams({ query: searchName.toLowerCase().trim() });
  };

  useEffect(() => {
    if (!value) {
      return;
    }
    findMovie(value)
      .then(({ results }) => {
        setMovies(results);
        if (results.length === 0) {
          return alert(
            'Sorry, there are no movies matching your search query. Please try again.'
          );
        }
      })
      .catch(error => console.log(error));
  }, [value]);

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
