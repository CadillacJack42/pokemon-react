import React from 'react';
import Pokemon from './Pokemon';

export default function Pokedex({ pokes }) {
  console.log(pokes);
  return (
    <div>
      {pokes.map((poke, i) => {
        return <Pokemon key={poke.id + i} pokemon={poke} />;
      })}
    </div>
  );
}
