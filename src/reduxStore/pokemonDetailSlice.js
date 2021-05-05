import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  fetchPokemonData,
  fetchPokemonSpecies,
  fetchPokemonEvolutions,
} from "utils/fetchFunctions";

const initialState = {
  status: "idle",
  pokemonDetail: {
      stats: []
  },
  evolution: [],
  color: {},
  habitat: [],
  egg_groups: [],
};

export const fetchPokemonDetail = createAsyncThunk(
  "pokemon/fetchPokemonDetail",
  async (id) => {
    const detail = await fetchPokemonData(id);
    const { color, habitat, egg_groups } = await fetchPokemonSpecies(id);

    return { detail, color, habitat, egg_groups };
  }
);

const pokemonDetailSlice = createSlice({
  name: "pokemonDetail",
  initialState,
  reducers: {},

  extraReducers: {
    [fetchPokemonDetail.pending]: (state) => {
      state.status = "loading";
    },
    [fetchPokemonDetail.fulfilled]: (state, { payload }) => {
      state.status = "succeeded";
      state.pokemonDetail = payload.detail;
      state.color = payload.color;
      state.habitat = payload.habitat;
      state.egg_groups = payload.egg_groups;
    },
    [fetchPokemonDetail.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default pokemonDetailSlice.reducer;
export const { actions } = pokemonDetailSlice;
