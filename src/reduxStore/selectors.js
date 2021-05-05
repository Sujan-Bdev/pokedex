export const selectAllPokemons = (state) => state.pokemons;

export const selectPokemonByName = (state, pokemonName) =>
  state.pokemons.pokemonList.find((pokemon) => pokemon.name === pokemonName);

export const selectPokemonDetail = (state) => state.pokemon;
