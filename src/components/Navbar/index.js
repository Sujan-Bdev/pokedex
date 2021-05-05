import React from "react";
import { Link } from "react-router-dom";
import * as path from "router/path";

const index = () => {
  return (
    <nav className="navbar">
      <Link to={path.HOME}>
        <h1>Pokedex</h1>
      </Link>
    </nav>
  );
};

export default index;
