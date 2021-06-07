import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import './App.css';

const App = () => {
  const [movie, setMovie] = useState([]);

  const getMovieRequest = async () => {
    const url = 'http://www.omdbapi.com/?s=movie&apikey=a5e145c6';

    const response = await fetch(url);

    const responseJSON = await response.json();
    setMovie(responseJSON.Search);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <div className='container'>
      <MovieList movies={movie} />
    </div>
  );
};

export default App;
