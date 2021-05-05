import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Progress } from "antd";
import { selectPokemonDetail } from "reduxStore/selectors";
import { fetchPokemonDetail } from "reduxStore/pokemonDetailSlice";

const Index = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonDetail(id));
  }, [dispatch, id]);

  const { pokemonDetail: pokemon, color, habitat, egg_groups } = useSelector(
    selectPokemonDetail
  );

  console.log(pokemon.stats);
  return (
    <div className = "main">
    {/* // <div> */}
      <div className="card__wrapper">
        <div className="pokemon__title">
        <p>#{id}</p>
          <h2>{pokemon.name}</h2>
        </div>
        <div className="pokemon__content">
          <div className="pokemon__profile">
            <h3>Profile</h3>
            <div className="pokemon__profile--content">
              <p>Height: {pokemon.height} m</p>
              <p>Weight: {pokemon.weight} kg</p>
              <p>Habitat: {habitat.name}</p>
              <p>Egg Groups: {egg_groups.map((egg) => egg.name).join(",")}</p>
            </div>
          </div>
          <div className="pokemon__image">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
              alt="pokemon"
            />
          </div>
          <div className="pokemon__stat">
            <h3>Base Stats</h3>
            <div className="pokemon__stat--content">
              {pokemon.stats.map((s, index) => (
                <div key={index}>
                  <p>
                    {s.stat.name}: {s.base_stat}{" "}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
