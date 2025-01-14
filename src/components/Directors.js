import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director=>{
        return(<div key={director.name}>
          Name: {director.name}
          Movies: {director.movies}
        </div>
      )
      })}
    </div>
  );
}

export default Directors
