import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonList } from "reduxStore/pokemonSlice";
import { selectAllPokemons } from "reduxStore/selectors";
import Card from "components/Card";

const Index = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonList());
  }, [dispatch]);

  const { pokemonList } = useSelector(selectAllPokemons);

  const getPokemonId = (url) => {
    const words = url.split("/");
    const id = +words[words.length - 2];
    return id;
  };

  return (
    <>
      <div className="cards">
        {pokemonList.map((pokemon, index) => (
          <Card
            key={index}
            id={getPokemonId(pokemon.url)}
            name={pokemon.name}
            url={pokemon.url}
          />
        ))}
      </div>
    </>
  );
};

export default Index;
