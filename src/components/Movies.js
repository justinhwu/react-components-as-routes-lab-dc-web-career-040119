import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map((movie)=>{
          return (<div>
            Title: {movie.title}
            Time: {movie.time}
            Genres: {movie.genres}
            Metascore: {movie.metascore}
          </div>
        )
        })}
    </div>
  );
};

export default Movies;
