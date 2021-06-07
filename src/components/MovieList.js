import React from 'react';

const MovieList = (props) => {
  return (
    <div className='movies'>
      {props.movies.map((movie, index) => {
        return <img key={index} src={movie.Poster} alt={movie.Title} />;
      })}
    </div>
  );
};

export default MovieList;
