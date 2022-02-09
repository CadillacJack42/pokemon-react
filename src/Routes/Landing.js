import React from 'react';
import { useState, useEffect } from 'react';
import { fetchPokemon } from '../services/fetch-utils';

export default function Landing() {
  const [page, setPage] = useState(1);
  const From = (page - 1) * 50;
  const To = page * 50;
  const [pokemon, setPokemon] = useState();

  const pokes = JSON.stringify(pokemon);

  useEffect(() => {
    const pokeBall = async () => {
      const openBall = await fetchPokemon(From, To);
      setPokemon(openBall);
      console.log(page);
    };
    pokeBall();
  }, [page]);

  const handleIncrement = () => {
    setPage(page + 1);
  };

  const handleDecrement = () => {
    setPage(page - 1);
  };
  console.log(pokes);
  console.log(page, From, To);
  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}
