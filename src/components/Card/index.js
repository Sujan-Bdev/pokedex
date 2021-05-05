import React from "react";
import { Link } from "react-router-dom";

const index = ({ name, url, id }) => {
  return (
    <div className="card">
      <Link to={`/pokemon/${id}`}>
        <div className="card__container">
          <div className="card__image">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
              alt="pokemon"
            />
          </div>
          <div className="card__details">
            <h2 className="card__title">{name}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default index;
