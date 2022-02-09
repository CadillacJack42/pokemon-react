import React from 'react';
import { useState, useEffect } from 'react';
import { fetchPokemon } from '../services/fetch-utils';

export default function Landing() {
  const Page = 1;
  const From = (Page - 1) * 50 + 1;
  const To = Page * 50;
  const [pokemon, setPokemon] = useState();

  const pokes = JSON.stringify(pokemon);
  console.log(pokes);
  useEffect(() => {
    const pokeBall = async () => {
      const openBall = await fetchPokemon();
      setPokemon(openBall);
    };
    pokeBall();
  }, []);
  console.log(pokemon);
  return <div></div>;
}
