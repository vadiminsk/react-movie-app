import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import './App.css';

const App = () => {
  const [movie, setMovie] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=a5e145c6`;

    const response = await fetch(url);

    const responseJSON = await response.json();

    if (responseJSON.Search) {
      setMovie(responseJSON.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className='container'>
      <MovieListHeading heading='Movies' />
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <MovieList movies={movie} />
    </div>
  );
};

export default App;
