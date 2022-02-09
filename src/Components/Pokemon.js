import React from 'react';

export default function Pokemon({ pokemon }) {
  console.log(pokemon);
  return (
    <div>
      <h2>{pokemon['name/english']}</h2>
      <p>base/Attack :{pokemon['base/Attack']}</p>
      <p>base/Defense : {pokemon['base/Defense']}</p>
      <p>base/HP : {pokemon['base/HP']}</p>
      <p>base/Sp. Attack : {pokemon['base/Sp. Attack']}</p>
      <p>base/Sp. Defense : {pokemon['base/Sp. Defense']}</p>
      <p>base/Speed : {pokemon['base/Speed']}</p>
      <p>type/0 : {pokemon['type/0']}</p>
      <p>type/1 : {pokemon['type/1']}</p>
    </div>
  );
}
