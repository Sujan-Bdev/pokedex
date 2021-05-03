import {configureStore} from '@reduxjs/toolkit';
import pokemonListReducer from './pokemonSlice'

export default configureStore({
   reducer: {
       pokemons: pokemonListReducer
   }
})

