import {configureStore} from '@reduxjs/toolkit';
import pokemonListReducer from './pokemonSlice'
import pokemonDetailReducer from './pokemonDetailSlice';

export default configureStore({
   reducer: {
       pokemons: pokemonListReducer,
       pokemon: pokemonDetailReducer
   }
})

