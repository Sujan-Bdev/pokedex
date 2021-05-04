import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonList } from "reduxStore/pokemonSlice";
import {selectAllPokemons} from 'reduxStore/selectors';
import Card from "components/Card";

const Index = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonList());
  }, [dispatch]);

  const { pokemonList } = useSelector(selectAllPokemons);

  return (
    <>
      <div className="cards">
        {pokemonList.map((pokemon, index) => (
          <Card
            key={index}
            id = {pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.other.dream_world.front_default}
          />
        ))}
      </div>
    </>
  );
};

export default Index;
