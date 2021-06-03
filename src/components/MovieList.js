import React from 'react';

const MovieList = (props) => {
  return (
    <div>
      {props.movies.map((movie, index) => {
        return <img src={movie.Poster} alt={movie.Title} />;
      })}
    </div>
  );
};

export default MovieList;
