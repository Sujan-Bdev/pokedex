import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchPokemons, loadPokemon } from "utils/fetchFunctions";

const initialState = {
  pokemonList: [],
  status: "loading",
};

export const fetchPokemonList = createAsyncThunk(
  "pokemon/fetchPokemonList",
  async () => {
    const {results} = await fetchPokemons();

   const data =  await loadPokemon(results)
   return data;
  }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},

  extraReducers: {
    [fetchPokemonList.pending]: (state) => {
      state.status = "loading";
    },
    [fetchPokemonList.fulfilled]: (state, { payload }) => {
      state.status = "succeeded";
      state.pokemonList = state.pokemonList.concat(payload);
    },
    [fetchPokemonList.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default pokemonSlice.reducer;
export const { actions } = pokemonSlice;
