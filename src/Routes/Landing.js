import React from 'react';
import { useState, useEffect } from 'react';
import Pokedex from '../Components/Pokedex';
import { fetchPokemon } from '../services/fetch-utils';

export default function Landing() {
  const [page, setPage] = useState(1);
  const [pokemon, setPokemon] = useState([]);
  const From = (page - 1) * 50;
  const To = page * 50 - 1;
  useEffect(() => {
    const pokeBall = async () => {
      const openBall = await fetchPokemon(From, To);
      setPokemon(openBall);
    };
    pokeBall();
  }, [From, To]);

  const handleIncrement = () => {
    setPage(page + 1);
  };

  const handleDecrement = () => {
    setPage(page - 1);
  };
  console.log(pokemon);
  //   console.log(page, From, To);
  return (
    <div>
      <button disabled={page === 1} onClick={handleDecrement}>
        Previous Page
      </button>
      <button disabled={pokemon.length < 50} onClick={handleIncrement}>
        Next Page
      </button>
      <Pokedex pokes={pokemon} />
    </div>
  );
}
