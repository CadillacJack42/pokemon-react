import { client, checkError } from './client';

export const fetchPokemon = async (from, to) => {
  const response = await client.from('pokemon').select().range(from, to);
  console.log(response);
  return checkError(response);
};
