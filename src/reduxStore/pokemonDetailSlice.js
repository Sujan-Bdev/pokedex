import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    status: "idle",
    isLoading: true,
    pokemonDetail: {},
    evolution:[]
}

export const fetchPokemonDetail = createAsyncThunk(
    "pokemon/fetchPokemonDetail",
    async(id) => {
        const detailData = await axios.get("")
    }
)