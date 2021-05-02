import React from "react";
import pokemon1 from "assets/images/pokemon1.png";

const index = () => {
  return (
    <div className="card">
      <div className="card__container">
        <img src={pokemon1} alt="pokemon" />
        <div className="card__details">
          <h2 className="card__title">Venusaur</h2>
        </div>
      </div>
    </div>
  );
};

export default index;
