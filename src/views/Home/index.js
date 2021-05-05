import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonList } from "reduxStore/pokemonSlice";
import { selectAllPokemons } from "reduxStore/selectors";
import Card from "components/Card";
import Search from "components/Search/Index";
import Spinner from "components/LoadingSpinner";

const Index = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchPokemonList());
  }, [dispatch]);

  const { pokemonList, status } = useSelector(selectAllPokemons);

  const getPokemonId = (url) => {
    const words = url.split("/");
    const id = +words[words.length - 2];
    return id;
  };

  const fileteredPokemons = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(query.toLowerCase())
  );

  if (status === "loading") return <Spinner />;

  return (
    <div className="home">
      <Search handleChange={handleChange} term={query} />

      <div className="cards">
        {fileteredPokemons.map((pokemon, index) => (
          <Card
            key={index}
            id={getPokemonId(pokemon.url)}
            name={pokemon.name}
            url={pokemon.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
