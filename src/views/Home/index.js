import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonList } from "reduxStore/pokemonSlice";
import Card from "components/Card";

const Index = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonList());
  }, [dispatch]);

  const { pokemonList } = useSelector((state) => state.pokemons);

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
