import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPokemonByName } from "reduxStore/selectors";

const Index = () => {
  const { name } = useParams();
  const pokemon = useSelector((state) => selectPokemonByName(state, name));

  useEffect(() => {
    const fetchData = async () => {
            console.log(pokemon.name)
    }

    fetchData()
  },[]);

  return (
    <div>
      <h2>Name: {pokemon.name} </h2>
      <p> Height: {pokemon.height} </p>
    </div>
  );
};

export default Index;
