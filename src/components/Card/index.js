import React from "react";
import pokemon1 from "assets/images/pokemon1.png";

const index = ({ name, image, id }) => {
  return (
    <div className="card">
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
    </div>
  );
};

export default index;
