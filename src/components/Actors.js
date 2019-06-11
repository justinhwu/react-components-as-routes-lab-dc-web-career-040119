import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor=>{
        return (<div className='actor' key={actor.name}>
          Name: {actor.name}
          Movies: {actor.movies}
        </div>
      )
      })}
    </div>
  );
};

export default Actors;
