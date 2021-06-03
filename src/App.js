import React, { useState } from 'react';
import MovieList from './components/MovieList';

const App = () => {
  const [movie, setMovie] = useState([
    {
      Title: 'The Lego Movie',
      Year: '2014',
      imdbID: 'tt1490017',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_SX300.jpg',
    },
    {
      Title: 'The Simpsons Movie',
      Year: '2007',
      imdbID: 'tt0462538',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTgxMDczMTA5N15BMl5BanBnXkFtZTcwMzk1MzMzMw@@._V1_SX300.jpg',
    },
    {
      Title: 'Scary Movie',
      Year: '2000',
      imdbID: 'tt0175142',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMGEzZjdjMGQtZmYzZC00N2I4LThiY2QtNWY5ZmQ3M2ExZmM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    },
  ]);

  return (
    <div>
      <MovieList movies={movie} />
    </div>
  );
};

export default App;
