import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';
import './App.css';

const App = () => {
  const [movie, setMovie] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favourites, setFavourites] = useState([]);

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

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-app-movie-favourites', JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    const newFavouritesList = [...favourites, movie];
    setFavourites(newFavouritesList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouritesList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavourites(newFavouritesList);
    saveToLocalStorage(newFavouritesList);
  };

  return (
    <div className='container'>
      <MovieListHeading heading='Movies' />
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <MovieList
        movies={movie}
        handleFavouritesClick={addFavouriteMovie}
        favouriteComponent={AddFavourites}
      />
      <MovieListHeading heading='Favourites' />
      <MovieList
        movies={favourites}
        handleFavouritesClick={removeFavouriteMovie}
        favouriteComponent={RemoveFavourites}
      />
    </div>
  );
};

export default App;
