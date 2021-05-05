import axios from "axios";
import { DEFAULT__URL } from "constants/url";

export const fetchPokemons = async () => {
  const { data } = await axios.get(
    `${DEFAULT__URL}/pokemon?limit=100&offset=200`
  );
  return data;
};

export const fetchPokemonData = async (id) => {
  const { data } = await axios.get(`${DEFAULT__URL}/pokemon/${id}`);
  return data;
};

export const fetchPokemonSpecies = async (id) => {
  const { data } = await axios.get(`${DEFAULT__URL}/pokemon-species/${id}`);
  return data;
};

export const fetchPokemonEvolutions = async (id) => {
  const {data} = await axios.get(`${DEFAULT__URL}/evolution-chain/${id}`)
  return data;
}

export const loadPokemon = async (data) => {
  let pokemonData = await Promise.all(
    data.map(async (pokemon) => {
      let pokemonRecord = await fetchPokemonData(pokemon.name);
      return pokemonRecord;
    })
  );

  return pokemonData;
};
