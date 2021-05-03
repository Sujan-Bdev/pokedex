import axios from "axios";
import { DEFAULT__URL } from "constants/url";

export const fetchPokemons = async () => {
  const { data } = await axios.get(
    `${DEFAULT__URL}/pokemon/?limit=20&offset=20`
  );
  return data;
};

export const fetchPokemonData = async (name) => {
  const { data } = await axios.get(`${DEFAULT__URL}/pokemon/${name}`);
  return data;
};

export const loadPokemon = async (data) => {
  let pokemonData = await Promise.all(
    data.map(async (pokemon) => {
      let pokemonRecord = await fetchPokemonData(pokemon.name);
      return pokemonRecord;
    })
  );

  return pokemonData;
};
