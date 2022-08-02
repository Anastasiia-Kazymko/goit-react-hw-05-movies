import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { findMovie } from 'components/Services/fetch-movie';
import SearchBox from 'components/SearchBox';
import MoviesList from 'components/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchName = searchParams.get('query') ?? '';
  const [value, setValue] = useState(searchName);

  const updateQueryString = query => {
    setValue(query);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (value === '') {
      return alert('Please fill in the field!');
    }
    setSearchParams({ query: value });
  };

  useEffect(() => {
    if (!searchName) {
      return;
    }
    findMovie(searchName)
      .then(({ results }) => {
        setMovies(results);
        if (results.length === 0) {
          return alert(
            'Sorry, there are no movies matching your search query. Please try again.'
          );
        }
      })
      .catch(error => console.log(error));
  }, [searchName]);

  return (
    <>
      <SearchBox
        value={value}
        onSubmit={handleSubmit}
        onChange={updateQueryString}
      />
      <div>{movies && <MoviesList movies={movies} />}</div>
    </>
  );
};

export default Movies;
