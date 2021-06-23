import React from 'react';

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <div className='movies'>
      {props.movies.map((movie, index) => {
        return (
          <div>
            <img key={index} src={movie.Poster} alt={movie.Title} />
            <div onClick={() => props.handleFavouritesClick(movie)}>
              <FavouriteComponent />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
